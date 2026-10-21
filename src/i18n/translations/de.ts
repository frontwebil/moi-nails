import type { Translation } from "../types";
import { IMAGES, BUSINESS } from "../images";

const de: Translation = {
  lang: "de",
  htmlLang: "de-DE",
  meta: {
    title: "M.O.I — Nails & Spa | Nagelstudio in Heemskerk",
    description:
      "Ein Moment nur für dich. M.O.I — Nails & Spa in Heemskerk bietet Maniküre, Pediküre, Gelnägel und Spa-Behandlungen in ruhiger, luxuriöser Atmosphäre.",
    ogTitle: "M.O.I — Nails & Spa | Ein Moment nur für dich",
    ogDescription:
      "Maniküre, Pediküre, Gelnägel und Spa-Behandlungen im Herzen von Heemskerk. Vereinbare noch heute einen Termin.",
  },
  brand: BUSINESS.name,
  tagline: "Ein Moment nur für dich.",
  nav: [
    { id: "home", label: "Start" },
    { id: "behandlungen", label: "Behandlungen" },
    { id: "galerie", label: "Galerie" },
    { id: "uber-uns", label: "Über uns" },
    { id: "termin", label: "Termin" },
    { id: "kontakt", label: "Kontakt" },
    { id: "price-list", label: "Preisliste" },
  ],
  priceList: {
    path: "preisliste",
    pdfPath: "/price-lists/MOI_Price_List_DE_(1).pdf",
    label: "Preisliste",
    title: "Unsere Preisliste",
    subtitle: "Alle Behandlungen, Extras und aktuellen Preise auf einen Blick.",
    backLabel: "Zurück zu den Behandlungen",
    downloadLabel: "Preisliste herunterladen",
    openLabel: "In neuem Tab öffnen",
  },
  hero: {
    title: "Ein Moment nur für dich.",
    subtitle:
      "Im Herzen von Heemskerk empfängt dich M.O.I — Nails & Spa mit Maniküre, Pediküre, Gelnägeln und entspannenden Spa-Behandlungen. Ruhe, Pflege und Schönheit unter einem Dach.",
    badge: "Nagelstudio & Spa in Heemskerk",
    ctaPrimary: "Termin vereinbaren",
    ctaSecondary: "Behandlungen entdecken",
    callPrompt: "Ruf uns an, um einen Termin zu vereinbaren.",
  },
  intro: {
    eyebrow: "Willkommen bei M.O.I",
    title: "Pflege für deine Hände, Ruhe für deinen Geist",
    body: "Unsere erfahrenen Spezialistinnen verbinden Präzision mit einer warmen, persönlichen Betreuung. Jeder Besuch beginnt mit einer kurzen Kennenlernrunde, damit die Behandlung genau zu dem passt, was du brauchst — von der klassischen Maniküre bis zu einem ausgedehnten Spa-Ritual.",
  },
  treatments: {
    eyebrow: "Unsere Behandlungen",
    title: "Behandlungen, die zu dir passen",
    subtitle:
      "Von Pflege bis zur reinen Entspannung. Alle Behandlungen werden mit hochwertigen Produkten und höchsten Hygienestandards durchgeführt.",
    durationLabel: "Dauer",
    fromLabel: "ab",
    bookLabel: "Jetzt buchen",
    items: [
      {
        name: "Solar Acryl- & Gelnägel",
        description: "Natur, Rosa Puder, eine oder zwei Farben, Pink & White, Babyboomer, Farb-Ombré und lange Nägel.",
        price: "ab €45",
        duration: "Neumodellage / Auffüllen",
        image: IMAGES.treatmentGel,
        alt: "Solar Acryl- und Gelnägel",
      },
      {
        name: "Builder Base (BIAB)",
        description: "Builder Base für Hände oder Füße, mit Gel-Lack, Farbe oder French Tips.",
        price: "ab €45",
        duration: "Neumodellage / Auffüllen",
        image: IMAGES.treatmentManicure,
        alt: "Builder Base Maniküre",
      },
      {
        name: "Gel-Lack",
        description: "Gel-Lack in einer Farbe, mehreren Farben oder mit French Tips für ein gepflegtes Finish.",
        price: "€25",
        duration: "1 Farbe",
        image: IMAGES.treatmentPolish,
        alt: "Gel-Lack Farben",
      },
      {
        name: "Entfernung & Reparatur",
        description: "Schonende Entfernung von Kunstnägeln oder Gel-Lack sowie Nagelreparaturen bei Bedarf.",
        price: "ab €5",
        duration: "Entfernung / Reparatur",
        image: IMAGES.treatmentNailArt,
        alt: "Nagelentfernung und Reparatur",
      },
      {
        name: "Maniküre",
        description: "Präzise Nagelhautpflege und ein sauberer Abschluss für wunderschön gepflegte Hände.",
        price: "€20",
        duration: "Maniküre",
        image: IMAGES.treatmentManicure,
        alt: "Maniküre",
      },
      {
        name: "Spa-Pediküre",
        description: "Eine entspannende Spa-Pediküre, optional mit Gel-Lack oder French Tips für gepflegte Füße.",
        price: "ab €40",
        duration: "Mit Gel-Lack",
        image: IMAGES.treatmentPedicure,
        alt: "Spa-Pediküre",
      },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Unsere Arbeit in Bildern",
    subtitle:
      "Ein Eindruck der Ergebnisse und Atmosphäre bei M.O.I — Nails & Spa. Jedes Detail zählt.",
    items: [
      { src: IMAGES.gallery[0], alt: "Rosa-weiße French-Maniküre" },
      { src: IMAGES.gallery[1], alt: "Rosa Maniküre mit schwarzer French-Spitze" },
      { src: IMAGES.gallery[2], alt: "Auffällige rosa-schwarze Nail Art" },
      { src: IMAGES.gallery[3], alt: "Rosa Nail Art mit Blumen" },
      { src: IMAGES.gallery[4], alt: "Zarte rosa Maniküre mit goldenen Details" },
      { src: IMAGES.gallery[5], alt: "Nude-Maniküre mit braunen French-Spitzen" },
    ],
  },
  about: {
    eyebrow: "Über uns",
    title: "Ein Studio mit Herz und Aufmerksamkeit",
    body1:
      "M.O.I — Nails & Spa entstand aus dem Wunsch, einen Ort zu schaffen, an dem du wirklich einmal durchatmen kannst. Keine hetigen Termine, sondern Zeit und Ruhe, um dich pflegen zu lassen — von der ersten Tasse Tee bis zum letzten Schliff.",
    body2:
      "Unser Team besteht aus zertifizierten Nagel- und Spa-Spezialistinnen, die mit pflegenden Produkten und höchsten Hygienestandards arbeiten. Wir freuen uns auf dich.",
    stats: [
      { value: "8+", label: "Jahre Erfahrung" },
      { value: "15k+", label: "zufriedene Kunden" },
      { value: "30+", label: "Behandlungen" },
      { value: "4.9★", label: "Durchschnittliche Bewertung" },
    ],
    imageAlt: "Innenraum von M.O.I — Nails & Spa mit grünen Pflanzen",
  },
  experience: {
    eyebrow: "Warum M.O.I",
    title: "Eine Erfahrung, die du behältst",
    items: [
      {
        title: "Persönliche Aufmerksamkeit",
        description:
          "Kein Standard-Behandlungsplan. Wir hören erst zu, beraten dann und passen alles an deine Wünsche an.",
      },
      {
        title: "Hygiene zuerst",
        description:
          "Alle Werkzeuge werden sterilisiert und wir verwenden Einwegmaterialien, wo nötig.",
      },
      {
        title: "Saubere Produkte",
        description:
          "Wir wählen vegan und frei von schädlichen Stoffen — gut für dich und den Planeten.",
      },
      {
        title: "Ruhige Atmosphäre",
        description:
          "Weiches Licht, warme Töne und beruhigende Musik. Ein Moment fernab der Hektik der Stadt.",
      },
    ],
  },
  booking: {
    eyebrow: "Termin",
    title: "Sichere dir deinen Moment",
    subtitle:
      "Am schnellsten buchst du, indem du uns anrufst oder eine WhatsApp-Nachricht schickst. Wir helfen dir gerne an einen passenden Termin.",
    phoneLabel: "Ruf uns direkt an",
    phoneNote: "Ruf uns an, um einen Termin zu vereinbaren.",
    whatsappLabel: "WhatsApp",
    hoursLabel: "Öffnungszeiten",
    cta: "Termin vereinbaren",
    formTitle: "Termin buchen",
    nameLabel: "Name",
    namePlaceholder: "Dein Name",
    phoneFieldLabel: "Telefonnummer",
    phonePlaceholder: "+31 6 2629 8686",
    categoryLabel: "Behandlung",
    categoryPlaceholder: "Behandlung auswählen",
    services: [
      "Solar Acryl- & Gelnägel — Natur",
      "Solar Acryl- & Gelnägel — Rosa Pulver",
      "Solar Acryl- & Gelnägel — 1 Farbe",
      "Solar Acryl- & Gelnägel — 2 Farben",
      "Solar Acryl- & Gelnägel — Pink & White",
      "Solar Acryl- & Gelnägel — Babyboomer",
      "Solar Acryl- & Gelnägel — Farb-Ombré",
      "Solar Acryl- & Gelnägel — Mit Gel-Lack",
      "Solar Acryl- & Gelnägel — Lange Nägel",
      "Maniküre",
      "Builder Base (BIAB) — Builder Base Natur (transparent)",
      "Builder Base (BIAB) — Builder Base mit Gel-Lack oder Farbe",
      "Builder Base (BIAB) — Builder Base mit French",
      "Gel-Lack — 1 Farbe",
      "Gel-Lack — Mehrere Farben",
      "Gel-Lack — French",
      "Entfernung & Reparatur — Kunstnägel entfernen",
      "Entfernung & Reparatur — Kunstnägel entfernen bei Neumodellage",
      "Entfernung & Reparatur — Gel-Lack entfernen (Naturnägel)",
      "Entfernung & Reparatur — Gel-Lack entfernen (Naturnägel) bei Neumodellage",
      "Entfernung & Reparatur — Nagelreparatur",
      "Pediküre — Spa-Pediküre",
      "Pediküre — Spa-Pediküre mit Gel-Lack",
      "Pediküre — Spa-Pediküre mit French",
    ],
    dateLabel: "Datum",
    timeLabel: "Uhrzeit",
    timePlaceholder: "Uhrzeit auswählen",
    timeHint: "Verfügbare Zeiten: 10:00 – 19:00 Uhr",
    notesLabel: "Anmerkungen",
    notesPlaceholder: "Optional: zusätzliche Informationen oder Wünsche",
    submitLabel: "Termin buchen",
    submittingLabel: "Wird gesendet...",
    successTitle: "Anfrage erhalten",
    successMessage: "Vielen Dank. Wir melden uns schnellstmöglich, um deinen Termin zu bestätigen.",
    errorMessage: "Etwas ist schiefgelaufen. Ruf uns bitte an, um deinen Termin zu vereinbaren.",
    requiredMessage: "Bitte fülle alle Pflichtfelder aus.",
  },
  openingHours: [
    { day: "Montag", hours: "09:00 – 18:00" },
    { day: "Dienstag", hours: "09:00 – 18:00" },
    { day: "Mittwoch", hours: "09:00 – 18:00" },
    { day: "Donnerstag", hours: "09:00 – 20:00" },
    { day: "Freitag", hours: "09:00 – 18:00" },
    { day: "Samstag", hours: "09:00 – 18:00" },
    { day: "Sonntag", hours: "Geschlossen" },
  ],
  contact: {
    eyebrow: "Kontakt",
    title: "Finde uns in Heemskerk",
    subtitle:
      "Wir befinden uns im Zentrum von Heemskerk. Komm gerne vorbei oder vereinbare vorab einen Termin.",
    addressLabel: "Adresse",
    address: BUSINESS.address,
    phoneLabel: "Telefon",
    phones: BUSINESS.phones,
    emailLabel: "E-Mail",
    email: BUSINESS.email,
    hoursLabel: "Öffnungszeiten",
    mapTitle: "Karte von M.O.I — Nails & Spa in Heemskerk",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Gut zu wissen",
    subtitle: "Alles, was du vor deinem ersten Besuch vielleicht noch wissen wolltest.",
    items: [
      {
        question: "Muss ich vorab einen Termin vereinbaren?",
        answer:
          "Wir empfehlen es dringend. Spontane Besuche sind bei freier Kapazität möglich, aber eine Reservierung vermeidet Enttäuschungen.",
      },
      {
        question: "Kann ich meinen Termin verschieben?",
        answer:
          "Ja, bis 24 Stunden vorher kannst du kostenfrei ändern. Ruf uns kurz an oder schicke eine WhatsApp-Nachricht.",
      },
      {
        question: "Welche Zahlungsmethoden akzeptiert ihr?",
        answer: "Wir akzeptieren Barzahlung, Karte und alle gängigen mobilen Zahlungsmethoden.",
      },
      {
        question: "Sind eure Produkte sicher und vegan?",
        answer:
          "Ja. Unsere Farben und Pflegeprodukte sind vegan und frei von den gängigsten schädlichen Stoffen.",
      },
      {
        question: "Kann ich einen Gutschein kaufen?",
        answer:
          "Absolut. Eine Behandlung bei M.O.I ist ein beliebtes Geschenk. Frag bei deinem nächsten Besuch oder telefonisch danach.",
      },
    ],
  },
  footer: {
    tagline: "Ein Moment nur für dich — im Herzen von Heemskerk.",
    navTitle: "Navigation",
    contactTitle: "Kontakt",
    hoursTitle: "Öffnungszeiten",
    rights: "Alle Rechte vorbehalten.",
    legalLinks: ["Datenschutz", "AGB", "Cookies"],
    madeWith: "Mit Sorgfalt gemacht in Heemskerk",
  },
};

export default de;
