/**
 * Centralised image configuration.
 * Real hotel photos are integrated, with premium Unsplash placeholders for remaining categories.
 */
export const IMAGES = {
  // Hero & Intro
  hero: '/images/hotel-exterior.jpg',
  intro: '/images/hotel-exterior.jpg',
  introDetail: '/images/hotel-room.jpg',
  
  // Rooms
  roomClassic: '/images/hotel-room.jpg',
  roomSuperior: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
  roomSuite: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80',
  
  // Dining
  diningRestaurant: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
  diningPastry: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
  diningCoffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  
  // Destination
  destinationCoast: '/images/plaza.jpg',
  destinationBeach: '/images/al-hoceima.jpg',
  
  // Gallery
  galleryExterior: '/images/hotel-exterior.jpg',
  galleryLobby: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
  galleryRoom: '/images/hotel-room.jpg',
  galleryRoomDetail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
  galleryRestaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  galleryPastry: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  galleryCoffee: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
  galleryTerrace: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80',
  galleryCoast: '/images/al-hoceima.jpg',
  galleryDetail: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
} as const;