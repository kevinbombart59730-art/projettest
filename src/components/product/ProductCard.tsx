"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { getCategoryBySlug } from "@/lib/categories";
import PriceTag from "@/components/ui/PriceTag";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const category = getCategoryBySlug(product.category);
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 flex flex-col">
      {/* Color bar */}
      <div
        className="h-2"
        style={{ backgroundColor: category?.color || "#F9BCD0" }}
      />

      {/* Image area */}
      <div
        className="relative h-64 flex items-center justify-center"
        style={{ backgroundColor: `${category?.color || "#F9BCD0"}20` }}
      >
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="text-5xl">{category?.icon || "📄"}</span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Category badge */}
        <span
          className="text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2"
          style={{
            backgroundColor: `${category?.color}30`,
            color: "#555",
          }}
        >
          {category?.name}
        </span>

        <Link href={`/produit/${product.slug}`}>
          <h3 className="font-bold text-gray-800 mb-1 hover:text-pink-500 transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <PriceTag price={product.price} className="text-lg" />
          <button
            onClick={() => addItem(product)}
            className="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 transition-colors cursor-pointer"
            title="Ajouter au panier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
