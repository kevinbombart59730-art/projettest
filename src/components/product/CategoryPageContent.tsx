"use client";

import { useState } from "react";
import { Product, Cycle } from "@/types";
import CycleFilter from "./CycleFilter";
import PriceFilter from "./PriceFilter";
import ProductGrid from "./ProductGrid";

type PriceType = "all" | "free" | "paid";

interface CategoryPageContentProps {
  products: Product[];
  color?: string;
}

export default function CategoryPageContent({ products, color }: CategoryPageContentProps) {
  const [activeCycle, setActiveCycle] = useState<Cycle | null>(null);
  const [priceType, setPriceType] = useState<PriceType>("all");

  const filtered = products
    .filter((p) => (activeCycle ? p.cycle === activeCycle : true))
    .filter((p) => {
      if (priceType === "free") return p.price === 0;
      if (priceType === "paid") return p.price > 0;
      return true;
    });

  return (
    <>
      <CycleFilter activeCycle={activeCycle} onFilter={setActiveCycle} color={color} />
      <PriceFilter active={priceType} onFilter={setPriceType} color={color} />
      <ProductGrid products={filtered} />
    </>
  );
}
