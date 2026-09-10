import React from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { EventCategory, DecorationStyle } from "../types/decoration";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedStyle: string;
  onStyleChange: (style: string) => void;
  availableCategories: string[];
  availableStyles: DecorationStyle[];
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStyle,
  onStyleChange,
  availableCategories,
  availableStyles,
  totalResults,
}) => {
  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "All" || selectedStyle !== "All";

  const clearAllFilters = () => {
    onSearchChange("");
    onCategoryChange("All");
    onStyleChange("All");
  };

  return (
    <div className="bg-white rounded-2xl border border-[#ECE6DC] p-4 sm:p-6 shadow-2xs mb-8 space-y-4">
      {/* Top Search Input & Clear Filters */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Search input */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A8A29E]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search decorations, styles, flowers (e.g. Jasmine, Floral, Mandap, Royal)..."
            className="w-full pl-10 pr-9 py-2.5 bg-[#FAF8F5] border border-[#E2DDD3] rounded-xl text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-hidden focus:border-[#937443] focus:ring-1 focus:ring-[#937443] transition-all"
            id="decoration-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A8A29E] hover:text-[#1C1917]"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Clear Filters Button if any filter active */}
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="self-end sm:self-center shrink-0 text-xs text-[#937443] hover:text-[#745a30] font-medium flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-[#FAF8F5] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>

      {/* Category Pills (Horizontally Scrollable) */}
      <div className="space-y-1.5">
        <div className="text-[11px] font-semibold text-[#8C7A6B] uppercase tracking-wider">
          Event Category
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {["All", ...availableCategories].map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#1C1917] text-[#FAF8F5] shadow-xs"
                    : "bg-[#FAF8F5] text-[#57534E] hover:bg-[#F0EBE2] hover:text-[#1C1917] border border-[#E8E2D8]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Style Chips */}
      <div className="space-y-1.5 pt-2 border-t border-[#F5F1EA]">
        <div className="text-[11px] font-semibold text-[#8C7A6B] uppercase tracking-wider">
          Decoration Aesthetic & Style
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {["All", ...availableStyles].map((style) => {
            const isActive = selectedStyle === style;
            return (
              <button
                key={style}
                onClick={() => onStyleChange(style)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#937443] text-white shadow-2xs"
                    : "bg-[#FAF8F5] text-[#78716C] hover:bg-[#F2ECE3] hover:text-[#1C1917]"
                }`}
              >
                {style}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Header */}
      <div className="pt-2 text-xs text-[#78716C] flex items-center justify-between">
        <span>Showing {totalResults} {totalResults === 1 ? "design" : "stage designs"}</span>
        <span className="text-[11px] text-[#A8A29E]">All setups custom crafted by Event Perambra</span>
      </div>
    </div>
  );
};
