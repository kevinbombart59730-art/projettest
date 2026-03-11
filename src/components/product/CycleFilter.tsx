"use client";

import { Cycle } from "@/types";

interface CycleFilterProps {
  activeCycle: Cycle | null;
  onFilter: (cycle: Cycle | null) => void;
  color?: string;
}

const cycles: { value: Cycle; label: string }[] = [
  { value: "cycle-1", label: "Cycle 1" },
  { value: "cycle-2", label: "Cycle 2" },
  { value: "cycle-3", label: "Cycle 3" },
];

export default function CycleFilter({ activeCycle, onFilter, color }: CycleFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <button
        onClick={() => onFilter(null)}
        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
          activeCycle === null
            ? "text-white shadow-sm"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        style={activeCycle === null ? { backgroundColor: color || "#F9BCD0" } : undefined}
      >
        Tout voir
      </button>
      {cycles.map((c) => (
        <button
          key={c.value}
          onClick={() => onFilter(c.value)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
            activeCycle === c.value
              ? "text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
          style={activeCycle === c.value ? { backgroundColor: color || "#F9BCD0" } : undefined}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
