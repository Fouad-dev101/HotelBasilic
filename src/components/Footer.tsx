import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { hotel } from '../data/hotel';
import Wordmark from './Wordmark';

const navItems = [
  { href: '#discover', key: 'discover' },
  { href: '#rooms', key: 'rooms' },
  { href: '#dining', key: 'dining' },
  { href: '#gallery', key: 'gallery' },
  { href: '#al-hoceima', key: 'destination' },
  { href: '#contact', key: 'contact' },
  { href: '#reservation', key: 'reserve' },
] as const;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy text-ivory">
      <div className="container-lux py-16 sm:py-20">
        <div className="grid gap-12 border-b border-ivory/10 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <Wordmark light />
            <p className="mt-6 max-w-sm text-[0.85rem] leading-relaxed text-ivory/50">
              {t.footer.tagline}
            </p>
            <p className="mt-6 max-w-sm text-[0.66rem] leading-relaxed text-ivory/30">
              {t.footer.demoNotice}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <h2 className="text-[0.58rem] uppercase tracking-[0.24em] text-champagne">
              {t.footer.navTitle}
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.82rem] text-ivory/55 transition-colors hover:text-champagne"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[0.58rem] uppercase tracking-[0.24em] text-champagne">
              {t.footer.contactTitle}
            </h2>
            <address className="mt-5 not-italic text-[0.82rem] leading-relaxed text-ivory/55">
              {hotel.street}
              <br />
              {hotel.postalCode} {hotel.city}, {hotel.country}
              <br />
              <a
                href={`tel:${hotel.phoneHref}`}
                className="mt-3 inline-block transition-colors hover:text-champagne"
              >
                {hotel.phoneDisplay}
              </a>
            </address>

            <a
              href={hotel.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[0.6rem] uppercase tracking-[0.18em] text-ivory/35 transition-colors hover:text-champagne"
            >
              {t.contact.mapCta}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.62rem] text-ivory/30">
            <span>{t.footer.rights}</span>
            <span className="hidden h-3 w-px bg-ivory/15 sm:block" aria-hidden="true" />
            <span>{t.footer.credit}</span>
          </div>

          <a
            href="#top"
            className="inline-flex items-center gap-2 text-[0.58rem] uppercase tracking-[0.2em] text-ivory/40 transition-colors hover:text-champagne"
          >
            {t.common.top}
            <ArrowUp size={12} strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}