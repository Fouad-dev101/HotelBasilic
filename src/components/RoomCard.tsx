import { Check } from 'lucide-react';
import type { Room } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { useBooking } from '../context/BookingContext';

export default function RoomCard({
  room,
  index,
}: {
  room: Room;
  index: number;
}) {
  const { locale, t } = useLanguage();
  const { requestRoom } = useBooking();
  const reverse = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
      <div
        className={`group relative overflow-hidden bg-stone lg:col-span-7 ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        <div className="reveal-img aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/3]">
          <img
            src={room.image}
            alt={room.alt[locale]}
            width={1400}
            height={1050}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1.2s] ease-lux group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center border border-ivory/40 bg-navy/25 font-serif text-sm text-ivory backdrop-blur-sm">
          {room.index}
        </span>
      </div>

      <div className={`lg:col-span-5 ${reverse ? 'lg:order-1 lg:pr-6' : 'lg:pl-6'}`}>
        <div className="reveal flex items-center gap-4">
          <span className="h-px w-8 bg-champagne" aria-hidden="true" />
          <p className="eyebrow">{room.tagline[locale]}</p>
        </div>

        <h3
          className="reveal mt-5 font-serif text-[clamp(2rem,3.4vw,3.2rem)] font-light leading-[1.05] text-navy"
          style={{ transitionDelay: '60ms' }}
        >
          {room.name[locale]}
        </h3>

        <p
          className="reveal mt-5 max-w-md text-[0.93rem] leading-relaxed text-charcoal/65"
          style={{ transitionDelay: '120ms' }}
        >
          {room.description[locale]}
        </p>

        <div className="reveal mt-7" style={{ transitionDelay: '180ms' }}>
          <p className="label text-[0.58rem] text-charcoal/40">
            {t.rooms.features}
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {room.features.map((feature) => (
              <li
                key={feature[locale]}
                className="flex items-center gap-2.5 text-[0.82rem] text-charcoal/70"
              >
                <Check
                  size={12}
                  strokeWidth={1.8}
                  className="shrink-0 text-champagne"
                  aria-hidden="true"
                />
                {feature[locale]}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="reveal mt-8 flex flex-wrap items-center gap-5"
          style={{ transitionDelay: '240ms' }}
        >
          <button
            type="button"
            onClick={() => requestRoom(room.id)}
            className="btn btn-dark"
          >
            {t.rooms.inquire}
          </button>
          <span className="text-[0.68rem] uppercase tracking-[0.18em] text-charcoal/40">
            {t.rooms.priceOnRequest}
          </span>
        </div>
      </div>
    </article>
  );
}