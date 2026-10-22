import type { Amenity } from '../types';

/**
 * Only amenities supported by public listings are shown.
 * Confirm every item with the hotel before commercial launch.
 */
export const amenities: Amenity[] = [
  {
    id: 'wifi',
    name: { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi', ar: 'واي فاي مجاني' },
    text: {
      fr: 'Une connexion disponible dans l’établissement.',
      en: 'A connection available throughout the property.',
      ar: 'اتصال متاح في جميع أنحاء المكان.',
    },
  },
  {
    id: 'clim',
    name: { fr: 'Climatisation', en: 'Air conditioning', ar: 'تكييف الهواء' },
    text: {
      fr: 'Des chambres climatisées pour un séjour confortable.',
      en: 'Air-conditioned rooms for a comfortable stay.',
      ar: 'غرف مكيفة لإقامة مريحة.',
    },
  },
  {
    id: 'breakfast',
    name: { fr: 'Petit-déjeuner', en: 'Breakfast', ar: 'فطور' },
    text: {
      fr: 'Le petit-déjeuner est associé à l’offre d’hébergement.',
      en: 'Breakfast is included with the accommodation offer.',
      ar: 'يُقدَّم الفطور مع عرض الإقامة.',
    },
  },
  {
    id: 'parking',
    name: { fr: 'Parking gratuit', en: 'Free parking', ar: 'موقف سيارات مجاني' },
    text: {
      fr: 'Un stationnement sur place, selon disponibilité.',
      en: 'On-site parking, subject to availability.',
      ar: 'موقف داخل المكان، حسب التوفر.',
    },
  },
  {
    id: 'reception',
    name: { fr: 'Réception 24h/24', en: '24-hour reception', ar: 'استقبال 24 ساعة' },
    text: {
      fr: 'Une équipe présente à toute heure.',
      en: 'A team present at any hour.',
      ar: 'فريق متواجد في أي وقت.',
    },
  },
  {
    id: 'restaurant',
    name: { fr: 'Restaurant & café', en: 'Restaurant & café', ar: 'مطعم ومقهى' },
    text: {
      fr: 'Une offre de restauration sur place.',
      en: 'On-site dining.',
      ar: 'خدمة طعام في المكان.',
    },
  },
  {
    id: 'nonsmoking',
    name: { fr: 'Chambres non-fumeurs', en: 'Non-smoking rooms', ar: 'غرف لغير المدخنين' },
    text: {
      fr: 'Des espaces pensés pour un séjour serein.',
      en: 'Spaces designed for a serene stay.',
      ar: 'مساحات مصممة لإقامة هادئة.',
    },
  },
  {
    id: 'family',
    name: { fr: 'Chambres familiales', en: 'Family rooms', ar: 'غرف عائلية' },
    text: {
      fr: 'Des configurations adaptées aux familles.',
      en: 'Configurations suited to families.',
      ar: 'ترتيبات مناسبة للعائلات.',
    },
  },
];