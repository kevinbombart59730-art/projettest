import { getFeaturedProducts } from "@/lib/products";
import ProductGrid from "@/components/product/ProductGrid";

export default function FeaturedResources() {
  const featured = getFeaturedProducts();

  return (
    <section id="vedettes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Nos coups de cœur
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
        Une sélection de nos meilleures ressources, choisies pour leur qualité
        pédagogique et leur aspect ludique.
      </p>

      <ProductGrid products={featured} />
    </section>
  );
}
