export type EventCategory =
  | "Wedding"
  | "Engagement"
  | "Reception"
  | "Haldi"
  | "Mehndi"
  | "Birthday"
  | "Baby Shower"
  | "Traditional"
  | "Custom Designs";

export type DecorationStyle =
  | "Luxury"
  | "Traditional"
  | "Modern"
  | "Floral"
  | "Minimal"
  | "Boho"
  | "Classic";

export interface DecorationSpec {
  setupDuration?: string;
  backdropDimensions?: string;
  floralType?: string;
  lighting?: string;
  idealVenues?: string;
  seatingProvided?: string;
}

export interface DecorationItem {
  id: string; // url slug, e.g. "royal-floral-wedding-stage"
  name: string;
  category: EventCategory;
  style: DecorationStyle;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: DecorationSpec;
  images: string[];
  colorThemes: string[];
  featured?: boolean;
  isMostLoved?: boolean;
  isNew?: boolean;
  badge?: string;
}

export interface CategoryInfo {
  id: EventCategory;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  eventType: string;
  location: string;
  quote: string;
  stageName: string;
  rating: number;
  date: string;
}

export interface InspirationItem {
  id: string;
  title: string;
  category: EventCategory;
  location: string;
  image: string;
  aspectRatio: "tall" | "square" | "wide";
  caption: string;
}
