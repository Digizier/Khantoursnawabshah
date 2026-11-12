import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  MapPin,
  Users,
  Compass,
  Car,
  Heart,
  Phone,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About Us | Khan Tours Nawabshah",
  description:
    "Learn about Khan Tours Nawabshah, founded by Mohammed Murad Khan. Dedicated to safe, memorable, and affordable family and group tours to Northern Pakistan from Sindh.",
};

export default function AboutPage() {
  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Page Header Banner */}
      <section className="relative py-14 sm:py-20 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/hero/banner-2.webp"
            alt="Northern Pakistan Valleys"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Who We Are
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About Khan Tours Nawabshah
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your trusted travel and tourism partner connecting travelers from Sindh to the breathtaking majesty of Pakistan's Northern Areas.
          </p>
        </div>
      </section>

      {/* Main Story & Founder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Founder Photo with Authentic Badge */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card border border-gray-200 bg-forest-950">
              <Image
                src="/images/founder/mohammed-murad-khan-founder.webp"
                alt="Mohammed Murad Khan - Founder of Khan Tours Nawabshah"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent text-white">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-wider block">
                  Lead Tour Guide & Founder
                </span>
                <h3 className="text-lg font-bold">Mohammed Murad Khan</h3>
                <p className="text-xs text-gray-300">Nawabshah, Sindh, Pakistan</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-subtle flex items-center justify-between text-xs">
              <span className="text-gray-600 font-medium">Direct WhatsApp Line:</span>
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-forest-800 hover:text-forest-600 flex items-center gap-1"
              >
                <MessageCircle className="w-4 h-4 text-green-600" />
                <span>{DISPLAY_WHATSAPP}</span>
              </a>
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            <div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                "Explore the Nature With Us!"
              </h2>
            </div>

            <p>
              Khan Tours Nawabshah is an independent travel and tourism service headquartered in Nawabshah, Sindh. Established with a genuine passion for Pakistan's mountainous heritage, we specialize in organized group departures, comfortable family holiday packages, private honeymoon retreats, and custom corporate tours to the Northern Areas.
            </p>

            <p>
              We know that traveling all the way from Sindh to high-altitude regions like Gilgit-Baltistan, Khyber Pakhtunkhwa, and Azad Kashmir requires meticulous coordination. Our priority is ensuring that families, elderly passengers, and youth groups experience safe roads, dependable AC vehicles, reputable hotels, and honest hospitality without sudden hidden charges or uncomfortable detours.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Direct Local Departure</h4>
                  <p className="text-xs text-gray-600">Departures organized straight from Nawabshah, Sukkur, and Sindh.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Verified Family Stays</h4>
                  <p className="text-xs text-gray-600">Handpicked hotels with clean washrooms and family privacy.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">4x4 Mountain Fleet</h4>
                  <p className="text-xs text-gray-600">Off-road jeeps for Ratti Gali, Taobutt, Saif-ul-Malook, and Deosai.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-forest-700 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">On-Ground Leadership</h4>
                  <p className="text-xs text-gray-600">Accompanied and coordinated by experienced mountain leaders.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-green-600" />
                <span>Chat with Mohammed Murad Khan</span>
              </a>
              <Link
                href="/packages"
                className="inline-flex items-center gap-1.5 border border-forest-800 text-forest-900 hover:bg-forest-900 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-full transition-all"
              >
                <span>Browse Tour Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-12 sm:py-16 border-t border-b border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
              Our Commitments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              What Guides Khan Tours Nawabshah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-ivory-50 border border-gray-200/80">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">Passenger Safety First</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We never take risks on treacherous mountain tracks. Our drivers are seasoned professionals who understand high passes, monsoon weather, and defensive driving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-gray-200/80">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center mb-3.5">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">Family Dignity & Respect</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Traveling with family, women, and elders requires a respectful, decent environment. We ensure peaceful accommodations and separate family seating arrangements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-ivory-50 border border-gray-200/80">
              <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-300 flex items-center justify-center mb-3.5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1.5">Honest & Transparent Guidance</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                No misleading itineraries or hidden expenses. If a road is blocked or a pass is closed for snow, we inform you upfront and provide practical alternative routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Strip with Real Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-forest-700 uppercase tracking-widest block mb-1">
            Real Moments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            On the Road Across Northern Pakistan
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-forest-950">
            <Image
              src="/images/destinations/hunza-khunjerab-border.webp"
              alt="Khunjerab Pass Pak-China border"
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-forest-950">
            <Image
              src="/images/destinations/mountain-waterfall-bridge.webp"
              alt="Mountain waterfall footbridge"
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-forest-950">
            <Image
              src="/images/destinations/kaghan-river-stream.webp"
              alt="Kaghan River stream"
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden bg-forest-950">
            <Image
              src="/images/founder/mohammed-murad-khan-pakol.webp"
              alt="Mohammed Murad Khan in Pakol cap"
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
