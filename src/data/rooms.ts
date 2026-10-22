import type { Room } from '../types';
import { IMAGES } from './images';

/**
 * Accommodation categories are illustrative demonstration content.
 * Replace with the hotel’s real categories and verified features before launch.
 * No prices or availability are shown by design.
 */
export const rooms: Room[] = [
  {
    id: 'classique',
    index: '01',
    image: IMAGES.roomClassic,
    alt: {
      fr: 'Chambre de l’Hôtel Basilic avec vue sur mer — photographie officielle',
      en: 'Hotel Basilic room with sea view — official photograph',
      ar: 'غرفة فندق بازيليك مع إطلالة على البحر — صورة رسمية',
    },
    name: {
      fr: 'Chambre Vue Mer',
      en: 'Sea View Room',
      ar: 'غرفة بإطلالة على البحر',
    },
    tagline: {
      fr: 'La Méditerranée, à votre réveil.',
      en: 'The Mediterranean, as you wake.',
      ar: 'البحر الأبيض المتوسط عند استيقاظك.',
    },
    description: {
      fr: 'Une chambre chaleureuse et lumineuse, ouverte sur un balcon avec vue sur la baie. Un espace pensé pour profiter du lever de soleil sur Al Hoceima.',
      en: 'A warm, bright room opening onto a balcony with bay views. A space designed to enjoy the sunrise over Al Hoceima.',
      ar: 'غرفة دافئة ومشرقة تفتح على شرفة بإطلالة على الخليج. مساحة مصممة للاستمتاع بشروق الشمس على الحسيمة.',
    },
    features: [
      { fr: 'Balcon privé', en: 'Private balcony', ar: 'شرفة خاصة' },
      { fr: 'Vue mer', en: 'Sea view', ar: 'إطلالة على البحر' },
      { fr: 'Climatisation', en: 'Air conditioning', ar: 'تكييف الهواء' },
      { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi', ar: 'واي فاي مجاني' },
    ],
  },
  {
    id: 'superieure',
    index: '02',
    image: IMAGES.roomSuperior,
    alt: {
      fr: 'Chambre supérieure — photographie d’illustration',
      en: 'Superior room — illustrative photograph',
      ar: 'غرفة فاخرة — صورة توضيحية',
    },
    name: {
      fr: 'Chambre Supérieure',
      en: 'Superior Room',
      ar: 'غرفة فاخرة',
    },
    tagline: {
      fr: 'Le confort, en toute simplicité.',
      en: 'Comfort, made simple.',
      ar: 'الراحة بكل بساطة.',
    },
    description: {
      fr: 'Une chambre plus généreuse, tournée vers la lumière et la ville. Le matin s’ouvre sur l’horizon, le soir invite à la contemplation.',
      en: 'A more generous room turned toward the light and the city. Morning opens onto the horizon; evening invites contemplation.',
      ar: 'غرفة أرحب تتجه نحو الضوء والمدينة. يفتح الصباح على الأفق، ويدعو المساء إلى التأمل.',
    },
    features: [
      { fr: 'Lit double', en: 'Double bed', ar: 'سرير مزدوج' },
      { fr: 'Climatisation', en: 'Air conditioning', ar: 'تكييف الهواء' },
      { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi', ar: 'واي فاي مجاني' },
      { fr: 'Chambre non-fumeurs', en: 'Non-smoking room', ar: 'غرفة لغير المدخنين' },
    ],
  },
  {
    id: 'suite',
    index: '03',
    image: IMAGES.roomSuite,
    alt: {
      fr: 'Suite avec espace salon — photographie d’illustration',
      en: 'Suite with a living area — illustrative photograph',
      ar: 'جناح مع مساحة معيشة — صورة توضيحية',
    },
    name: {
      fr: 'Suite',
      en: 'Suite',
      ar: 'جناح',
    },
    tagline: {
      fr: 'De l’espace pour respirer.',
      en: 'Room to breathe.',
      ar: 'مساحة للتنفس.',
    },
    description: {
      fr: 'Une suite pensée comme un appartement de passage : un salon pour recevoir, une chambre pour se retirer, et cette impression de pouvoir rester un peu plus longtemps.',
      en: 'A suite conceived like a passing apartment: a living area for gathering, a bedroom for retreating, and the feeling that you could stay a little longer.',
      ar: 'جناح مصمم كشقة مؤقتة: مساحة معيشة للاستقبال، وغرفة نوم للخصوصية، وشعور بأنك تستطيع البقاء لفترة أطول قليلاً.',
    },
    features: [
      { fr: 'Salon séparé', en: 'Separate living area', ar: 'مساحة معيشة منفصلة' },
      { fr: 'Vue mer', en: 'Sea view', ar: 'إطلالة على البحر' },
      { fr: 'Climatisation', en: 'Air conditioning', ar: 'تكييف الهواء' },
      { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi', ar: 'واي فاي مجاني' },
    ],
  },
];