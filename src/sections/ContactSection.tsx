import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowUpRight, Check, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { hotel } from '../data/hotel';

type Values = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const { t } = useLanguage();
  const [values, setValues] = useState<Values>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const update = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'success') return;

    const next: Errors = {};
    if (!values.name.trim()) next.name = t.contact.errors.required;
    if (!values.email) next.email = t.contact.errors.required;
    else if (!emailPattern.test(values.email)) next.email = t.contact.errors.email;
    if (values.message.trim().length < 5) next.message = t.contact.errors.message;

    setErrors(next);

    if (Object.keys(next).length > 0) {
      document.getElementById(Object.keys(next)[0])?.focus();
      return;
    }

    setStatus('success');
  };

  const labelClass =
    'block text-[0.58rem] uppercase tracking-[0.2em] text-charcoal/45';
  const fieldClass = 'field-light';
  const errorClass = 'mt-1.5 text-[0.68rem] leading-snug text-[#9B4A36]';

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-ivory py-24 sm:py-32 lg:py-40"
    >
      <div className="container-lux">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-champagne" aria-hidden="true" />
              <p className="eyebrow">{t.contact.label}</p>
            </div>

            <h2
              id="contact-title"
              className="reveal mt-6 text-balance font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-[1.02] text-navy"
              style={{ transitionDelay: '80ms' }}
            >
              {t.contact.title}
            </h2>

            <div className="mt-10 space-y-7">
              <div className="reveal flex gap-4" style={{ transitionDelay: '140ms' }}>
                <MapPin
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-champagne"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[0.55rem] uppercase tracking-[0.2em] text-charcoal/40">
                    {t.contact.addressLabel}
                  </p>
                  <address className="mt-2 not-italic text-[0.92rem] leading-relaxed text-navy">
                    {hotel.street}
                    <br />
                    {hotel.postalCode} {hotel.city}
                    <br />
                    {hotel.country}
                  </address>
                  <a
                    href={hotel.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-charcoal/50 transition-colors hover:text-champagne"
                  >
                    {t.contact.mapCta}
                    <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden="true" className="rtl:-scale-x-100" />
                  </a>
                </div>
              </div>

              <div className="reveal flex gap-4" style={{ transitionDelay: '200ms' }}>
                <Phone
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-champagne"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[0.55rem] uppercase tracking-[0.2em] text-charcoal/40">
                    {t.contact.phoneLabel}
                  </p>
                  <a
                    href={`tel:${hotel.phoneHref}`}
                    className="mt-2 inline-block font-serif text-[1.35rem] font-light text-navy transition-colors hover:text-champagne"
                  >
                    {hotel.phoneDisplay}
                  </a>
                  <p className="mt-1 text-[0.66rem] text-charcoal/40">
                    {t.contact.receptionLabel} — {t.contact.receptionValue}
                  </p>
                </div>
              </div>
            </div>

            <div className="reveal mt-10 border-t border-navy/10 pt-6">
              <p className="text-[0.65rem] leading-relaxed text-charcoal/35">
                {t.footer.demoNotice}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div
                className="flex h-full min-h-[26rem] flex-col items-center justify-center border border-navy/10 bg-[#EDE7DC]/60 p-8 text-center"
                role="status"
                aria-live="polite"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne text-champagne">
                  <Check size={22} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light leading-tight text-navy">
                  {t.contact.successTitle}
                </h3>
                <p className="mt-3 max-w-md text-[0.86rem] leading-relaxed text-charcoal/55">
                  {t.contact.successText}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setValues({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-dark mt-7"
                >
                  {t.contact.newMessage}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="reveal font-serif text-[clamp(1.6rem,2.4vw,2rem)] font-light text-navy">
                  {t.contact.formTitle}
                </h3>
                <p className="reveal mt-2 text-[0.86rem] leading-relaxed text-charcoal/55">
                  {t.contact.formText}
                </p>

                <div className="mt-8 grid gap-x-6 gap-y-7 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      {t.contact.fields.name}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={update}
                      placeholder={t.contact.placeholders.name}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={fieldClass}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className={errorClass}>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      {t.contact.fields.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={update}
                      placeholder={t.contact.placeholders.email}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={fieldClass}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className={errorClass}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-subject" className={labelClass}>
                      {t.contact.fields.subject}{' '}
                      <span className="normal-case tracking-normal text-charcoal/30">
                        ({t.common.optional})
                      </span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      value={values.subject}
                      onChange={update}
                      placeholder={t.contact.placeholders.subject}
                      className={fieldClass}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="contact-message" className={labelClass}>
                      {t.contact.fields.message}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={update}
                      placeholder={t.contact.placeholders.message}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`${fieldClass} resize-none`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className={errorClass}>
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-5 border-t border-navy/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[0.62rem] leading-relaxed text-charcoal/35">
                    {t.contact.successText}
                  </p>
                  <button type="submit" className="btn btn-dark shrink-0">
                    {t.contact.submit}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}