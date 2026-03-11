"use client";

import { CartItem as CartItemType } from "@/types";
import { getCategoryBySlug } from "@/lib/categories";
import PriceTag from "@/components/ui/PriceTag";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const category = getCategoryBySlug(item.product.category);

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100">
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl shrink-0"
        style={{ backgroundColor: `${category?.color || "#F9BCD0"}25` }}
      >
        {category?.icon || "📄"}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <Link
          href={`/produit/${item.product.slug}`}
          className="font-semibold text-gray-800 hover:text-pink-500 transition-colors line-clamp-1"
        >
          {item.product.title}
        </Link>
        <p className="text-sm text-gray-400">{item.product.format}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            updateQuantity(item.product.id, item.quantity - 1)
          }
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          -
        </button>
        <span className="w-8 text-center font-semibold text-gray-700">
          {item.quantity}
        </span>
        <button
          onClick={() =>
            updateQuantity(item.product.id, item.quantity + 1)
          }
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer"
        >
          +
        </button>
      </div>

      {/* Price */}
      <PriceTag
        price={item.product.price * item.quantity}
        className="text-base w-20 text-right"
      />

      {/* Remove */}
      <button
        onClick={() => removeItem(item.product.id)}
        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
        title="Retirer"
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
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
}
