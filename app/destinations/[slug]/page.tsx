import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  MapPin,
  Calendar,
  Mountain,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Phone,
  ChevronRight,
  ArrowRight,
  Video,
  Camera,
} from "lucide-react";
import { DESTINATIONS, Destination } from "@/data/destinations";
import { TOUR_PACKAGES } from "@/data/tours";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";
import PackageCard from "@/components/PackageCard";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return DESTINATIONS.map((dest) => ({
    slug: dest.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);
  if (!dest) return { title: "Destination Not Found" };

  return {
    title: `${dest.name} Tour Guide | Khan Tours Nawabshah`,
    description: `Complete travel guide for ${dest.name} (${dest.region}). Organized tours, family packages, and 4x4 transport departing from Nawabshah, Sindh.`,
  };
}

export default async function DestinationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const dest = DESTINATIONS.find((d) => d.slug === slug);

  if (!dest) {
    notFound();
  }

  // Related tours matching this destination or region
  const relatedTours = TOUR_PACKAGES.filter(
    (p) =>
      p.destinationSlug === dest.slug ||
      p.destination.toLowerCase().includes(dest.name.toLowerCase().split(" ")[0])
  );

  const waLink = generateWhatsAppLink({
    destination: `${dest.name} (${dest.region})`,
  });

  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-forest-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/destinations" className="hover:text-forest-800 transition-colors">
            Destinations
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold">{dest.name}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] bg-forest-950 overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-black/30" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8 sm:pb-12 text-white">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-forest-900/90 text-gold-300 text-xs font-bold px-3 py-1 rounded-full border border-forest-800 backdrop-blur-md">
                {dest.region}
              </span>
              <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                <Mountain className="w-3.5 h-3.5 text-gold-400" />
                <span>Altitude: {dest.altitude}</span>
              </span>
              <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-400" />
                <span>Best Time: {dest.bestTime}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {dest.name}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gold-200 font-medium">
              {dest.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Destination Content & Tour Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-forest-800 pl-3">
                About {dest.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {dest.description}
              </p>
            </div>

            {/* Authentic On-Ground Video (if available) */}
            {dest.video && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-forest-800 pl-3">
                  <Video className="w-5 h-5 text-forest-800" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    On-Ground Tour Video: {dest.name}
                  </h2>
                </div>
                <div className="relative rounded-xl overflow-hidden bg-black aspect-video max-w-2xl mx-auto shadow-md">
                  <video
                    controls
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    <source src={dest.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-xs text-center text-gray-500 italic">
                  Authentic footage captured during Khan Tours on-ground northern expeditions.
                </p>
              </div>
            )}

            {/* Authentic Photo Gallery (if available) */}
            {dest.gallery && dest.gallery.length > 0 && (
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-4">
                <div className="flex items-center gap-2 border-l-4 border-forest-800 pl-3">
                  <Camera className="w-5 h-5 text-forest-800" />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Authentic Captured Memories: {dest.name}
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {dest.gallery.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      className="relative h-48 sm:h-52 rounded-xl overflow-hidden border border-gray-100 group shadow-sm bg-gray-50"
                    >
                      <Image
                        src={imgSrc}
                        alt={`${dest.name} authentic tour scene ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Top Attractions Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-forest-800 pl-3">
                Must-Visit Attractions in {dest.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.attractions.map((att, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-ivory-50 border border-gray-200/80 flex items-start gap-2.5 text-xs sm:text-sm text-gray-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{att}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Advice & Mountain Tips */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-forest-800 pl-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-gold-600" />
                <span>Travel Advice for {dest.name}</span>
              </h2>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                {dest.travelTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-forest-700 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Tour Packages */}
            {relatedTours.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    Available Tour Packages for {dest.name}
                  </h2>
                  <Link
                    href="/packages"
                    className="text-xs font-bold text-forest-800 hover:text-gold-600 flex items-center gap-1"
                  >
                    <span>All Packages</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
                  {relatedTours.map((t) => (
                    <PackageCard key={t.id} tour={t} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Inquiry Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-forest-950 text-white rounded-2xl p-6 border border-forest-800 shadow-card space-y-4">
              <span className="bg-forest-900 text-gold-300 text-xs font-bold px-3 py-1 rounded-full border border-forest-800 inline-block">
                Custom Itinerary Planning
              </span>

              <h3 className="text-xl font-bold">
                Visit {dest.name} with Khan Tours
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                Planning a trip to {dest.name}? We arrange private vehicles (Coasters, Grand Cabins, 4x4 Jeeps), family hotel reservations, and custom daily itineraries departing from Nawabshah or Sindh.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-green-600" />
                  <span>Plan {dest.name} on WhatsApp</span>
                </a>

                <a
                  href="tel:+923002870384"
                  className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call: {DISPLAY_WHATSAPP}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
