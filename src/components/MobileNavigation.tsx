import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, Grid3X3, Heart, MessageCircle } from "lucide-react";
import { useSavedDecorations } from "../context/SavedDecorationsContext";
import { getWhatsAppUrl } from "../config/company";

export const MobileNavigation: React.FC = () => {
  const location = useLocation();
  const { savedIds, setIsShortlistOpen } = useSavedDecorations();

  const isHome = location.pathname === "/";
  const isDecorations = location.pathname.startsWith("/decorations");
  const isCategories = location.pathname === "/categories";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-lg border-t border-[#E8E2D9] px-3 py-2 shadow-lg safe-area-bottom">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {/* Home */}
        <Link
          to="/"
          id="mobile-nav-home"
          className={`flex flex-col items-center py-1 px-2.5 rounded-lg transition-colors ${
            isHome ? "text-[#1C1917]" : "text-[#78716C] hover:text-[#1C1917]"
          }`}
        >
          <Home className={`w-5 h-5 ${isHome ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
          <span className={`text-[10px] mt-1 font-medium ${isHome ? "font-bold text-[#1C1917]" : ""}`}>
            Home
          </span>
        </Link>

        {/* Explore Decorations */}
        <Link
          to="/decorations"
          id="mobile-nav-explore"
          className={`flex flex-col items-center py-1 px-2.5 rounded-lg transition-colors ${
            isDecorations ? "text-[#1C1917]" : "text-[#78716C] hover:text-[#1C1917]"
          }`}
        >
          <Sparkles className={`w-5 h-5 ${isDecorations ? "stroke-[2.5] text-[#937443]" : "stroke-[1.75]"}`} />
          <span className={`text-[10px] mt-1 font-medium ${isDecorations ? "font-bold text-[#1C1917]" : ""}`}>
            Explore
          </span>
        </Link>

        {/* Categories */}
        <Link
          to="/categories"
          id="mobile-nav-categories"
          className={`flex flex-col items-center py-1 px-2.5 rounded-lg transition-colors ${
            isCategories ? "text-[#1C1917]" : "text-[#78716C] hover:text-[#1C1917]"
          }`}
        >
          <Grid3X3 className={`w-5 h-5 ${isCategories ? "stroke-[2.5]" : "stroke-[1.75]"}`} />
          <span className={`text-[10px] mt-1 font-medium ${isCategories ? "font-bold text-[#1C1917]" : ""}`}>
            Categories
          </span>
        </Link>

        {/* Saved / Shortlist */}
        <button
          onClick={() => setIsShortlistOpen(true)}
          id="mobile-nav-saved"
          className="flex flex-col items-center py-1 px-2.5 rounded-lg text-[#78716C] hover:text-[#1C1917] relative transition-colors"
        >
          <div className="relative">
            <Heart className={`w-5 h-5 stroke-[1.75] ${savedIds.length > 0 ? "text-[#C2410C] fill-[#C2410C]" : ""}`} />
            {savedIds.length > 0 && (
              <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-[#C2410C] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {savedIds.length}
              </span>
            )}
          </div>
          <span className="text-[10px] mt-1 font-medium">Saved</span>
        </button>

        {/* WhatsApp Direct Action */}
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-nav-whatsapp"
          className="flex flex-col items-center py-1 px-2.5 rounded-lg text-[#16A34A] hover:text-[#15803D] transition-colors"
        >
          <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
            <MessageCircle className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] mt-1 font-medium text-[#16A34A] font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
