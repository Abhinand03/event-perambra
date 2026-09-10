import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DecorationGalleryProps {
  images: string[];
  title: string;
}

export const DecorationGallery: React.FC<DecorationGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Main Image Stage */}
      <div className="relative aspect-4/3 sm:aspect-16/10 rounded-2xl overflow-hidden bg-[#F2ECE4] border border-[#ECE6DC] group shadow-xs">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} view ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover object-center cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          />
        </AnimatePresence>

        {/* Floating Controls */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <button
            onClick={() => setLightboxOpen(true)}
            className="p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all shadow-md"
            aria-label="View fullscreen photo"
            title="Expand photo"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Photo Index Counter */}
        <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-medium backdrop-blur-md">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Desktop Previous & Next Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1C1917] shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 hover:bg-white text-[#1C1917] shadow-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Bar (Desktop & Tablet) */}
      {images.length > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-20 sm:w-24 aspect-4/3 rounded-xl overflow-hidden border-2 transition-all ${
                currentIndex === idx
                  ? "border-[#937443] ring-2 ring-[#937443]/30 scale-[1.02]"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Main Image */}
            <div className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                src={images[currentIndex]}
                alt={title}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Navigation inside lightbox */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Caption */}
            <div className="absolute bottom-4 inset-x-0 text-center text-white text-xs font-medium">
              <span>{title}</span> • <span>Photo {currentIndex + 1} of {images.length}</span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
