"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";
import { useUI } from "@/context/UIContext";

export default function WhatsAppFloatingButton() {
  const { isMobileMenuOpen } = useUI();

  // Hide when mobile full drawer menu is open
  if (isMobileMenuOpen) {
    return null;
  }

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group"
    >
      <div className="bg-white/95 text-forest-950 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with Khan Tours ({DISPLAY_WHATSAPP})
      </div>
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Khan Tours Nawabshah"
        className="whatsapp-btn shine-effect min-w-[50px] min-h-[50px] w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-xl border border-green-300/40 transition-all focus:outline-none focus:ring-4 focus:ring-green-300/50"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
