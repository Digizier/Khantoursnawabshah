import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, Users, Car, ShieldCheck, MessageCircle, Phone } from "lucide-react";
import { TOUR_PACKAGES } from "@/data/tours";
import PackageCard from "@/components/PackageCard";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Group Tour Packages | Khan Tours Nawabshah",
  description:
    "Scheduled group tour departures for friends, students, and corporate teams from Nawabshah, Sindh to Hunza, Skardu, Kashmir, and Naran Kaghan.",
};

export default function GroupToursPage() {
  const groupTours = TOUR_PACKAGES.filter((p) => p.category === "group" || p.category === "customized");

  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/banner-1.webp"
            alt="Group Tours Northern Pakistan"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Adventure • Comradery • Discovery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Group & Corporate Tours
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Scheduled departures for student batches, university alumni, friends, and corporate organizations departing from Nawabshah and Sindh.
          </p>
        </div>
      </section>

      {/* Group Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Dedicated Fleet</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Spacious AC Saloon Coasters and luxury Grand Cabins equipped with modern suspension and entertainment systems.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Exciting Group Itineraries</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Bonfire nights, barbecue dinners, river rafting stops, and guided treks to world-famous alpine lakes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-subtle space-y-2">
            <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-gray-900">Corporate Invoicing</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Formal tour agreements, verified tax invoices, and comprehensive corporate logistics support.
            </p>
          </div>
        </div>

        {/* Group Tours List */}
        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Popular Group Departures
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Contact us to reserve individual seats or book the entire coaster for your group.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {groupTours.map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        </div>

        {/* Action */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-forest-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Planning a Custom Group or Batch Trip?</h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Tell us your group size (10 to 50+ persons) and we will craft a dedicated route and budget.
            </p>
          </div>
          <a
            href={generateWhatsAppLink({
              category: "Custom Group Tour",
              message: "I am organizing a group tour and need a quotation.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-green-600" />
            <span>Chat for Group Booking</span>
          </a>
        </div>
      </section>
    </div>
  );
}
