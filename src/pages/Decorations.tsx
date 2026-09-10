import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { DECORATIONS } from "../data/decorations";
import { CATEGORIES } from "../data/categories";
import { DecorationGrid } from "../components/DecorationGrid";
import { FilterBar } from "../components/FilterBar";
import { DecorationStyle } from "../types/decoration";
import { Sparkles } from "lucide-react";

export const Decorations: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "All";
  const initialStyle = searchParams.get("style") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedStyle, setSelectedStyle] = useState(initialStyle);

  // Sync state if URL query changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
    const st = searchParams.get("style");
    if (st) {
      setSelectedStyle(st);
    }
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const newParams = new URLSearchParams(searchParams);
    if (category === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", category);
    }
    setSearchParams(newParams);
  };

  const handleStyleChange = (style: string) => {
    setSelectedStyle(style);
    const newParams = new URLSearchParams(searchParams);
    if (style === "All") {
      newParams.delete("style");
    } else {
      newParams.set("style", style);
    }
    setSearchParams(newParams);
  };

  const availableCategories = useMemo(
    () => CATEGORIES.map((c) => c.name),
    []
  );

  const availableStyles: DecorationStyle[] = [
    "Luxury",
    "Traditional",
    "Modern",
    "Floral",
    "Minimal",
    "Boho",
  ];

  // Filtering Logic
  const filteredDecorations = useMemo(() => {
    return DECORATIONS.filter((item) => {
      // Category match
      if (selectedCategory !== "All") {
        // Handle name or id match
        const catInfo = CATEGORIES.find(
          (c) => c.name.toLowerCase() === selectedCategory.toLowerCase() || c.id.toLowerCase() === selectedCategory.toLowerCase()
        );
        const targetId = catInfo ? catInfo.id : selectedCategory;
        if (item.category.toLowerCase() !== targetId.toLowerCase()) {
          return false;
        }
      }

      // Style match
      if (selectedStyle !== "All") {
        if (item.style.toLowerCase() !== selectedStyle.toLowerCase()) {
          return false;
        }
      }

      // Search Query match
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.shortDescription.toLowerCase().includes(query) || item.fullDescription.toLowerCase().includes(query);
        const matchesFeature = item.features.some((f) => f.toLowerCase().includes(query));
        const matchesTheme = item.colorThemes.some((t) => t.toLowerCase().includes(query));
        const matchesCategory = item.category.toLowerCase().includes(query);

        if (!matchesName && !matchesDesc && !matchesFeature && !matchesTheme && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedStyle, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] text-[#745A30] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#937443]" />
            <span>Curated Portfolio Catalog</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight">
            Decoration Collection
          </h1>
          <p className="text-sm sm:text-base text-[#666059] mt-3 leading-relaxed">
            Explore our curated stage packages and custom installations. Every design is fully customizable in dimension, floral selection, and ambient lighting to match your dream venue.
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          selectedStyle={selectedStyle}
          onStyleChange={handleStyleChange}
          availableCategories={availableCategories}
          availableStyles={availableStyles}
          totalResults={filteredDecorations.length}
        />

        {/* Products Grid */}
        <DecorationGrid
          decorations={filteredDecorations}
          emptyMessage="No decorations found matching your selected filters. Try clearing your search or selecting 'All' categories."
        />
      </div>
    </div>
  );
};
