export type Lang = "nl" | "en" | "de";

export const LANGS: Lang[] = ["nl", "en", "de"];

export const LANG_META: Record<Lang, { label: string; flag: string }> = {
  nl: { label: "Nederlands", flag: "NL" },
  en: { label: "English", flag: "EN" },
  de: { label: "Deutsch", flag: "DE" },
};

export interface NavItem {
  id: string;
  label: string;
}

export interface Treatment {
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  alt: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface OpeningHour {
  day: string;
  hours: string;
}

export interface Translation {
  lang: Lang;
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  brand: string;
  tagline: string;
  nav: NavItem[];
  priceList: {
    path: string;
    pdfPath: string;
    label: string;
    title: string;
    subtitle: string;
    backLabel: string;
    downloadLabel: string;
    openLabel: string;
  };
  hero: {
    title: string;
    subtitle: string;
    badge: string;
    ctaPrimary: string;
    ctaSecondary: string;
    callPrompt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  treatments: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Treatment[];
    durationLabel: string;
    fromLabel: string;
    bookLabel: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: GalleryItem[];
  };
  about: {
    eyebrow: string;
    title: string;
    body1: string;
    body2: string;
    stats: { value: string; label: string }[];
    imageAlt: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    phoneLabel: string;
    phoneNote: string;
    whatsappLabel: string;
    hoursLabel: string;
    cta: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneFieldLabel: string;
    phonePlaceholder: string;
    categoryLabel: string;
    categoryPlaceholder: string;
    services: string[];
    dateLabel: string;
    timeLabel: string;
    timePlaceholder: string;
    timeHint: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    requiredMessage: string;
  };
  openingHours: OpeningHour[];
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phones: readonly string[];
    emailLabel: string;
    email: string;
    hoursLabel: string;
    mapTitle: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    hoursTitle: string;
    rights: string;
    legalLinks: string[];
    madeWith: string;
  };
}
