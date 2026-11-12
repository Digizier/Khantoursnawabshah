import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  XCircle,
  MessageCircle,
  Phone,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
  Compass,
} from "lucide-react";
import { TOUR_PACKAGES, TourPackage } from "@/data/tours";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";
import InquiryForm from "@/components/InquiryForm";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TOUR_PACKAGES.map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOUR_PACKAGES.find((p) => p.slug === slug);
  if (!tour) return { title: "Package Not Found" };

  return {
    title: `${tour.title} | Khan Tours Nawabshah`,
    description: `${tour.summary} Departures from Nawabshah, Sindh. Organized by Khan Tours Nawabshah.`,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = TOUR_PACKAGES.find((p) => p.slug === slug);

  if (!tour) {
    notFound();
  }

  const waLink = generateWhatsAppLink({
    packageTitle: tour.title,
    destination: tour.destination,
    category: tour.categoryLabel,
  });

  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-forest-800 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/packages" className="hover:text-forest-800 transition-colors">
            Tour Packages
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-gray-900 font-semibold truncate max-w-xs sm:max-w-md">
            {tour.title}
          </span>
        </div>
      </div>

      {/* Package Hero Banner */}
      <section className="relative w-full h-[360px] sm:h-[440px] md:h-[500px] bg-forest-950 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
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
                {tour.categoryLabel}
              </span>
              <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span>{tour.duration}</span>
              </span>
              <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                <span>Departing from {tour.departureFrom}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {tour.title}
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 max-w-2xl leading-relaxed">
              {tour.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Inquiry Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Itinerary, Inclusions, Overview (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-forest-800 pl-3">
                Tour Overview
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {tour.overview}
              </p>

              {/* Highlights List */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-3">
                  Key Tour Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Day-by-Day Itinerary */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle space-y-6">
              <div>
                <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                  Schedule & Route
                </span>
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 border-l-4 border-forest-800 pl-3">
                  Day-by-Day Itinerary
                </h2>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-forest-100">
                {tour.itinerary.map((item) => (
                  <div key={item.day} className="relative flex items-start gap-4">
                    <div className="relative z-10 w-7 h-7 rounded-full bg-forest-900 text-gold-300 font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-sm border border-gold-400/40">
                      {item.day}
                    </div>
                    <div className="flex-1 bg-ivory-50 p-4 rounded-xl border border-gray-200/70">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">
                        Day {item.day}: {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Included & Excluded Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-subtle space-y-3">
                <h3 className="text-sm font-bold text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  What Is Included
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {tour.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-200/80 shadow-subtle space-y-3">
                <h3 className="text-sm font-bold text-red-800 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-red-500" />
                  What Is Excluded
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {tour.excluded.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Travel Advice */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2 text-xs sm:text-sm text-amber-900">
              <div className="flex items-center gap-2 font-bold text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Important Travel Information</span>
              </div>
              <p className="leading-relaxed">
                • Please carry your original National Identity Card (CNIC) or Form-B for all family members as government checkpoints verify documents in Northern Areas.
                <br />
                • Weather in high-altitude passes can drop rapidly even in peak summer; pack windbreakers, light thermal wear, and sturdy walking shoes.
                <br />
                • Khan Tours reserves the right to adjust daily sequences in case of unforeseen road maintenance or natural weather events to guarantee passenger safety.
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Booking / WhatsApp Action Box (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* WhatsApp Quick Inquiry Card */}
              <div className="bg-forest-950 text-white rounded-2xl p-6 border border-forest-800 shadow-card space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 text-gold-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Verified Package Inquiry</span>
                </div>

                <h3 className="text-lg font-bold">
                  Inquire About This Package
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  Chat directly with Mohammed Murad Khan to check upcoming departure dates, vehicle options, and custom family room arrangements.
                </p>

                <div className="pt-2 space-y-2.5">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-green-600" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+923002870384"
                    className="w-full py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>Call: {DISPLAY_WHATSAPP}</span>
                  </a>
                </div>

                <div className="text-[11px] text-gray-400 text-center pt-1 border-t border-forest-900">
                  Suitable for: <strong className="text-white">{tour.suitableFor}</strong>
                </div>
              </div>

              {/* Booking Form Card */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200/80 shadow-subtle">
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  Send Booking Request
                </h4>
                <InquiryForm
                  defaultDestination={tour.destination}
                  defaultPackage={tour.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
