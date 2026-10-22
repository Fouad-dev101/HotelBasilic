import { useLanguage } from '../i18n/LanguageContext';
import { rooms } from '../data/rooms';
import SectionHeading from '../components/SectionHeading';
import RoomCard from '../components/RoomCard';

export default function RoomsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="rooms"
      aria-labelledby="rooms-title"
      className="bg-[#EDE7DC] py-24 sm:py-32 lg:py-40"
    >
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            label={t.rooms.label}
            title={t.rooms.title}
            intro={t.rooms.intro}
            className="lg:col-span-8"
          />
          <p className="reveal max-w-xs text-[0.68rem] leading-relaxed text-charcoal/45 lg:col-span-4 lg:justify-self-end">
            {t.rooms.note}
          </p>
        </div>

        <div className="mt-16 space-y-20 sm:space-y-24 lg:space-y-32">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}