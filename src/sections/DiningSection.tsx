import { useLanguage } from '../i18n/LanguageContext';
import { diningSpaces } from '../data/dining';
import { IMAGES } from '../data/images';
import SectionHeading from '../components/SectionHeading';

export default function DiningSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="dining"
      aria-labelledby="dining-title"
      className="relative overflow-hidden bg-navy py-24 text-ivory sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute -right-40 top-0 hidden h-[34rem] w-[34rem] rounded-full border border-champagne/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 bottom-0 hidden h-[30rem] w-[30rem] rounded-full border border-champagne/10 lg:block"
        aria-hidden="true"
      />

      <div className="container-lux relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionHeading
              label={t.dining.label}
              title={t.dining.title}
              tone="dark"
            />

            <div
              className="reveal mt-8 space-y-5 text-[0.96rem] leading-relaxed text-ivory/65"
              style={{ transitionDelay: '180ms' }}
            >
              <p>{t.dining.p1}</p>
              <p>{t.dining.p2}</p>
            </div>

            <div className="mt-10 border-t border-ivory/10">
              {diningSpaces.map((space, index) => (
                <div
                  key={space.id}
                  className="reveal group flex gap-5 border-b border-ivory/10 py-6 transition-colors hover:border-champagne/40"
                  style={{ transitionDelay: `${200 + index * 60}ms` }}
                >
                  <span className="mt-1 text-[0.58rem] tracking-[0.2em] text-champagne/70">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.5rem] font-light leading-tight text-ivory transition-colors group-hover:text-champagne">
                      {space.name[locale]}
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-ivory/50">
                      {space.text[locale]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="reveal-img overflow-hidden bg-ivory/5">
              <img
                src={IMAGES.diningRestaurant}
                alt={t.dining.title}
                width={1600}
                height={1100}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="reveal-img overflow-hidden bg-ivory/5">
                <img
                  src={IMAGES.diningPastry}
                  alt={t.dining.menuTitle}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="reveal flex flex-col justify-between border border-ivory/15 p-6 sm:p-7">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="eyebrow">{t.dining.menuTitle}</p>
                    <span className="border border-champagne/40 px-2.5 py-1 text-[0.52rem] uppercase tracking-[0.18em] text-champagne/80">
                      {t.dining.menuTag}
                    </span>
                  </div>
                  <p className="mt-5 text-[0.86rem] leading-relaxed text-ivory/60">
                    {t.dining.menuText}
                  </p>
                </div>
                <div
                  className="mt-8 h-px w-full bg-gradient-to-r from-champagne/40 to-transparent"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}