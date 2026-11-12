import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Khan Tours Nawabshah",
  description: "Terms and conditions for tour bookings with Khan Tours Nawabshah.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-ivory-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <Link href="/" className="hover:text-forest-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Terms & Conditions</span>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-subtle space-y-6 text-gray-700 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-gray-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Terms & Conditions
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Effective Date: {new Date().getFullYear()} • Khan Tours Nawabshah
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">1. Booking & Reservation Policy</h2>
            <p>
              Tour bookings are confirmed upon verification of traveler details and receipt of advance token deposit as agreed with our management. Final payment schedules are communicated transparently before departure.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">2. Identity Verification & Checkpoints</h2>
            <p>
              All Pakistani citizens traveling to Northern Areas and Azad Kashmir are required by national law to carry original Computerized National Identity Cards (CNIC) or Form-B for minors. Khan Tours cannot be held responsible for passengers denied entry by security forces due to missing identity documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">3. Mountain Weather & Route Adjustments</h2>
            <p>
              Northern Pakistan mountain highways (such as Karakoram Highway, Babusar Pass, and Neelum Valley roads) are subject to weather variations, rain, and occasional landslips. In the interest of passenger safety, Khan Tours reserves the right to adjust itineraries or pause travel until road conditions are declared safe by local authorities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">4. Code of Conduct</h2>
            <p>
              Khan Tours fosters a family-friendly, respectful atmosphere. Any disruptive behavior, non-compliance with local cultural decorum, or disrespect toward local mountain communities will not be tolerated.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">5. Contact & Queries</h2>
            <p>
              For any clarification regarding booking terms, contact:
              <br />
              <strong>WhatsApp:</strong> 0300-2870384
              <br />
              <strong>Helpline:</strong> 0300-8900025 / 0333-8900026
              <br />
              <strong>Email:</strong> khantoursnawabshah@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
