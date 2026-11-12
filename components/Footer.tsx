import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ExternalLink,
  Star,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-gray-300 border-t border-forest-900 pt-10 pb-20 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-forest-900/80">
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo/khan-tours-header-logo.png"
                  alt="Khan Tours Nawabshah Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white uppercase tracking-wider block font-sans">
                  Khan Tours
                </span>
                <span className="text-xs font-semibold text-gold-400 uppercase tracking-widest block font-sans">
                  Nawabshah
                </span>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Professional travel & tourism service based in Nawabshah, Sindh.
              Offering organized family tours, group departures, honeymoon
              trips, and custom tours to Pakistan's majestic Northern Areas.
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-[11px] font-medium text-gold-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                "Explore the Nature With Us!"
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links & Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 border-l-2 border-gold-400 pl-2">
              Tour Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/family-tours"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Family Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/group-tours"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Group & Corporate Tours
                </Link>
              </li>
              <li>
                <Link
                  href="/honeymoon-tours"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Honeymoon Retreats
                </Link>
              </li>
              <li>
                <Link
                  href="/customized-tours"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Customized Tour Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  All Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  About Khan Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Top Destinations */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 border-l-2 border-gold-400 pl-2">
              Top Destinations
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/destinations/hunza-valley"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Hunza & Khunjerab Pass
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/skardu-baltistan"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Skardu & Deosai Plains
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/azad-kashmir"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Neelum Valley & Ratti Gali
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/naran-kaghan"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Naran Kaghan & Babusar Top
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/swat-valley"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Swat Valley & Malam Jabba
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations/astore-valley"
                  className="text-gray-400 hover:text-gold-300 transition-colors"
                >
                  Astore, Minimarg & Domail
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Ecosystem */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3.5 border-l-2 border-gold-400 pl-2">
              Get in Touch
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Nawabshah, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+923002870384"
                  className="text-gray-300 hover:text-gold-300 transition-colors font-medium"
                >
                  0300-2870384 (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+923008900025"
                  className="text-gray-300 hover:text-gold-300 transition-colors font-medium"
                >
                  0300-8900025 / 0333-8900026
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:khantoursnawabshah@gmail.com"
                  className="text-gray-300 hover:text-gold-300 transition-colors break-all"
                >
                  khantoursnawabshah@gmail.com
                </a>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="pt-2">
              <a
                href="https://g.page/r/CQcn7xzDEo3WEBE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-900 hover:bg-forest-800 border border-forest-800 text-xs text-gold-300 transition-colors"
              >
                <div className="flex items-center text-yellow-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-semibold text-white">Review Us on Google</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/1FLwVYqaTP/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gray-300 flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">f</span>
              </a>
              <a
                href="https://www.instagram.com/khantoursnawabshah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gray-300 flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
              <a
                href="https://www.tiktok.com/@mohammed.murad.kh4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Account"
                className="w-8 h-8 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gray-300 flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">tt</span>
              </a>
              <a
                href="https://youtube.com/@mohammadmuradkhan6095"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-8 h-8 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gray-300 flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">yt</span>
              </a>
              <a
                href="https://maps.app.goo.gl/zEqHLyuVoGfpGyUr7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="w-8 h-8 rounded-full bg-forest-900 hover:bg-gold-500 hover:text-forest-950 text-gray-300 flex items-center justify-center transition-all duration-200"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>
            © {currentYear} Khan Tours Nawabshah. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-gold-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-gold-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="hover:text-gold-300 transition-colors"
            >
              Nawabshah HQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
