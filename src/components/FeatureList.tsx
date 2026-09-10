import React from "react";
import { Sparkles, Palette, Armchair, Camera, Wrench, Flower2, ShieldCheck, SunMedium } from "lucide-react";

interface FeatureListProps {
  features: string[];
}

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  // Helper to match an appropriate Lucide icon based on feature keywords
  const getFeatureIcon = (feature: string) => {
    const lower = feature.toLowerCase();
    if (lower.includes("flower") || lower.includes("rose") || lower.includes("orchid") || lower.includes("floral") || lower.includes("jasmine") || lower.includes("marigold") || lower.includes("wisteria")) {
      return <Flower2 className="w-5 h-5 text-[#937443]" />;
    }
    if (lower.includes("light") || lower.includes("chandelier") || lower.includes("glow") || lower.includes("edison") || lower.includes("lamp") || lower.includes("candle")) {
      return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
    }
    if (lower.includes("color") || lower.includes("theme") || lower.includes("velvet") || lower.includes("arch") || lower.includes("drape") || lower.includes("gold")) {
      return <Palette className="w-5 h-5 text-[#8C7A6B]" />;
    }
    if (lower.includes("seat") || lower.includes("sofa") || lower.includes("chair") || lower.includes("throne") || lower.includes("divan") || lower.includes("jhula") || lower.includes("swing")) {
      return <Armchair className="w-5 h-5 text-[#937443]" />;
    }
    if (lower.includes("photo") || lower.includes("backdrop") || lower.includes("cinematic") || lower.includes("mirror")) {
      return <Camera className="w-5 h-5 text-[#8C7A6B]" />;
    }
    if (lower.includes("setup") || lower.includes("install") || lower.includes("platform") || lower.includes("structure") || lower.includes("floor") || lower.includes("carpet")) {
      return <Wrench className="w-5 h-5 text-[#666059]" />;
    }
    return <ShieldCheck className="w-5 h-5 text-[#937443]" />;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#EAE4DA] shadow-2xs hover:border-[#D5C9B8] transition-colors"
        >
          <div className="p-2 rounded-lg bg-[#FAF8F5] shrink-0 border border-[#EFEBE4]">
            {getFeatureIcon(feature)}
          </div>
          <div className="flex-1 min-w-0 pt-0.5">
            <p className="font-sans-clean text-xs sm:text-sm font-medium text-[#292524] leading-relaxed">
              {feature}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
