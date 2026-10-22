import { useLanguage } from '../i18n/LanguageContext';
import { hotel } from '../data/hotel';
import { IMAGES } from '../data/images';

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section id="discover" aria-labelledby="intro-title" className="bg-ivory py-28 sm:py-36 lg:py-44">
      <div className="container-lux">
        <div className="relative grid gap-8 lg:grid-cols-12 lg:gap-0">
          {/* Main image - takes up 7 columns */}
          <div className="reveal-img relative z-10 aspect-[4/5] w-full overflow-hidden bg-stone sm:aspect-[5/4] lg:col-span-7 lg:aspect-[4/5]">
            <img
              src={IMAGES.intro}
              alt={t.hero.imageAlt}
              width={1400}
              height={1750}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text block - positioned to overlap the image on the right */}
          <div className="relative z-20 flex flex-col justify-center px-2 pt-8 lg:col-span-6 lg:col-start-6 lg:pt-0 lg:pl-16 xl:pl-24">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-12 bg-champagne" />
              <p className="eyebrow">{t.intro.label}</p>
            </div>

            <h2
              id="intro-title"
              className="reveal mt-7 text-balance font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-light leading-[0.98] tracking-[-0.02em] text-navy"
              style={{ transitionDelay: '100ms' }}
            >
              {t.intro.title}
            </h2>

            <div
              className="reveal mt-8 space-y-6 text-[1.05rem] leading-relaxed text-charcoal/70"
              style={{ transitionDelay: '200ms' }}
            >
              <p>{t.intro.p1}</p>
              <p>{t.intro.p2}</p>
            </div>

            {/* Stats */}
            <div
              className="reveal mt-12 grid grid-cols-3 gap-4 border-t border-navy/10 pt-8"
              style={{ transitionDelay: '300ms' }}
            >
              <div>
                <p className="font-serif text-[2.5rem] leading-none text-navy">{hotel.roomsCount}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">{t.intro.stat1}</p>
              </div>
              <div>
                <p className="font-serif text-[2.5rem] leading-none text-navy">{hotel.suitesCount}</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">{t.intro.stat2}</p>
              </div>
              <div>
                <p className="font-serif text-[2.5rem] leading-none text-navy">1</p>
                <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-charcoal/50">{t.intro.stat3}</p>
              </div>
            </div>

            <p className="reveal mt-6 text-[0.7rem] leading-relaxed text-charcoal/40" style={{ transitionDelay: '400ms' }}>
              {t.intro.note}
            </p>
          </div>

          {/* Small overlapping image detail - hidden on mobile, elegant on desktop */}
          <div className="reveal-img absolute bottom-0 left-[40%] z-30 hidden w-[30%] overflow-hidden border-8 border-ivory bg-stone lg:block">
            <img
              src={IMAGES.introDetail}
              alt={t.intro.caption}
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}