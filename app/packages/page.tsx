"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Compass, Filter, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import PackageCard from "@/components/PackageCard";
import { TOUR_PACKAGES, TourCategory } from "@/data/tours";
import { generateWhatsAppLink } from "@/lib/whatsapp";

const ITEMS_PER_PAGE = 8;

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = [
    { id: "all", label: "All Packages" },
    { id: "family", label: "Family Tours" },
    { id: "group", label: "Group Tours" },
    { id: "honeymoon", label: "Honeymoon Retreats" },
    { id: "customized", label: "Customized Trips" },
  ];

  // Filter packages
  const filteredPackages = useMemo(() => {
    if (selectedCategory === "all") return TOUR_PACKAGES;
    return TOUR_PACKAGES.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPackages.length / ITEMS_PER_PAGE) || 1;
  const paginatedPackages = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredPackages.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredPackages, currentPage]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-ivory-50 pb-16">
      {/* Banner */}
      <section className="relative py-12 sm:py-16 bg-forest-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/hero/banner-1.webp"
            alt="Tour Packages"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/80 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">
            Curated Itineraries
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Northern Pakistan Tour Packages
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Organized group departures and private family vacations to Hunza, Skardu, Naran, Swat, and Azad Kashmir departing from Nawabshah, Sindh.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Category Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-8 pb-4 border-b border-gray-200">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                    isSelected
                      ? "bg-forest-900 text-gold-300 shadow-sm"
                      : "bg-white text-gray-700 hover:bg-forest-100/70 border border-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <span className="text-xs text-gray-500 font-medium">
            Showing {paginatedPackages.length} of {filteredPackages.length} tours
          </span>
        </div>

        {/* 2-column mobile, 4-column desktop grid */}
        {paginatedPackages.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {paginatedPackages.map((tour) => (
              <PackageCard key={tour.id} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-3">
            <Compass className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="text-base font-bold text-gray-800">
              No packages found in this category
            </h3>
            <p className="text-xs text-gray-500">
              Please choose another category or request a custom itinerary directly on WhatsApp.
            </p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="mt-2 text-xs font-bold text-forest-800 underline"
            >
              Show all packages
            </button>
          </div>
        )}

        {/* Pagination Controls (Max 8 per page) */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-forest-50"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isCurrent = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold transition-colors ${
                    isCurrent
                      ? "bg-forest-900 text-gold-300 shadow-sm"
                      : "bg-white text-gray-700 hover:bg-forest-50 border border-gray-200"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 bg-white text-gray-600 disabled:opacity-30 disabled:pointer-events-none hover:bg-forest-50"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Custom Itinerary Inquiry Strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gold-300/40 shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900">
              Want a Tailored Family or Corporate Itinerary?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Share your dates, family size, and vehicle preferences directly with Mohammed Murad Khan.
            </p>
          </div>
          <a
            href={generateWhatsAppLink({
              message: "I want to request a custom tour package quotation.",
            })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white text-green-600" />
            <span>Request Custom Plan</span>
          </a>
        </div>
      </section>
    </div>
  );
}
