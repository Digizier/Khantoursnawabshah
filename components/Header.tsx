"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
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
    { label: "About", href: "/about" },
    { label: "Destinations", href: "/destinations" },
    { label: "Tour Packages", href: "/packages" },
    { label: "Family Tours", href: "/family-tours" },
    { label: "Group Tours", href: "/group-tours" },
    { label: "Honeymoon", href: "/honeymoon-tours" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-forest-950 text-gold-200 text-xs py-2 px-4 border-b border-forest-900 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Nawabshah, Sindh, Pakistan
            </span>
            <span className="hidden md:inline text-gold-400/80">
              ✦ "Explore the Nature With Us!"
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+923002870384"
              className="flex items-center gap-1 text-gray-200 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>0300-2870384</span>
            </a>
            <a
              href="tel:+923008900025"
              className="hidden lg:flex items-center gap-1 text-gray-200 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>0300-8900025</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-green-400 hover:text-green-300 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-forest-900/95 backdrop-blur-md shadow-lg border-b border-forest-800 py-2.5"
            : "bg-forest-900 text-white border-b border-forest-800/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Khan Tours Nawabshah Home"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0">
              <Image
                src="/images/logo/khan-tours-header-logo.png"
                alt="Khan Tours Nawabshah Official Logo"
                fill
                sizes="48px"
                className="object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-wider text-white uppercase font-sans leading-tight">
                Khan Tours
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-gold-400 uppercase font-sans">
                Nawabshah
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gold-300 bg-forest-800 font-semibold"
                      : "text-gray-200 hover:text-gold-300 hover:bg-forest-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/booking"
              className="px-3.5 py-1.5 text-xs font-medium text-gold-300 border border-gold-400/50 rounded-full hover:bg-gold-500/10 transition-colors"
            >
              Plan Trip
            </Link>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-green-900/40 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-white text-green-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="p-2 text-green-400 hover:text-green-300 focus:outline-none"
            >
              <MessageCircle className="w-6 h-6 fill-green-500 text-forest-900" />
            </a>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-200 hover:text-gold-300 hover:bg-forest-800 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-out Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Drawer Menu Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-forest-950 text-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto border-l border-forest-800">
            <div>
              {/* Drawer Header */}
              <div className="p-4 border-b border-forest-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-9 h-9">
                    <Image
                      src="/images/logo/khan-tours-header-logo.png"
                      alt="Khan Tours Logo"
                      fill
                      sizes="36px"
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
                  className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-forest-900 focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-forest-800 text-gold-300 font-semibold"
                          : "text-gray-200 hover:bg-forest-900 hover:text-gold-300"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-forest-600" />
                    </Link>
                  );
                })}
              </nav>

              {/* Quick Tour Categories */}
              <div className="px-4 py-2">
                <div className="text-[11px] font-bold text-gold-400 uppercase tracking-wider mb-2">
                  Special Tour Types
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/family-tours"
                    onClick={closeMobileMenu}
                    className="p-2.5 rounded-lg bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>Family Trips</span>
                  </Link>
                  <Link
                    href="/honeymoon-tours"
                    onClick={closeMobileMenu}
                    className="p-2.5 rounded-lg bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Heart className="w-3.5 h-3.5 text-red-400" />
                    <span>Honeymoon</span>
                  </Link>
                  <Link
                    href="/group-tours"
                    onClick={closeMobileMenu}
                    className="p-2.5 rounded-lg bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Compass className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Group Tours</span>
                  </Link>
                  <Link
                    href="/booking"
                    onClick={closeMobileMenu}
                    className="p-2.5 rounded-lg bg-forest-900/60 hover:bg-forest-900 border border-forest-800 text-xs flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Book Trip</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer Contact */}
            <div className="p-4 border-t border-forest-800 bg-forest-900/50 space-y-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-2.5 rounded-lg text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white text-green-600" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="text-center text-xs text-gray-400">
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
