import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { navigateTo } from "@/lib/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Lang } from "@/i18n/types";

export default function PriceList() {
  const { t, lang, setLang } = useI18n();

  const goBack = () => navigateTo(`/${lang}`);

  return (
    <div className="min-h-screen bg-cream-100">
      <Header />
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-clay-600 transition-colors hover:text-espresso-900"
          >
            <ArrowLeft size={17} />
            {t.priceList.backLabel}
          </button>

          <div className="mt-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
                <FileText size={15} />
                {t.priceList.label}
              </span>
              <h1 className="mt-4 font-serif text-5xl font-medium leading-tight text-espresso-900 sm:text-6xl">
                {t.priceList.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-espresso-700">
                {t.priceList.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={t.priceList.pdfPath}
                download
                className="inline-flex items-center gap-2 rounded-full bg-clay-500 px-5 py-3 text-sm font-semibold text-cream-50 transition-colors hover:bg-clay-600"
              >
                <Download size={17} />
                {t.priceList.downloadLabel}
              </a>
              <a
                href={t.priceList.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-clay-400/60 bg-cream-50 px-5 py-3 text-sm font-semibold text-espresso-800 transition-colors hover:border-clay-500 hover:bg-cream-200"
              >
                <ExternalLink size={17} />
                {t.priceList.openLabel}
              </a>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-cream-200 bg-cream-50 p-2 shadow-card sm:p-4">
            <iframe
              title={t.priceList.title}
              src={t.priceList.pdfPath}
              className="h-[72vh] min-h-[600px] w-full rounded-2xl border-0"
            />
          </div>
        </div>
      </main>
      <Footer onLang={(next: Lang) => setLang(next)} />
    </div>
  );
}
