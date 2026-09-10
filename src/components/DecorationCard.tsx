import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, Check, ArrowRight, Sparkles } from "lucide-react";
import { DecorationItem } from "../types/decoration";
import { getWhatsAppUrl } from "../config/company";
import { useSavedDecorations } from "../context/SavedDecorationsContext";
import { motion } from "motion/react";

interface DecorationCardProps {
  decoration: DecorationItem;
  priority?: boolean;
}

export const DecorationCard: React.FC<DecorationCardProps> = ({ decoration, priority = false }) => {
  const { isSaved, toggleSave } = useSavedDecorations();
  const saved = isSaved(decoration.id);

  const itemUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/decorations/${decoration.id}`
      : `/decorations/${decoration.id}`;

  const whatsappLink = getWhatsAppUrl({
    decorationName: decoration.name,
    category: decoration.category,
    pageUrl: itemUrl,
  });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group bg-white rounded-2xl overflow-hidden border border-[#ECE6DC] shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      id={`decoration-card-${decoration.id}`}
    >
      {/* Image Container with Badge and Save Button */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#F2ECE4]">
        <Link to={`/decorations/${decoration.id}`} className="block w-full h-full">
          <img
            src={decoration.images[0]}
            alt={decoration.name}
            loading={priority ? "eager" : "lazy"}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Gradient Overlay for Top Contrast */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {decoration.badge && (
            <span className="px-2.5 py-1 rounded-full bg-[#1C1917]/85 backdrop-blur-md text-[#E7D6BE] text-[10px] font-semibold tracking-wider uppercase border border-[#C5A880]/30 shadow-xs">
              {decoration.badge}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#44403C] text-[10px] font-semibold tracking-wide shadow-xs">
            {decoration.category}
          </span>
        </div>

        {/* Shortlist Heart Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleSave(decoration.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
            saved
              ? "bg-[#FAF8F5] text-[#C2410C] shadow-md scale-105"
              : "bg-black/30 hover:bg-black/50 text-white hover:scale-105"
          }`}
          aria-label={saved ? "Remove from shortlist" : "Save to shortlist"}
          title={saved ? "Remove from shortlist" : "Save to shortlist"}
        >
          <Heart className={`w-4 h-4 ${saved ? "fill-[#C2410C]" : ""}`} />
        </button>

        {/* Image count indicator if multiple images */}
        {decoration.images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium tracking-wide">
            {decoration.images.length} Photos
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Style & Theme info */}
          <div className="flex items-center justify-between text-[11px] text-[#8C7A6B] font-medium mb-1.5">
            <span className="uppercase tracking-wider">{decoration.style} Style</span>
            <span className="text-[#A8A29E]">
              {decoration.colorThemes.slice(0, 2).join(" • ")}
            </span>
          </div>

          {/* Title */}
          <Link to={`/decorations/${decoration.id}`}>
            <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1C1917] hover:text-[#937443] transition-colors leading-snug">
              {decoration.name}
            </h3>
          </Link>

          {/* Short Description */}
          <p className="font-sans-clean text-xs sm:text-sm text-[#666059] mt-2 line-clamp-2 leading-relaxed">
            {decoration.shortDescription}
          </p>

          {/* Key Features List (3 items) */}
          <div className="mt-4 pt-3.5 border-t border-[#F0EBE3] space-y-1.5">
            {decoration.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#57534E]">
                <Check className="w-3.5 h-3.5 text-[#937443] shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons - View Details & WhatsApp Enquiry (NO PRICING) */}
        <div className="mt-6 pt-4 border-t border-[#F0EBE3] flex items-center gap-2.5">
          {/* Primary View Details Button */}
          <Link
            to={`/decorations/${decoration.id}`}
            id={`view-details-${decoration.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#FAF6F0] hover:bg-[#1C1917] text-[#292524] hover:text-white text-xs font-semibold tracking-wide border border-[#E5DFD5] hover:border-[#1C1917] transition-all duration-200"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Direct WhatsApp Enquiry Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Enquire on WhatsApp"
            id={`whatsapp-card-${decoration.id}`}
            className="p-2.5 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#16A34A] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-200"
            aria-label={`Enquire about ${decoration.name} on WhatsApp`}
          >
            <MessageCircle className="w-4.5 h-4.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
