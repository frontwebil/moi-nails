import { Phone, CalendarHeart, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { IMAGES, BUSINESS } from "@/i18n/images";

export default function Hero() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroDesktop}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/70 via-espresso-900/45 to-espresso-900/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/55 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-200/30 bg-cream-50/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cream-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blush-300" />
            {t.hero.badge}
          </span>

          <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-100/90 sm:text-lg">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => scrollTo(t.nav[4].id)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-7 py-3.5 text-sm font-semibold text-espresso-900 shadow-soft transition-all duration-300 ease-soft hover:bg-clay-400 hover:text-cream-50"
            >
              <CalendarHeart size={18} />
              {t.hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo(t.nav[1].id)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-all duration-300 ease-soft hover:bg-cream-50/10"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>

          <p className="mt-7 flex items-center gap-2.5 text-sm text-cream-100/85">
            <Phone size={15} className="text-blush-300" />
            {t.hero.callPrompt}
            <a
              href={`tel:${BUSINESS.phones[0].replace(/\s/g, "")}`}
              className="font-semibold text-cream-50 underline-offset-4 hover:underline"
            >
              {BUSINESS.phones[0]}
            </a>
          </p>
        </div>
      </div>

      {/* Floating accent image (desktop) */}
      <div className="pointer-events-none absolute bottom-12 right-8 hidden w-56 overflow-hidden rounded-3xl border border-cream-100/20 shadow-card lg:block xl:right-16 xl:w-64">
        <img
          src={IMAGES.heroAccent}
          alt=""
          className="h-full w-full object-cover animate-floaty"
        />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream-100/70 lg:flex">
        <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-cream-100/40" />
      </div>
    </section>
  );
}
