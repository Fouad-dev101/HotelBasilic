import type { DiningSpace } from '../types';

export const diningSpaces: DiningSpace[] = [
  {
    id: 'restaurant',
    name: { fr: 'Restaurant', en: 'Restaurant', ar: 'المطعم' },
    text: {
      fr: 'Une table conviviale pour découvrir les saveurs de la région, du déjeuner au dîner.',
      en: 'A convivial table for discovering regional flavours, from lunch to dinner.',
      ar: 'مائدة دافئة لاكتشاف نكهات المنطقة، من الغداء إلى العشاء.',
    },
  },
  {
    id: 'cafe',
    name: { fr: 'Café & Pâtisserie', en: 'Café & Pâtisserie', ar: 'المقهى والحلويات' },
    text: {
      fr: 'Un moment suspendu autour d’un café, d’une douceur et de la vie de la ville.',
      en: 'A suspended moment over coffee, something sweet and the life of the city.',
      ar: 'لحظة هادئة حول فنجان قهوة وحلوى وأجواء المدينة.',
    },
  },
  {
    id: 'terrasse',
    name: { fr: 'Terrasse panoramique', en: 'Panoramic terrace', ar: 'الشرفة البانورامية' },
    text: {
      fr: 'Prendre de la hauteur, regarder la ville s’étendre et la mer devenir horizon.',
      en: 'Rise above the city, watch it unfold and let the sea become the horizon.',
      ar: 'الارتفاع قليلاً، ومشاهدة المدينة تمتد والبحر يصبح أفقاً.',
    },
  },
];
