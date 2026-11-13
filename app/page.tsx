import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  MapPin,
  ShieldCheck,
  Users,
  Heart,
  Car,
  Hotel,
  ArrowRight,
  MessageCircle,
  Phone,
  Star,
  ExternalLink,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import DestinationsMarquee from "@/components/DestinationsMarquee";
import PackageCard from "@/components/PackageCard";
import InquiryForm from "@/components/InquiryForm";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { TOUR_PACKAGES } from "@/data/tours";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

const TRUST_BENEFITS = [
  {
    icon: MapPin,
    title: "Convenient Departures from Sindh",
    desc: "Board seamlessly from Nawabshah with coordinated transit through Sindh and motorway connections to Northern gateways without stressful changes.",
  },
  {
    icon: Users,
    title: "Family Privacy & Decent Hotels",
    desc: "We strictly partner with reputable, secure hotels where families and couples enjoy complete privacy, hot water, and pleasant dining environments.",
  },
  {
    icon: Car,
    title: "Comfortable Mountain Fleet",
    desc: "Travel in AC Saloon Coasters, Toyota Grand Cabins, and dedicated 4x4 mountain jeeps handled by drivers seasoned in high-altitude routes.",
  },
  {
    icon: ShieldCheck,
    title: "Direct On-Ground Guidance",
    desc: "Our tours are supervised directly by Mohammed Murad Khan, ensuring that every checkpoint, mountain pass, and hotel check-in goes smoothly.",
  },
  {
    icon: Compass,
    title: "Customized Itinerary Planning",
    desc: "Need extra days in Hunza? Want a honeymoon retreat in Kashmir? We customize daily pacing, private vehicles, and hotel tiers to your exact liking.",
  },
  {
    icon: Phone,
    title: "24/7 Road & Emergency Support",
    desc: "Mountain weather and road conditions can change. Our continuous coordination ensures alternate routes, safe pauses, and clear updates at all times.",
  },
];

const REVIEWS_DATA = [
  {
    initials: "FK",
    name: "Farooq Khan",
    tag: "Family Tour to Azad Kashmir",
    stars: 5,
    text: "Our family tour to Neelum Valley and Taobutt was managed exceptionally well. The vehicle was comfortable from Nawabshah all the way, and the hotel in Sharda was very family-friendly.",
  },
  {
    initials: "AS",
    name: "Ali Shah",
    tag: "Group Tour from Nawabshah",
    stars: 5,
    text: "Mohammed Murad Khan is a genuine guide and thorough gentleman. He handled all checkpoint verifications and jeep arrangements for Ratti Gali without any hassle.",
  },
  {
    initials: "ZA",
    name: "Zahid Ali",
    tag: "Hunza Valley Tour",
    stars: 5,
    text: "Highly recommended travel operator in Sindh for anyone wanting to visit Hunza and Khunjerab Pass. Clear communication, safe driving, and honest service.",
  },
];

