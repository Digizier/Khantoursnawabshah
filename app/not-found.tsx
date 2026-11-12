import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, Home, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] bg-ivory-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-5 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-card">
        <div className="relative w-16 h-16 mx-auto">
          <Image
            src="/images/logo/khan-tours-header-logo.png"
            alt="Khan Tours Nawabshah"
            fill
            sizes="64px"
            className="object-contain"
          />
        </div>

        <div className="space-y-1">
          <span className="text-4xl font-extrabold text-forest-900 block font-sans">
            404
          </span>
          <h1 className="text-xl font-bold text-gray-900">
            Mountain Trail Not Found
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            The page you are looking for does not exist or has been moved. Let's get you back on track to explore Pakistan's natural beauty.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs shadow-md transition-all"
          >
            <Home className="w-4 h-4 text-gold-400" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-full border border-forest-800 text-forest-900 hover:bg-forest-50 font-semibold text-xs transition-all"
          >
            <Compass className="w-4 h-4" />
            <span>Tour Packages</span>
          </Link>
        </div>

        <div className="pt-4 border-t border-gray-100 text-xs text-gray-500">
          Need quick help? Chat on WhatsApp:{" "}
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-bold hover:underline"
          >
            {DISPLAY_WHATSAPP}
          </a>
        </div>
      </div>
    </div>
  );
}
