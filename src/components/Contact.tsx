import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { BUSINESS } from "@/i18n/images";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  const { t } = useI18n();
  const ref = useReveal<HTMLDivElement>();

  const mapSrc = "https://www.google.com/maps?q=Burgemeester+Nielenplein+42,+1961+NV+Heemskerk&output=embed";

  return (
    <section
      id={t.nav[5].id}
      ref={ref}
      className="relative bg-cream-100 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
            {t.contact.eyebrow}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-espresso-900 sm:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-espresso-700">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info card */}
          <div className="reveal flex flex-col gap-5 rounded-3xl bg-cream-50 p-8 shadow-soft sm:p-10">
            <InfoRow icon={MapPin} label={t.contact.addressLabel} value={t.contact.address} />
            <InfoRow
              icon={Phone}
              label={t.contact.phoneLabel}
              value={
                <div className="flex flex-col">
                  {t.contact.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="font-medium text-espresso-900 transition-colors hover:text-clay-600"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              }
            />
            <InfoRow
              icon={Mail}
              label={t.contact.emailLabel}
              value={
                <a
                  href={`mailto:${t.contact.email}`}
                  className="font-medium text-espresso-900 transition-colors hover:text-clay-600"
                >
                  {t.contact.email}
                </a>
              }
            />
            <div className="border-t border-cream-200 pt-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
                <Clock size={14} />
                {t.contact.hoursLabel}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-espresso-800">
                {t.openingHours.map((d) => (
                  <li key={d.day} className="flex justify-between">
                    <span>{d.day}</span>
                    <span
                      className={`font-medium ${
                        d.hours.toLowerCase().includes("gesl") ||
                        d.hours.toLowerCase().includes("clos") ||
                        d.hours.toLowerCase().includes("gesch")
                          ? "text-blush-400"
                          : ""
                      }`}
                    >
                      {d.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="reveal overflow-hidden rounded-3xl shadow-soft" style={{ transitionDelay: "120ms" }}>
            <iframe
              title={t.contact.mapTitle}
              src={mapSrc}
              className="h-full min-h-[380px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-clay-400/15 text-clay-600">
        <Icon size={19} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay-600">
          {label}
        </p>
        <div className="mt-1 text-espresso-900">{value}</div>
      </div>
    </div>
  );
}