export default function HomePage() {
  // Only 2 featured tour packages on the homepage as requested
  const featuredPackages = TOUR_PACKAGES.filter((p) => p.featured).slice(0, 2);

  // Duplicated benefits list for seamless continuous marquee loop
  const duplicatedBenefits = [...TRUST_BENEFITS, ...TRUST_BENEFITS];

  return (
    <div className="w-full">
      {/* 1. Hero Section with Carousel */}
      <HeroSlider />

      {/* 2. Top Trust Indicators Strip: Continuous Left-to-Right Moving Marquee */}
      <section className="bg-forest-900 border-b border-forest-800 text-gold-200 py-2.5 sm:py-3 overflow-hidden select-none">
        <div className="marquee-track-fast flex items-center gap-8 sm:gap-12 px-4 text-xs sm:text-sm font-medium">
          {[1, 2, 3].map((_, setIdx) => (
            <React.Fragment key={setIdx}>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Nawabshah Departure & Pickups</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Users className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Family-Friendly Accommodations</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Car className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Comfortable AC Mountain Fleet</span>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap">
                <Compass className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Experienced On-Ground Tour Guides</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* 3. Top Northern Destinations Section (Touch-Draggable + Continuous Auto-scroll) */}
      <section className="py-8 sm:py-12 bg-ivory-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6">
            <div>
              <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block mb-1">
                Explore Pakistan
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Top Northern Destinations
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 max-w-xl">
                From the turquoise lakes of Kashmir to the jagged spires of the Karakoram, discover our most sought-after mountain valleys.
              </p>
            </div>
            <Link
              href="/destinations"
              className="mt-2.5 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest-800 hover:text-gold-600 transition-colors"
            >
              <span>View All 8 Valleys</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Hand-draggable and continuously auto-scrolling marquee */}
        <DestinationsMarquee />
      </section>

      {/* 4. Featured Tour Packages (Exactly 2 Packages on the Screen Page) */}
      <section className="py-8 sm:py-12 bg-white border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 sm:mb-8">
            <div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                Curated Travel Itineraries
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Featured Tour Packages
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 max-w-xl">
                Organized with comfortable transport, clean hotel stays, and verified mountain routes.
              </p>
            </div>
            <Link
              href="/packages"
              className="mt-2.5 sm:mt-0 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest-800 hover:text-gold-600 transition-colors"
            >
              <span>See All Tour Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid: Exactly 2 packages visible on mobile screen without cramping, 2 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto items-stretch">
            {featuredPackages.map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* Notice on Quotation & Zero Prices */}
          <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-xl bg-ivory-100 border border-gold-300/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center flex-shrink-0">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900">
                  Custom Group & Family Quotations
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  We customize tour plans according to your family size, vehicle choice, and preferred hotels.
                </p>
              </div>
            </div>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold transition-all whitespace-nowrap shadow-sm border border-green-300/40"
            >
              Get Custom Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 5. Trust Section: "Trusted Northern Tour Experience from Sindh" */}
      <section className="py-8 sm:py-12 bg-ivory-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block mb-1">
              Why Travel With Us
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Trusted Northern Tour Experience from Sindh
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              We take pride in transparent coordination, personal care for senior citizens and families, and genuine on-the-ground experience.
            </p>
          </div>
        </div>

        {/* Continuous Left-to-Right Moving Track with 1.5 visible boxes on mobile screen */}
        <div className="w-full relative overflow-hidden py-2">
          <div className="marquee-track-fast flex gap-4 sm:gap-6 px-4">
            {duplicatedBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.title}-${idx}`}
                  className="w-[72vw] sm:w-[45vw] md:w-80 flex-shrink-0 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/90 shadow-subtle hover:border-gold-400/60 transition-all flex flex-col justify-start"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center mb-3 flex-shrink-0">
                    <Icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Travel Services Section */}
      <section className="py-8 sm:py-12 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
              What We Offer
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Our Complete Travel Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              Comprehensive arrangements designed to make your journey through Northern Pakistan seamless and memorable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-4">
            <Link
              href="/family-tours"
              className="p-3 sm:p-4 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 hover:border-gold-400/60 text-center transition-all group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-800 group-hover:bg-gold-500 group-hover:text-forest-950 text-gold-300 flex items-center justify-center mx-auto mb-2 transition-colors">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300">
                Family Tours
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
                Leisure pace & safety
              </p>
            </Link>

            <Link
              href="/group-tours"
              className="p-3 sm:p-4 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 hover:border-gold-400/60 text-center transition-all group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-800 group-hover:bg-gold-500 group-hover:text-forest-950 text-gold-300 flex items-center justify-center mx-auto mb-2 transition-colors">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300">
                Group Tours
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
                Scheduled departures
              </p>
            </Link>

            <Link
              href="/honeymoon-tours"
              className="p-3 sm:p-4 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 hover:border-gold-400/60 text-center transition-all group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-800 group-hover:bg-gold-500 group-hover:text-forest-950 text-gold-300 flex items-center justify-center mx-auto mb-2 transition-colors">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300">
                Honeymoon
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
                Private romantic retreats
              </p>
            </Link>

            <Link
              href="/customized-tours"
              className="p-3 sm:p-4 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 hover:border-gold-400/60 text-center transition-all group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-800 group-hover:bg-gold-500 group-hover:text-forest-950 text-gold-300 flex items-center justify-center mx-auto mb-2 transition-colors">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300">
                Custom Tours
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
                Corporate & batch plans
              </p>
            </Link>

            <div className="p-3 sm:p-4 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-center transition-all group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-800 group-hover:bg-gold-500 group-hover:text-forest-950 text-gold-300 flex items-center justify-center mx-auto mb-2 transition-colors">
                <Hotel className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                Hotel Bookings
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
                Verified resort stays
              </p>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-center transition-all group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-forest-800 group-hover:bg-gold-500 group-hover:text-forest-950 text-gold-300 flex items-center justify-center mx-auto mb-2 transition-colors">
                <Car className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white">
                4x4 Transport
              </h3>
              <p className="text-[10px] text-gray-400 mt-0.5 hidden sm:block">
                Coasters & safari jeeps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Authentic Tour Moments & Founder Profile */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Left Column: Founder & Story */}
            <div className="lg:col-span-5 space-y-3.5">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block">
                Meet the Tour Leader
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Mohammed Murad Khan
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-forest-700">
                Founder & Lead Tour Operator, Khan Tours Nawabshah
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                With years of hands-on experience guiding tour parties through Pakistan's rugged northern terrains, Mohammed Murad Khan personally coordinates group journeys, road halts, security clearances, and accommodation standards.
              </p>

              <blockquote className="p-3.5 sm:p-4 rounded-xl bg-ivory-100 border-l-4 border-gold-400 text-xs sm:text-sm italic text-gray-700">
                "Our mission is simple: to make the awe-inspiring beauty of Northern Pakistan accessible, safe, and comfortable for every family, student, and couple traveling from Sindh."
              </blockquote>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href="tel:+923002870384"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call: {DISPLAY_WHATSAPP}</span>
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 hover:border-forest-700 text-gray-700 text-xs font-semibold transition-colors"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Genuine Photos Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-subtle bg-forest-950">
                <Image
                  src="/images/founder/mohammed-murad-khan-snowfall.webp"
                  alt="Mohammed Murad Khan in snowfall"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white font-medium">
                  Snowfall Experience
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-subtle bg-forest-950">
                <Image
                  src="/images/destinations/taobutt-neelum-valley.webp"
                  alt="Taobutt Neelum Valley sign"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white font-medium">
                  Taobutt, Neelum Valley
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-subtle bg-forest-950">
                <Image
                  src="/images/destinations/ratti-gali-lake.webp"
                  alt="Ratti Gali glacial lake"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white font-medium">
                  Ratti Gali Glacial Lake
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-subtle bg-forest-950">
                <Image
                  src="/images/tours/4x4-mountain-jeep-safari.webp"
                  alt="4x4 mountain safari jeep"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white font-medium">
                  4x4 Mountain Jeep Safari
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-subtle bg-forest-950">
                <Image
                  src="/images/destinations/hunza-passu-cones.webp"
                  alt="Passu Cones in Hunza"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white font-medium">
                  Passu Cones, Hunza
                </div>
              </div>

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-subtle bg-forest-950">
                <Image
                  src="/images/destinations/babusar-pass-snow.webp"
                  alt="Babusar Top snowy pass"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black/80 to-transparent text-[10px] text-white font-medium">
                  Babusar Pass (4,173m)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Verified Reviews (Touch-Draggable + Continuous Auto-scroll) */}
      <section className="py-8 sm:py-12 bg-ivory-100 border-t border-gray-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-7">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block mb-1">
                Traveler Feedback
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Verified Customer Reviews
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
                Real feedback from travelers who explored the Northern Areas with Khan Tours Nawabshah.
              </p>
            </div>
            <a
              href="https://g.page/r/CQcn7xzDEo3WEBE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-forest-900 hover:bg-forest-800 text-gold-300 text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <div className="flex items-center text-yellow-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-white text-xs sm:text-sm">Post Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          </div>
        </div>

        {/* Hand-draggable and continuously auto-scrolling reviews marquee */}
        <ReviewsMarquee reviews={REVIEWS_DATA} />
      </section>

      {/* 9. Booking & Inquiry Form Anchor Section */}
      <section id="inquiry" className="py-8 sm:py-12 bg-white border-t border-gray-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>

      {/* 10. Final Call to Action Banner */}
      <section className="py-10 sm:py-14 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3.5">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Ready for the Mountains?
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Your Next Adventure Starts with Khan Tours
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Whether you want a private family cabin in Hunza, a scenic honeymoon in Neelum Valley, or a thrilling group safari to Skardu, we are here to assist.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all border border-green-300/40"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Plan Your Trip on WhatsApp</span>
            </a>
            <a
              href="tel:+923002870384"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-xl border border-white/20 transition-all"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {DISPLAY_WHATSAPP}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
