import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Lang, Translation } from "./types";
import { LANGS } from "./types";
import nl from "./translations/nl";
import en from "./translations/en";
import de from "./translations/de";

const TRANSLATIONS: Record<Lang, Translation> = { nl, en, de };
const STORAGE_KEY = "moi-lang";
const DEFAULT_LANG: Lang = "nl";

function langFromPath(path: string): Lang | null {
  const m = path.replace(/^\/+/, "").split("/")[0];
  return LANGS.includes(m as Lang) ? (m as Lang) : null;
}

function langFromStorage(): Lang | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return LANGS.includes(v as Lang) ? (v as Lang) : null;
  } catch {
    return null;
  }
}

export function getInitialLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  return langFromPath(window.location.pathname) ?? langFromStorage() ?? DEFAULT_LANG;
}

interface I18nContextValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const applyUrl = useCallback((next: Lang) => {
    const path = window.location.pathname;
    const rest = path.replace(/^\/+/, "").split("/").slice(1).join("/");
    const newPath = `/${next}${rest ? "/" + rest : ""}`;
    if (newPath !== window.location.pathname) {
      window.history.pushState({}, "", newPath);
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  }, []);

  // On mount: normalize URL to include a lang segment (root -> /nl).
  useEffect(() => {
    const current = langFromPath(window.location.pathname);
    if (!current) {
      const stored = langFromStorage() ?? DEFAULT_LANG;
      applyUrl(stored);
      setLangState(stored);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep lang in sync with browser back/forward.
  useEffect(() => {
    const onPop = () => {
      const fromUrl = langFromPath(window.location.pathname);
      if (fromUrl) setLangState(fromUrl);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      applyUrl(next);
      // Update <html lang> and SEO immediately.
      updateDocumentMeta(TRANSLATIONS[next]);
    },
    [applyUrl],
  );

  // Update <html lang> + meta tags whenever lang changes.
  useEffect(() => {
    updateDocumentMeta(TRANSLATIONS[lang]);
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, t: TRANSLATIONS[lang], setLang }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function updateDocumentMeta(t: Translation) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = t.htmlLang;
  document.title = t.meta.title;
  setMeta("name", "description", t.meta.description);
  setMeta("property", "og:title", t.meta.ogTitle);
  setMeta("property", "og:description", t.meta.ogDescription);
  // hreflang alternates
  setLink("alternate", "https://moinailsspa.nl/nl", "nl-NL");
  setLink("alternate", "https://moinailsspa.nl/en", "en-GB");
  setLink("alternate", "https://moinailsspa.nl/de", "de-DE");
  setLink("alternate", "https://moinailsspa.nl/nl", "x-default");
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string, hreflang?: string) {
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"][hreflang="x-default"]`;
  let el = document.head.querySelector<HTMLLinkElement>(sel);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (hreflang) el.setAttribute("hreflang", hreflang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function getTranslation(lang: Lang): Translation {
  return TRANSLATIONS[lang];
}
