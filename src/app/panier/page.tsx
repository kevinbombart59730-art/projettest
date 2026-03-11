"use client";

import { useCart } from "@/context/CartContext";
import CartItemComponent from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import Link from "next/link";

export default function PanierPage() {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <span className="text-6xl block mb-4">🛒</span>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Votre panier est vide
        </h1>
        <p className="text-gray-500 mb-8">
          Découvrez nos ressources pédagogiques et ajoutez-les à votre panier.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-pink-400 rounded-full hover:bg-pink-500 transition-colors"
        >
          Découvrir les ressources
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mon panier</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItemComponent key={item.product.id} item={item} />
          ))}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
