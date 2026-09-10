import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl, COMPANY_CONFIG } from "../config/company";
import { motion, AnimatePresence } from "motion/react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-18 md:bottom-7 right-4 md:right-7 z-30 flex flex-col items-end">
      {/* Tooltip on desktop */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-2 hidden sm:flex items-center gap-2 bg-[#1C1917] text-[#FAF8F5] text-xs py-2 px-3.5 rounded-full shadow-lg border border-[#C5A880]/30"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat directly with Event Perambra</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowTooltip(false);
              }}
              className="text-[#A8A29E] hover:text-white ml-1 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 md:px-5 md:py-3.5 rounded-full shadow-xl shadow-green-900/20 hover:shadow-green-900/30 transition-shadow group"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden md:inline font-semibold text-sm tracking-wide">
          Enquire on WhatsApp
        </span>
      </motion.a>
    </div>
  );
};
