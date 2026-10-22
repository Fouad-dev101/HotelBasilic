import { Check } from 'lucide-react';
import type { Room } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useBooking } from '../context/BookingContext';

export default function RoomCard({ room, index }: { room: Room; index: number }) {
  const { locale, t } = useLanguage();
  const { requestRoom } = useBooking();

  // Alternate layout styles: 0 = wide image left, 1 = wide image right, 2 = centered focus
  const layoutType = index % 3;
  const isReversed = layoutType === 1;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      {/* Image container */}
      <div
        className={`group relative overflow-hidden bg-stone lg:col-span-7 ${
          isReversed ? 'lg:order-2' : ''
        } ${layoutType === 2 ? 'lg:col-span-12 lg:max-w-5xl lg:mx-auto' : ''}`}
      >
        <div className="reveal-img aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/3]">
          <img
            src={room.image}
            alt={room.alt[locale]}
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.4s] ease-lux group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center border border-ivory/40 bg-navy/30 font-serif text-base text-ivory backdrop-blur-sm">
          {room.index}
        </span>
      </div>

      {/* Text content */}
      <div
        className={`lg:col-span-5 ${
          isReversed ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'
        } ${layoutType === 2 ? 'lg:col-span-12 lg:max-w-3xl lg:mx-auto lg:text-center' : ''}`}
      >
        <div className="reveal flex items-center gap-4">
          <span className={`h-px w-10 bg-champagne ${layoutType === 2 ? 'hidden' : ''}`} />
          <p className="eyebrow">{room.tagline[locale]}</p>
        </div>

        <h3
          className="reveal mt-6 font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light leading-[1.05] text-navy"
          style={{ transitionDelay: '80ms' }}
        >
          {room.name[locale]}
        </h3>

        <p
          className="reveal mt-6 max-w-md text-[1.05rem] leading-relaxed text-charcoal/70"
          style={{ transitionDelay: '160ms' }}
        >
          {room.description[locale]}
        </p>

        <div className="reveal mt-8" style={{ transitionDelay: '240ms' }}>
          <p className="label text-[0.6rem] text-charcoal/40">{t.rooms.features}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {room.features.map((feature) => (
              <li key={feature[locale]} className="flex items-center gap-3 text-[0.9rem] text-charcoal/75">
                <Check size={14} strokeWidth={1.8} className="shrink-0 text-champagne" />
                {feature[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center gap-6" style={{ transitionDelay: '320ms' }}>
          <button type="button" onClick={() => requestRoom(room.id)} className="btn btn-dark">
            {t.rooms.inquire}
          </button>
          <span className="text-[0.75rem] uppercase tracking-[0.2em] text-charcoal/40">
            {t.rooms.priceOnRequest}
          </span>
        </div>
      </div>
    </article>
  );
}