import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { CategoryScroller } from "../components/CategoryScroller";
import { DecorationGrid } from "../components/DecorationGrid";
import { InspirationGallery } from "../components/InspirationGallery";
import { Testimonials } from "../components/Testimonials";
import { DECORATIONS } from "../data/decorations";
import { getWhatsAppUrl, COMPANY_CONFIG } from "../config/company";
import { ArrowRight, MessageCircle, Sparkles, Flower2, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { motion } from "motion/react";

export const Home: React.FC = () => {
  const featuredDecorations = DECORATIONS.filter((d) => d.featured).slice(0, 6);
  const mostLovedDecorations = DECORATIONS.filter((d) => d.isMostLoved).slice(0, 6);

  const stylePills = [
    { name: "Traditional", desc: "Authentic Kerala & Mandaps", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80" },
    { name: "Luxury", desc: "Palatial Arches & Chandeliers", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80" },
    { name: "Floral", desc: "Lush Roses, Wisteria & Orchids", image: "https://images.unsplash.com/photo-1546815140-4ef85b8b7a42?auto=format&fit=crop&w=600&q=80" },
    { name: "Modern", desc: "Geometric Lighting & Minimalist Lines", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80" },
    { name: "Boho", desc: "Pampas, Rattan & Warm Terracotta", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80" },
    { name: "Minimal", desc: "Pure Monochromatic Refinement", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Category Scroller */}
      <CategoryScroller />

      {/* 3. "Made For Your Moment" (Selected Premium Feature Collection) */}
      <section className="py-16 sm:py-20 border-t border-[#ECE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
                Signature Creations
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-1.5">
                Made For Your Moment
              </h2>
              <p className="text-sm text-[#666059] mt-2 max-w-xl">
                Thoughtfully curated stage masterpieces selected for their visual grandeur, timeless photographs, and exceptional styling.
              </p>
            </div>

            <Link
              to="/decorations"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1C1917] hover:text-[#937443] transition-colors group"
            >
              <span>View All Decorations</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#937443]" />
            </Link>
          </div>

          <DecorationGrid decorations={featuredDecorations} />
        </div>
      </section>

      {/* 4. Editorial Brand Section: About Event Perambra */}
      <section className="py-20 sm:py-28 bg-[#1C1917] text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E7D6BE] text-xs font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                The Event Perambra Story
              </span>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] leading-tight">
                “We don’t just decorate stages. We create the backdrop to your <span className="italic text-[#E2D2BC]">memories.”</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D6CEBF] leading-relaxed font-light">
                From intimate family courtyard celebrations in Perambra to grand matrimonial spectacles across Kozhikode, our philosophy has always been simple: your celebration deserves a setting that mirrors the depth of your emotions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Flower2 className="w-5 h-5 text-[#C5A880] mb-2" />
                  <h4 className="font-serif-luxury text-base font-bold text-white">
                    Fresh Floral Sourcing
                  </h4>
                  <p className="text-xs text-[#A8A29E] mt-1">
                    Directly flown Bangalore roses, authentic Madurai jasmine, and imported Dutch blooms.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-[#C5A880] mb-2" />
                  <h4 className="font-serif-luxury text-base font-bold text-white">
                    Structural Precision
                  </h4>
                  <p className="text-xs text-[#A8A29E] mt-1">
                    Heavy-duty engineered trusses, level platforms, and fire-safe ambient electrical lighting.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] text-[#1C1917] hover:bg-[#F2ECE4] text-xs font-semibold tracking-wide transition-all"
                >
                  <span>Learn About Our Craft</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#937443]" />
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#25D366] hover:text-[#42e47e] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk with our Stylist</span>
                </a>
              </div>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="rounded-2xl overflow-hidden aspect-4/5 shadow-xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                    alt="Event Perambra floral styling"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                    alt="Kerala Heritage Traditional Mandap"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-10">
                <div className="rounded-2xl overflow-hidden aspect-square shadow-xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
                    alt="Modern Ivory Reception Setup"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-4/5 shadow-xl border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80"
                    alt="Joyous Haldi Celebration Decor"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "Most Loved Designs" (Popular / Customer Favorites) */}
      <section className="py-16 sm:py-24 border-t border-[#ECE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
              Trending In Perambra & Kozhikode
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] mt-1.5 mb-3">
              Most Loved Designs
            </h2>
            <p className="text-sm sm:text-base text-[#666059]">
              The stage settings and ceremonial themes that couples and families have fallen in love with this wedding season.
            </p>
          </div>

          <DecorationGrid decorations={mostLovedDecorations} />
        </div>
      </section>

      {/* 6. "Find Your Style" (Editorial Style Discovery) */}
      <section className="py-16 sm:py-20 bg-[#F4EFE6] border-t border-[#ECE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
              Aesthetic Directory
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1917] mt-1">
              Find Your Style
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mt-2">
              Every couple has an innate aesthetic. Discover which design language speaks to your celebration.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stylePills.map((style) => (
              <Link
                key={style.name}
                to={`/decorations?style=${encodeURIComponent(style.name)}`}
                className="group relative h-48 rounded-xl overflow-hidden shadow-2xs hover:shadow-lg transition-all"
              >
                <img
                  src={style.image}
                  alt={style.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-3.5 flex flex-col justify-end text-white">
                  <h3 className="font-serif-luxury text-lg font-bold">
                    {style.name}
                  </h3>
                  <p className="text-[10px] text-[#E7D6BE] line-clamp-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {style.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Inspiration Gallery (Moments We've Helped Make Beautiful) */}
      <InspirationGallery />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. Contact CTA Banner */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#ECE6DC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
            Start Your Journey
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mt-2 mb-4">
            Planning Your Special Day?
          </h2>
          <p className="font-serif-luxury italic text-lg sm:text-xl text-[#666059] max-w-2xl mx-auto mb-8">
            “Tell us what you’re imagining. We’ll help turn it into a beautiful setting.”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold tracking-wide shadow-lg hover:shadow-green-900/20 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
              <span>WhatsApp Our Team</span>
            </a>

            <Link
              to="/decorations"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1C1917] hover:bg-[#2E2925] text-white text-sm font-semibold tracking-wide transition-all active:scale-[0.98]"
            >
              <span>Explore All Decorations</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </div>

          <div className="mt-8 text-xs text-[#8C7A6B]">
            Direct Consultation • Free Venue Measurement in Kozhikode District • Instant WhatsApp Replies
          </div>
        </div>
      </section>
    </div>
  );
};
