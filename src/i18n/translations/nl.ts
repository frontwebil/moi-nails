import type { Translation } from "../types";
import { IMAGES, BUSINESS } from "../images";

const nl: Translation = {
  lang: "nl",
  htmlLang: "nl-NL",
  meta: {
    title: "M.O.I — Nails & Spa | Nagelsalon in Heemskerk",
    description:
      "Een moment voor jezelf. Bij M.O.I — Nails & Spa in Heemskerk vind je manicure, pedicure, gelnagels en spa-behandelingen in een rustige, luxe omgeving.",
    ogTitle: "M.O.I — Nails & Spa | Een moment voor jezelf",
    ogDescription:
      "Manicure, pedicure, gelnagels en spa-behandelingen in het hart van Heemskerk. Maak vandaag nog een afspraak.",
  },
  brand: BUSINESS.name,
  tagline: "Een moment voor jezelf.",
  nav: [
    { id: "home", label: "Home" },
    { id: "behandelingen", label: "Behandelingen" },
    { id: "galerij", label: "Galerij" },
    { id: "over-ons", label: "Over ons" },
    { id: "afspraak", label: "Afspraak" },
    { id: "contact", label: "Contact" },
    { id: "price-list", label: "Prijslijst" },
  ],
  priceList: {
    path: "prijslijst",
    pdfPath: "/price-lists/Prijslijst_(4).pdf",
    label: "Prijslijst",
    title: "Onze prijslijst",
    subtitle: "Bekijk alle behandelingen, extra opties en actuele prijzen.",
    backLabel: "Terug naar behandelingen",
    downloadLabel: "Download prijslijst",
    openLabel: "Open in nieuw tabblad",
  },
  hero: {
    title: "Een moment voor jezelf.",
    subtitle:
      "In het hart van Heemskerk welkom je M.O.I — Nails & Spa voor manicure, pedicure, gelnagels en ontspannende spa-behandelingen. Rust, zorg en schoonheid onder één dak.",
    badge: "Nagelsalon & Spa in Heemskerk",
    ctaPrimary: "Afspraak maken",
    ctaSecondary: "Bekijk behandelingen",
    callPrompt: "Bel ons om een afspraak te maken.",
  },
  intro: {
    eyebrow: "Welkom bij M.O.I",
    title: "Zorg voor je handen, rust voor je geest",
    body: "Onze ervaren specialisten combineren precisie met een warme, persoonlijke aanpak. Elk bezoek begint met een korte kennismaking, zodat de behandeling precies aansluit bij wat jij nodig hebt — van een klassieke manicure tot een uitgebreide spa-rituelen.",
  },
  treatments: {
    eyebrow: "Onze behandelingen",
    title: "Behandelingen die bij je passen",
    subtitle:
      "Van onderhoud tot pure ontspanning. Alle behandelingen worden uitgevoerd met hoogwaardige producten en hygiëne als hoogste prioriteit.",
    durationLabel: "duur",
    fromLabel: "vanaf",
    bookLabel: "Boek nu",
    items: [
      {
        name: "Solar acryl- & gelnagels",
        description: "Naturel, roze poeder, één of twee kleuren, pink & white, babyboomer, ombré en lange nagels.",
        price: "vanaf €45",
        duration: "Nieuwe set / opvullen",
        image: IMAGES.treatmentGel,
        alt: "Solar acryl- en gelnagels",
      },
      {
        name: "Builder base (BIAB)",
        description: "Builder base voor handen of voeten, met transparante gelpolish, kleur of French tips.",
        price: "vanaf €45",
        duration: "Nieuwe set / opvullen",
        image: IMAGES.treatmentManicure,
        alt: "Builder base manicure",
      },
      {
        name: "Gelpolish",
        description: "Gelpolish in één kleur, meerdere kleuren of met French tips voor een verzorgde finish.",
        price: "€25",
        duration: "1 kleur",
        image: IMAGES.treatmentPolish,
        alt: "Gelpolish kleuren",
      },
      {
        name: "Verwijderen & repareren",
        description: "Veilig verwijderen van kunstnagels of gelpolish, met reparatie van nagels wanneer dat nodig is.",
        price: "vanaf €5",
        duration: "Verwijderen / reparatie",
        image: IMAGES.treatmentNailArt,
        alt: "Nagels verwijderen en repareren",
      },
      {
        name: "Manicure",
        description: "Precieze nagelriemverzorging en een strakke finish voor prachtig verzorgde handen.",
        price: "€20",
        duration: "Manicure",
        image: IMAGES.treatmentManicure,
        alt: "Manicure",
      },
      {
        name: "Spa-pedicure",
        description: "Een ontspannende spa-pedicure met optioneel gelpolish of French tips voor verzorgde voeten.",
        price: "vanaf €40",
        duration: "Met gelpolish",
        image: IMAGES.treatmentPedicure,
        alt: "Spa-pedicure",
      },
    ],
  },
  gallery: {
    eyebrow: "Galerij",
    title: "Onze werk in beeld",
    subtitle:
      "Een impressie van de afwerking en sfeer bij M.O.I — Nails & Spa. Elk detail telt.",
    items: [
      { src: IMAGES.gallery[0], alt: "Roze-witte French manicure" },
      { src: IMAGES.gallery[1], alt: "Roze manicure met zwarte French tips" },
      { src: IMAGES.gallery[2], alt: "Roze en zwarte opvallende nail art" },
      { src: IMAGES.gallery[3], alt: "Roze nail art met bloemen" },
      { src: IMAGES.gallery[4], alt: "Zachte roze manicure met gouden details" },
      { src: IMAGES.gallery[5], alt: "Naturel manicure met bruine French tips" },
    ],
  },
  about: {
    eyebrow: "Over ons",
    title: "Een salon met hart en aandacht",
    body1:
      "M.O.I — Nails & Spa ontstond uit de wens om een plek te creëren waar je echt even kunt uitrusten. Geen gehaaste afspraken, maar de tijd en rust om jezelf te laten verzorgen — van het eerste kopje thee tot de laatste hand.",
    body2:
      "Ons team bestaat uit gecertificeerde nagel- en spadespecialisten die werken met verzorgende producten en de hoogste hygiënestandaarden. We zijn blij om je te verwelkomen.",
    stats: [
      { value: "8+", label: "jaar ervaring" },
      { value: "15k+", label: "tevreden klanten" },
      { value: "30+", label: "behandelingen" },
      { value: "4.9★", label: "gemiddelde waardering" },
    ],
    imageAlt: "Interieur van M.O.I — Nails & Spa met groene planten",
  },
  experience: {
    eyebrow: "Waarom M.O.I",
    title: "Een ervaring die je blijft voelen",
    items: [
      {
        title: "Persoonlijke aandacht",
        description:
          "Geen standaard behandelplan. We luisteren eerst, adviseren dan en stemmen alles af op jouw wensen.",
      },
      {
        title: "Hygiëne eerst",
        description:
          "Alle gereedschappen worden gesteriliseerd en we werken met wegwerpmaterialen waar nodig.",
      },
      {
        title: "Scherpe producten",
        description:
          "We kiezen vegan en vrij van schadelijke stoffen — goed voor jou en voor de planeet.",
      },
      {
        title: "Rustige sfeer",
        description:
          "Zacht licht, warme tinten en kalmerende muziek. Een momentje weg van de drukte van de stad.",
      },
    ],
  },
  booking: {
    eyebrow: "Afspraak",
    title: "Reserveer jouw moment",
    subtitle:
      "Het snelst maak je een afspraak door ons te bellen of een WhatsApp-bericht te sturen. We helpen je graag aan een tijdstip dat je schikt.",
    phoneLabel: "Bel ons direct",
    phoneNote: "Bel ons om een afspraak te maken.",
    whatsappLabel: "WhatsApp",
    hoursLabel: "Openingstijden",
    cta: "Afspraak maken",
    formTitle: "Afspraak aanvragen",
    nameLabel: "Naam",
    namePlaceholder: "Jouw naam",
    phoneFieldLabel: "Telefoonnummer",
    phonePlaceholder: "+31 6 2629 8686",
    categoryLabel: "Behandeling",
    categoryPlaceholder: "Kies een behandeling",
    services: [
      "Solar acryl- & gelnagels — Natuurlijk",
      "Solar acryl- & gelnagels — Roze poeder",
      "Solar acryl- & gelnagels — 1 kleur",
      "Solar acryl- & gelnagels — 2 kleuren",
      "Solar acryl- & gelnagels — Pink & white",
      "Solar acryl- & gelnagels — Babyboom",
      "Solar acryl- & gelnagels — Ombré kleur",
      "Solar acryl- & gelnagels — Met gellak",
      "Solar acryl- & gelnagels — Lange nagels",
      "Manicure",
      "Builder base (BIAB) — Builder base naturel (doorzichtig)",
      "Builder base (BIAB) — Builder base met gellak of kleur",
      "Builder base (BIAB) — Builder base met french",
      "Gellak — 1 kleur",
      "Gellak — Verschillende kleuren",
      "Gellak — French",
      "Extra's — Kunstnagels verwijderen",
      "Extra's — Kunstnagels verwijderen bij een nieuwe set",
      "Extra's — Gellak verwijderen (eigen nagels)",
      "Extra's — Gellak verwijderen (eigen nagels) bij een nieuwe set",
      "Extra's — Nagelreparatie",
      "Pedicure — Spa pedicure",
      "Pedicure — Spa pedicure met gellak",
      "Pedicure — Spa pedicure met french",
    ],
    dateLabel: "Datum",
    timeLabel: "Tijd",
    timePlaceholder: "Kies een tijd",
    timeHint: "Beschikbare tijden: 10:00 – 19:00 uur",
    notesLabel: "Opmerkingen",
    notesPlaceholder: "Optioneel: extra informatie of wensen",
    submitLabel: "Afspraak aanvragen",
    submittingLabel: "Verzenden...",
    successTitle: "Aanvraag ontvangen",
    successMessage: "Bedankt. We nemen zo snel mogelijk contact met je op om je afspraak te bevestigen.",
    errorMessage: "Er ging iets mis. Bel ons gerust om je afspraak te maken.",
    requiredMessage: "Vul alle verplichte velden in.",
  },
  openingHours: [
    { day: "Maandag", hours: "09:00 – 18:00" },
    { day: "Dinsdag", hours: "09:00 – 18:00" },
    { day: "Woensdag", hours: "09:00 – 18:00" },
    { day: "Donderdag", hours: "09:00 – 20:00" },
    { day: "Vrijdag", hours: "09:00 – 18:00" },
    { day: "Zaterdag", hours: "09:00 – 18:00" },
    { day: "Zondag", hours: "Gesloten" },
  ],
  contact: {
    eyebrow: "Contact",
    title: "Vind ons in Heemskerk",
    subtitle:
      "We zitten in het centrum van Heemskerk. Loop gerust binnen of maak vooraf een afspraak.",
    addressLabel: "Adres",
    address: BUSINESS.address,
    phoneLabel: "Telefoon",
    phones: BUSINESS.phones,
    emailLabel: "E-mail",
    email: BUSINESS.email,
    hoursLabel: "Openingstijden",
    mapTitle: "Kaart van M.O.I — Nails & Spa in Heemskerk",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten",
    subtitle: "Alles wat je misschien nog wilde vragen voor je eerste bezoek.",
    items: [
      {
        question: "Moet ik vooraf een afspraak maken?",
        answer:
          "We raden het sterk aan. Loop-in is mogelijk als er plek is, maar om teleurstelling te voorkomen is reserveren verstandig.",
      },
      {
        question: "Kan ik mijn afspraak verzetten?",
        answer:
          "Ja, tot 24 uur van tevoren kun je kosteloos wijzigen. Geef ons even een belletje of stuur een WhatsApp-bericht.",
      },
      {
        question: "Welke betaalmethoden accepteren jullie?",
        answer: "We accepteren contant, pin en alle gangbare mobiele betaalmethoden.",
      },
      {
        question: "Zijn jullie producten veilig en vegan?",
        answer:
          "Ja. Onze kleuren en verzorgingsproducten zijn vegan en vrij van de meest voorkomende schadelijke stoffen.",
      },
      {
        question: "Kan ik een cadeaubon kopen?",
        answer:
          "Zeker. Een behandeling bij M.O.I is een populair geschenk. Vraag ernaar bij je volgende bezoek of via de telefoon.",
      },
    ],
  },
  footer: {
    tagline: "Een moment voor jezelf — in het hart van Heemskerk.",
    navTitle: "Navigatie",
    contactTitle: "Contact",
    hoursTitle: "Openingstijden",
    rights: "Alle rechten voorbehouden.",
    legalLinks: ["Privacy", "Algemene voorwaarden", "Cookies"],
    madeWith: "Met zorg gemaakt in Heemskerk",
  },
};

export default nl;
