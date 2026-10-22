export type Locale = 'fr' | 'en' | 'ar';
export type Localized = Record<Locale, string>;

export type Room = {
  id: string;
  index: string;
  image: string;
  alt: Localized;
  name: Localized;
  tagline: Localized;
  description: Localized;
  features: Localized[];
};

export type Amenity = {
  id: string;
  name: Localized;
  text: Localized;
};

export type DiningSpace = {
  id: string;
  name: Localized;
  text: Localized;
};

export type GalleryImage = {
  id: string;
  src: string;
  alt: Localized;
  caption: Localized;
  category: Localized;
  className: string;
};