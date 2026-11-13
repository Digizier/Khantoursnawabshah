"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, MapPin, Phone, MessageCircle } from "lucide-react";
import { useUI } from "@/context/UIContext";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function MobileBubbleDock() {
  const pathname = usePathname();
  const { isMobileMenuOpen } = useUI();

  // Automatically hide when the full mobile drawer menu is open
  if (isMobileMenuOpen) {
    return null;
  }

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Packages",
      href: "/packages",
      icon: Compass,
      isActive: pathname.startsWith("/packages"),
    },
    {
      label: "Places",
      href: "/destinations",
      icon: MapPin,
      isActive: pathname.startsWith("/destinations"),
    },
    {
      label: "Call",
      href: "tel:+923002870384",
      icon: Phone,
      isExternal: true,
    },
    {
      label: "WhatsApp",
      href: generateWhatsAppLink(),
      icon: MessageCircle,
      isExternal: true,
      isHighlight: true,
    },
  ];

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 lg:hidden pointer-events-none transition-all duration-300">
      <nav
        aria-label="Mobile Bottom Navigation"
        className="pointer-events-auto flex items-center justify-around gap-1 px-3 py-2 bg-forest-950/90 backdrop-blur-xl border border-forest-700/60 shadow-floating rounded-full max-w-sm w-full transition-transform duration-300"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isHighlight = item.isHighlight;

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                target={isHighlight ? "_blank" : undefined}
                rel={isHighlight ? "noopener noreferrer" : undefined}
                className={`min-w-[44px] min-h-[44px] flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all duration-200 ${
                  isHighlight
                    ? "bg-[#25D366] text-white shadow-sm hover:bg-[#20ba5a] active:scale-95 border border-green-300/30"
                    : "text-gray-300 hover:text-gold-300"
                }`}
                aria-label={item.label}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isHighlight ? "fill-white text-[#25D366]" : ""
                  }`}
                />
                <span className="text-[10px] font-medium tracking-tight mt-0.5">
                  {item.label}
                </span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`min-w-[44px] min-h-[44px] flex flex-col items-center justify-center py-1 px-2.5 rounded-full transition-all duration-200 ${
                item.isActive
                  ? "text-gold-300 bg-forest-800/80 font-bold"
                  : "text-gray-300 hover:text-gold-300"
              }`}
              aria-label={item.label}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
