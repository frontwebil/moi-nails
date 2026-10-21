import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { BUSINESS } from "@/i18n/images";
import { LANGS, LANG_META } from "@/i18n/types";
import type { Lang } from "@/i18n/types";
import { navigateTo } from "@/lib/navigation";

export default function Footer({ onLang }: { onLang: (l: Lang) => void }) {
  const { t, lang } = useI18n();

  const handleNav = (id: string) => {
    if (id === "price-list") {
      navigateTo(`/${lang}/${t.priceList.path}`);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigateTo(`/${lang}`);
  };

  return (
    <footer className="bg-espresso-900 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="font-serif text-3xl font-semibold text-cream-50">
              M.O.I
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-cream-100/60">
              {t.brand}
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/75">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-clay-400 hover:text-clay-400"
              >
                <Instagram size={18} />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-clay-400 hover:text-clay-400"
              >
                <Facebook size={18} />
              </a>
              <a
                href={`tel:${BUSINESS.phones[0].replace(/\s/g, "")}`}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-100/15 text-cream-100 transition-colors hover:border-clay-400 hover:text-clay-400"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-400">
              {t.footer.navTitle}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {t.nav.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-cream-100/75 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-400">
              {t.footer.contactTitle}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/75">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-clay-400" />
                <span>{t.contact.address}</span>
              </li>
              {t.contact.phones.map((p) => (
                <li key={p}>
                  <a
                    href={`tel:${p.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-cream-50"
                  >
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="transition-colors hover:text-cream-50"
                >
                  {t.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours + Lang */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-clay-400">
              {t.footer.hoursTitle}
            </h3>
            <ul className="mt-5 space-y-1.5 text-sm text-cream-100/75">
              {t.openingHours.map((d) => (
                <li key={d.day} className="flex justify-between gap-3">
                  <span>{d.day}</span>
                  <span className="text-cream-100/60">{d.hours}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => onLang(l)}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    lang === l
                      ? "bg-clay-500 text-cream-50"
                      : "bg-cream-100/10 text-cream-100/80 hover:bg-cream-100/20"
                  }`}
                >
                  {LANG_META[l].flag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-100/10 pt-7 text-xs text-cream-100/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <span className="flex gap-3">
              {t.footer.legalLinks.map((l) => (
                <button key={l} className="transition-colors hover:text-cream-50">
                  {l}
                </button>
              ))}
            </span>
            <span className="hidden text-cream-100/40 sm:inline">·</span>
            <span>{t.footer.madeWith}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
