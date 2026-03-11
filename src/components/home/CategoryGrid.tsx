import Link from "next/link";
import { getAllCategories } from "@/lib/categories";

export default function CategoryGrid() {
  const categories = getAllCategories();

  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
        Nos catégories
      </h2>
      <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
        Explorez nos ressources classées par discipline pour trouver exactement
        ce dont vous avez besoin.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/categorie/${cat.slug}`}
            className="group flex flex-col items-center p-6 rounded-2xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            style={{ backgroundColor: `${cat.color}30` }}
          >
            <span className="text-4xl mb-3">{cat.icon}</span>
            <span className="font-semibold text-gray-700 group-hover:text-gray-900 text-center">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
