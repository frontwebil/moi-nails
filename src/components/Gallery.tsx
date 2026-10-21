import { Instagram } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { BUSINESS } from "@/i18n/images";
import { useReveal } from "@/hooks/useReveal";

export default function Gallery() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id={t.nav[2].id}
      ref={ref}
      className="relative bg-cream-50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
            {t.gallery.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-espresso-900 sm:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso-700">
            {t.gallery.subtitle}
          </p>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-clay-400/60 px-5 py-3 text-sm font-semibold text-espresso-800 transition-all hover:border-clay-500 hover:bg-clay-400/10"
          >
            <Instagram size={17} className="text-clay-600" />
            @moinails.spa
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-1.5 overflow-hidden rounded-3xl bg-cream-200 p-1.5 sm:grid-cols-3 sm:gap-2 sm:p-2 lg:grid-cols-4">
          {t.gallery.items.map((item, i) => (
            <a
              key={i}
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.alt} — Instagram`}
              className={`reveal group relative block overflow-hidden bg-cream-200 ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
              style={{ transitionDelay: `${(i % 4) * 70}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-espresso-900/75 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="line-clamp-2 text-xs font-medium text-cream-50">
                  {item.alt}
                </span>
                <Instagram size={16} className="shrink-0 text-cream-50" />
              </div>
            </a>
          ))}
        </div>

        <p className="reveal mt-6 text-center text-sm text-espresso-700/70">
          @moinails.spa · Instagram
        </p>
      </div>
    </section>
  );
}
