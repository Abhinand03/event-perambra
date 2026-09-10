import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG, getWhatsAppUrl } from "../config/company";
import { Sparkles, MessageCircle, Phone, Mail, MapPin, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1917] text-[#FAF8F5] pt-16 pb-24 md:pb-12 border-t border-[#2E2925]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#2E2925]">
          {/* Brand Col */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FAF8F5] text-[#1C1917] flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-[#937443]" />
              </div>
              <span className="font-serif-luxury text-2xl font-bold tracking-tight">
                {COMPANY_CONFIG.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed">
              Creating beautiful spaces for unforgettable moments. Thoughtful stage styling, mandap architecture, and bespoke event setups across Kerala.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with our Stylists</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#E7D6BE] tracking-wide mb-4">
              Explore Collections
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8A29E]">
              <li>
                <Link to="/decorations?category=Wedding" className="hover:text-white transition-colors">
                  Wedding Stages & Mandaps
                </Link>
              </li>
              <li>
                <Link to="/decorations?category=Traditional" className="hover:text-white transition-colors">
                  Traditional Kerala Setups
                </Link>
              </li>
              <li>
                <Link to="/decorations?category=Reception" className="hover:text-white transition-colors">
                  Evening Reception Backdrops
                </Link>
              </li>
              <li>
                <Link to="/decorations?category=Engagement" className="hover:text-white transition-colors">
                  Engagement & Ring Ceremonies
                </Link>
              </li>
              <li>
                <Link to="/decorations?category=Haldi" className="hover:text-white transition-colors">
                  Haldi & Mehndi Lounges
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#E7D6BE] tracking-wide mb-4">
              Event Perambra
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A8A29E]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/decorations" className="hover:text-white transition-colors">
                  All Decorations
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-white transition-colors">
                  Category Directory
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Craft
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Service Location */}
          <div>
            <h4 className="font-serif-luxury text-base font-bold text-[#E7D6BE] tracking-wide mb-4">
              Reach Our Team
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#A8A29E]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {COMPANY_CONFIG.address.street}, {COMPANY_CONFIG.address.town}, {COMPANY_CONFIG.address.district}, {COMPANY_CONFIG.address.state} - {COMPANY_CONFIG.address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`tel:${COMPANY_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.displayPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${COMPANY_CONFIG.email}`} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 pt-3 text-[11px] text-[#78716C]">
              Serving: {COMPANY_CONFIG.serviceAreas.slice(0, 5).join(", ")}, & beyond.
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p>© {new Date().getFullYear()} {COMPANY_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#A8A29E]">
            Thoughtfully crafted for celebrations in God’s Own Country
          </p>
        </div>
      </div>
    </footer>
  );
};
