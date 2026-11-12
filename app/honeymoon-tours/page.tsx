import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Heart, ShieldCheck, Car, Star, MessageCircle, Phone } from "lucide-react";
import { TOUR_PACKAGES } from "@/data/tours";
import PackageCard from "@/components/PackageCard";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Honeymoon Tour Packages | Khan Tours Nawabshah",
  description:
    "Romantic and private honeymoon tours to Azad Kashmir, Neelum Valley, Hunza, and Swat departing from Nawabshah, Sindh. Private luxury car and scenic boutique stays.",
};

export default function HoneymoonToursPage() {
  const honeymoonTours = TOUR_PACKAGES.filter((p) => p.category === "honeymoon");

  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/destinations/taobutt-neelum-valley.webp"
            alt="Honeymoon in Northern Pakistan"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/85 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block flex items-center justify-center gap-1.5">
            <Heart className="w-4 h-4 text-red-400 fill-current" />
            <span>Romantic Escapes & Private Moments</span>
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Honeymoon Tour Packages
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Begin your new journey amidst the tranquil beauty of Kashmir, Swat, and Hunza. Private vehicles, executive mountain rooms, and flexible schedules crafted for couples.
          </p>
        </div>
      </section>

      {/* Honeymoon Perks */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <Car className="w-5 h-5 text-forest-700" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Dedicated Private Car</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Travel exclusively in a private air-conditioned car with a professional, courteous chauffeur. Zero sharing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <Star className="w-5 h-5 text-gold-500" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Scenic Executive Rooms</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Riverfront balconies, valley panoramas, modern amenities, and complimentary honeymoon room decor on arrival.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5 text-forest-700" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Absolute Privacy & Flexible Pacing</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Wake up at your leisure, linger by emerald waterfalls, and dine quietly without rigid group deadlines.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Curated Honeymoon Experiences
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Customized pick-up available from Nawabshah, Karachi, or Islamabad Airport.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {honeymoonTours.map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* WhatsApp Custom Action */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-forest-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Want a Custom Honeymoon Itinerary?</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Tell us your desired destination (Hunza, Neelum Valley, or Swat) and trip duration.
            </p>
          </div>
          <a
            href={generateWhatsAppLink({
              category: "Honeymoon Special",
              message: "I want to plan a customized honeymoon package.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-green-600" />
            <span>Plan Honeymoon on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
