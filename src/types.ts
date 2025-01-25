export interface NavItem {
  title: string;
  href: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  price?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: 'plants' | 'equipment' | 'office';
}