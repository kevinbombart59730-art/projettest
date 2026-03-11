"use client";

import Image from "next/image";
import { Product } from "@/types";
import { getCategoryBySlug } from "@/lib/categories";
import PriceTag from "@/components/ui/PriceTag";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const category = getCategoryBySlug(product.category);
  const { addItem } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image area */}
        <div
          className="relative rounded-2xl overflow-hidden h-96 md:h-full min-h-[380px] flex items-center justify-center p-6"
          style={{ backgroundColor: `${category?.color || "#F9BCD0"}25` }}
        >
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          ) : (
            <span className="text-8xl">{category?.icon || "📄"}</span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <Badge color={category?.color} className="mb-3 w-fit">
            {category?.name}
          </Badge>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {product.title}
          </h1>

          <PriceTag price={product.price} className="text-2xl mb-6" />

          <p className="text-gray-600 leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-1">Âge</p>
              <p className="text-sm font-semibold text-gray-700">
                {product.ageRange}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-1">Niveau</p>
              <p className="text-sm font-semibold text-gray-700">
                {product.level}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-1">Format</p>
              <p className="text-sm font-semibold text-gray-700">
                {product.format}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-1">Catégorie</p>
              <p className="text-sm font-semibold text-gray-700">
                {category?.name}
              </p>
            </div>
          </div>

          <Button
            onClick={() => addItem(product)}
            size="lg"
            className="w-full sm:w-auto"
          >
            Ajouter au panier
          </Button>
        </div>
      </div>
    </div>
  );
}
