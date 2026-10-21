import { useEffect, useState } from "react";
import { I18nProvider, useI18n } from "@/i18n/I18nContext";
import type { Lang } from "@/i18n/types";
import { isPriceListPath } from "@/lib/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Treatments from "@/components/Treatments";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Booking from "@/components/Booking";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PriceList from "@/components/PriceList";

function Site() {
  const { setLang } = useI18n();
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <Intro />
        <Treatments />
        <Gallery />
        <About />
        <Experience />
        <Booking />
        <Faq />
        <Contact />
      </main>
      <Footer onLang={(l: Lang) => setLang(l)} />
    </div>
  );
}

function AppRouter() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return isPriceListPath(pathname) ? <PriceList /> : <Site />;
}

export default function App() {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  );
}
