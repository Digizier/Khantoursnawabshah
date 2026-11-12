"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-2 group"
    >
      <div className="bg-white/95 text-forest-950 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat with Khan Tours ({DISPLAY_WHATSAPP})
      </div>
      <a
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Khan Tours Nawabshah"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white flex items-center justify-center shadow-gold hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        <MessageCircle className="w-7 h-7 fill-white text-green-600" />
      </a>
    </aside>
  );
}
