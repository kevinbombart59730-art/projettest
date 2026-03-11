"use client";

import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  categories: { slug: string; name: string }[];
}

export default function MobileMenu({ open, onClose, categories }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-xl p-6">
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-lg text-gray-800">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700"
            aria-label="Fermer le menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            onClick={onClose}
            className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-pink-50 hover:text-pink-500 transition-colors"
          >
            Accueil
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categorie/${cat.slug}`}
              onClick={onClose}
              className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-pink-50 hover:text-pink-500 transition-colors"
            >
              {cat.name}
            </Link>
          ))}
          <hr className="my-2 border-gray-100" />
          <Link
            href="/panier"
            onClick={onClose}
            className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-pink-50 hover:text-pink-500 transition-colors"
          >
            Panier
          </Link>
        </nav>
      </div>
    </div>
  );
}
