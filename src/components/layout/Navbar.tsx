"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import MobileMenu from "./MobileMenu";

const categories = [
  { slug: "lecture", name: "Lecture" },
  { slug: "mathematiques", name: "Mathématiques" },
  { slug: "grammaire", name: "Grammaire" },
  { slug: "ecriture", name: "Écriture" },
  { slug: "pluridisciplinarite", name: "Pluridisciplinarité" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🎨</span>
            <span className="font-bold text-lg text-gray-800 hidden sm:block">
              Apprendre avec plaisir
            </span>
            <span className="font-bold text-lg text-gray-800 sm:hidden">
              Apprendre
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categorie/${cat.slug}`}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-pink-500 rounded-lg hover:bg-pink-50 transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/panier"
              className="relative p-2 text-gray-600 hover:text-pink-500 transition-colors"
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121 0 2.066-.817 2.235-1.93L21.75 6.75H6.106M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:text-pink-500"
              aria-label="Ouvrir le menu"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        categories={categories}
      />
    </header>
  );
}
