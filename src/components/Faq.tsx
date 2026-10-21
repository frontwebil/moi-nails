import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { useReveal } from "@/hooks/useReveal";

export default function Faq() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="relative bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-espresso-900 sm:text-5xl">
            {t.faq.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso-700">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="reveal mt-12 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen
                    ? "border-clay-400/50 bg-cream-100"
                    : "border-cream-200 bg-cream-50 hover:border-clay-400/30"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg font-semibold text-espresso-900 sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-clay-500 text-cream-50" : "bg-cream-200 text-espresso-800"
                    }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-soft ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-espresso-700">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
