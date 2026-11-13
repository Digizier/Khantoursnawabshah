"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  X,
  Phone,
  MessageCircle,
  MapPin,
  ChevronRight,
  Compass,
  Calendar,
  Heart,
  Users,
} from "lucide-react";
import { useUI } from "@/context/UIContext";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";
import SocialIcons from "@/components/SocialIcons";

export default function Header() {
  const pathname = usePathname();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUI();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    closeMobileMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about/" },
    { label: "Destinations", href: "/destinations/" },
    { label: "Tour Packages", href: "/packages/" },
    { label: "Family Tours", href: "/family-tours/" },
    { label: "Group Tours", href: "/group-tours/" },
    { label: "Honeymoon", href: "/honeymoon-tours/" },
    { label: "Contact", href: "/contact/" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar (Desktop & Tablet) */}
      <div className="bg-forest-950 text-gold-200 text-xs py-2 px-4 border-b border-forest-900 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Nawabshah, Sindh, Pakistan
            </span>
            <span className="hidden lg:inline text-gold-400/90 font-medium">
              ✦ "Explore the Nature With Us!"
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="tel:+923002870384"
              className="flex items-center gap-1.5 text-gray-200 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>0300-2870384</span>
            </a>
            <a
              href="tel:+923008900025"
              className="hidden lg:flex items-center gap-1.5 text-gray-200 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>0300-8900025</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn shine-effect flex items-center gap-1.5 text-white bg-[#25D366] px-3 py-1 rounded-full text-xs font-semibold hover:bg-[#20ba5a] transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-forest-900/95 backdrop-blur-md shadow-lg border-b border-forest-800 py-2 sm:py-2.5"
            : "bg-forest-900 text-white border-b border-forest-800/60 py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="Khan Tours Nawabshah Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/images/logo/khan-tours-header-logo.png"
                alt="Khan Tours Nawabshah Official Logo"
                fill
                sizes="(max-width: 640px) 44px, 48px"
                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base md:text-lg font-extrabold tracking-wider text-white uppercase font-sans leading-tight">
                Khan Tours
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-gold-400 uppercase font-sans">
                Nawabshah
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.replace(/\/$/, ""));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gold-300 bg-forest-800/90 font-bold"
                      : "text-gray-200 hover:text-gold-300 hover:bg-forest-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/booking/"
              className="px-4 py-2 text-xs font-semibold text-gold-300 border border-gold-400/50 rounded-full hover:bg-gold-500/10 transition-colors"
            >
              Plan Trip
            </Link>

            {/* Rotating + Scaling Attractive WhatsApp Button */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="whatsapp-btn shine-effect inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-lg transition-all cursor-pointer border border-green-300/40"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.849-.766-3.033-2.656-3.125-2.779-.093-.122-.734-.978-.734-1.865 0-.887.464-1.32.629-1.498.165-.178.36-.222.48-.222.12 0 .241.002.346.006.11.005.257-.042.402.308.148.359.508 1.238.552 1.328.044.09.073.196.015.313-.058.118-.088.192-.175.294-.087.102-.183.228-.262.306-.088.088-.18.183-.077.36.103.177.458.756.983 1.224.675.602 1.244.788 1.421.876.177.088.281.074.385-.045.105-.119.449-.523.569-.702.12-.179.24-.149.404-.089.165.059 1.045.492 1.225.582.18.09.3.135.345.21.045.076.045.441-.099.846z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.178L2.054 22l4.98-1.306C8.484 21.536 10.187 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.637 0-3.15-.494-4.417-1.34l-.317-.212-2.955.775.789-2.883-.233-.371C4.004 14.697 3.5 13.393 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions: Box Round-Edge Rotating WhatsApp + Professional Menu Button */}
          <div className="flex items-center gap-2.5 xl:hidden">
            {/* Attractive Rounded Box WhatsApp Button with Rotate/Scale & Shine */}
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="whatsapp-btn shine-effect min-w-[42px] min-h-[42px] w-[42px] h-[42px] rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md border border-green-300/40 focus:outline-none"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.698.077-2.222-.553-1.849-.766-3.033-2.656-3.125-2.779-.093-.122-.734-.978-.734-1.865 0-.887.464-1.32.629-1.498.165-.178.36-.222.48-.222.12 0 .241.002.346.006.11.005.257-.042.402.308.148.359.508 1.238.552 1.328.044.09.073.196.015.313-.058.118-.088.192-.175.294-.087.102-.183.228-.262.306-.088.088-.18.183-.077.36.103.177.458.756.983 1.224.675.602 1.244.788 1.421.876.177.088.281.074.385-.045.105-.119.449-.523.569-.702.12-.179.24-.149.404-.089.165.059 1.045.492 1.225.582.18.09.3.135.345.21.045.076.045.441-.099.846z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.438 5.178L2.054 22l4.98-1.306C8.484 21.536 10.187 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.637 0-3.15-.494-4.417-1.34l-.317-.212-2.955.775.789-2.883-.233-.371C4.004 14.697 3.5 13.393 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
              </svg>
            </a>

            {/* Professional Luxury Rounded Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="min-w-[42px] min-h-[42px] w-[42px] h-[42px] flex items-center justify-center rounded-xl bg-forest-800/90 hover:bg-forest-750 text-gold-300 hover:text-white border border-gold-400/40 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-gold-400/50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="w-4 h-3.5 flex flex-col justify-between items-end">
                  <span className="w-4 h-[2px] bg-gold-300 rounded-full transition-all"></span>
                  <span className="w-3 h-[2px] bg-white rounded-full transition-all"></span>
                  <span className="w-4 h-[2px] bg-gold-300 rounded-full transition-all"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Drawer Menu Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-forest-950 text-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto border-l border-forest-800">
            <div>
              {/* Drawer Header with Centered Logo */}
              <div className="p-4 border-b border-forest-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src="/images/logo/khan-tours-header-logo.png"
                      alt="Khan Tours Logo"
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider">
                      Khan Tours
                    </div>
                    <div className="text-[10px] text-gold-400 font-semibold uppercase">
                      Nawabshah
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="min-w-[42px] min-h-[42px] w-[42px] h-[42px] flex items-center justify-center rounded-xl bg-forest-900 border border-forest-800 text-gray-300 hover:text-white focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with min 44px touch targets */}
              <nav className="p-3.5 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href.replace(/\/$/, ""));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-forest-800 text-gold-300 font-bold border border-gold-400/30"
                          : "text-gray-200 hover:bg-forest-900 hover:text-gold-300"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-forest-500" />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Tour Categories */}
              <div className="px-3.5 py-2">
                <div className="text-[11px] font-bold text-gold-400 uppercase tracking-wider mb-2">
                  Special Tour Types
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/family-tours/"
                    onClick={closeMobileMenu}
                    className="min-h-[44px] p-2.5 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Users className="w-4 h-4 text-gold-400" />
                    <span>Family Trips</span>
                  </Link>
                  <Link
                    href="/honeymoon-tours/"
                    onClick={closeMobileMenu}
                    className="min-h-[44px] p-2.5 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Heart className="w-4 h-4 text-red-400" />
                    <span>Honeymoon</span>
                  </Link>
                  <Link
                    href="/group-tours/"
                    onClick={closeMobileMenu}
                    className="min-h-[44px] p-2.5 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Compass className="w-4 h-4 text-emerald-400" />
                    <span>Group Tours</span>
                  </Link>
                  <Link
                    href="/booking/"
                    onClick={closeMobileMenu}
                    className="min-h-[44px] p-2.5 rounded-xl bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>Book Trip</span>
                  </Link>
                </div>
              </div>

              {/* Touch-Friendly Social Icons Row (min 44px tap area) */}
              <div className="px-3.5 py-3 border-t border-forest-800/80 mt-2">
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2 text-center">
                  Follow Khan Tours
                </div>
                <SocialIcons className="justify-center" />
              </div>
            </div>

            {/* Drawer Footer Contact with Attractive Rotating WhatsApp */}
            <div className="p-3.5 border-t border-forest-800 bg-forest-900/50 space-y-2.5">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn shine-effect w-full min-h-[46px] flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl text-sm shadow-md border border-green-300/40"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="text-center text-xs text-gray-300">
                Direct Call:{" "}
                <a
                  href="tel:+923002870384"
                  className="text-gold-400 font-bold hover:underline"
                >
                  {DISPLAY_WHATSAPP}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
