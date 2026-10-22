import { useLanguage } from '../i18n/LanguageContext';
import { hotel } from '../data/hotel';
import { IMAGES } from '../data/images';

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section id="discover" aria-labelledby="intro-title" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="container-lux">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-7">
            <div className="reveal-img relative aspect-[4/5] overflow-hidden bg-stone sm:aspect-[5/4] lg:aspect-[4/5]">
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

            <div className="reveal-img absolute -bottom-10 right-0 hidden w-[38%] overflow-hidden border-8 border-ivory bg-stone sm:block lg:-bottom-14">
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

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-10 xl:pl-16">
            <div className="reveal flex items-center gap-4">
              <span className="h-px w-10 bg-champagne" aria-hidden="true" />
              <p className="eyebrow">{t.intro.label}</p>
            </div>

            <h2
              id="intro-title"
              className="reveal mt-7 text-balance font-serif text-[clamp(2.4rem,4.6vw,4.4rem)] font-light leading-[1.03] tracking-[-0.01em] text-navy"
              style={{ transitionDelay: '80ms' }}
            >
              {t.intro.title}
            </h2>

            <div
              className="reveal mt-8 space-y-5 text-[0.96rem] leading-relaxed text-charcoal/70"
              style={{ transitionDelay: '160ms' }}
            >
              <p>{t.intro.p1}</p>
              <p>{t.intro.p2}</p>
            </div>

            <div
              className="reveal mt-10 grid grid-cols-3 gap-4 border-t border-navy/10 pt-7"
              style={{ transitionDelay: '240ms' }}
            >
              <div>
                <p className="font-serif text-[2.1rem] leading-none text-navy">
                  {hotel.roomsCount}
                </p>
                <p className="mt-2 text-[0.6rem] uppercase tracking-[0.18em] text-charcoal/50">
                  {t.intro.stat1}
                </p>
              </div>
              <div>
                <p className="font-serif text-[2.1rem] leading-none text-navy">
                  {hotel.suitesCount}
                </p>
                <p className="mt-2 text-[0.6rem] uppercase tracking-[0.18em] text-charcoal/50">
                  {t.intro.stat2}
                </p>
              </div>
              <div>
                <p className="font-serif text-[2.1rem] leading-none text-navy">1</p>
                <p className="mt-2 text-[0.6rem] uppercase tracking-[0.18em] text-charcoal/50">
                  {t.intro.stat3}
                </p>
              </div>
            </div>

            <p className="reveal mt-4 text-[0.65rem] leading-relaxed text-charcoal/40">
              {t.intro.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}