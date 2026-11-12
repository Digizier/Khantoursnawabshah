import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Star,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { generateWhatsAppLink, DISPLAY_WHATSAPP, CALL_NUMBERS } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact Us | Khan Tours Nawabshah",
  description:
    "Get in touch with Khan Tours Nawabshah, Sindh. Call 0300-2870384, chat on WhatsApp, or visit our office for Northern Pakistan tour bookings.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/destinations/kaghan-river-stream.webp"
            alt="Contact Khan Tours Nawabshah"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            We Are Here To Assist You
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Contact Khan Tours Nawabshah
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have questions about tour dates, seat availability, or custom family packages? Reach out to our team in Nawabshah.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards & Ecosystem (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Office Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-forest-900 text-gold-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900">
                    Office Location
                  </h3>
                  <p className="text-xs text-gray-500">Nawabshah, Sindh, Pakistan</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Khan Tours Nawabshah is conveniently located in Nawabshah. We serve travelers across Shaheed Benazirabad, Sukkur, Hyderabad, and throughout Sindh.
              </p>

              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/zEqHLyuVoGfpGyUr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest-50 hover:bg-forest-100 text-forest-800 text-xs font-bold transition-colors"
                >
                  <MapPin className="w-4 h-4 text-forest-700" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Lines */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle space-y-4">
              <h3 className="text-sm font-bold text-gray-900 border-l-3 border-forest-800 pl-2">
                Direct Contact Lines
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-ivory-50 border border-gray-200/70">
                  <div className="flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    <div>
                      <div className="font-bold text-gray-900">{DISPLAY_WHATSAPP}</div>
                      <div className="text-[10px] text-gray-500">WhatsApp & Direct Line</div>
                    </div>
                  </div>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs"
                  >
                    Chat
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-ivory-50 border border-gray-200/70">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-bold text-gray-900">0300-8900025</div>
                      <div className="text-[10px] text-gray-500">Helpline 1</div>
                    </div>
                  </div>
                  <a
                    href="tel:+923008900025"
                    className="px-3 py-1 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-ivory-50 border border-gray-200/70">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-forest-700" />
                    <div>
                      <div className="font-bold text-gray-900">0333-8900026</div>
                      <div className="text-[10px] text-gray-500">Helpline 2</div>
                    </div>
                  </div>
                  <a
                    href="tel:+923338900026"
                    className="px-3 py-1 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-xs"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-ivory-50 border border-gray-200/70">
                  <Mail className="w-4 h-4 text-forest-700 flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:khantoursnawabshah@gmail.com"
                      className="font-bold text-gray-900 hover:text-forest-700 text-xs break-all"
                    >
                      khantoursnawabshah@gmail.com
                    </a>
                    <div className="text-[10px] text-gray-500">Official Email</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Review Links */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-subtle space-y-3">
              <h3 className="text-sm font-bold text-gray-900">Follow Our Tour Updates</h3>
              <p className="text-xs text-gray-500">
                Watch real tour videos, daily reels, and customer feedback across our official channels:
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                <a
                  href="https://www.facebook.com/share/1FLwVYqaTP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-50 hover:bg-forest-50 border border-gray-200 font-semibold text-gray-700 hover:text-forest-900 flex items-center justify-between"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>

                <a
                  href="https://www.instagram.com/khantoursnawabshah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-50 hover:bg-forest-50 border border-gray-200 font-semibold text-gray-700 hover:text-forest-900 flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>

                <a
                  href="https://youtube.com/@mohammadmuradkhan6095"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-50 hover:bg-forest-50 border border-gray-200 font-semibold text-gray-700 hover:text-forest-900 flex items-center justify-between"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>

                <a
                  href="https://www.tiktok.com/@mohammed.murad.kh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-50 hover:bg-forest-50 border border-gray-200 font-semibold text-gray-700 hover:text-forest-900 flex items-center justify-between"
                >
                  <span>TikTok</span>
                  <ExternalLink className="w-3 h-3 text-gray-400" />
                </a>
              </div>

              {/* Google Reviews Direct Card */}
              <div className="pt-2">
                <a
                  href="https://g.page/r/CQcn7xzDEo3WEBE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-forest-900 hover:bg-forest-800 text-gold-300 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <span className="text-white font-bold text-xs">Review Us on Google</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
