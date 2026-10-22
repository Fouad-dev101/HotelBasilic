import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

type Props = {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function Lightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const { locale, t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll();

  const handlers = useRef({ onClose, onPrev, onNext });
  handlers.current = { onClose, onPrev, onNext };

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      const { onClose: close, onPrev: prev, onNext: next } = handlers.current;

      if (event.key === 'Escape') {
        event.preventDefault();
        close();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        next();
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prev();
        return;
      }

      if (event.key === 'Tab') {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const image = images[index];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.gallery.title}
      className="fixed inset-0 z-[90] flex flex-col bg-navy/98 text-ivory"
    >
      <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4 sm:px-8">
        <p className="text-[0.62rem] uppercase tracking-[0.24em] text-champagne">
          {String(index + 1).padStart(2, '0')} {t.gallery.of}{' '}
          {String(images.length).padStart(2, '0')}
        </p>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t.gallery.close}
          className="flex h-10 w-10 items-center justify-center border border-ivory/25 text-ivory transition-colors hover:border-champagne hover:text-champagne"
        >
          <X size={18} strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 py-4 sm:px-16">
        <button
          type="button"
          onClick={onPrev}
          aria-label={t.gallery.prev}
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center border border-ivory/25 bg-navy/40 text-ivory backdrop-blur-sm transition-colors hover:border-champagne hover:text-champagne sm:left-6"
        >
          <ChevronLeft size={20} strokeWidth={1.4} aria-hidden="true" className="rtl:rotate-180" />
        </button>

        <figure className="flex max-h-full max-w-6xl flex-col items-center">
          <img
            key={image.id}
            src={image.src}
            alt={image.alt[locale]}
            className="max-h-[68vh] w-auto max-w-full object-contain"
          />
          <figcaption className="mt-5 max-w-xl text-center">
            <p className="font-serif text-[1.2rem] font-light text-ivory/90 sm:text-[1.4rem]">
              {image.caption[locale]}
            </p>
            <p className="mt-1.5 text-[0.58rem] uppercase tracking-[0.22em] text-champagne/70">
              {image.category[locale]}
            </p>
          </figcaption>
        </figure>

        <button
          type="button"
          onClick={onNext}
          aria-label={t.gallery.next}
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center border border-ivory/25 bg-navy/40 text-ivory backdrop-blur-sm transition-colors hover:border-champagne hover:text-champagne sm:right-6"
        >
          <ChevronRight size={20} strokeWidth={1.4} aria-hidden="true" className="rtl:rotate-180" />
        </button>
      </div>

      <div className="border-t border-ivory/10 px-5 py-3 text-center sm:px-8">
        <p className="text-[0.6rem] uppercase tracking-[0.2em] text-ivory/40">
          {t.gallery.note}
        </p>
      </div>
    </div>
  );
}