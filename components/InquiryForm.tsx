"use client";

import React, { useState } from "react";
import {
  Send,
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
} from "lucide-react";
import { DESTINATIONS } from "@/data/destinations";
import { generateWhatsAppLink, DISPLAY_WHATSAPP } from "@/lib/whatsapp";

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

export default function InquiryForm({
  defaultDestination = "",
  defaultPackage = "",
}: {
  defaultDestination?: string;
  defaultPackage?: string;
}) {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    destination: defaultDestination || "Hunza Valley",
    tourCategory: "Family Tour",
    travelDate: "",
    travellers: "2",
    message: defaultPackage ? `Interested in: ${defaultPackage}` : "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please enter your full name";
    }

    const phoneClean = formData.phone.trim().replace(/[\s-]/g, "");
    if (!phoneClean) {
      errs.phone = "Please enter your WhatsApp or phone number";
    } else if (phoneClean.length < 10) {
      errs.phone = "Please enter a valid mobile number (e.g., 0300-1234567)";
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

    try {
      const existing = JSON.parse(localStorage.getItem("khan_tours_inquiries") || "[]");
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("khan_tours_inquiries", JSON.stringify(existing));
    } catch {
      // Ignore storage errors in private browsing
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const directWaLink = generateWhatsAppLink({
    name: formData.fullName,
    destination: formData.destination,
    category: formData.tourCategory,
    travelDate: formData.travelDate,
    travellers: formData.travellers,
    message: formData.message,
    packageTitle: defaultPackage,
  });

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-green-200 shadow-card text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          Inquiry Received Successfully!
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto leading-relaxed">
          Thank you, <strong className="text-gray-900">{formData.fullName}</strong>.
          Mohammed Murad Khan and our travel team will review your requirements for{" "}
          <strong className="text-forest-800">{formData.destination}</strong>.
        </p>

        <div className="pt-2">
          <a
            href={directWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto min-h-[48px] bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Connect on WhatsApp Now</span>
          </a>
          <p className="text-xs text-gray-500 mt-2">
            Click to instantly sync your inquiry details to our WhatsApp:{" "}
            <strong>{DISPLAY_WHATSAPP}</strong>
          </p>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              destination: "Hunza Valley",
              tourCategory: "Family Tour",
              travelDate: "",
              travellers: "2",
              message: "",
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
      className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200/90 shadow-card space-y-4 sm:space-y-5 text-left w-full"
      noValidate
    >
      <div className="border-b border-gray-100 pb-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
          Plan Your Tour with Khan Tours
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">
          Share your travel preferences and our Nawabshah team will organize a tailored itinerary.
        </p>
      </div>

      {/* Row 1: Name and Phone (Labels above, min 16px font to prevent iOS zoom, 44px min height) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inquiry-fullName" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <User className="w-4 h-4 text-forest-700" />
            <span>Full Name <span className="text-red-500">*</span></span>
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
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 ${
              errors.fullName
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-gray-300 focus:ring-forest-200 focus:border-forest-700"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="inquiry-phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-forest-700" />
            <span>WhatsApp / Mobile Number <span className="text-red-500">*</span></span>
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
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 ${
              errors.phone
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-gray-300 focus:ring-forest-200 focus:border-forest-700"
            }`}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="inquiry-email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-forest-700" />
            <span>Email Address <span className="text-gray-400 font-normal">(Optional)</span></span>
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
            className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 focus:ring-red-200 bg-red-50/20"
                : "border-gray-300 focus:ring-forest-200 focus:border-forest-700"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="inquiry-destination" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-forest-700" />
            <span>Selected Destination</span>
          </label>
          <select
            id="inquiry-destination"
            name="destination"
            value={formData.destination}
            onChange={(e) =>
              setFormData({ ...formData, destination: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-base sm:text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700"
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

      {/* Row 3: Tour Category, Travellers & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="inquiry-tourCategory" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-forest-700" />
            <span>Tour Category</span>
          </label>
          <select
            id="inquiry-tourCategory"
            name="tourCategory"
            value={formData.tourCategory}
            onChange={(e) =>
              setFormData({ ...formData, tourCategory: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-base sm:text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700"
          >
            <option value="Family Tour">Family Tour</option>
            <option value="Group Tour">Group Tour</option>
            <option value="Honeymoon Tour">Honeymoon Tour</option>
            <option value="Customized Tour">Customized Tour</option>
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-travellers" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Users className="w-4 h-4 text-forest-700" />
            <span>Travellers</span>
          </label>
          <select
            id="inquiry-travellers"
            name="travellers"
            value={formData.travellers}
            onChange={(e) =>
              setFormData({ ...formData, travellers: e.target.value })
            }
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-base sm:text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700"
          >
            <option value="1">1 Person</option>
            <option value="2">2 Persons (Couple)</option>
            <option value="3-5">3 to 5 Persons (Small Family)</option>
            <option value="6-10">6 to 10 Persons (Group)</option>
            <option value="10+">10+ Persons (Large Group / Batch)</option>
          </select>
        </div>

        <div>
          <label htmlFor="inquiry-travelDate" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-forest-700" />
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
            className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-gray-300 text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700"
          >
          </input>
        </div>
      </div>

      {/* Row 4: Message / Requirements */}
      <div>
        <label htmlFor="inquiry-message" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
          Special Requirements / Notes <span className="text-gray-400 font-normal">(Optional)</span>
        </label>
        <textarea
          id="inquiry-message"
          name="message"
          rows={3}
          placeholder="Tell us about special hotel requirements, vehicle preference (Coaster, Grand Cabin, 4x4 Prado), or specific places you want to visit."
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-base sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-forest-200 focus:border-forest-700"
        />
      </div>

      {/* Submit Buttons: 100% full-width on mobile, min 48px height */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:flex-1 min-h-[48px] py-3.5 px-6 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <span>Processing...</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-gold-400" />
              <span>Submit Booking Inquiry</span>
            </>
          )}
        </button>

        <a
          href={directWaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto min-h-[48px] py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Inquire on WhatsApp</span>
        </a>
      </div>
    </form>
  );
}
