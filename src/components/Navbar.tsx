import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';
import type { Locale } from '../types';
import Wordmark from './Wordmark';
import Button from './Button';

const links = [
  { href: '#discover', key: 'discover' },
  { href: '#rooms', key: 'rooms' },
  { href: '#dining', key: 'dining' },
  { href: '#gallery', key: 'gallery' },
  { href: '#al-hoceima', key: 'destination' },
  { href: '#contact', key: 'contact' },
] as const;

function LanguageSwitcher({
  light,
  onSelect,
}: {
  light: boolean;
  onSelect?: () => void;
}) {
  const { locale, setLocale, t } = useLanguage();
  const options: { value: Locale; label: string }[] = [
    { value: 'fr', label: 'FR' },
    { value: 'en', label: 'EN' },
    { value: 'ar', label: 'ع' },
  ];

  return (
    <div
      className="flex items-center gap-2"
      role="group"
      aria-label={t.common.language}
    >
      {options.map((option, index) => (
        <span key={option.value} className="flex items-center gap-2">
          {index > 0 && (
            <span
              className={`h-3 w-px ${light ? 'bg-ivory/25' : 'bg-navy/20'}`}
              aria-hidden="true"
            />
          )}
          <button
            type="button"
            onClick={() => {
              setLocale(option.value);
              onSelect?.();
            }}
            aria-pressed={locale === option.value}
            className={`text-[0.6rem] uppercase tracking-[0.18em] transition-colors duration-300 ${
              locale === option.value
                ? 'text-champagne'
                : light
                  ? 'text-ivory/60 hover:text-ivory'
                  : 'text-navy/50 hover:text-navy'
            }`}
          >
            {option.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusables = panel
      ? Array.from(
          panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        )
      : [];

    focusables[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
        return;
      }

      if (event.key !== 'Tab' || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  const light = !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${
          scrolled
            ? 'border-b border-navy/10 bg-ivory/95 py-3 text-navy shadow-[0_1px_0_rgba(16,26,36,0.04)] backdrop-blur-md'
            : 'bg-transparent py-6 text-ivory'
        }`}
      >
        <div className="container-lux flex items-center justify-between gap-6">
          <Wordmark light={light} />

          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-7 lg:flex"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
              >
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageSwitcher light={light} />
            <Button href="#reservation" variant={light ? 'outline' : 'dark'} arrow>
              {t.nav.reserve}
            </Button>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitcher light={light} />
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t.common.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`flex h-10 w-10 items-center justify-center border transition-colors ${
                light
                  ? 'border-ivory/30 text-ivory hover:border-champagne'
                  : 'border-navy/20 text-navy hover:border-champagne'
              }`}
            >
              <Menu size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t.common.menu}
          className="fixed inset-0 z-[70] flex animate-menuIn flex-col bg-navy text-ivory"
        >
          <div className="container-lux flex items-center justify-between py-6">
            <Wordmark light />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                window.requestAnimationFrame(() => triggerRef.current?.focus());
              }}
              aria-label={t.common.close}
              className="flex h-10 w-10 items-center justify-center border border-ivory/30 text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              <X size={18} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <div className="container-lux flex flex-1 flex-col justify-center pb-16">
            <nav aria-label="Navigation mobile" className="flex flex-col gap-1">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group flex items-baseline justify-between border-b border-ivory/10 py-4 transition-colors hover:text-champagne"
                  style={{
                    animation: `fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${0.08 + index * 0.05}s both`,
                  }}
                >
                  <span className="font-serif text-[clamp(1.9rem,7vw,2.8rem)] font-light leading-tight">
                    {t.nav[link.key]}
                  </span>
                  <span className="text-[0.6rem] tracking-[0.2em] text-champagne/70">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-10">
              <Button href="#reservation" variant="solid" onClick={closeMenu} arrow>
                {t.nav.reserve}
              </Button>
            </div>

            <p className="mt-8 max-w-xs text-[0.8rem] leading-relaxed text-ivory/50">
              {t.footer.tagline}
            </p>
          </div>
        </div>
      )}
    </>
  );
}