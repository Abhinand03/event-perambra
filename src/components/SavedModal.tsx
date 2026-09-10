import React from "react";
import { Link } from "react-router-dom";
import { X, Trash2, MessageCircle, Heart, ArrowRight } from "lucide-react";
import { useSavedDecorations } from "../context/SavedDecorationsContext";
import { getShortlistWhatsAppUrl, COMPANY_CONFIG } from "../config/company";
import { motion, AnimatePresence } from "motion/react";

export const SavedModal: React.FC = () => {
  const { isShortlistOpen, setIsShortlistOpen, savedDecorations, toggleSave, clearSaved } = useSavedDecorations();

  if (!isShortlistOpen) return null;

  const whatsappUrl = getShortlistWhatsAppUrl(savedDecorations);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsShortlistOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        />

        {/* Slide-over panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl z-10 flex flex-col overflow-hidden"
        >
          {/* Drawer Header */}
          <div className="px-6 py-5 border-b border-[#E8E2D9] flex items-center justify-between bg-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-black border border-[#C5A880]/50 shadow-xs flex items-center justify-center shrink-0">
                <img
                  src={COMPANY_CONFIG.logo}
                  alt={COMPANY_CONFIG.name}
                  className="w-full h-full object-cover scale-135"
                />
              </div>
              <div>
                <h3 className="font-serif-luxury text-lg font-bold text-[#1C1917] leading-tight">
                  Your Shortlisted Designs
                </h3>
                <p className="text-xs text-[#78716C]">
                  {savedDecorations.length} {savedDecorations.length === 1 ? "design" : "designs"} selected
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsShortlistOpen(false)}
              className="p-2 text-[#78716C] hover:text-[#1C1917] rounded-full hover:bg-[#F2ECE4] transition-colors"
              aria-label="Close shortlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedDecorations.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-[#F2ECE4] text-[#8C7A6B] flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h4 className="font-serif-luxury text-xl font-semibold text-[#1C1917] mb-2">
                  Your shortlist is empty
                </h4>
                <p className="text-sm text-[#78716C] max-w-xs mx-auto mb-6">
                  Click the heart icon on any stage decoration card while browsing to create your custom shortlist.
                </p>
                <Link
                  to="/decorations"
                  onClick={() => setIsShortlistOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] text-xs font-semibold hover:bg-[#2B2724] transition-colors"
                >
                  <span>Explore Decorations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              <>
                <p className="text-xs text-[#78716C] italic">
                  Tip: Share your shortlisted stage concepts directly with our styling team on WhatsApp for availability and custom venue measurements.
                </p>

                <div className="space-y-3">
                  {savedDecorations.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 bg-white p-3 rounded-xl border border-[#E8E2D9] shadow-2xs group relative"
                    >
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg shrink-0 bg-[#F2ECE4]"
                        loading="lazy"
                      />
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-semibold text-[#937443] tracking-wide uppercase">
                            {item.category}
                          </span>
                          <h5 className="font-serif-luxury text-sm font-bold text-[#1C1917] truncate">
                            {item.name}
                          </h5>
                          <p className="text-[11px] text-[#78716C] line-clamp-1 mt-0.5">
                            {item.shortDescription}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <Link
                            to={`/decorations/${item.id}`}
                            onClick={() => setIsShortlistOpen(false)}
                            className="text-xs font-medium text-[#1C1917] hover:text-[#937443] underline transition-colors"
                          >
                            View Details
                          </Link>

                          <button
                            onClick={() => toggleSave(item.id)}
                            className="text-[#A8A29E] hover:text-[#DC2626] p-1 transition-colors"
                            title="Remove from shortlist"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Drawer Footer / Primary Action */}
          {savedDecorations.length > 0 && (
            <div className="p-5 border-t border-[#E8E2D9] bg-white space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md transition-transform active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Send Shortlist to WhatsApp</span>
              </a>

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={clearSaved}
                  className="text-xs text-[#78716C] hover:text-[#DC2626] transition-colors"
                >
                  Clear all items
                </button>
                <button
                  onClick={() => setIsShortlistOpen(false)}
                  className="text-xs text-[#78716C] hover:text-[#1C1917] transition-colors"
                >
                  Continue browsing
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
