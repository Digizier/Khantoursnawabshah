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
    <div className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/90 hover:border-gold-400/70 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Image Container with 16:9 Aspect Ratio */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-forest-950">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/85 via-forest-950/20 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-1.5 left-1.5 right-1.5 sm:top-2.5 sm:left-2.5 sm:right-2.5 flex items-center justify-between pointer-events-none">
          <span className="bg-forest-900/90 text-gold-300 text-[9px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded backdrop-blur-sm border border-forest-800">
            {tour.categoryLabel}
          </span>
          <span className="bg-black/60 text-white text-[9px] sm:text-xs font-medium px-1.5 py-0.5 sm:px-2 sm:py-1 rounded backdrop-blur-sm flex items-center gap-0.5 sm:gap-1">
            <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gold-400" />
            <span>{tour.duration.split(" ")[0]}D</span>
          </span>
        </div>

        {/* Bottom Destination Tag */}
        <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2.5 sm:right-2.5 flex items-center gap-1 text-white text-[10px] sm:text-xs font-semibold drop-shadow">
          <MapPin className="w-3 h-3 text-gold-400 flex-shrink-0" />
          <span className="truncate">{tour.destination}</span>
        </div>
      </div>

      {/* Card Body: Optimized for 2-column mobile & 4-column desktop */}
      <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2">
        <div className="space-y-1 sm:space-y-2">
          <h3 className="font-bold text-xs sm:text-sm md:text-base text-gray-900 line-clamp-2 group-hover:text-forest-700 transition-colors leading-snug">
            <Link href={`/packages/${tour.slug}`}>
              {tour.title}
            </Link>
          </h3>

          <p className="text-[10px] sm:text-xs text-gray-600 line-clamp-2 leading-relaxed hidden sm:block">
            {tour.summary}
          </p>

          {/* Quick Highlights (Desktop only to keep 2-column mobile compact) */}
          <ul className="pt-1 space-y-1 hidden sm:block">
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

        {/* Card Footer CTAs: 2 buttons fitting neatly in 2 columns */}
        <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-1 sm:gap-1.5">
          <Link
            href={`/packages/${tour.slug}`}
            className="w-full sm:flex-1 py-1.5 px-1 sm:py-2 sm:px-2.5 text-[10px] sm:text-xs font-semibold text-center text-forest-900 bg-forest-50 hover:bg-forest-100 rounded-lg transition-colors flex items-center justify-center gap-0.5 border border-forest-100"
          >
            <span>Details</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-1.5 px-1 sm:py-2 sm:px-2.5 text-[10px] sm:text-xs font-semibold text-center text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg transition-colors shadow-sm flex items-center justify-center gap-1"
          >
            <MessageCircle className="w-3 h-3 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
