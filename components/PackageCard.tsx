import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, MessageCircle, ChevronRight, Check } from "lucide-react";
import { TourPackage } from "@/data/tours";
import { generateWhatsAppLink } from "@/lib/whatsapp";

interface PackageCardProps {
  tour: TourPackage;
}

export default function PackageCard({ tour }: PackageCardProps) {
  const waLink = generateWhatsAppLink({
    packageTitle: tour.title,
    destination: tour.destination,
    category: tour.categoryLabel,
  });

  return (
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/80 hover:border-gold-400/60 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-forest-950">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 flex items-center justify-between pointer-events-none">
          <span className="bg-forest-900/90 text-gold-300 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md backdrop-blur-sm border border-forest-800">
            {tour.categoryLabel}
          </span>
          <span className="bg-black/60 text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-md backdrop-blur-sm flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold-400" />
            <span>{tour.duration.split(" ")[0]} Days</span>
          </span>
        </div>

        {/* Bottom Destination Tag */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1 text-white text-[11px] sm:text-xs font-semibold drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          <span className="truncate">{tour.destination}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 group-hover:text-forest-700 transition-colors leading-snug">
            <Link href={`/packages/${tour.slug}`}>
              {tour.title}
            </Link>
          </h3>

          <p className="mt-1 text-[11px] sm:text-xs text-gray-500 line-clamp-2 hidden sm:block">
            {tour.summary}
          </p>

          {/* Quick Highlights (Desktop only to keep mobile cards compact) */}
          <ul className="mt-2.5 space-y-1 hidden sm:block">
            {tour.highlights.slice(0, 2).map((h, i) => (
              <li
                key={i}
                className="text-[11px] text-gray-600 flex items-center gap-1.5"
              >
                <Check className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span className="truncate">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Footer CTAs */}
        <div className="mt-3 pt-2.5 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2">
          <Link
            href={`/packages/${tour.slug}`}
            className="flex-1 text-center py-1.5 px-2 text-[11px] sm:text-xs font-semibold text-forest-800 bg-forest-50 hover:bg-forest-100 rounded-lg transition-colors flex items-center justify-center gap-1"
          >
            <span>Details</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-1.5 px-2 text-[11px] sm:text-xs font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-1"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-green-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
