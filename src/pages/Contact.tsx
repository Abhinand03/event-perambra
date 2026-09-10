import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_CONFIG, getWhatsAppUrl } from "../config/company";
import { CATEGORIES } from "../data/categories";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, Sparkles, CheckCircle2 } from "lucide-react";

export const Contact: React.FC = () => {
  const [eventType, setEventType] = useState("Wedding");
  const [eventDate, setEventDate] = useState("");
  const [venueLocation, setVenueLocation] = useState("");
  const [customNotes, setCustomNotes] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let customMsg = `Hello ${COMPANY_CONFIG.name},
I would like to enquire about stage decoration services for an upcoming event:

• Event Type: ${eventType}
• Date: ${eventDate || "Date to be finalized"}
• Venue / Town: ${venueLocation || "In / near Perambra / Kozhikode"}
${customNotes ? `• Custom Requirements / Style: ${customNotes}` : ""}

Could you please connect with me to discuss available stage packages and custom options?`;

    const url = `https://wa.me/${COMPANY_CONFIG.whatsappNumber}?text=${encodeURIComponent(customMsg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#937443]">
            Direct Consultation
          </span>
          <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C1917] mt-2">
            Let’s Plan Your Celebration
          </h1>
          <p className="text-sm sm:text-base text-[#666059] mt-3 leading-relaxed">
            Tell us about your event date, dream aesthetic, and venue. Our decoration designers in Perambra will assist you directly via WhatsApp or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Quick Enquiry Planner (Converts directly to WhatsApp) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#ECE6DC] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#937443] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Direct WhatsApp Planner</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1C1917] mb-2">
              Share Your Vision With Us
            </h2>
            <p className="text-xs sm:text-sm text-[#78716C] mb-6">
              Fill in your event details below to launch a customized consultation directly in WhatsApp.
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              {/* Event Type */}
              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Type of Celebration
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD3] rounded-xl text-sm text-[#1C1917] focus:outline-hidden focus:border-[#937443]"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                  <option value="Anniversary">Anniversary Celebration</option>
                  <option value="Corporate Event">Corporate / Cultural Fest</option>
                </select>
              </div>

              {/* Event Date & Venue Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Anticipated Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD3] rounded-xl text-sm text-[#1C1917] focus:outline-hidden focus:border-[#937443]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                    Venue Town / Auditorium
                  </label>
                  <input
                    type="text"
                    value={venueLocation}
                    onChange={(e) => setVenueLocation(e.target.value)}
                    placeholder="e.g. Perambra, Kozhikode, Vadakara..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD3] rounded-xl text-sm text-[#1C1917] focus:outline-hidden focus:border-[#937443]"
                  />
                </div>
              </div>

              {/* Custom Requirements / Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#44403C] uppercase tracking-wider mb-1.5">
                  Decoration Notes or Preferred Themes (Optional)
                </label>
                <textarea
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g. Fresh jasmine mandap, warm chandeliers, blush pink color palette, or traditional Kerala Nilavilakku setup..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD3] rounded-xl text-sm text-[#1C1917] focus:outline-hidden focus:border-[#937443]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md hover:shadow-green-900/20 transition-all active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Send Enquiry on WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#78716C] pt-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Fast response within a few hours • No obligation</span>
              </div>
            </form>
          </div>

          {/* Right: Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE6DC] shadow-2xs space-y-6">
              <h3 className="font-serif-luxury text-xl font-bold text-[#1C1917]">
                Office & Studio
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#57534E]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#937443] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Workshop & Office:</span>
                    <span>
                      {COMPANY_CONFIG.address.street}, {COMPANY_CONFIG.address.town}, {COMPANY_CONFIG.address.district}, {COMPANY_CONFIG.address.state} - {COMPANY_CONFIG.address.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#937443] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Phone & WhatsApp:</span>
                    <a
                      href={`tel:${COMPANY_CONFIG.phone}`}
                      className="hover:text-[#937443] transition-colors"
                    >
                      {COMPANY_CONFIG.displayPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#937443] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Email:</span>
                    <a
                      href={`mailto:${COMPANY_CONFIG.email}`}
                      className="hover:text-[#937443] transition-colors"
                    >
                      {COMPANY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#937443] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Consultation Hours:</span>
                    <span>Monday – Sunday: 8:30 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct call action */}
              <div className="pt-2 border-t border-[#F0EBE3] flex items-center justify-between">
                <a
                  href={`tel:${COMPANY_CONFIG.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF8F5] text-[#1C1917] hover:bg-[#1C1917] hover:text-white text-xs font-semibold border border-[#E2DDD3] transition-all"
                >
                  <Phone className="w-4 h-4 text-[#937443]" />
                  <span>Call {COMPANY_CONFIG.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Quick Map Placeholder Card */}
            <div className="bg-[#1C1917] text-white rounded-3xl p-6 sm:p-8 space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C5A880]">
                Location & Accessibility
              </span>
              <h4 className="font-serif-luxury text-xl font-bold">
                Centrally Located in Perambra
              </h4>
              <p className="text-xs text-[#A8A29E] leading-relaxed">
                Our base in Perambra allows our crews to easily mobilize across Kozhikode district, Vadakara, Koyilandy, Balussery, and Wayanad for prompt stage setups.
              </p>
              <div className="pt-2">
                <Link
                  to="/decorations"
                  className="text-xs font-semibold text-[#E7D6BE] hover:text-white underline"
                >
                  Browse our Stage Portfolio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
