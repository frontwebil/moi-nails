import { Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { useReveal } from "@/hooks/useReveal";

export default function Intro() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
            <Sparkles size={14} />
            {t.intro.eyebrow}
          </span>
          <h2 className="mt-5 font-serif text-4xl font-medium leading-tight text-espresso-900 sm:text-5xl">
            {t.intro.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-espresso-700 sm:text-lg">
            {t.intro.body}
          </p>
        </div>
      </div>
    </section>
  );
}
