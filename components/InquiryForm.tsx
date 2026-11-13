"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Users,
  MapPin,
  Compass,
  Phone,
  Mail,
  User,
  ShieldCheck,
  Send,
} from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { generateFormWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  destination: string;
  tourCategory: string;
  travelDate: string;
  travellers: string;
  message: string;
}

interface InquiryFormProps {
  defaultDestination?: string;
  defaultPackage?: string;
  compact?: boolean;
}

export default function InquiryForm({
  defaultDestination = "",
  defaultPackage = "",
  compact = false,
}: InquiryFormProps) {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    destination: defaultDestination || "Hunza Valley",
    tourCategory: "Family Tour",
    travelDate: "",
    travellers: "2 Persons (Couple)",
    message: defaultPackage ? `Interested in: ${defaultPackage}` : "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedWaLink, setSubmittedWaLink] = useState("");

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    const phoneClean = formData.phone.trim().replace(/[\s-]/g, "");
    if (!phoneClean) {
      errs.phone = "Please enter your WhatsApp or phone number";
    } else if (phoneClean.length < 10) {
      errs.phone = "Please enter a valid mobile number (e.g. 0300-1234567)";
    }

    if (formData.email.trim() && !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const waLink = generateFormWhatsAppLink({
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      destination: formData.destination,
      category: formData.tourCategory,
      travelDate: formData.travelDate,
      travellers: formData.travellers,
      message: formData.message,
      packageTitle: defaultPackage,
    });

    try {
      const existing = JSON.parse(localStorage.getItem("khan_tours_inquiries") || "[]");
      existing.push({
        ...formData,
        packageTitle: defaultPackage,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("khan_tours_inquiries", JSON.stringify(existing));
    } catch {
      // Ignore localStorage errors in private windows
    }

    setSubmittedWaLink(waLink);

    // Open WhatsApp directly with formatted message template
    if (typeof window !== "undefined") {
      window.open(waLink, "_blank");
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-green-200 shadow-card text-center space-y-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Inquiry Prepared & Sent to WhatsApp!
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-gray-900">{formData.fullName}</strong>.
            Your complete trip preferences for{" "}
            <strong className="text-forest-800">{formData.destination}</strong> have been formatted for WhatsApp.
          </p>
        </div>

        <div className="pt-2 space-y-2">
          <a
            href={submittedWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Reopen WhatsApp Chat</span>
          </a>
          <p className="text-[11px] text-gray-500">
            If WhatsApp didn't open automatically, click the button above to chat with{" "}
            <strong>{DISPLAY_WHATSAPP}</strong>.
          </p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              destination: defaultDestination || "Hunza Valley",
              tourCategory: "Family Tour",
              travelDate: "",
              travellers: "2 Persons (Couple)",
              message: defaultPackage ? `Interested in: ${defaultPackage}` : "",
            });
          }}
          className="text-xs text-forest-700 font-semibold hover:underline block mx-auto pt-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-2xl text-left w-full transition-all ${
        compact
          ? "p-4 sm:p-5 border border-gray-200/90 shadow-sm space-y-3.5"
          : "p-5 sm:p-8 border border-gray-200/90 shadow-card space-y-4 sm:space-y-5"
      }`}
      noValidate
    >
      <div className="border-b border-gray-100 pb-3">
        <h3 className={`font-bold text-gray-900 ${compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"}`}>
          Plan Your Tour with Khan Tours
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          Share your travel preferences and our Nawabshah team will organize a tailored itinerary.
        </p>
      </div>

      {/* Row 1: Name and WhatsApp Number */}
      <div className={`grid gap-3.5 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label
            htmlFor="inquiry-fullName"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <User className="w-3.5 h-3.5 text-forest-700" />
            <span>
              Full Name <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            id="inquiry-fullName"
            name="fullName"
            type="text"
            placeholder="e.g. Tariq Khan"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-gray-300 focus:ring-forest-200 focus:border-forest-700"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="inquiry-phone"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-forest-700" />
            <span>
              WhatsApp / Mobile Number <span className="text-red-500">*</span>
            </span>
          </label>
          <input
            id="inquiry-phone"
            name="phone"
            type="tel"
            placeholder="e.g. 0300-1234567"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-all ${
              errors.phone
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-gray-300 focus:ring-forest-200 focus:border-forest-700"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Destination */}
      <div className={`grid gap-3.5 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        <div>
          <label
            htmlFor="inquiry-email"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-forest-700" />
            <span>
              Email Address <span className="text-gray-400 font-normal">(Optional)</span>
            </span>
          </label>
          <input
            id="inquiry-email"
            name="email"
            type="email"
            placeholder="yourname@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-sm text-gray-900 focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-gray-300 focus:ring-forest-200 focus:border-forest-700"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 flex-shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="inquiry-destination"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <MapPin className="w-3.5 h-3.5 text-forest-700" />
            <span>Selected Destination</span>
          </label>
          <select
            id="inquiry-destination"
            name="destination"
            value={formData.destination}
            onChange={(e) =>
              setFormData({ ...formData, destination: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700 transition-all"
          >
            {DESTINATIONS.map((dest) => (
              <option key={dest.id} value={dest.name}>
                {dest.name} ({dest.region})
              </option>
            ))}
            <option value="Custom Multi-Destination">Custom Multi-Destination</option>
          </select>
        </div>
      </div>

      {/* Row 3: Tour Category, Travellers & Preferred Date (Responsive grid that stacks cleanly in sidebars) */}
      <div
        className={`grid gap-3.5 ${
          compact
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        <div>
          <label
            htmlFor="inquiry-tourCategory"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-forest-700" />
            <span>Tour Category</span>
          </label>
          <select
            id="inquiry-tourCategory"
            name="tourCategory"
            value={formData.tourCategory}
            onChange={(e) =>
              setFormData({ ...formData, tourCategory: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700 transition-all"
          >
            <option value="Family Tour">Family Tour</option>
            <option value="Group Tour">Group Tour</option>
            <option value="Honeymoon Tour">Honeymoon Tour</option>
            <option value="Customized Tour">Customized Tour</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="inquiry-travellers"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5 text-forest-700" />
            <span>Travellers</span>
          </label>
          <select
            id="inquiry-travellers"
            name="travellers"
            value={formData.travellers}
            onChange={(e) =>
              setFormData({ ...formData, travellers: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700 transition-all"
          >
            <option value="1 Person">1 Person</option>
            <option value="2 Persons (Couple)">2 Persons (Couple)</option>
            <option value="3 to 5 Persons (Family)">3 to 5 Persons (Family)</option>
            <option value="6 to 10 Persons (Group)">6 to 10 Persons (Group)</option>
            <option value="10+ Persons (Large Group)">10+ Persons (Large Group)</option>
          </select>
        </div>

        <div className={compact ? "" : "sm:col-span-2 lg:col-span-1"}>
          <label
            htmlFor="inquiry-travelDate"
            className="block text-xs font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5 text-forest-700" />
            <span>Preferred Date</span>
          </label>
          <input
            id="inquiry-travelDate"
            name="travelDate"
            type="date"
            value={formData.travelDate}
            onChange={(e) =>
              setFormData({ ...formData, travelDate: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700 transition-all"
          />
        </div>
      </div>

      {/* Row 4: Message / Requirements */}
      <div>
        <label
          htmlFor="inquiry-message"
          className="block text-xs font-semibold text-gray-700 mb-1.5"
        >
          Special Requirements / Notes <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={compact ? 2 : 3}
          placeholder="Tell us about hotel preferences, vehicle choice (Coaster, Grand Cabin, 4x4 Prado), or specific spots you wish to visit."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700 transition-all"
        />
      </div>

      {/* SINGLE UNIFIED PRIMARY WHATSAPP SUBMIT BUTTON */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full min-h-[50px] py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg hover:scale-[1.008] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer border border-green-300/40 disabled:opacity-60"
        >
          {loading ? (
            <span>Preparing WhatsApp Inquiry...</span>
          ) : (
            <>
              <MessageCircle className="w-5 h-5 fill-current shrink-0" />
              <span>Submit & Inquire on WhatsApp</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-gray-500 text-center mt-2 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-forest-700 shrink-0" />
          <span>Syncs your details directly to Mohammed Murad Khan ({DISPLAY_WHATSAPP})</span>
        </p>
      </div>
    </form>
  );
}