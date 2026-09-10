import React from "react";
import { TESTIMONIALS } from "../data/testimonials";
import { Star, Quote, MapPin } from "lucide-react";
import { motion } from "motion/react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-[#ECE6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
            Client Stories
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
            Words From Our Happy Couples
          </h2>
          <p className="text-sm sm:text-base text-[#666059] leading-relaxed">
            Real experiences from weddings, receptions, and family milestones we’ve had the honor of styling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ECE6DC] shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between relative"
            >
              <Quote className="w-8 h-8 text-[#E4D9CA] absolute top-6 right-6" />

              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4 text-[#D4AF37]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-serif-luxury text-base sm:text-lg italic text-[#292524] leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-[#F0EBE3]">
                <div className="font-sans-clean font-bold text-sm text-[#1C1917]">
                  {item.clientName}
                </div>
                <div className="text-xs text-[#937443] font-medium mt-0.5">
                  {item.eventType}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#A8A29E] mt-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
