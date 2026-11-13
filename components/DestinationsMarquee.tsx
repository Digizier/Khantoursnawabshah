"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsMarquee() {
  // Duplicate list to create a seamless infinite loop
  const duplicated = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <div
      className="w-full relative overflow-hidden py-3"
      aria-label="Top Northern Destinations Marquee"
    >
      {/* Edge gradient masks on tablet/desktop */}
      <div className="hidden sm:block absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-ivory-100 to-transparent z-10 pointer-events-none" />
      <div className="hidden sm:block absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-ivory-100 to-transparent z-10 pointer-events-none" />

      {/* Pure CSS Infinite Scrolling Track moving left to right continuously */}
      <div className="marquee-track flex gap-3 sm:gap-5 px-3">
        {duplicated.map((dest, idx) => (
          <Link
            key={`${dest.id}-${idx}`}
            href={`/destinations/${dest.slug}`}
            className="flex-shrink-0 w-[45vw] sm:w-56 md:w-64 lg:w-72 group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] bg-forest-950 border border-gray-200/80 hover:border-gold-400/80 shadow-subtle hover:shadow-card transition-all duration-300"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 224px, 288px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/45 to-transparent" />

            {/* Top Region Badge */}
            <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
              <span className="inline-flex items-center gap-1 bg-forest-900/90 text-gold-300 text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full backdrop-blur-md border border-forest-800">
                <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-400" />
                <span className="truncate max-w-[85px] sm:max-w-none">{dest.region}</span>
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-4 text-white">
              <h3 className="text-xs sm:text-base md:text-lg font-bold text-white group-hover:text-gold-200 transition-colors drop-shadow line-clamp-1">
                {dest.name}
              </h3>
              <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-1 mt-0.5 hidden sm:block">
                {dest.tagline}
              </p>
              <div className="mt-1 sm:mt-2 flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                <span>Explore</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
