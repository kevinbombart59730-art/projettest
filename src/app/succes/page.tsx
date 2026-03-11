"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function SuccesPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center">
      <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        ✅
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Merci pour votre commande !
      </h1>
      <p className="text-gray-500 mb-2">
        Votre paiement a été effectué avec succès.
      </p>
      <p className="text-gray-500 mb-8">
        Vous recevrez vos fichiers PDF par email dans quelques instants.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 font-semibold text-white bg-pink-400 rounded-full hover:bg-pink-500 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
