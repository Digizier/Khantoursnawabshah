"use client";

import React, { useRef, useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Review {
  initials: string;
  name: string;
  tag: string;
  stars: number;
  text: string;
}

export default function ReviewsMarquee({ reviews }: { reviews: Review[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  // Triple duplicated list for smooth continuous infinite loop
  const duplicated = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.7; // Smooth auto-scroll speed

    const scrollLoop = () => {
      if (!isInteracting && el) {
        el.scrollLeft += speed;
        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneThird;
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

  // Pointer Handlers for Fluid Mouse Drag & Touch Swipe
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
    <div className="w-full relative py-2 select-none" aria-label="Customer Reviews Marquee">
      {/* Hand-Draggable, Touch-Swipeable, and Auto-Scrolling Track */}
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
        className="flex gap-4 sm:gap-5 px-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicated.map((rev, idx) => (
          <div
            key={`${rev.name}-${idx}`}
            className="w-[82vw] sm:w-[50vw] md:w-96 flex-shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-subtle flex flex-col justify-between select-none"
          >
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                {[...Array(rev.stars)].map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed line-clamp-3 mb-3 pointer-events-none">
                "{rev.text}"
              </p>
            </div>
            <div className="flex items-center gap-2 border-t border-gray-100 pt-2.5 pointer-events-none">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-forest-100 text-forest-800 font-bold text-xs flex items-center justify-center flex-shrink-0">
                {rev.initials}
              </div>
              <div>
                <div className="text-xs font-bold text-gray-900">{rev.name}</div>
                <div className="text-[10px] text-gray-500">{rev.tag}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}