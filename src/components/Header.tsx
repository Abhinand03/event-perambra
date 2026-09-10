import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Heart, Menu, X, Phone, MapPin, Sparkles } from "lucide-react";
import { COMPANY_CONFIG, getWhatsAppUrl } from "../config/company";
import { useSavedDecorations } from "../context/SavedDecorationsContext";
import { motion, AnimatePresence } from "motion/react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { savedIds, setIsShortlistOpen } = useSavedDecorations();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Decorations", path: "/decorations" },
    { name: "Categories", path: "/categories" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top subtle announcement bar */}
      <div className="bg-[#1C1917] text-[#D6CEBE] text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-sans-clean">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#C5A880]">
              <MapPin className="w-3.5 h-3.5" />
              Perambra, Kozhikode & Across Malabar
            </span>
            <span className="text-[#8C8275]">|</span>
            <span className="text-[#E7E2D8]">Over 1,800+ Stage Celebrations Designed</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${COMPANY_CONFIG.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              {COMPANY_CONFIG.displayPhone}
            </a>
            <span className="text-[#8C8275]">|</span>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#3ce47a] transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              Direct WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E8E2D9]"
            : "bg-[#FAF8F5] border-b border-[#EFEBE4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#C5A880] flex items-center justify-center shadow-xs border border-[#C5A880]/30 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] leading-none">
                {COMPANY_CONFIG.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#8C7A6B] font-medium mt-0.5">
                Stage Decor & Events
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 font-sans-clean">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-colors relative ${
                    isActive
                      ? "text-[#1C1917] font-semibold"
                      : "text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2ECE4]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-[#937443] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Shortlist / Wishlist Button */}
            <button
              onClick={() => setIsShortlistOpen(true)}
              className="relative p-2.5 text-[#44403C] hover:text-[#1C1917] hover:bg-[#F2ECE4] rounded-full transition-colors"
              title="Saved Decorations"
              id="header-shortlist-btn"
            >
              <Heart className={`w-5 h-5 ${savedIds.length > 0 ? "fill-[#C2410C] text-[#C2410C]" : ""}`} />
              {savedIds.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C2410C] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {savedIds.length}
                </span>
              )}
            </button>

            {/* WhatsApp CTA Button */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1C1917] text-[#FAF8F5] hover:bg-[#2B2724] text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-sm"
              id="header-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#292524] hover:bg-[#F2ECE4] rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-4 pt-3 pb-6 shadow-md overflow-hidden"
          >
            <nav className="flex flex-col space-y-1 font-sans-clean">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#EFE9DF] text-[#1C1917] font-semibold"
                        : "text-[#57534E] hover:bg-[#F5F0E8] hover:text-[#1C1917]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-[#E8E2D9] flex flex-col gap-2">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-semibold text-sm shadow-xs active:scale-[0.99] transition-transform"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp Directly
                </a>
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#F0EAE1] text-[#292524] font-medium text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#937443]" />
                  Call: {COMPANY_CONFIG.displayPhone}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
