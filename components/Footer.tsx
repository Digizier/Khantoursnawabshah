import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Star,
  ShieldCheck,
} from "lucide-react";
import { DISPLAY_WHATSAPP } from "@/lib/whatsapp";
import SocialIcons from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 text-gray-300 border-t border-forest-900 py-8 sm:py-12 pb-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Mobile-friendly layout without empty vertical dead space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-forest-900/80">
          {/* Column 1: Brand & About */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <Image
                  src="/images/logo/khan-tours-header-logo.png"
                  alt="Khan Tours Nawabshah Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white uppercase tracking-wider block font-sans">
                  Khan Tours
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest block font-sans">
                  Nawabshah
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Professional travel & tourism service based in Nawabshah, Sindh.
              Offering organized family tours, group departures, honeymoon
              trips, and custom tours to Pakistan's majestic Northern Areas.
            </p>
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-900 border border-forest-800 text-[10px] sm:text-[11px] font-medium text-gold-300">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                "Explore the Nature With Us!"
              </span>
            </div>
          </div>

          {/* Column 2 & 3: Quick Links & Destinations Side-by-Side on Mobile (Eliminates dead vertical space) */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-2">
            {/* Tour Services */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-3.5 border-l-2 border-gold-400 pl-2">
                Services
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs">
                <li>
                  <Link
                    href="/family-tours"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Family Tours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/group-tours"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Group Departures
                  </Link>
                </li>
                <li>
                  <Link
                    href="/honeymoon-tours"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Honeymoon Trips
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customized-tours"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Custom Planning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    All Packages
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Top Destinations */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-3.5 border-l-2 border-gold-400 pl-2">
                Destinations
              </h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs">
                <li>
                  <Link
                    href="/destinations/hunza-valley"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Hunza Valley
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/skardu-baltistan"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Skardu & Deosai
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/basho-valley"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Basho Valley
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/azad-kashmir"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Neelum & Taobutt
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/naran-kaghan"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Naran & Babusar
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/swat-valley"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Swat & Kalam
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations/astore-valley"
                    className="text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    Astore & Minimarg
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Contact & Real SVG Channels */}
          <div className="space-y-3">
            <h3 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-2.5 sm:mb-3.5 border-l-2 border-gold-400 pl-2">
              Contact Us
            </h3>
            <div className="space-y-1.5 sm:space-y-2 text-xs">
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>Nawabshah, Sindh, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+923002870384"
                  className="text-gray-300 hover:text-gold-300 transition-colors font-medium"
                >
                  {DISPLAY_WHATSAPP} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <a
                  href="tel:+923008900025"
                  className="text-gray-300 hover:text-gold-300 transition-colors font-medium"
                >
                  0300-8900025 / 0333-8900026
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                <a
                  href="mailto:khantoursnawabshah@gmail.com"
                  className="text-gray-300 hover:text-gold-300 transition-colors break-all"
                >
                  khantoursnawabshah@gmail.com
                </a>
              </div>
            </div>

            {/* Google Reviews Badge */}
            <div className="pt-1">
              <a
                href="https://g.page/r/CQcn7xzDEo3WEBE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest-900 hover:bg-forest-800 border border-forest-800 text-xs text-gold-300 transition-colors"
              >
                <div className="flex items-center text-yellow-400">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <span className="font-semibold text-white text-[11px]">Google Reviews</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>

            {/* Real Brand SVG Social Media Channels */}
            <div className="pt-1">
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">
                Official Channels
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-2">
          <p>
            © {currentYear} Khan Tours Nawabshah. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
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
