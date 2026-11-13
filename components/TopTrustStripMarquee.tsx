"use client";

import React, { useRef, useEffect, useState } from "react";
import { ShieldCheck, Users, Car, Compass } from "lucide-react";

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: "Nawabshah Departure & Pickups" },
  { icon: Users, label: "Family-Friendly Accommodations" },
  { icon: Car, label: "Comfortable AC Mountain Fleet" },
  { icon: Compass, label: "Experienced On-Ground Tour Guides" },
];

export default function TopTrustStripMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  // Repeat 4 times for seamless continuous infinite marquee
  const repeated = [...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS, ...TRUST_ITEMS];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.9; // Smooth continuous moving speed

    const scrollLoop = () => {
      if (!isInteracting && el) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += half;
        }
      }
      animId = requestAnimationFrame(scrollLoop);
    };

    animId = requestAnimationFrame(scrollLoop);

    return () => {
      cancelAnimationFrame(animId);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [isInteracting]);

  // Pointer drag & touch swipe handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    isPointerDown.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = containerRef.current.scrollLeft;
    setIsInteracting(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isPointerDown.current || !containerRef.current) return;
    const deltaX = e.clientX - startX.current;
    containerRef.current.scrollLeft = startScrollLeft.current - deltaX;
  };

  const handlePointerUpOrCancel = () => {
    if (!isPointerDown.current) return;
    isPointerDown.current = false;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  return (
    <section className="bg-forest-900 border-b border-forest-800 text-gold-200 py-2.5 sm:py-3 overflow-hidden select-none relative">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUpOrCancel}
        onPointerCancel={handlePointerUpOrCancel}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => {
          if (!isPointerDown.current) {
            setIsInteracting(false);
          }
        }}
        className="flex items-center gap-8 sm:gap-12 px-4 text-xs sm:text-sm font-medium overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {repeated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.label}-${idx}`}
              className="flex items-center gap-2 whitespace-nowrap flex-shrink-0"
            >
              <Icon className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span className="text-white font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}