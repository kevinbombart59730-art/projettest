"use client";

type PriceType = "all" | "free" | "paid";

interface PriceFilterProps {
  active: PriceType;
  onFilter: (type: PriceType) => void;
  color?: string;
}

const options: { value: PriceType; label: string }[] = [
  { value: "all", label: "Toutes" },
  { value: "free", label: "Gratuites" },
  { value: "paid", label: "Payantes" },
];

export default function PriceFilter({ active, onFilter, color }: PriceFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onFilter(o.value)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            active === o.value
              ? "text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          style={active === o.value ? { backgroundColor: color || "#F9BCD0" } : undefined}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
