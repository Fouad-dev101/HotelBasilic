import type { GalleryImage } from '../types';
import { IMAGES } from './images';

export const galleryImages: GalleryImage[] = [
  {
    id: 'exterior',
    src: IMAGES.galleryExterior,
    alt: {
      fr: 'Façade de l’Hôtel Basilic illuminée la nuit',
      en: 'Hotel Basilic façade illuminated at night',
      ar: 'واجهة فندق بازيليك مضاءة في الليل',
    },
    caption: {
      fr: 'L’Hôtel Basilic, au cœur de la ville.',
      en: 'Hotel Basilic, in the heart of the city.',
      ar: 'فندق بازيليك، في قلب المدينة.',
    },
    category: { fr: 'Extérieur', en: 'Exterior', ar: 'الخارج' },
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    id: 'coast',
    src: IMAGES.galleryCoast,
    alt: {
      fr: 'Vue sur la baie d’Al Hoceima et la Méditerranée',
      en: 'View of Al Hoceima bay and the Mediterranean',
      ar: 'إطلالة على خليج الحسيمة والبحر الأبيض المتوسط',
    },
    caption: {
      fr: 'La Méditerranée, à perte de vue.',
      en: 'The Mediterranean, as far as the eye can see.',
      ar: 'البحر الأبيض المتوسط، إلى أبعد مدى.',
    },
    category: { fr: 'Al Hoceima', en: 'Al Hoceima', ar: 'الحسيمة' },
    className: 'md:col-span-5',
  },
  {
    id: 'room',
    src: IMAGES.galleryRoom,
    alt: {
      fr: 'Chambre avec vue mer et balcon à l’Hôtel Basilic',
      en: 'Room with sea view and balcony at Hotel Basilic',
      ar: 'غرفة بإطلالة على البحر وشرفة في فندق بازيليك',
    },
    caption: {
      fr: 'La chambre, comme un refuge.',
      en: 'The room, as a refuge.',
      ar: 'الغرفة، كملاذ.',
    },
    category: { fr: 'Chambres', en: 'Rooms', ar: 'الغرف' },
    className: 'md:col-span-5',
  },
  {
    id: 'room-detail',
    src: IMAGES.galleryRoomDetail,
    alt: {
      fr: 'Détail d’une chambre, lin et lumière — photographie d’illustration',
      en: 'Bedroom detail, linen and light — illustrative photograph',
      ar: 'تفصيل من غرفة، كتان وضوء — صورة توضيحية',
    },
    caption: {
      fr: 'Le détail qui change tout.',
      en: 'The detail that changes everything.',
      ar: 'التفصيل الذي يغيّر كل شيء.',
    },
    category: { fr: 'Chambres', en: 'Rooms', ar: 'الغرف' },
    className: 'md:col-span-4',
  },
  {
    id: 'restaurant',
    src: IMAGES.galleryRestaurant,
    alt: {
      fr: 'Salle de restaurant chaleureuse — photographie d’illustration',
      en: 'Warm restaurant dining room — illustrative photograph',
      ar: 'قاعة مطعم دافئة — صورة توضيحية',
    },
    caption: {
      fr: 'La table, au centre.',
      en: 'The table, at the centre.',
      ar: 'المائدة، في المركز.',
    },
    category: { fr: 'Restaurant', en: 'Dining', ar: 'المطعم' },
    className: 'md:col-span-4',
  },
  {
    id: 'pastry',
    src: IMAGES.galleryPastry,
    alt: {
      fr: 'Pâtisseries et pains artisanaux — photographie d’illustration',
      en: 'Pastries and artisan breads — illustrative photograph',
      ar: 'حلويات وخبز حرفي — صورة توضيحية',
    },
    caption: {
      fr: 'Le sucre, juste ce qu’il faut.',
      en: 'Sugar, in the right measure.',
      ar: 'السكر، بالقدر المناسب.',
    },
    category: { fr: 'Pâtisserie', en: 'Pâtisserie', ar: 'الحلويات' },
    className: 'md:col-span-4',
  },
  {
    id: 'coffee',
    src: IMAGES.galleryCoffee,
    alt: {
      fr: 'Tasse de café sur une table en bois — photographie d’illustration',
      en: 'Cup of coffee on a wooden table — illustrative photograph',
      ar: 'فنجان قهوة على طاولة خشبية — صورة توضيحية',
    },
    caption: {
      fr: 'Un café, et le temps s’arrête.',
      en: 'A coffee, and time stops.',
      ar: 'فنجان قهوة، ويتوقف الوقت.',
    },
    category: { fr: 'Café', en: 'Café', ar: 'المقهى' },
    className: 'md:col-span-5',
  },
  {
    id: 'terrace',
    src: IMAGES.galleryTerrace,
    alt: {
      fr: 'Terrasse face à la mer — photographie d’illustration',
      en: 'Terrace facing the sea — illustrative photograph',
      ar: 'شرفة تطل على البحر — صورة توضيحية',
    },
    caption: {
      fr: 'L’heure bleue, sur la terrasse.',
      en: 'Blue hour, on the terrace.',
      ar: 'الساعة الزرقاء، على الشرفة.',
    },
    category: { fr: 'Terrasse', en: 'Terrace', ar: 'الشرفة' },
    className: 'md:col-span-7',
  },
  {
    id: 'lobby',
    src: IMAGES.galleryLobby,
    alt: {
      fr: 'Salon d’accueil élégant — photographie d’illustration',
      en: 'Elegant reception lounge — illustrative photograph',
      ar: 'صالة استقبال أنيقة — صورة توضيحية',
    },
    caption: {
      fr: 'Le premier souffle.',
      en: 'The first breath.',
      ar: 'النَفَس الأول.',
    },
    category: { fr: 'Intérieur', en: 'Interior', ar: 'الداخل' },
    className: 'md:col-span-7',
  },
  {
    id: 'detail',
    src: IMAGES.galleryDetail,
    alt: {
      fr: 'Détail architectural marocain — photographie d’illustration',
      en: 'Moroccan architectural detail — illustrative photograph',
      ar: 'تفصيل معماري مغربي — صورة توضيحية',
    },
    caption: {
      fr: 'La mémoire des matières.',
      en: 'The memory of materials.',
      ar: 'ذاكرة المواد.',
    },
    category: { fr: 'Détails', en: 'Details', ar: 'التفاصيل' },
    className: 'md:col-span-5',
  },
];