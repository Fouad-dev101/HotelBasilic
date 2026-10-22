import type { GalleryImage } from '../types';
import { IMAGES } from './images';

export const galleryImages: GalleryImage[] = [
  {
    id: 'exterior',
    src: IMAGES.galleryExterior,
    alt: {
      fr: 'FaÃ§ade dâ€™un hÃ´tel mÃ©diterranÃ©en au crÃ©puscule â€” photographie dâ€™illustration',
      en: 'Mediterranean hotel faÃ§ade at dusk â€” illustrative photograph',
      ar: 'ÙˆØ§Ø¬Ù‡Ø© ÙÙ†Ø¯Ù‚ Ù…ØªÙˆØ³Ø·ÙŠ Ø¹Ù†Ø¯ Ø§Ù„ØºØ³Ù‚ â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'Lâ€™arrivÃ©e, Ã  la lumiÃ¨re du soir.',
      en: 'Arrival, in the evening light.',
      ar: 'Ø§Ù„ÙˆØµÙˆÙ„ØŒ ÙÙŠ Ø¶ÙˆØ¡ Ø§Ù„Ù…Ø³Ø§Ø¡.',
    },
    category: { fr: 'ExtÃ©rieur', en: 'Exterior', ar: 'Ø§Ù„Ø®Ø§Ø±Ø¬' },
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    id: 'lobby',
    src: IMAGES.galleryLobby,
    alt: {
      fr: 'Salon dâ€™accueil Ã©lÃ©gant â€” photographie dâ€™illustration',
      en: 'Elegant reception lounge â€” illustrative photograph',
      ar: 'ØµØ§Ù„Ø© Ø§Ø³ØªÙ‚Ø¨Ø§Ù„ Ø£Ù†ÙŠÙ‚Ø© â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'Le premier souffle.',
      en: 'The first breath.',
      ar: 'Ø§Ù„Ù†ÙŽÙÙŽØ³ Ø§Ù„Ø£ÙˆÙ„.',
    },
    category: { fr: 'IntÃ©rieur', en: 'Interior', ar: 'Ø§Ù„Ø¯Ø§Ø®Ù„' },
    className: 'md:col-span-5',
  },
  {
    id: 'room',
    src: IMAGES.galleryRoom,
    alt: {
      fr: 'Chambre aux tons clairs â€” photographie dâ€™illustration',
      en: 'Light-toned bedroom â€” illustrative photograph',
      ar: 'ØºØ±ÙØ© Ø¨Ø£Ù„ÙˆØ§Ù† ÙØ§ØªØ­Ø© â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'La chambre, comme un refuge.',
      en: 'The room, as a refuge.',
      ar: 'Ø§Ù„ØºØ±ÙØ©ØŒ ÙƒÙ…Ù„Ø§Ø°.',
    },
    category: { fr: 'Chambres', en: 'Rooms', ar: 'Ø§Ù„ØºØ±Ù' },
    className: 'md:col-span-5',
  },
  {
    id: 'room-detail',
    src: IMAGES.galleryRoomDetail,
    alt: {
      fr: 'DÃ©tail dâ€™une chambre, lin et lumiÃ¨re â€” photographie dâ€™illustration',
      en: 'Bedroom detail, linen and light â€” illustrative photograph',
      ar: 'ØªÙØµÙŠÙ„ Ù…Ù† ØºØ±ÙØ©ØŒ ÙƒØªØ§Ù† ÙˆØ¶ÙˆØ¡ â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'Le dÃ©tail qui change tout.',
      en: 'The detail that changes everything.',
      ar: 'Ø§Ù„ØªÙØµÙŠÙ„ Ø§Ù„Ø°ÙŠ ÙŠØºÙŠÙ‘Ø± ÙƒÙ„ Ø´ÙŠØ¡.',
    },
    category: { fr: 'Chambres', en: 'Rooms', ar: 'Ø§Ù„ØºØ±Ù' },
    className: 'md:col-span-4',
  },
  {
    id: 'restaurant',
    src: IMAGES.galleryRestaurant,
    alt: {
      fr: 'Salle de restaurant chaleureuse â€” photographie dâ€™illustration',
      en: 'Warm restaurant dining room â€” illustrative photograph',
      ar: 'Ù‚Ø§Ø¹Ø© Ù…Ø·Ø¹Ù… Ø¯Ø§ÙØ¦Ø© â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'La table, au centre.',
      en: 'The table, at the centre.',
      ar: 'Ø§Ù„Ù…Ø§Ø¦Ø¯Ø©ØŒ ÙÙŠ Ø§Ù„Ù…Ø±ÙƒØ².',
    },
    category: { fr: 'Restaurant', en: 'Dining', ar: 'Ø§Ù„Ù…Ø·Ø¹Ù…' },
    className: 'md:col-span-4',
  },
  {
    id: 'pastry',
    src: IMAGES.galleryPastry,
    alt: {
      fr: 'PÃ¢tisseries et pains artisanaux â€” photographie dâ€™illustration',
      en: 'Pastries and artisan breads â€” illustrative photograph',
      ar: 'Ø­Ù„ÙˆÙŠØ§Øª ÙˆØ®Ø¨Ø² Ø­Ø±ÙÙŠ â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'Le sucre, juste ce quâ€™il faut.',
      en: 'Sugar, in the right measure.',
      ar: 'Ø§Ù„Ø³ÙƒØ±ØŒ Ø¨Ø§Ù„Ù‚Ø¯Ø± Ø§Ù„Ù…Ù†Ø§Ø³Ø¨.',
    },
    category: { fr: 'PÃ¢tisserie', en: 'PÃ¢tisserie', ar: 'Ø§Ù„Ø­Ù„ÙˆÙŠØ§Øª' },
    className: 'md:col-span-4',
  },
  {
    id: 'coffee',
    src: IMAGES.galleryCoffee,
    alt: {
      fr: 'Tasse de cafÃ© sur une table en bois â€” photographie dâ€™illustration',
      en: 'Cup of coffee on a wooden table â€” illustrative photograph',
      ar: 'ÙÙ†Ø¬Ø§Ù† Ù‚Ù‡ÙˆØ© Ø¹Ù„Ù‰ Ø·Ø§ÙˆÙ„Ø© Ø®Ø´Ø¨ÙŠØ© â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'Un cafÃ©, et le temps sâ€™arrÃªte.',
      en: 'A coffee, and time stops.',
      ar: 'ÙÙ†Ø¬Ø§Ù† Ù‚Ù‡ÙˆØ©ØŒ ÙˆÙŠØªÙˆÙ‚Ù Ø§Ù„ÙˆÙ‚Øª.',
    },
    category: { fr: 'CafÃ©', en: 'CafÃ©', ar: 'Ø§Ù„Ù…Ù‚Ù‡Ù‰' },
    className: 'md:col-span-5',
  },
  {
    id: 'terrace',
    src: IMAGES.galleryTerrace,
    alt: {
      fr: 'Terrasse face Ã  la mer â€” photographie dâ€™illustration',
      en: 'Terrace facing the sea â€” illustrative photograph',
      ar: 'Ø´Ø±ÙØ© ØªØ·Ù„ Ø¹Ù„Ù‰ Ø§Ù„Ø¨Ø­Ø± â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'Lâ€™heure bleue, sur la terrasse.',
      en: 'Blue hour, on the terrace.',
      ar: 'Ø§Ù„Ø³Ø§Ø¹Ø© Ø§Ù„Ø²Ø±Ù‚Ø§Ø¡ØŒ Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø±ÙØ©.',
    },
    category: { fr: 'Terrasse', en: 'Terrace', ar: 'Ø§Ù„Ø´Ø±ÙØ©' },
    className: 'md:col-span-7',
  },
  {
    id: 'coast',
    src: IMAGES.galleryCoast,
    alt: {
      fr: 'CÃ´te mÃ©diterranÃ©enne et eau turquoise â€” photographie dâ€™illustration',
      en: 'Mediterranean coast and turquoise water â€” illustrative photograph',
      ar: 'Ø§Ù„Ø³Ø§Ø­Ù„ Ø§Ù„Ù…ØªÙˆØ³Ø·ÙŠ ÙˆØ§Ù„Ù…ÙŠØ§Ù‡ Ø§Ù„ÙÙŠØ±ÙˆØ²ÙŠØ© â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'La MÃ©diterranÃ©e, Ã  perte de vue.',
      en: 'The Mediterranean, as far as the eye can see.',
      ar: 'Ø§Ù„Ø¨Ø­Ø± Ø§Ù„Ø£Ø¨ÙŠØ¶ Ø§Ù„Ù…ØªÙˆØ³Ø·ØŒ Ø¥Ù„Ù‰ Ø£Ø¨Ø¹Ø¯ Ù…Ø¯Ù‰.',
    },
    category: { fr: 'Al Hoceima', en: 'Al Hoceima', ar: 'Ø§Ù„Ø­Ø³ÙŠÙ…Ø©' },
    className: 'md:col-span-7',
  },
  {
    id: 'detail',
    src: IMAGES.galleryDetail,
    alt: {
      fr: 'DÃ©tail architectural marocain â€” photographie dâ€™illustration',
      en: 'Moroccan architectural detail â€” illustrative photograph',
      ar: 'ØªÙØµÙŠÙ„ Ù…Ø¹Ù…Ø§Ø±ÙŠ Ù…ØºØ±Ø¨ÙŠ â€” ØµÙˆØ±Ø© ØªÙˆØ¶ÙŠØ­ÙŠØ©',
    },
    caption: {
      fr: 'La mÃ©moire des matiÃ¨res.',
      en: 'The memory of materials.',
      ar: 'Ø°Ø§ÙƒØ±Ø© Ø§Ù„Ù…ÙˆØ§Ø¯.',
    },
    category: { fr: 'DÃ©tails', en: 'Details', ar: 'Ø§Ù„ØªÙØ§ØµÙŠÙ„' },
    className: 'md:col-span-5',
  },
];
