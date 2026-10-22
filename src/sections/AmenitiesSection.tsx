import { useLanguage } from '../i18n/LanguageContext';
import { amenities } from '../data/amenities';
import SectionHeading from '../components/SectionHeading';

export default function AmenitiesSection() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="bg-ivory py-24 sm:py-32 lg:py-40"
    >
      <div className="container-lux">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            label={t.amenities.label}
            title={t.amenities.title}
            intro={t.amenities.intro}
            className="lg:col-span-8"
          />
          <p className="reveal max-w-xs text-[0.68rem] leading-relaxed text-charcoal/45 lg:col-span-4 lg:justify-self-end">
            {t.amenities.note}
          </p>
        </div>

        <div className="mt-14 border-t border-navy/10">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.id}
              className="reveal group grid grid-cols-[2.5rem_1fr] items-baseline gap-4 border-b border-navy/10 py-6 transition-colors duration-500 hover:bg-[#EDE7DC]/60 sm:grid-cols-[4rem_1fr_1.2fr] sm:gap-8 sm:py-7"
              style={{ transitionDelay: `${index * 45}ms` }}
            >
              <span className="font-serif text-[1.1rem] text-champagne/80">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-[1.35rem] font-light leading-tight text-navy transition-transform duration-500 group-hover:translate-x-1 sm:text-[1.55rem] rtl:group-hover:-translate-x-1">
                {amenity.name[locale]}
              </h3>
              <p className="col-span-2 pl-11 text-[0.82rem] leading-relaxed text-charcoal/50 sm:col-span-1 sm:pl-0">
                {amenity.text[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}