import React from "react";
import { DecorationItem } from "../types/decoration";
import { DecorationCard } from "./DecorationCard";

interface DecorationGridProps {
  decorations: DecorationItem[];
  emptyMessage?: string;
}

export const DecorationGrid: React.FC<DecorationGridProps> = ({
  decorations,
  emptyMessage = "No decorations found matching your filter criteria.",
}) => {
  if (decorations.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#ECE6DC] my-6">
        <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917] mb-2">
          No designs found
        </h3>
        <p className="text-sm text-[#78716C] max-w-md mx-auto">
          {emptyMessage}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {decorations.map((item, idx) => (
        <DecorationCard
          key={item.id}
          decoration={item}
          priority={idx < 3}
        />
      ))}
    </div>
  );
};
