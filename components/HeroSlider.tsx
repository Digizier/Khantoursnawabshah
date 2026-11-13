"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ChevronLeft, ChevronRight, Compass, ShieldCheck } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const SLIDES = [
  {
    image: "/images/hero/banner-1.webp",
    headline: "Discover Pakistan's Natural Beauty",
    tagline: "Explore Hunza, Passu Cones & Khunjerab Pass",
    description:
      "Journey from Nawabshah, Sindh to the world's most dramatic mountain highways, ancient forts, and turquoise lakes with Khan Tours.",
    ctaText: "Explore Hunza Packages",
    ctaLink: "/packages?category=all",
  },
  {
    image: "/images/hero/banner-2.webp",
    headline: "Neelum Valley & Ratti Gali Lake",
    tagline: "The Emerald Paradise of Azad Kashmir",
    description:
      "Witness rushing crystal streams, alpine meadows of Arang Kel, the remote fairytale village of Taobutt, and breathtaking glacial lakes.",
    ctaText: "Explore Kashmir Tours",
    ctaLink: "/destinations/azad-kashmir",
  },
  {
    image: "/images/hero/banner-3.webp",
    headline: "Skardu & Deosai High Plains",
    tagline: "Land of Majestic Karakoram Giants",
    description:
      "Experience high cold deserts, Shangrila Resort, Katpana sand dunes, and the boundless wilderness of Deosai National Park.",
    ctaText: "Explore Skardu Packages",
    ctaLink: "/destinations/skardu-baltistan",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative w-full bg-forest-950 overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-[560px] sm:h-[600px] md:h-[650px] lg:h-[700px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.headline}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-center transform scale-105 transition-transform duration-10000"
              />

              {/* Multi-layer Gradient Overlays for High Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/65 to-black/35" />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/40 to-transparent" />

              {/* Hero Slide Content */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 sm:pb-20 md:pb-24">
                <div className="max-w-2xl text-left space-y-3.5 sm:space-y-4">
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/90 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>Khan Tours Nawabshah • Verified Travel Service</span>
                  </div>

                  {/* Main Headline: min 24px on mobile */}
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                    {slide.headline}
                  </h1>

                  {/* Tagline: min 16px on mobile */}
                  <p className="text-base sm:text-lg md:text-xl text-gold-200 font-semibold">
                    {slide.tagline}
                  </p>

                  {/* Description: min 16px on mobile for optimal legibility */}
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* Stacked Full-Width CTAs on Mobile, Horizontal on Desktop */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
                    <a
                      href={generateWhatsAppLink({
                        packageTitle: slide.headline,
                        destination: slide.tagline,
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-2xl shadow-lg transition-all duration-300 border border-green-300/40"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      <span>Plan Your Trip on WhatsApp</span>
                    </a>

                    <Link
                      href="/packages"
                      className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-md border border-white/25 transition-all duration-300"
                    >
                      <Compass className="w-5 h-5 text-gold-300" />
                      <span>Explore Tour Packages</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-forest-900/80 text-white backdrop-blur-md border border-white/10 transition-colors focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 min-w-[44px] min-h-[44px] w-11 h-11 flex items-center justify-center rounded-full bg-black/40 hover:bg-forest-900/80 text-white backdrop-blur-md border border-white/10 transition-colors focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-gold-400" : "w-2 bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
