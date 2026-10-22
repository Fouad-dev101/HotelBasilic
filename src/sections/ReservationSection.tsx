import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useBooking } from '../context/BookingContext';
import { rooms } from '../data/rooms';
import SectionHeading from '../components/SectionHeading';

type FormValues = {
  checkIn: string;
  checkOut: string;
  guests: string;
  rooms: string;
  name: string;
  email: string;
  phone: string;
  preference: string;
  message: string;
};

type Errors = Partial<Record<keyof FormValues, string>>;

const today = new Date().toISOString().split('T')[0];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ReservationSection() {
  const { locale, t } = useLanguage();
  const { preference, setPreference, clearPreference } = useBooking();

  const [values, setValues] = useState<FormValues>({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    name: '',
    email: '',
    phone: '',
    preference: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const nights = useMemo(() => {
    if (!values.checkIn || !values.checkOut) return 0;
    if (values.checkOut <= values.checkIn) return 0;
    const diff =
      new Date(values.checkOut).getTime() - new Date(values.checkIn).getTime();
    return Math.round(diff / 86_400_000);
  }, [values.checkIn, values.checkOut]);

  const update = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): Errors => {
    const next: Errors = {};

    if (!values.checkIn) next.checkIn = t.reservation.errors.required;
    else if (values.checkIn < today) next.checkIn = t.reservation.errors.datePast;

    if (!values.checkOut) next.checkOut = t.reservation.errors.required;
    else if (values.checkIn && values.checkOut <= values.checkIn)
      next.checkOut = t.reservation.errors.dateOrder;

    if (!values.guests || Number(values.guests) < 1)
      next.guests = t.reservation.errors.guests;

    if (!values.rooms || Number(values.rooms) < 1)
      next.rooms = t.reservation.errors.rooms;

    if (!values.name.trim() || values.name.trim().length < 2)
      next.name = t.reservation.errors.name;

    if (!values.email) next.email = t.reservation.errors.required;
    else if (!emailPattern.test(values.email))
      next.email = t.reservation.errors.email;

    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting' || status === 'success') return;

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      // Future integration point:
      // await fetch('/api/reservation-inquiry', { method: 'POST', body: JSON.stringify({ ...values, nights, locale }) })
    }, 800);
  };

  const reset = () => {
    setValues({
      checkIn: '',
      checkOut: '',
      guests: '2',
      rooms: '1',
      name: '',
      email: '',
      phone: '',
      preference: '',
      message: '',
    });
    setErrors({});
    setStatus('idle');
    clearPreference();
  };

  const fieldClass = 'field-dark [color-scheme:dark]';
  const labelClass =
    'block text-[0.58rem] uppercase tracking-[0.2em] text-ivory/50';
  const errorClass = 'mt-1.5 text-[0.68rem] leading-snug text-[#E4A08B]';

  if (status === 'success') {
    return (
      <section
        id="reservation"
        aria-labelledby="reservation-title"
        className="bg-navy py-24 text-ivory sm:py-32 lg:py-40"
      >
        <div className="container-lux">
          <div
            className="mx-auto max-w-2xl border border-champagne/30 bg-ivory/[0.03] p-8 text-center sm:p-12"
            role="status"
            aria-live="polite"
          >
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-champagne text-champagne">
              <Check size={22} strokeWidth={1.4} aria-hidden="true" />
            </span>
            <h2
              id="reservation-title"
              className="mt-6 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] font-light leading-tight"
            >
              {t.reservation.successTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[0.9rem] leading-relaxed text-ivory/60">
              {t.reservation.successText}
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" onClick={reset} className="btn btn-solid">
                {t.reservation.newRequest}
              </button>
              <a
                href="#contact"
                className="text-[0.65rem] uppercase tracking-[0.2em] text-ivory/50 underline-offset-4 hover:text-champagne hover:underline"
              >
                {t.nav.contact}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservation"
      aria-labelledby="reservation-title"
      className="relative overflow-hidden bg-navy py-24 text-ivory sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute -right-56 top-24 hidden h-[38rem] w-[38rem] rounded-full border border-champagne/10 lg:block"
        aria-hidden="true"
      />

      <div className="container-lux relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              label={t.reservation.label}
              title={t.reservation.title}
              tone="dark"
            />

            <p className="reveal mt-7 max-w-md text-[0.95rem] leading-relaxed text-ivory/65">
              {t.reservation.text}
            </p>

            <div className="reveal mt-8 border-l border-champagne/40 pl-5">
              <p className="text-[0.8rem] leading-relaxed text-ivory/50">
                {t.reservation.disclaimer}
              </p>
              <p className="mt-3 text-[0.68rem] leading-relaxed text-champagne/60">
                {t.reservation.demoNote}
              </p>
            </div>

            <div className="reveal mt-10 hidden border-t border-ivory/10 pt-6 lg:block">
              <p className="text-[0.58rem] uppercase tracking-[0.2em] text-ivory/35">
                {t.contact.receptionLabel}
              </p>
              <a
                href="tel:+212539980083"
                className="mt-2 inline-block font-serif text-[1.5rem] font-light text-ivory transition-colors hover:text-champagne"
              >
                +212 539 98 00 83
              </a>
              <p className="mt-1 text-[0.65rem] text-ivory/40">
                {t.contact.receptionValue}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="border border-ivory/15 bg-ivory/[0.025] p-6 sm:p-9"
            >
              {Object.keys(errors).length > 0 && (
                <p
                  className="mb-6 border border-[#E4A08B]/40 bg-[#E4A08B]/10 px-4 py-3 text-[0.75rem] text-[#E4A08B]"
                  role="alert"
                >
                  {t.reservation.errorSummary}
                </p>
              )}

              <div className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
                <div>
                  <label htmlFor="checkIn" className={labelClass}>
                    {t.reservation.fields.checkIn}
                  </label>
                  <input
                    id="checkIn"
                    name="checkIn"
                    type="date"
                    min={today}
                    value={values.checkIn}
                    onChange={update}
                    aria-invalid={!!errors.checkIn}
                    aria-describedby={errors.checkIn ? 'checkIn-error' : undefined}
                    className={fieldClass}
                  />
                  {errors.checkIn && (
                    <p id="checkIn-error" className={errorClass}>
                      {errors.checkIn}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="checkOut" className={labelClass}>
                    {t.reservation.fields.checkOut}
                  </label>
                  <input
                    id="checkOut"
                    name="checkOut"
                    type="date"
                    min={values.checkIn || today}
                    value={values.checkOut}
                    onChange={update}
                    aria-invalid={!!errors.checkOut}
                    aria-describedby={errors.checkOut ? 'checkOut-error' : undefined}
                    className={fieldClass}
                  />
                  {errors.checkOut && (
                    <p id="checkOut-error" className={errorClass}>
                      {errors.checkOut}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="guests" className={labelClass}>
                    {t.reservation.fields.guests}
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={values.guests}
                    onChange={update}
                    aria-invalid={!!errors.guests}
                    aria-describedby={errors.guests ? 'guests-error' : undefined}
                    className={fieldClass}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={String(n)} className="bg-navy">
                        {n}
                      </option>
                    ))}
                  </select>
                  {errors.guests && (
                    <p id="guests-error" className={errorClass}>
                      {errors.guests}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="rooms" className={labelClass}>
                    {t.reservation.fields.rooms}
                  </label>
                  <select
                    id="rooms"
                    name="rooms"
                    value={values.rooms}
                    onChange={update}
                    aria-invalid={!!errors.rooms}
                    aria-describedby={errors.rooms ? 'rooms-error' : undefined}
                    className={fieldClass}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={String(n)} className="bg-navy">
                        {n}
                      </option>
                    ))}
                  </select>
                  {errors.rooms && (
                    <p id="rooms-error" className={errorClass}>
                      {errors.rooms}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="name" className={labelClass}>
                    {t.reservation.fields.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update}
                    placeholder={t.reservation.placeholders.name}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={fieldClass}
                  />
                  {errors.name && (
                    <p id="name-error" className={errorClass}>
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    {t.reservation.fields.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update}
                    placeholder={t.reservation.placeholders.email}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={fieldClass}
                  />
                  {errors.email && (
                    <p id="email-error" className={errorClass}>
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {t.reservation.fields.phone}{' '}
                    <span className="normal-case tracking-normal text-ivory/30">
                      ({t.common.optional})
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={update}
                    placeholder={t.reservation.placeholders.phone}
                    className={fieldClass}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="preference" className={labelClass}>
                    {t.reservation.fields.preference}{' '}
                    <span className="normal-case tracking-normal text-ivory/30">
                      ({t.common.optional})
                    </span>
                  </label>
                  <select
                    id="preference"
                    name="preference"
                    value={preference}
                    onChange={(event) => {
                      setPreference(event.target.value);
                      setValues((prev) => ({ ...prev, preference: event.target.value }));
                    }}
                    className={fieldClass}
                  >
                    <option value="" className="bg-navy">
                      {t.reservation.fields.noPreference}
                    </option>
                    {rooms.map((room) => (
                      <option key={room.id} value={room.id} className="bg-navy">
                        {room.name[locale]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex items-baseline justify-between gap-3">
                    <label htmlFor="message" className={labelClass}>
                      {t.reservation.fields.message}{' '}
                      <span className="normal-case tracking-normal text-ivory/30">
                        ({t.common.optional})
                      </span>
                    </label>
                    {nights > 0 && (
                      <p className="text-[0.68rem] tracking-wide text-champagne">
                        {nights} {t.reservation.nights}
                      </p>
                    )}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={update}
                    placeholder={t.reservation.placeholders.message}
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-ivory/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-[0.65rem] leading-relaxed text-ivory/35">
                  {t.reservation.disclaimer}
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-solid shrink-0 disabled:opacity-60"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 size={14} className="animate-spin" aria-hidden="true" />
                      {t.reservation.submitting}
                    </>
                  ) : (
                    t.reservation.submit
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}