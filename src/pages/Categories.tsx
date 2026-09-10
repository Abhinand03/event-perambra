import React from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/categories";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFE9DF] text-[#745A30] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#937443]" />
            <span>Celebration Occasions</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] tracking-tight">
            Decoration Categories
          </h1>
          <p className="text-sm sm:text-base text-[#666059] mt-3 leading-relaxed">
            From majestic wedding mandaps and starlit evening receptions to intimate haldi courtyards and milestone birthdays.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
            >
              <Link
                to={`/decorations?category=${encodeURIComponent(cat.id)}`}
                className="group relative block h-80 sm:h-96 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#ECE6DC]"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity group-hover:opacity-95" />

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-semibold tracking-wide">
                      {cat.itemCount} Designs
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform translate-y-1 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </span>
                  </div>

                  <div>
                    <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold leading-tight group-hover:text-[#F3ECE2] transition-colors">
                      {cat.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#D6CEBF] mt-2 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#E7D6BE]">
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
