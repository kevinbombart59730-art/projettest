import categoriesData from "@/data/categories.json";
import { Category } from "@/types";

const categories: Category[] = categoriesData as Category[];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
