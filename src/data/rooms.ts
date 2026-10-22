import type { Room } from '../types';
import { IMAGES } from './images';

/**
 * Accommodation categories are illustrative demonstration content.
 * They must be replaced with the hotel’s real categories and verified
 * features before launch. No prices or availability are shown.
 */
export const rooms: Room[] = [
  {
    id: 'classique',
    index: '01',
    image: IMAGES.roomClassic,
    alt: {
      fr: 'Chambre lumineuse avec lit double — photographie d’illustration',
      en: 'Bright room with a double bed — illustrative photograph',
      ar: 'غرفة مشرقة بسرير مزدوج — صورة توضيحية',
    },
    name: {
      fr: 'Chambre Classique',
      en: 'Classic Room',
      ar: 'غرفة كلاسيكية',
    },
    tagline: {
      fr: 'La simplicité, avec soin.',
      en: 'Simplicity, considered.',
      ar: 'البساطة بعناية.',
    },
    description: {
      fr: 'Une chambre accueillante, pensée pour se reposer après une journée passée entre la ville et la mer. Une atmosphère calme, des matières douces et l’essentiel à portée de main.',
      en: 'A welcoming room designed for rest after a day between the city and the sea. A calm atmosphere, soft materials and the essentials close at hand.',
      ar: 'غرفة مرحّبة مصممة للراحة بعد يوم بين المدينة والبحر. أجواء هادئة، ومواد ناعمة، وكل ما تحتاجه في متناول اليد.',
    },
    features: [
      { fr: 'Lit double', en: 'Double bed', ar: 'سرير مزدوج' },
      { fr: 'Climatisation', en: 'Air conditioning', ar: 'تكييف الهواء' },
      { fr: 'Wi-Fi gratuit', en: 'Free Wi-Fi', ar: 'واي فاي مجاني' },
      { fr: 'Vue ville', en: 'City view', ar: 'إطلالة على المدينة' },
    ],
  },
  {
    id: 'superieure',
    index: '02',
    image: IMAGES.roomSuperior,
    alt: {
      fr: 'Chambre supérieure ouverte sur la mer — photographie d’illustration',
      en: 'Superior room opening onto the sea — illustrative photograph',
      ar: 'غرفة فاخرة تطل على البحر — صورة توضيحية',
    },
    name: {
      fr: 'Chambre Supérieure — Vue Mer',
      en: 'Superior Room — Sea View',
      ar: 'غرفة فاخرة — إطلالة على البحر',
    },
    tagline: {
      fr: 'La mer comme horizon.',
      en: 'The sea as your horizon.',
      ar: 'البحر في الأفق.',
    },
    description: {
      fr: 'Une chambre plus généreuse, tournée vers la lumière et la Méditerranée. Le matin s’ouvre sur l’horizon, le soir invite à la contemplation.',
      en: 'A more generous room turned toward the light and the Mediterranean. Morning opens onto the horizon; evening invites contemplation.',
      ar: 'غرفة أرحب تتجه نحو الضوء والبحر الأبيض المتوسط. يفتح الصباح على الأفق، ويدعو المساء إلى التأمل.',
    },
    features: [
      { fr: 'Vue mer', en: 'Sea view', ar: 'إطلالة على البحر' },
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