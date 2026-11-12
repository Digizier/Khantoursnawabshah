import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Khan Tours Nawabshah",
  description: "Privacy policy for Khan Tours Nawabshah. How we handle customer booking information and inquiries.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-ivory-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
          <Link href="/" className="hover:text-forest-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-semibold">Privacy Policy</span>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-gray-200/80 shadow-subtle space-y-6 text-gray-700 text-xs sm:text-sm leading-relaxed">
          <div className="border-b border-gray-100 pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Effective Date: {new Date().getFullYear()} • Khan Tours Nawabshah
            </p>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">1. Information We Collect</h2>
            <p>
              When you submit a tour inquiry or contact us via WhatsApp or phone, Khan Tours Nawabshah collects personal details strictly necessary to plan and coordinate your tour. This may include your full name, mobile number, email address, destination preference, group size, and travel dates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">2. How We Use Your Information</h2>
            <p>
              Your information is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Communicate tour itineraries, hotel options, and vehicle details.</li>
              <li>Coordinate security clearances and government checkpoint verifications in Northern Pakistan where required.</li>
              <li>Provide on-ground support, route updates, and emergency contact during your journey.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">3. Data Protection & Sharing</h2>
            <p>
              We value your trust and privacy. Khan Tours Nawabshah does not sell, rent, or trade your personal contact details to third-party marketing companies. Information is shared only with verified service partners (such as reserved hotels or local 4x4 jeep operators) strictly to fulfill your booking.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-gray-900">4. Contact Us Regarding Privacy</h2>
            <p>
              If you have any questions regarding your personal details or wish to request data deletion, contact us at:
              <br />
              <strong>Email:</strong> khantoursnawabshah@gmail.com
              <br />
              <strong>WhatsApp:</strong> 0300-2870384
              <br />
              <strong>Address:</strong> Nawabshah, Sindh, Pakistan
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
