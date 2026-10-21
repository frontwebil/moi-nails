import { useI18n } from "@/i18n/I18nContext";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section
      id={t.nav[3].id}
      ref={ref}
      className="relative bg-cream-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <div className="reveal">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-espresso-900 sm:text-5xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-espresso-700">
            {t.about.body1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-espresso-700">
            {t.about.body2}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {t.about.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-cream-200 bg-cream-50 px-4 py-5 text-center"
              >
                <p className="font-serif text-3xl font-semibold text-clay-600">
                  {s.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-espresso-700">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
