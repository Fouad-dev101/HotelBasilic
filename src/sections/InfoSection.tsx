import { Clock, Languages, MessageSquareQuote } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export default function InfoSection() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Languages,
      label: t.info.languages,
      value: t.info.languagesValue,
    },
    {
      icon: Clock,
      label: t.info.reception,
      value: t.info.receptionValue,
    },
    {
      icon: MessageSquareQuote,
      label: t.info.reviewsTitle,
      value: '',
    },
  ];

  return (
    <section className="bg-[#EDE7DC] py-20 sm:py-24">
      <div className="container-lux">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-champagne" aria-hidden="true" />
              <p className="eyebrow">{t.info.label}</p>
            </div>
            <h2 className="reveal mt-5 text-balance font-serif text-[clamp(2rem,3.6vw,3.2rem)] font-light leading-[1.04] text-navy">
              {t.info.title}
            </h2>
            <p className="reveal mt-5 max-w-md text-[0.9rem] leading-relaxed text-charcoal/60">
              {t.info.p}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="reveal border border-navy/10 bg-ivory/60 p-5 sm:p-6"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.4}
                    className="text-champagne"
                    aria-hidden="true"
                  />
                  <p className="mt-4 text-[0.55rem] uppercase tracking-[0.2em] text-charcoal/45">
                    {item.label}
                  </p>
                  {item.value ? (
                    <p className="mt-2 font-serif text-[1.25rem] font-light text-navy">
                      {item.value}
                    </p>
                  ) : (
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-charcoal/55">
                      {t.info.reviewsText}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}