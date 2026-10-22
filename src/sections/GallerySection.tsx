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
      current === null ? current : (current - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  const next = useCallback(() => {
    setOpenIndex((current) => (current === null ? current : (current + 1) % galleryImages.length));
  }, []);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-[#EDE7DC] py-28 sm:py-36 lg:py-44">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading label={t.gallery.label} title={t.gallery.title} className="lg:col-span-7" />
          <p className="reveal max-w-xs text-[0.75rem] leading-relaxed text-charcoal/45 lg:col-span-4 lg:col-start-9 lg:justify-self-end">
            {t.gallery.note}
          </p>
        </div>

        {/* Asymmetric collage layout */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-12 md:auto-rows-[12rem] lg:auto-rows-[15rem]">
          {galleryImages.map((image, index) => {
            // Varying spans for visual interest
            let spanClass = image.className;
            if (index === 0) spanClass = 'md:col-span-8 md:row-span-2';
            if (index === 1) spanClass = 'md:col-span-4';
            if (index === 2) spanClass = 'md:col-span-4';
            if (index === 3) spanClass = 'md:col-span-6 md:row-span-2';
            if (index === 4) spanClass = 'md:col-span-6';
            if (index === 5) spanClass = 'md:col-span-4';
            if (index === 6) spanClass = 'md:col-span-4';
            if (index === 7) spanClass = 'md:col-span-4 md:row-span-2';
            if (index === 8) spanClass = 'md:col-span-4';
            if (index === 9) spanClass = 'md:col-span-4';

            return (
              <button
                key={image.id}
                type="button"
                onClick={(event) => openAt(index, event.currentTarget)}
                className={`gallery-item group relative col-span-2 overflow-hidden bg-stone text-left ${spanClass}`}
                aria-label={`${t.gallery.open} : ${image.caption[locale]}`}
              >
                <img
                  src={image.src}
                  alt={image.alt[locale]}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all duration-700 ease-lux group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <span className="block text-[0.6rem] uppercase tracking-[0.25em] text-champagne">
                    {image.category[locale]}
                  </span>
                  <span className="mt-2 block font-serif text-[1.2rem] font-light text-ivory">
                    {image.caption[locale]}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox images={galleryImages} index={openIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </section>
  );
}