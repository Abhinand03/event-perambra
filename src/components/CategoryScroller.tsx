import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface CategoryScrollerProps {
  selectedCategory?: string;
  onSelectCategory?: (category: string) => void;
  isFilterMode?: boolean;
}

export const CategoryScroller: React.FC<CategoryScrollerProps> = ({
  selectedCategory,
  onSelectCategory,
  isFilterMode = false,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 sm:py-12 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
              Curated Occasions
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917] mt-1">
              Explore by Celebration
            </h2>
          </div>

          {/* Desktop Arrow Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 rounded-full border border-[#E2DDD3] bg-white text-[#44403C] hover:bg-[#F5F0E8] hover:text-[#1C1917] transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 rounded-full border border-[#E2DDD3] bg-white text-[#44403C] hover:bg-[#F5F0E8] hover:text-[#1C1917] transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Scroller Container */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar pb-4 pt-1 snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {CATEGORIES.map((cat, index) => {
            const isSelected = selectedCategory === cat.id;

            if (isFilterMode && onSelectCategory) {
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`snap-start shrink-0 group relative w-48 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden text-left focus:outline-hidden transition-all duration-300 ${
                    isSelected ? "ring-3 ring-[#937443] ring-offset-2 scale-[1.02]" : "hover:scale-[1.02]"
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white">
                    <span className="text-[11px] font-medium text-[#E7D6BE] tracking-wide mb-1">
                      {cat.itemCount} Designs
                    </span>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </button>
              );
            }

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="snap-start shrink-0"
              >
                <Link
                  to={`/decorations?category=${encodeURIComponent(cat.id)}`}
                  className="group relative block w-48 sm:w-56 h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity group-hover:opacity-90" />

                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white">
                    <div className="flex justify-end">
                      <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-medium text-[#E7D6BE] tracking-wide block mb-1">
                        {cat.itemCount} Designs Available
                      </span>
                      <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold leading-tight group-hover:text-[#F3ECE2] transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-[11px] text-[#D6CEBF] line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
