import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, ChevronDown, Sparkles, Award } from "lucide-react";
import { getWhatsAppUrl, COMPANY_CONFIG } from "../config/company";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#161412] text-white">
      {/* Background Hero Image with Subtle Cinematic Zoom & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury wedding stage decoration by Event Perambra"
          className="w-full h-full object-cover object-center brightness-60 filter"
        />
        {/* Editorial Gradients for Deep Contrast & Luxury Feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161412] via-[#161412]/60 to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#161412]/30 to-[#161412]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Brand Logo Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-5"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-black/85 backdrop-blur-md border-2 border-[#C5A880]/70 shadow-2xl p-0.5 mx-auto hover:scale-105 transition-transform duration-300">
            <img
              src={COMPANY_CONFIG.logo}
              alt={COMPANY_CONFIG.name}
              className="w-full h-full object-cover rounded-full scale-135"
            />
          </div>
        </motion.div>

        {/* Subtle Brand Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#C5A880]/40 text-[#E7D6BE] text-xs sm:text-sm font-medium mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Stage Decorations & Event Architecture in Kerala</span>
        </motion.div>

        {/* Emotionally Appealing Customer-Focused Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#FAF8F5] max-w-4xl leading-[1.1] mb-6"
        >
          Turning Your Special Moments Into <span className="italic font-normal text-[#E2D2BC]">Beautiful Memories.</span>
        </motion.h1>

        {/* Supporting Emotion-Driven Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-sans-clean text-base sm:text-lg md:text-xl text-[#D6CEBF] max-w-2xl font-light leading-relaxed mb-10"
        >
          Elegant stage decorations and unforgettable event setups, thoughtfully designed for your special day in Perambra, Kozhikode, and across Malabar.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          <Link
            to="/decorations"
            id="hero-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FAF8F5] text-[#1C1917] hover:bg-[#F2ECE4] text-sm font-semibold tracking-wide shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-[0.98]"
          >
            <span>Explore Decorations</span>
            <ArrowRight className="w-4 h-4 text-[#937443]" />
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold tracking-wide shadow-xl hover:shadow-green-900/30 transition-all duration-200 active:scale-[0.98]"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-white text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        {/* Stats Pill - Editorial & Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl w-full text-center"
        >
          <div>
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#E7D6BE]">
              {COMPANY_CONFIG.stats.eventsCompleted}
            </div>
            <div className="text-[11px] sm:text-xs text-[#A8A29E] font-medium mt-0.5">
              Celebrations Styled
            </div>
          </div>
          <div className="border-x border-white/10 px-2">
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#E7D6BE]">
              {COMPANY_CONFIG.stats.yearsExperience}
            </div>
            <div className="text-[11px] sm:text-xs text-[#A8A29E] font-medium mt-0.5">
              Years of Heritage
            </div>
          </div>
          <div>
            <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#E7D6BE]">
              100%
            </div>
            <div className="text-[11px] sm:text-xs text-[#A8A29E] font-medium mt-0.5">
              Custom Designed
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-[#A8A29E] text-xs gap-1 opacity-75"
      >
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
