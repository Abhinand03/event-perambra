import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileNavigation } from "./components/MobileNavigation";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SavedModal } from "./components/SavedModal";
import { SavedDecorationsProvider } from "./context/SavedDecorationsContext";

import { Home } from "./pages/Home";
import { Decorations } from "./pages/Decorations";
import { DecorationDetails } from "./pages/DecorationDetails";
import { Categories } from "./pages/Categories";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

// Helper to scroll to top whenever navigation route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <SavedDecorationsProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#E8DFC8]">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/decorations" element={<Decorations />} />
              <Route path="/decorations/:id" element={<DecorationDetails />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>

          <Footer />

          {/* Floating WhatsApp Action Pill */}
          <FloatingWhatsApp />

          {/* App-like Sticky Mobile Bottom Bar */}
          <MobileNavigation />

          {/* Saved Shortlist Drawer */}
          <SavedModal />
        </div>
      </Router>
    </SavedDecorationsProvider>
  );
}
