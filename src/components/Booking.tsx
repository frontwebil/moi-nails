import { FormEvent, useMemo, useState } from "react";
import {
  CalendarHeart,
  CheckCircle2,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nContext";
import { BUSINESS } from "@/i18n/images";
import { useReveal } from "@/hooks/useReveal";

interface BookingForm {
  name: string;
  phone: string;
  category: string;
  appointmentDate: string;
  appointmentTime: string;
  notes: string;
}

const TIME_OPTIONS = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
];

const EMPTY_FORM: BookingForm = {
  name: "",
  phone: "",
  category: "",
  appointmentDate: "",
  appointmentTime: "",
  notes: "",
};

export default function Booking() {
  const { t, lang } = useI18n();
  const ref = useReveal<HTMLDivElement>();
  const [form, setForm] = useState<BookingForm>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const telHref = `tel:${BUSINESS.phones[0].replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${BUSINESS.whatsapp.replace(/[^\d]/g, "")}`;

  const updateField = (field: keyof BookingForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (
      !form.name.trim() ||
      !form.phone.trim() ||
      !form.category ||
      !form.appointmentDate ||
      !form.appointmentTime
    ) {
      setError(t.booking.requiredMessage);
      return;
    }

    setSubmitting(true);

    try {
      const apiUrl = "https://moi-back.vercel.app/api/moi-create-lead";

      if (apiUrl) {
        const apiResponse = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });

        if (!apiResponse.ok) {
          const errorText = await apiResponse.text();
          console.error("API повернуло помилку:", errorText);
          throw new Error("Помилка сервера");
        } else {
          console.log("Успішно відправлено!");
        }
      }

      setForm(EMPTY_FORM);
      setSubmitted(true);
    } catch (err) {
      console.error("Помилка відправки форми:", err);
      setError(t.booking.errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id={t.nav[4].id}
      ref={ref}
      className="relative overflow-hidden bg-blush-300/30 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sage-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="reveal overflow-hidden rounded-[2.5rem] bg-cream-50 p-8 shadow-card sm:p-12 lg:p-16">
          <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-clay-600">
                {t.booking.eyebrow}
              </span>
              <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-espresso-900 sm:text-5xl">
                {t.booking.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-espresso-700">
                {t.booking.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <a
                  href={telHref}
                  className="group flex items-center justify-between gap-4 rounded-2xl bg-espresso-900 px-5 py-4 text-cream-50 transition-all duration-300 ease-soft hover:bg-espresso-800"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/10">
                      <Phone size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-cream-100/70">
                        {t.booking.phoneLabel}
                      </span>
                      <span className="block font-semibold">
                        {BUSINESS.phones[0]}
                      </span>
                    </span>
                  </span>
                  <span className="text-sm text-cream-100/80">→</span>
                </a>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-sage-300 bg-sage-300/15 px-5 py-4 text-espresso-900 transition-all duration-300 ease-soft hover:bg-sage-300/30"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-500/15 text-sage-500">
                      <MessageCircle size={18} />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-espresso-700">
                        {t.booking.whatsappLabel}
                      </span>
                      <span className="block font-semibold">
                        {BUSINESS.whatsapp}
                      </span>
                    </span>
                  </span>
                  <span className="text-sm text-espresso-700">→</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-semibold text-espresso-900 sm:text-4xl">
                {t.booking.formTitle}
              </h3>

              {submitted ? (
                <div className="mt-8 rounded-3xl border border-sage-300 bg-sage-300/15 p-7 text-center sm:p-9">
                  <CheckCircle2 className="mx-auto text-sage-500" size={42} />
                  <h4 className="mt-4 font-serif text-3xl font-semibold text-espresso-900">
                    {t.booking.successTitle}
                  </h4>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-espresso-700">
                    {t.booking.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-clay-600 underline-offset-4 hover:underline"
                  >
                    {t.booking.formTitle}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.booking.nameLabel} htmlFor="booking-name">
                      <input
                        id="booking-name"
                        value={form.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder={t.booking.namePlaceholder}
                        autoComplete="name"
                        maxLength={120}
                        required
                        className={inputClass}
                      />
                    </Field>
                    <Field
                      label={t.booking.phoneFieldLabel}
                      htmlFor="booking-phone"
                    >
                      <input
                        id="booking-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder={t.booking.phonePlaceholder}
                        autoComplete="tel"
                        maxLength={40}
                        required
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field
                    label={t.booking.categoryLabel}
                    htmlFor="booking-category"
                  >
                    <select
                      id="booking-category"
                      value={form.category}
                      onChange={(e) => updateField("category", e.target.value)}
                      required
                      className={inputClass}
                    >
                      <option value="" disabled>
                        {t.booking.categoryPlaceholder}
                      </option>
                      {t.booking.services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label={t.booking.dateLabel} htmlFor="booking-date">
                      <input
                        id="booking-date"
                        type="date"
                        min={minDate}
                        value={form.appointmentDate}
                        onChange={(e) =>
                          updateField("appointmentDate", e.target.value)
                        }
                        required
                        className={inputClass}
                      />
                    </Field>
                    <Field label={t.booking.timeLabel} htmlFor="booking-time">
                      <select
                        id="booking-time"
                        value={form.appointmentTime}
                        onChange={(e) =>
                          updateField("appointmentTime", e.target.value)
                        }
                        required
                        className={inputClass}
                      >
                        <option value="" disabled>
                          {t.booking.timePlaceholder}
                        </option>
                        {TIME_OPTIONS.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <p className="-mt-2 text-xs text-espresso-700/70">
                    {t.booking.timeHint}
                  </p>

                  <Field label={t.booking.notesLabel} htmlFor="booking-notes">
                    <textarea
                      id="booking-notes"
                      value={form.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      placeholder={t.booking.notesPlaceholder}
                      maxLength={1000}
                      rows={4}
                      className={`${inputClass} resize-y`}
                    />
                  </Field>

                  {error && (
                    <p
                      role="alert"
                      className="rounded-xl bg-blush-200 px-4 py-3 text-sm font-medium text-espresso-900"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-clay-500 px-6 py-4 text-sm font-semibold text-cream-50 transition-all duration-300 ease-soft hover:bg-clay-600 disabled:cursor-wait disabled:opacity-60"
                  >
                    <CalendarHeart size={18} />
                    {submitting
                      ? t.booking.submittingLabel
                      : t.booking.submitLabel}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="mt-10 border-t border-cream-200 pt-7">
            <div className="grid gap-5 lg:grid-cols-[1fr_1.35fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-clay-600">
                  {t.booking.hoursLabel}
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-x-5 gap-y-1.5 text-sm text-espresso-800 sm:grid-cols-2 lg:grid-cols-2">
                  {t.openingHours.map((d) => (
                    <li
                      key={d.day}
                      className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3"
                    >
                      <span>{d.day}</span>
                      <span className="whitespace-nowrap text-right font-medium">
                        {d.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="flex items-start gap-2 text-sm leading-relaxed text-espresso-700 lg:justify-end lg:pt-6">
                <CalendarHeart
                  size={15}
                  className="mt-0.5 shrink-0 text-clay-600"
                />
                {t.booking.phoneNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-3.5 text-sm text-espresso-900 outline-none transition-all placeholder:text-espresso-700/45 focus:border-clay-500 focus:ring-2 focus:ring-clay-400/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-semibold text-espresso-800">
        {label}
      </span>
      {children}
    </label>
  );
}
