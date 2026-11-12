import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Users, ShieldCheck, CheckCircle2, MessageCircle, Heart, Phone } from "lucide-react";
import { TOUR_PACKAGES } from "@/data/tours";
import PackageCard from "@/components/PackageCard";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Family Tour Packages to Northern Pakistan | Khan Tours Nawabshah",
  description:
    "Safe, private, and comfortable family tour packages to Hunza, Skardu, Swat, Naran, and Azad Kashmir departing from Nawabshah, Sindh. Organized with clean hotels and respectful care.",
};

export default function FamilyToursPage() {
  const familyTours = TOUR_PACKAGES.filter((p) => p.category === "family");

  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/banner-2.webp"
            alt="Family Tours Pakistan"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Safe • Peaceful • Respectful
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Family Tour Packages
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Thoughtfully planned for families traveling from Sindh with children and elders. Enjoy peaceful pacing, private accommodations, and dependable AC transport.
          </p>
        </div>
      </section>

      {/* Why Families Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Family Privacy Assured</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We handpick hotels with clean, attached washrooms, 24/7 hot water, and a respectful family environment.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Comfortable Pacing</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              No exhausting marathon drives. Daily itineraries include regular tea halts, prayer breaks, and scenic rests.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Dedicated Care for Elders</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Assistance with ground-floor hotel rooms, smooth boarding, and high-clearance jeeps for sightseeing points.
            </p>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Featured Family Packages
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              All departures organized directly from Nawabshah and Sindh.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {familyTours.map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* WhatsApp Custom Action */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-forest-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Want a Private Family Car / Hiace?</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              We offer exclusive private Toyota Corollas, Grand Cabins, and Prados tailored to your family's travel dates.
            </p>
          </div>
          <a
            href={generateWhatsAppLink({
              category: "Private Family Tour",
              message: "I want to arrange a private family tour.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-green-600" />
            <span>Inquire for Family</span>
          </a>
        </div>
      </section>
    </div>
  );
}
