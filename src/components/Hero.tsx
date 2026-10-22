import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { IMAGES } from '../data/images';
import Button from './Button';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      aria-label="Hotel Basilic — Al Hoceima"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-navy pb-16 pt-36 sm:pb-20 lg:pb-24"
    >
      <img
        src={IMAGES.hero}
        alt={t.hero.imageAlt}
        width={2400}
        height={1600}
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/35 to-navy/85"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(16,26,36,0.35)_100%)]"
        aria-hidden="true"
      />

      <div className="container-lux relative z-10">
        <p
          className="hero-fade eyebrow text-champagne"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.eyebrow}
        </p>

        <h1 className="mt-5 max-w-5xl font-serif text-[clamp(2.9rem,7.4vw,7.2rem)] font-light leading-[0.94] tracking-[-0.02em] text-ivory">
          <span className="block overflow-hidden pb-1">
            <span
              className="hero-line"
              style={{ animationDelay: '0.3s' }}
            >
              {t.hero.title1}
            </span>
          </span>
          <span className="block overflow-hidden pb-2">
            <span
              className="hero-line italic text-champagne/90"
              style={{ animationDelay: '0.44s' }}
            >
              {t.hero.title2}
            </span>
          </span>
        </h1>

        <div
          className="hero-fade mt-8 max-w-xl"
          style={{ animationDelay: '0.62s' }}
        >
          <p className="text-[0.95rem] leading-relaxed text-ivory/75 sm:text-base">
            {t.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button href="#discover" variant="solid" arrow>
              {t.hero.cta1}
            </Button>
            <Button href="#reservation" variant="outline" arrow>
              {t.hero.cta2}
            </Button>
          </div>
        </div>
      </div>

      <div className="container-lux relative z-10 mt-14 flex items-end justify-between gap-6">
        <a
          href="#discover"
          className="hero-fade group inline-flex items-center gap-3 text-[0.6rem] uppercase tracking-[0.24em] text-ivory/60 transition-colors hover:text-champagne"
          style={{ animationDelay: '0.85s' }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 transition-colors group-hover:border-champagne">
            <ArrowDown
              size={13}
              strokeWidth={1.5}
              className="transition-transform duration-500 group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </span>
          {t.common.scroll}
        </a>

        <p
          className="hero-fade hidden text-[0.58rem] uppercase tracking-[0.3em] text-ivory/40 sm:block"
          style={{ animationDelay: '0.95s' }}
        >
          {t.hero.side}
        </p>
      </div>
    </section>
  );
}