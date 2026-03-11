import { notFound } from "next/navigation";
import { getAllCategories, getCategoryBySlug } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import CategoryPageContent from "@/components/product/CategoryPageContent";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.name} — Apprendre avec plaisir`,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl text-4xl mb-4"
          style={{ backgroundColor: `${category.color}30` }}
        >
          {category.icon}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          {category.name}
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          {category.description}
        </p>
      </div>

      <CategoryPageContent products={products} color={category.color} />
    </div>
  );
}
