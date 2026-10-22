import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { IMAGES } from '../data/images';
import { hotel } from '../data/hotel';

export default function DestinationSection() {
  const { t } = useLanguage();

  return (
    <section
      id="al-hoceima"
      aria-labelledby="destination-title"
      className="relative overflow-hidden bg-ivory"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[26rem] overflow-hidden bg-stone lg:min-h-[44rem]">
          <img
            src={IMAGES.destinationCoast}
            alt={t.destination.caption}
            width={1800}
            height={1200}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent"
            aria-hidden="true"
          />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10">
            <p className="text-[0.58rem] uppercase tracking-[0.28em] text-champagne">
              {t.destination.label}
            </p>
            <p className="mt-3 font-serif text-[clamp(1.8rem,3.4vw,3rem)] font-light leading-[1.05] text-ivory">
              {t.destination.caption}
            </p>
          </div>
        </div>

        <div className="flex items-center px-6 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">
          <div className="max-w-xl">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-champagne" aria-hidden="true" />
              <p className="eyebrow">{t.destination.label}</p>
            </div>

            <h2
              id="destination-title"
              className="reveal mt-6 text-balance font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-[1.02] text-navy"
              style={{ transitionDelay: '80ms' }}
            >
              {t.destination.title}
            </h2>

            <div
              className="reveal mt-7 space-y-5 text-[0.95rem] leading-relaxed text-charcoal/65"
              style={{ transitionDelay: '160ms' }}
            >
              <p>{t.destination.p1}</p>
              <p>{t.destination.p2}</p>
            </div>

            <a
              href={hotel.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-9 inline-flex items-center gap-3 border-b border-navy/20 pb-1 text-[0.66rem] uppercase tracking-[0.2em] text-navy transition-colors hover:border-champagne hover:text-champagne"
              style={{ transitionDelay: '240ms' }}
            >
              {t.destination.cta}
              <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" className="rtl:-scale-x-100" />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-ivory/10 sm:grid-cols-4">
        {['Quemado', 'Cala Bonita', 'Espalmadero', 'Rif'].map((name, index) => (
          <div
            key={name}
            className="reveal flex items-center justify-center bg-navy px-4 py-6 text-center"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <span className="text-[0.6rem] uppercase tracking-[0.24em] text-ivory/50">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}