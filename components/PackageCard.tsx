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
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200/90 hover:border-gold-400/80 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Prominent High-Quality Full-Width Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-forest-950 flex-shrink-0">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-black/25 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="bg-forest-900/90 text-gold-300 text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-md border border-forest-800 shadow-sm">
            {tour.categoryLabel}
          </span>
          <span className="bg-black/60 text-white text-xs font-semibold px-2 py-1 rounded-md backdrop-blur-md flex items-center gap-1 border border-white/10 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>{tour.duration}</span>
          </span>
        </div>

        {/* Bottom Destination Tag */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-1.5 text-white text-xs sm:text-sm font-semibold drop-shadow pointer-events-none">
          <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
          <span className="truncate">{tour.destination}</span>
        </div>
      </div>

      {/* Card Body with Full Clear Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-forest-700 transition-colors leading-snug">
            <Link href={`/packages/${tour.slug}`} className="hover:underline">
              {tour.title}
            </Link>
          </h3>

          {/* Summary */}
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {tour.summary}
          </p>

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <ul className="pt-1.5 space-y-1.5 border-t border-gray-100">
              {tour.highlights.slice(0, 3).map((h, i) => (
                <li
                  key={i}
                  className="text-xs text-gray-700 flex items-center gap-2"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">{h}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Card Footer CTAs */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2.5">
          <Link
            href={`/packages/${tour.slug}`}
            className="flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold text-center text-forest-900 bg-forest-50 hover:bg-forest-100 rounded-xl transition-colors flex items-center justify-center gap-1 border border-forest-100"
          >
            <span>Details</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold text-center text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 border border-green-300/30"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}