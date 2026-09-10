import React, { useState } from "react";
import { INSPIRATIONS } from "../data/inspirations";
import { InspirationItem } from "../types/decoration";
import { Maximize2, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const InspirationGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<InspirationItem | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
            Visual Inspiration
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
            Moments We’ve Helped Make Beautiful
          </h2>
          <p className="text-sm sm:text-base text-[#666059] leading-relaxed">
            A glimpse into actual celebrations, mandaps, and evening receptions styled with love across Perambra, Calicut, and Malabar.
          </p>
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {INSPIRATIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer bg-[#F2ECE4] border border-[#ECE6DC] shadow-2xs hover:shadow-xl transition-all duration-300"
              onClick={() => setActiveItem(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1 text-[11px] text-[#E7D6BE] mb-1">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#D6CEBF] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl w-full bg-[#1C1917] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-6 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#C5A880] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activeItem.location}</span>
                    <span>•</span>
                    <span>{activeItem.category}</span>
                  </div>
                  <h4 className="font-serif-luxury text-2xl font-bold">
                    {activeItem.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A8A29E] mt-1">
                    {activeItem.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
