import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations in Northern Pakistan | Khan Tours Nawabshah",
  description:
    "Explore the top travel destinations of Northern Pakistan with Khan Tours Nawabshah: Hunza Valley, Skardu Baltistan, Basho Valley, Azad Kashmir, Naran Kaghan, Swat, Astore, Minimarg, and Domail.",
};

export default function DestinationsPage() {
  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Banner */}
      <section className="relative py-12 sm:py-16 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/banner-3.webp"
            alt="Pakistan Destinations"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            The Crown of Pakistan
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Explore Northern Destinations
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            From the high alpine passes of Babusar and Khunjerab to the peaceful waters of Attabad, Shangrila, and Basho Valley, plan your journey with Khan Tours.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {DESTINATIONS.map((dest) => (
            <Link
              key={dest.id}
              href={`/destinations/${dest.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 hover:border-gold-400/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-forest-950">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="bg-forest-900/90 text-gold-300 text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-forest-800">
                    {dest.region}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-bold drop-shadow">
                  <span>{dest.name}</span>
                  <span className="text-[10px] text-gold-300 font-normal">
                    {dest.altitude}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-forest-700 transition-colors">
                    {dest.tagline}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                    {dest.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-forest-800 group-hover:text-gold-600">
                  <span>Explore Guide & Tours</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
