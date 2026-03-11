import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getAllProducts } from "@/lib/products";

interface CheckoutItem {
  id: string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const { items } = (await req.json()) as { items: CheckoutItem[] };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "Le panier est vide" },
        { status: 400 }
      );
    }

    const allProducts = getAllProducts();

    const lineItems = items.map((item) => {
      // Always look up price server-side for security
      const product = allProducts.find((p) => p.id === item.id);
      if (!product) {
        throw new Error(`Produit introuvable : ${item.id}`);
      }

      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: product.title,
            description: product.shortDescription,
          },
          unit_amount: product.price,
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      locale: "fr",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/annule`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erreur interne";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
