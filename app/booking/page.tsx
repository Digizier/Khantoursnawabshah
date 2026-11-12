import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MessageCircle, Phone, CheckCircle2, ShieldCheck, Clock, Calendar } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Book Tour / Travel Inquiry | Khan Tours Nawabshah",
  description:
    "Book your Northern Pakistan tour with Khan Tours Nawabshah. Fill out our simple inquiry form or connect directly on WhatsApp at 0300-2870384.",
};

export default function BookingPage() {
  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Banner */}
      <section className="relative py-12 sm:py-16 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/banner-2.webp"
            alt="Book Your Tour"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Start Your Journey
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Book a Tour / Inquiry
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Choose your preferred booking method: connect directly on WhatsApp or submit our inquiry form below.
          </p>
        </div>
      </section>

      {/* Booking Methods Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Method Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Method A: WhatsApp Direct Booking */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-900/10 via-white to-green-50/40 border border-green-200/80 shadow-subtle flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Method A: Fastest Response</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Direct WhatsApp Booking
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Connect instantly with Mohammed Murad Khan to check live dates, family rooms, and vehicle availability in real time.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-600 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>Instant response from tour leader</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                  <span>Direct itinerary and hotel photos sharing</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-green-600" />
                <span>Chat on WhatsApp: {DISPLAY_WHATSAPP}</span>
              </a>
            </div>
          </div>

          {/* Method B: Online Form Booking */}
          <div className="p-6 rounded-2xl bg-white border border-gray-200/80 shadow-subtle flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Method B: Detailed Form</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Online Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Fill in your destination, dates, and family size below. We review your requirements and prepare a custom proposal.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-600 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                  <span>Detailed customized itinerary planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest-700 flex-shrink-0" />
                  <span>One-click WhatsApp follow-up sync</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Fill Inquiry Form Below</span>
              </a>
            </div>
          </div>
        </div>

        {/* The Form Anchor */}
        <div id="booking-form" className="max-w-3xl mx-auto">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
}
