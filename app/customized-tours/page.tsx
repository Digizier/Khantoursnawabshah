import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Compass, CheckCircle2, Car, Hotel, Calendar, MessageCircle, Phone } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Customized Tour Planning | Khan Tours Nawabshah",
  description:
    "Design your own custom tour to Northern Pakistan from Nawabshah, Sindh. Pick your vehicle, dates, and hotels for family, friends, or corporate groups.",
};

export default function CustomizedToursPage() {
  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Hero */}
      <section className="relative py-14 sm:py-20 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/tours/4x4-mountain-jeep-safari.webp"
            alt="Customized Tour Planning"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Tailor-Made Travel
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Customized Tour Planning
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your travel dates, your chosen companions, and your favorite destinations. We build complete personalized travel solutions departing from Nawabshah or any city in Sindh.
          </p>
        </div>
      </section>

      {/* How It Works & Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Process (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-1">
                How It Works
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
                Plan Your Private Journey in 4 Easy Steps
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-subtle flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Choose Your Valleys</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Select any combination: Hunza, Skardu, Neelum Valley, Naran, Swat, or Astore/Minimarg.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-subtle flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Select Your Transport</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Dedicated Toyota Corolla, Prado, Hiace Grand Cabin, or 29-seater Saloon Coaster.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-subtle flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Set Your Dates & Hotels</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Choose standard or luxury hotel categories with verified family privacy and mountain views.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-subtle flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-forest-900 text-gold-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Get Transparent Quote</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Mohammed Murad Khan reviews your plan and sends a detailed day-wise quote via WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-forest-950 text-white space-y-3">
              <h4 className="text-sm font-bold text-gold-300">Need Instant Assistance?</h4>
              <p className="text-xs text-gray-300">
                Call our helpline directly to speak with our travel manager:
              </p>
              <a
                href="tel:+923002870384"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-forest-900 hover:bg-forest-800 px-4 py-2 rounded-full border border-forest-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>{DISPLAY_WHATSAPP}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <InquiryForm defaultDestination="Custom Multi-Destination" />
          </div>
        </div>
      </section>
    </div>
  );
}
