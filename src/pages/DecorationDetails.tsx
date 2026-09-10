import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { DECORATIONS } from "../data/decorations";
import { DecorationGallery } from "../components/DecorationGallery";
import { FeatureList } from "../components/FeatureList";
import { DecorationCard } from "../components/DecorationCard";
import { getWhatsAppUrl, COMPANY_CONFIG } from "../config/company";
import { useSavedDecorations } from "../context/SavedDecorationsContext";
import {
  MessageCircle,
  Heart,
  Share2,
  ChevronRight,
  Clock,
  Maximize,
  Sparkles,
  Flower2,
  MapPin,
  Armchair,
  CheckCircle2,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { motion } from "motion/react";

export const DecorationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isSaved, toggleSave } = useSavedDecorations();
  const [copied, setCopied] = useState(false);

  // Scroll to top on id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const decoration = DECORATIONS.find((item) => item.id === id);

  if (!decoration) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif-luxury text-3xl font-bold text-[#1C1917] mb-2">
          Decoration Not Found
        </h2>
        <p className="text-sm text-[#78716C] mb-6">
          The stage setup you are looking for may have been updated or moved.
        </p>
        <Link
          to="/decorations"
          className="px-6 py-3 rounded-full bg-[#1C1917] text-white text-xs font-semibold"
        >
          Browse All Decorations
        </Link>
      </div>
    );
  }

  const saved = isSaved(decoration.id);

  const whatsappUrl = getWhatsAppUrl({
    decorationName: decoration.name,
    category: decoration.category,
  });

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${decoration.name} | Event Perambra`,
          text: `Check out the ${decoration.name} stage setup on Event Perambra!`,
          url: window.location.href,
        });
      } catch {
        // User dismissed share dialog
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Related decorations from same category or style
  const relatedDecorations = DECORATIONS.filter(
    (d) => d.id !== decoration.id && (d.category === decoration.category || d.style === decoration.style)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24 pt-4 sm:pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between py-3 mb-4 text-xs text-[#78716C]">
          <nav className="flex items-center gap-1.5 overflow-hidden">
            <Link to="/" className="hover:text-[#1C1917] transition-colors shrink-0">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <Link to="/decorations" className="hover:text-[#1C1917] transition-colors shrink-0">
              Decorations
            </Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            <span className="text-[#1C1917] font-semibold truncate">
              {decoration.name}
            </span>
          </nav>

          <button
            onClick={() => navigate(-1)}
            className="hidden sm:inline-flex items-center gap-1 text-xs text-[#78716C] hover:text-[#1C1917] transition-colors shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>
        </div>

        {/* Product Details Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <DecorationGallery
              images={decoration.images}
              title={decoration.name}
            />

            {/* Visual Specs / Dimensions Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#ECE6DC] shadow-2xs mt-6">
              <h3 className="font-serif-luxury text-lg font-bold text-[#1C1917] mb-3.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#937443]" />
                Technical Specifications & Setup Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5]">
                  <Maximize className="w-4 h-4 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Backdrop Scale</span>
                    <span className="text-[#78716C]">{decoration.specs.backdropDimensions || "Customizable to venue width"}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5]">
                  <Clock className="w-4 h-4 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Setup Timeframe</span>
                    <span className="text-[#78716C]">{decoration.specs.setupDuration || "4 – 6 Hours"}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5]">
                  <Flower2 className="w-4 h-4 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Floral Composition</span>
                    <span className="text-[#78716C]">{decoration.specs.floralType || "100% Fresh seasonal florals"}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5]">
                  <Armchair className="w-4 h-4 text-[#8C7A6B] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Included Seating</span>
                    <span className="text-[#78716C]">{decoration.specs.seatingProvided || "Royal stage sofa / twin thrones"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Enquire Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#ECE6DC] shadow-2xs space-y-6">
              {/* Category & Badges */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF3EA] text-[#745A30] text-xs font-semibold uppercase tracking-wider">
                    {decoration.category}
                  </span>
                  <span className="text-xs text-[#8C7A6B] font-medium">
                    {decoration.style} Style
                  </span>
                </div>

                {/* Save & Share Actions */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleSave(decoration.id)}
                    className={`p-2.5 rounded-full border transition-all ${
                      saved
                        ? "bg-[#FAF3EA] border-[#E8DFC8] text-[#C2410C]"
                        : "border-[#ECE6DC] text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5]"
                    }`}
                    title={saved ? "Saved to Shortlist" : "Save to Shortlist"}
                    aria-label="Save decoration"
                  >
                    <Heart className={`w-4 h-4 ${saved ? "fill-[#C2410C]" : ""}`} />
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-full border border-[#ECE6DC] text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF8F5] transition-all"
                    title="Share decoration"
                    aria-label="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {copied && (
                <div className="p-2 bg-[#F5F0E8] text-[#745A30] rounded-lg text-xs text-center">
                  Link copied to clipboard!
                </div>
              )}

              {/* Title & Tagline */}
              <div>
                <h1 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1C1917] leading-tight">
                  {decoration.name}
                </h1>
                <p className="font-serif-luxury italic text-base text-[#937443] mt-1.5">
                  “{decoration.tagline}”
                </p>
              </div>

              {/* Color Themes */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[#8C7A6B] font-medium">Color Palette:</span>
                <div className="flex flex-wrap gap-1.5">
                  {decoration.colorThemes.map((theme, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-[#FAF8F5] border border-[#E8E2D9] text-[#44403C] text-[11px] font-medium"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* Customer Friendly Description */}
              <div className="pt-3 border-t border-[#F0EBE3]">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8C7A6B] mb-2">
                  About This Stage Design
                </h2>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {decoration.fullDescription}
                </p>
              </div>

              {/* Primary WhatsApp Enquiry CTA (NO PRICING) */}
              <div className="pt-4 border-t border-[#F0EBE3] space-y-3">
                <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D9]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1917] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#937443]" />
                    <span>How Custom Enquiries Work</span>
                  </div>
                  <p className="text-[11px] text-[#78716C] leading-normal">
                    Clicking below will open WhatsApp with the details of this design. Our styling lead will review your venue location, event date, and custom preferences directly.
                  </p>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md hover:shadow-green-900/20 transition-all active:scale-[0.98]"
                  id="details-whatsapp-cta"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-4 text-xs text-[#78716C] pt-1">
                  <a
                    href={`tel:${COMPANY_CONFIG.phone}`}
                    className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#937443]" />
                    <span>Call: {COMPANY_CONFIG.displayPhone}</span>
                  </a>
                  <span>•</span>
                  <span>Perambra & Kozhikode</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 border-t border-[#F0EBE3] grid grid-cols-2 gap-3 text-[11px] text-[#57534E]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>Free venue inspection</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>Custom color tailoring</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>On-time stage guarantee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
                  <span>Professional cleanup</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Key Features Section */}
        <section className="mt-14 sm:mt-20 pt-10 border-t border-[#ECE6DC]">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
              Craftsmanship & Elements
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1.5 mb-6">
              Included Design Features
            </h2>
            <FeatureList features={decoration.features} />
          </div>
        </section>

        {/* Complementary / Related Designs */}
        {relatedDecorations.length > 0 && (
          <section className="mt-16 sm:mt-24 pt-10 border-t border-[#ECE6DC]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
                  Similar Celebrations
                </span>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                  You May Also Love
                </h2>
              </div>

              <Link
                to="/decorations"
                className="text-xs sm:text-sm font-semibold text-[#937443] hover:text-[#745a30] transition-colors"
              >
                View Catalog
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedDecorations.map((item) => (
                <DecorationCard key={item.id} decoration={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
