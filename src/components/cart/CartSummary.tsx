"use client";

import { useCart } from "@/context/CartContext";
import PriceTag from "@/components/ui/PriceTag";
import Button from "@/components/ui/Button";

export default function CartSummary() {
  const { items, totalPrice } = useCart();

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: items.map((item) => ({
          id: item.product.id,
          quantity: item.quantity,
        })),
      }),
    });

    const { url } = await res.json();
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Récapitulatif</h2>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Sous-total</span>
          <PriceTag price={totalPrice} />
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Livraison</span>
          <span className="text-green-600 font-medium">Gratuite (PDF)</span>
        </div>
        <hr className="border-gray-100" />
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Total</span>
          <PriceTag price={totalPrice} className="text-lg" />
        </div>
      </div>

      <Button onClick={handleCheckout} className="w-full" size="lg">
        Passer la commande
      </Button>

      <p className="text-xs text-gray-400 text-center mt-3">
        Paiement sécurisé par Stripe
      </p>
    </div>
  );
}
