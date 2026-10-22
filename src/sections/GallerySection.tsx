import { useCallback, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { galleryImages } from '../data/gallery';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';

export default function GallerySection() {
  const { locale, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openAt = (index: number, element: HTMLButtonElement) => {
    triggerRef.current = element;
    setOpenIndex(index);
  };

  const close = useCallback(() => {
    setOpenIndex(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  const prev = useCallback(() => {
    setOpenIndex((current) =>
      current === null
        ? current
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const next = useCallback(() => {
    setOpenIndex((current) =>
      current === null ? current : (current + 1) % galleryImages.length
    );
  }, []);

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-[#EDE7DC] py-24 sm:py-32 lg:py-40"
    >
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            label={t.gallery.label}
            title={t.gallery.title}
            className="lg:col-span-7"
          />
          <p className="reveal max-w-xs text-[0.68rem] leading-relaxed text-charcoal/45 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            {t.gallery.note}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-12 md:auto-rows-[14rem] lg:auto-rows-[16rem]">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={(event) => openAt(index, event.currentTarget)}
              className={`gallery-item group relative col-span-2 overflow-hidden bg-stone text-left ${image.className}`}
              aria-label={`${t.gallery.open} : ${image.caption[locale]}`}
            >
              <img
                src={image.src}
                alt={image.alt[locale]}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100"
                aria-hidden="true"
              />
              <span className="absolute bottom-0 left-0 right-0 translate-y-3 p-5 opacity-0 transition-all duration-500 ease-lux group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <span className="block text-[0.55rem] uppercase tracking-[0.22em] text-champagne">
                  {image.category[locale]}
                </span>
                <span className="mt-1.5 block font-serif text-[1.05rem] font-light text-ivory">
                  {image.caption[locale]}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}