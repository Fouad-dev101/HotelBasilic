import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { IMAGES } from '../data/images';
import { hotel } from '../data/hotel';

export default function DestinationSection() {
  const { t } = useLanguage();

  return (
    <section id="al-hoceima" aria-labelledby="destination-title" className="relative overflow-hidden bg-ivory py-28 sm:py-36 lg:py-44">
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Large image with overlay text */}
          <div className="reveal-img relative min-h-[30rem] overflow-hidden bg-stone lg:col-span-7 lg:min-h-[45rem]">
            <img
              src={IMAGES.destinationCoast}
              alt={t.destination.caption}
              width={1800}
              height={1200}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <p className="text-[0.6rem] uppercase tracking-[0.3em] text-champagne">{t.destination.label}</p>
              <p className="mt-3 font-serif text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.05] text-ivory">
                {t.destination.caption}
              </p>
            </div>
          </div>

          {/* Text block, offset to overlap slightly */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-8 xl:pl-16">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-champagne" />
              <p className="eyebrow">{t.destination.label}</p>
            </div>

            <h2 id="destination-title" className="reveal mt-6 text-balance font-serif text-[clamp(2.6rem,4.8vw,4.8rem)] font-light leading-[1.02] text-navy" style={{ transitionDelay: '80ms' }}>
              {t.destination.title}
            </h2>

            <div className="reveal mt-8 space-y-6 text-[1.05rem] leading-relaxed text-charcoal/70" style={{ transitionDelay: '160ms' }}>
              <p>{t.destination.p1}</p>
              <p>{t.destination.p2}</p>
            </div>

            <a href={hotel.mapsUrl} target="_blank" rel="noopener noreferrer" className="reveal mt-10 inline-flex items-center gap-3 border-b border-navy/20 pb-1 text-[0.7rem] uppercase tracking-[0.2em] text-navy transition-colors hover:border-champagne hover:text-champagne" style={{ transitionDelay: '240ms' }}>
              {t.destination.cta}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Location tags - more editorial spacing */}
      <div className="container-lux mt-16 grid grid-cols-2 gap-px bg-ivory/10 sm:grid-cols-4">
        {['Quemado', 'Cala Bonita', 'Espalmadero', 'Rif'].map((name, index) => (
          <div key={name} className="reveal flex items-center justify-center bg-navy px-4 py-8 text-center" style={{ transitionDelay: `${index * 60}ms` }}>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-ivory/60">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}