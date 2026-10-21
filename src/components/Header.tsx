import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { LANGS, LANG_META } from "@/i18n/types";
import type { Lang } from "@/i18n/types";
import { BUSINESS } from "@/i18n/images";
import LanguageSwitcher from "./LanguageSwitcher";
import { navigateTo } from "@/lib/navigation";

export default function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    setOpen(false);
    if (id === "price-list") {
      navigateTo(`/${lang}/${t.priceList.path}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (id === "home") navigateTo(`/${lang}`);
  };

  const switchLang = (next: Lang) => {
    setLang(next);
    setOpen(false);
    window.location.reload();
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-cream-50 shadow-soft"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Brand */}
        <button
          onClick={() => handleNav("home")}
          className="group flex items-center gap-2 text-left"
          aria-label={t.brand}
        >
          <span className="font-serif text-2xl font-semibold tracking-tight text-espresso-900">
            M.O.I
          </span>
          <span className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-clay-600 sm:inline">
            Nails &amp; Spa
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {t.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="group relative text-sm font-medium text-espresso-800 transition-colors hover:text-clay-600"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-clay-500 transition-all duration-300 ease-soft group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phones[0].replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-full border border-clay-400/60 px-4 py-2 text-sm font-medium text-espresso-800 transition-all hover:border-clay-500 hover:bg-clay-400/10 md:inline-flex"
          >
            <Phone size={15} />
            {BUSINESS.phones[0]}
          </a>
          <LanguageSwitcher current={lang} onSelect={switchLang} />
          <button
            className="inline-flex items-center justify-center rounded-full p-2 text-espresso-900 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50/98 backdrop-blur-md transition-all duration-500 ease-soft lg:hidden ${
          open ? "max-h-[600px] border-t border-cream-200" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {t.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="rounded-xl px-4 py-3 text-left text-base font-medium text-espresso-800 transition-colors hover:bg-cream-200"
            >
              {item.label}
            </button>
          ))}
          <a
            href={`tel:${BUSINESS.phones[0].replace(/\s/g, "")}`}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-espresso-900 px-4 py-3 text-sm font-medium text-cream-50"
          >
            <Phone size={16} />
            {BUSINESS.phones[0]}
          </a>
          <div className="mt-3 flex items-center gap-2 px-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => switchLang(l)}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                  lang === l
                    ? "bg-clay-500 text-cream-50"
                    : "bg-cream-200 text-espresso-800 hover:bg-cream-300"
                }`}
              >
                {LANG_META[l].flag}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
