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
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2 group"
    >
      <div className="bg-white/95 text-forest-950 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap hidden sm:block">
        Chat with Khan Tours ({DISPLAY_WHATSAPP})
      </div>
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Khan Tours Nawabshah"
        className="whatsapp-btn min-w-[52px] min-h-[52px] w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300/50"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </a>
    </aside>
  );
}
