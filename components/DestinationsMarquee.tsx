"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export default function DestinationsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate list to create a seamless infinite loop
  const duplicated = [...DESTINATIONS, ...DESTINATIONS];

  return (
    <div className="w-full relative overflow-hidden py-4">
      {/* Scrollable Track */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4 sm:px-6 lg:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicated.map((dest, idx) => (
          <Link
            key={`${dest.id}-${idx}`}
            href={`/destinations/${dest.slug}`}
            className="flex-shrink-0 w-[42vw] sm:w-56 md:w-64 snap-start group relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] bg-forest-950 border border-gray-200/80 hover:border-gold-400/80 shadow-subtle hover:shadow-card transition-all duration-300"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              sizes="(max-width: 640px) 42vw, 256px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-transparent" />

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
              <span className="text-[10px] font-semibold text-gold-300 uppercase tracking-widest block drop-shadow">
                {dest.region}
              </span>
              <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-gold-200 transition-colors drop-shadow">
                {dest.name}
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-300 line-clamp-1 mt-0.5 hidden sm:block">
                {dest.tagline}
              </p>
              <div className="mt-2 flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-gold-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Guide</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
