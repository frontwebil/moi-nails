import { Heart, ShieldCheck, Leaf, Wind } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { useReveal } from "@/hooks/useReveal";

const ICONS = [Heart, ShieldCheck, Leaf, Wind];

export default function Experience() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative bg-espresso-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blush-300">
            {t.experience.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-cream-50 sm:text-5xl">
            {t.experience.title}
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.experience.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={item.title}
                className="reveal rounded-3xl border border-cream-100/10 bg-espresso-800/60 p-7 transition-all duration-500 ease-soft hover:-translate-y-1.5 hover:border-clay-400/40 hover:bg-espresso-800"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-300/15 text-blush-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-cream-50">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-100/75">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
