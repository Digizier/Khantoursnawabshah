"use client";

import React, { useRef, useEffect, useState } from "react";
import { MapPin, Users, Car, ShieldCheck, Compass, PhoneCall } from "lucide-react";

const TRUST_BENEFITS = [
  {
    icon: MapPin,
    title: "Convenient Departures from Sindh",
    desc: "Board seamlessly from Nawabshah with coordinated transit through Sindh and motorway connections to Northern gateways without stressful changes.",
  },
  {
    icon: Users,
    title: "Family Privacy & Decent Hotels",
    desc: "We strictly partner with reputable, secure hotels where families and couples enjoy complete privacy, hot water, and pleasant dining environments.",
  },
  {
    icon: Car,
    title: "Comfortable Mountain Fleet",
    desc: "Travel in AC Saloon Coasters, Toyota Grand Cabins, and dedicated 4x4 mountain jeeps handled by drivers seasoned in high-altitude routes.",
  },
  {
    icon: ShieldCheck,
    title: "Direct On-Ground Guidance",
    desc: "Our tours are supervised directly by Mohammed Murad Khan, ensuring that every checkpoint, mountain pass, and hotel check-in goes smoothly.",
  },
  {
    icon: Compass,
    title: "Customized Itinerary Planning",
    desc: "Need extra days in Hunza? Want a honeymoon retreat in Kashmir? We customize daily pacing, private vehicles, and hotel tiers to your exact liking.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Road & Emergency Support",
    desc: "We monitor route conditions, weather forecasts, and landslide alerts continuously, offering instant on-call support throughout your vacation.",
  },
];

export default function TrustBenefitsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const isPointerDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const resumeTimer = useRef<NodeJS.Timeout | null>(null);

  // Triple duplicated list for seamless continuous infinite loop
  const duplicated = [...TRUST_BENEFITS, ...TRUST_BENEFITS, ...TRUST_BENEFITS];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let animId: number;
    const speed = 0.75; // Smooth continuous moving speed

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
    <div className="w-full relative py-2 select-none" aria-label="Trust Benefits Marquee">
      {/* Hand-Draggable, Touch-Swipeable, and Auto-Scrolling Track with 1.5 cards visible on mobile */}
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
        className="flex gap-4 sm:gap-6 px-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing touch-pan-x"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.title}-${idx}`}
              className="w-[72vw] sm:w-[45vw] md:w-80 flex-shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/90 shadow-subtle hover:border-gold-400/60 transition-all flex flex-col justify-start select-none"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-3 flex-shrink-0 pointer-events-none">
                <Icon className="w-5 h-5 text-forest-700" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-snug pointer-events-none">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed pointer-events-none">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}