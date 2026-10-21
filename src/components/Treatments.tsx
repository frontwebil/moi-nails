import { Clock, ArrowRight, FileText } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { useReveal } from "@/hooks/useReveal";
import { navigateTo } from "@/lib/navigation";

export default function Treatments() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  const bookNow = () =>
    document.getElementById(t.nav[4].id)?.scrollIntoView({ behavior: "smooth" });

  const openPriceList = () => navigateTo(`/${t.lang}/${t.priceList.path}`);

  return (
    <section
      id={t.nav[1].id}
      ref={ref}
      className="relative bg-cream-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
            {t.treatments.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-espresso-900 sm:text-5xl">
            {t.treatments.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso-700">
            {t.treatments.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.treatments.items.map((item, i) => (
            <article
              key={item.name}
              className="reveal group flex flex-col overflow-hidden rounded-3xl bg-cream-50 shadow-soft transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:shadow-card"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-105"
                />
                <div className="absolute right-4 top-4 rounded-full bg-cream-50/95 px-3 py-1 text-sm font-semibold text-espresso-900 backdrop-blur-sm">
                  {item.price}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl font-semibold text-espresso-900">
                    {item.name}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-clay-600">
                    <Clock size={13} />
                    {item.duration}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-espresso-700">
                  {item.description}
                </p>
                <button
                  onClick={bookNow}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-clay-600 transition-colors hover:text-espresso-900"
                >
                  {t.treatments.bookLabel}
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <button
            type="button"
            onClick={openPriceList}
            className="inline-flex items-center gap-2 rounded-full border border-clay-400/70 bg-cream-50 px-6 py-3.5 text-sm font-semibold text-espresso-800 transition-all duration-300 ease-soft hover:border-clay-500 hover:bg-clay-400/15"
          >
            <FileText size={17} className="text-clay-600" />
            {t.priceList.label}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
