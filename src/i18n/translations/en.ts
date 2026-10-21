import type { Translation } from "../types";
import { IMAGES, BUSINESS } from "../images";

const en: Translation = {
  lang: "en",
  htmlLang: "en-GB",
  meta: {
    title: "M.O.I — Nails & Spa | Nail Salon in Heemskerk",
    description:
      "A moment just for you. M.O.I — Nails & Spa in Heemskerk offers manicures, pedicures, gel nails and spa treatments in a calm, luxurious setting.",
    ogTitle: "M.O.I — Nails & Spa | A moment just for you",
    ogDescription:
      "Manicures, pedicures, gel nails and spa treatments in the heart of Heemskerk. Book your appointment today.",
  },
  brand: BUSINESS.name,
  tagline: "A moment just for you.",
  nav: [
    { id: "home", label: "Home" },
    { id: "treatments", label: "Treatments" },
    { id: "gallery", label: "Gallery" },
    { id: "about", label: "About us" },
    { id: "booking", label: "Book" },
    { id: "contact", label: "Contact" },
    { id: "price-list", label: "Price list" },
  ],
  priceList: {
    path: "price-list",
    pdfPath: "/price-lists/MOI_Price_List_EN_(1).pdf",
    label: "Price list",
    title: "Our price list",
    subtitle: "View all treatments, extra options and current prices.",
    backLabel: "Back to treatments",
    downloadLabel: "Download price list",
    openLabel: "Open in new tab",
  },
  hero: {
    title: "A moment just for you.",
    subtitle:
      "In the heart of Heemskerk, M.O.I — Nails & Spa welcomes you for manicures, pedicures, gel nails and relaxing spa treatments. Calm, care and beauty under one roof.",
    badge: "Nail salon & spa in Heemskerk",
    ctaPrimary: "Book an appointment",
    ctaSecondary: "Explore treatments",
    callPrompt: "Call us to book an appointment.",
  },
  intro: {
    eyebrow: "Welcome to M.O.I",
    title: "Care for your hands, rest for your mind",
    body: "Our experienced specialists combine precision with a warm, personal approach. Every visit begins with a short introduction, so the treatment is tailored to exactly what you need — from a classic manicure to an indulgent spa ritual.",
  },
  treatments: {
    eyebrow: "Our treatments",
    title: "Treatments made for you",
    subtitle:
      "From maintenance to pure relaxation. All treatments are performed with premium products and hygiene as the highest priority.",
    durationLabel: "duration",
    fromLabel: "from",
    bookLabel: "Book now",
    items: [
      {
        name: "Solar acrylic & gel nails",
        description: "Natural, pink powder, one or two colours, pink & white, baby boomer, ombré and long nails.",
        price: "from €45",
        duration: "Full set / refill",
        image: IMAGES.treatmentGel,
        alt: "Solar acrylic and gel nails",
      },
      {
        name: "Builder base (BIAB)",
        description: "Builder base for hands or feet, with clear, gel polish, colour or French tips.",
        price: "from €45",
        duration: "Full set / refill",
        image: IMAGES.treatmentManicure,
        alt: "Builder base manicure",
      },
      {
        name: "Gel polish",
        description: "Gel polish in one colour, multiple colours or with French tips for a clean, lasting finish.",
        price: "€25",
        duration: "1 colour",
        image: IMAGES.treatmentPolish,
        alt: "Gel polish colour selection",
      },
      {
        name: "Removal & repairs",
        description: "Safe removal of artificial nails or gel polish, plus nail repairs when you need them.",
        price: "from €5",
        duration: "Removal / repair",
        image: IMAGES.treatmentNailArt,
        alt: "Nail removal and repair service",
      },
      {
        name: "Manicure",
        description: "Precise cuticle care and a clean, polished finish for beautifully groomed hands.",
        price: "€20",
        duration: "Manicure",
        image: IMAGES.treatmentManicure,
        alt: "Manicure",
      },
      {
        name: "Spa pedicure",
        description: "A relaxing spa pedicure with optional gel polish or French tips for cared-for feet.",
        price: "from €40",
        duration: "With gel polish",
        image: IMAGES.treatmentPedicure,
        alt: "Spa pedicure",
      },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Our work in pictures",
    subtitle:
      "An impression of the finishing touches and atmosphere at M.O.I — Nails & Spa. Every detail counts.",
    items: [
      { src: IMAGES.gallery[0], alt: "Pink and white French manicure" },
      { src: IMAGES.gallery[1], alt: "Pink manicure with black French tips" },
      { src: IMAGES.gallery[2], alt: "Pink and black statement nail art" },
      { src: IMAGES.gallery[3], alt: "Pink floral nail art" },
      { src: IMAGES.gallery[4], alt: "Soft pink manicure with gold details" },
      { src: IMAGES.gallery[5], alt: "Nude manicure with brown French tips" },
    ],
  },
  about: {
    eyebrow: "About us",
    title: "A salon with heart and attention",
    body1:
      "M.O.I — Nails & Spa was born from the desire to create a place where you can truly take a breath. No rushed appointments, but the time and calm to be cared for — from the first cup of tea to the final touch.",
    body2:
      "Our team is made up of certified nail and spa specialists who work with nurturing products and the highest hygiene standards. We look forward to welcoming you.",
    stats: [
      { value: "8+", label: "years of experience" },
      { value: "15k+", label: "happy clients" },
      { value: "30+", label: "treatments" },
      { value: "4.9★", label: "average rating" },
    ],
    imageAlt: "Interior of M.O.I — Nails & Spa with green plants",
  },
  experience: {
    eyebrow: "Why M.O.I",
    title: "An experience you keep feeling",
    items: [
      {
        title: "Personal attention",
        description:
          "No standard treatment plan. We listen first, then advise, and tailor everything to your wishes.",
      },
      {
        title: "Hygiene first",
        description:
          "All tools are sterilised and we use disposable materials wherever needed.",
      },
      {
        title: "Clean products",
        description:
          "We choose vegan and free from harmful substances — good for you and the planet.",
      },
      {
        title: "Calm atmosphere",
        description:
          "Soft light, warm tones and soothing music. A moment away from the bustle of the city.",
      },
    ],
  },
  booking: {
    eyebrow: "Booking",
    title: "Reserve your moment",
    subtitle:
      "The fastest way to book is to call us or send a WhatsApp message. We'll gladly find a time that suits you.",
    phoneLabel: "Call us directly",
    phoneNote: "Call us to book an appointment.",
    whatsappLabel: "WhatsApp",
    hoursLabel: "Opening hours",
    cta: "Book an appointment",
    formTitle: "Request an appointment",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    phoneFieldLabel: "Phone number",
    phonePlaceholder: "+31 6 2629 8686",
    categoryLabel: "Treatment",
    categoryPlaceholder: "Choose a treatment",
    services: [
      "Solar acrylic & gel nails — Natural",
      "Solar acrylic & gel nails — Pink powder",
      "Solar acrylic & gel nails — 1 colour",
      "Solar acrylic & gel nails — 2 colours",
      "Solar acrylic & gel nails — Pink & white",
      "Solar acrylic & gel nails — Baby boomer",
      "Solar acrylic & gel nails — Colour ombré",
      "Solar acrylic & gel nails — With gel polish",
      "Solar acrylic & gel nails — Long nails",
      "Manicure",
      "Builder base (BIAB) — Natural builder base (clear)",
      "Builder base (BIAB) — Builder base with gel polish or colour",
      "Builder base (BIAB) — Builder base with French tips",
      "Gel polish — 1 colour",
      "Gel polish — Multiple colours",
      "Gel polish — French tips",
      "Removal & repairs — Artificial nail removal",
      "Removal & repairs — Artificial nail removal with a new set",
      "Removal & repairs — Gel polish removal (natural nails)",
      "Removal & repairs — Gel polish removal (natural nails) with a new set",
      "Removal & repairs — Nail repair",
      "Pedicure — Spa pedicure",
      "Pedicure — Spa pedicure with gel polish",
      "Pedicure — Spa pedicure with French tips",
    ],
    dateLabel: "Date",
    timeLabel: "Time",
    timePlaceholder: "Choose a time",
    timeHint: "Available times: 10:00 – 19:00",
    notesLabel: "Notes",
    notesPlaceholder: "Optional: additional information or requests",
    submitLabel: "Request appointment",
    submittingLabel: "Sending...",
    successTitle: "Request received",
    successMessage: "Thank you. We will contact you as soon as possible to confirm your appointment.",
    errorMessage: "Something went wrong. Please call us to make your appointment.",
    requiredMessage: "Please complete all required fields.",
  },
  openingHours: [
    { day: "Monday", hours: "09:00 – 18:00" },
    { day: "Tuesday", hours: "09:00 – 18:00" },
    { day: "Wednesday", hours: "09:00 – 18:00" },
    { day: "Thursday", hours: "09:00 – 20:00" },
    { day: "Friday", hours: "09:00 – 18:00" },
    { day: "Saturday", hours: "09:00 – 18:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Find us in Heemskerk",
    subtitle:
      "We're located in the centre of Heemskerk. Feel free to drop in or make an appointment in advance.",
    addressLabel: "Address",
    address: BUSINESS.address,
    phoneLabel: "Phone",
    phones: BUSINESS.phones,
    emailLabel: "Email",
    email: BUSINESS.email,
    hoursLabel: "Opening hours",
    mapTitle: "Map of M.O.I — Nails & Spa in Heemskerk",
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "Good to know",
    subtitle: "Everything you might still want to ask before your first visit.",
    items: [
      {
        question: "Do I need to book in advance?",
        answer:
          "We strongly recommend it. Walk-ins are possible when there's space, but booking is the safe way to avoid disappointment.",
      },
      {
        question: "Can I reschedule my appointment?",
        answer:
          "Yes, up to 24 hours in advance you can change free of charge. Just give us a call or send a WhatsApp message.",
      },
      {
        question: "Which payment methods do you accept?",
        answer: "We accept cash, card and all common mobile payment methods.",
      },
      {
        question: "Are your products safe and vegan?",
        answer:
          "Yes. Our colours and care products are vegan and free from the most common harmful substances.",
      },
      {
        question: "Can I buy a gift voucher?",
        answer:
          "Absolutely. A treatment at M.O.I is a popular gift. Ask about it at your next visit or over the phone.",
      },
    ],
  },
  footer: {
    tagline: "A moment just for you — in the heart of Heemskerk.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    hoursTitle: "Opening hours",
    rights: "All rights reserved.",
    legalLinks: ["Privacy", "Terms", "Cookies"],
    madeWith: "Made with care in Heemskerk",
  },
};

export default en;
