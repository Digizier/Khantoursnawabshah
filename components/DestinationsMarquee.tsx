"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to create a seamless infinite loop
  const duplicated = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <div
      className="w-full relative overflow-hidden py-4"
      aria-label="Top Northern Destinations Marquee"
    >
      {/* Visual edge gradient masks for a smooth fade out on desktop */}
      <div className="hidden sm:block absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-ivory-100 to-transparent z-10 pointer-events-none" />
      <div className="hidden sm:block absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-ivory-100 to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Track */}
      <div
        className="marquee-track flex gap-4 sm:gap-6 px-4"
        style={{
          animationPlayState: isPaused ? "paused" : undefined,
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {duplicated.map((dest, idx) => (
          <Link
            key={`${dest.id}-${idx}`}
            href={`/destinations/${dest.slug}`}
            className="flex-shrink-0 w-[70vw] sm:w-60 md:w-64 lg:w-72 group relative rounded-2xl overflow-hidden aspect-[4/5] bg-forest-950 border border-gray-200/80 hover:border-gold-400/80 shadow-subtle hover:shadow-card transition-all duration-300"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 256px, 288px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

            {/* Top Region Badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center gap-1 bg-forest-900/90 text-gold-300 text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-forest-800">
                <MapPin className="w-3 h-3 text-gold-400" />
                <span>{dest.region}</span>
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-white">
              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-200 transition-colors drop-shadow">
                {dest.name}
              </h3>
              <p className="text-xs text-gray-300 line-clamp-1 mt-0.5">
                {dest.tagline}
              </p>
              <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Destination Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
