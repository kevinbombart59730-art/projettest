export type Cycle = "cycle-1" | "cycle-2" | "cycle-3";

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  price: number; // en centimes
  category: string;
  cycle: Cycle;
  images: string[];
  featured: boolean;
  ageRange: string;
  level: string;
  format: string;
  createdAt: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  color: string;
  icon: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
