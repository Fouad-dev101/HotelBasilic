/**
 * Centralised image configuration.
 * Real hotel photos are integrated locally.
 * Remaining placeholders use verified, active Unsplash URLs.
 */
export const IMAGES = {
  // Real Hotel Photos (Local)
  hero: '/images/hotel-exterior.jpg',
  intro: '/images/hotel-exterior.jpg',
  introDetail: '/images/hotel-room.jpg',
  roomClassic: '/images/hotel-room.jpg',
  destinationCoast: '/images/plaza.jpg',
  destinationBeach: '/images/al-hoceima.jpg',
  galleryExterior: '/images/hotel-exterior.jpg',
  galleryRoom: '/images/hotel-room.jpg',
  galleryCoast: '/images/al-hoceima.jpg',

  // Working Unsplash Placeholders for the rest
  roomSuperior: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80',
  roomSuite: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80',
  
  diningRestaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  diningPastry: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80',
  diningCoffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  
  galleryLobby: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80',
  galleryRoomDetail: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=80',
  galleryRestaurant: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
  galleryPastry: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
  galleryCoffee: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
  galleryTerrace: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80',
  galleryDetail: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
} as const;