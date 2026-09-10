import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG, getWhatsAppUrl } from "../config/company";
import { Sparkles, Flower2, ShieldCheck, Heart, Award, MapPin, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero Narrative */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
            Our Story & Heritage
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1C1917] mt-3 leading-tight">
            We don’t just decorate stages. We create the backdrop to your <span className="italic text-[#937443]">memories.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#666059] mt-6 leading-relaxed font-light">
            Founded in Perambra, Kerala, Event Perambra began with a heartfelt belief: that every wedding, reception, and cultural milestone is an irreplaceable chapter in a family’s story.
          </p>
        </div>

        {/* Visual Editorial Grid: Brand Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-20 sm:mb-28">
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-4/5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
                alt="Stage styling craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-4/5 shadow-md pt-6">
              <img
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80"
                alt="Authentic Kerala brass lamp and jasmine"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#937443]">
              The Craftsmanship Standard
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1917]">
              Every flower, arch, and light carefully orchestrated.
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Stage decoration in Kerala requires a deep understanding of venue dimensions, cultural ceremonies, and photographic lighting. We work hand-in-hand with couples and families to bring their aesthetic vision to life.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F5EFE6] text-[#937443] shrink-0 mt-0.5">
                  <Flower2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-[#1C1917]">
                    Hand-Selected Fresh Blooms
                  </h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    We source directly from trusted growers: fresh Madurai jasmine, Bangalore Dutch roses, imported Dutch orchids, and fragrant tuberose.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F5EFE6] text-[#937443] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-[#1C1917]">
                    Structural Rigor & Timely Execution
                  </h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    Precision engineering ensures our backdrops withstand venue crowds and environmental conditions with seamless carpet finishing and clean wire routing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#F5EFE6] text-[#937443] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-bold text-[#1C1917]">
                    Cinematography-Grade Lighting
                  </h4>
                  <p className="text-xs text-[#78716C] mt-0.5">
                    We collaborate with Kerala’s top wedding photographers to configure soft 3000K warm lighting temperatures that enhance skin tones and avoid harsh shadows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats & Credibility */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#ECE6DC] shadow-2xs mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#937443]">
                {COMPANY_CONFIG.stats.yearsExperience}
              </div>
              <div className="text-xs sm:text-sm text-[#78716C] mt-1 font-medium">
                Years in Perambra & Malabar
              </div>
            </div>
            <div>
              <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#937443]">
                {COMPANY_CONFIG.stats.eventsCompleted}
              </div>
              <div className="text-xs sm:text-sm text-[#78716C] mt-1 font-medium">
                Weddings & Events Styled
              </div>
            </div>
            <div>
              <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#937443]">
                {COMPANY_CONFIG.stats.satisfactionRate}
              </div>
              <div className="text-xs sm:text-sm text-[#78716C] mt-1 font-medium">
                Client Recommendation
              </div>
            </div>
            <div>
              <div className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#937443]">
                {COMPANY_CONFIG.stats.stageDesigns}
              </div>
              <div className="text-xs sm:text-sm text-[#78716C] mt-1 font-medium">
                Unique Stage Concepts
              </div>
            </div>
          </div>
        </div>

        {/* Service Coverage Banner */}
        <div className="bg-[#1C1917] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A880]">
              Regional Coverage
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold">
              Serving Perambra, Kozhikode, and across Malabar
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
              We travel to convention centers, auditoriums, temple halls, resort lawns, and private homes across:
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {COMPANY_CONFIG.serviceAreas.map((area, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full bg-white/10 text-xs text-[#FAF8F5] border border-white/10"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-6">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with our Lead Decorator</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
