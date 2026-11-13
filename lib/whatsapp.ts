export const WHATSAPP_NUMBER = "923002870384";
export const DISPLAY_WHATSAPP = "0300-2870384";
export const CALL_NUMBERS = [
  { display: "0300-2870384", raw: "+923002870384", label: "WhatsApp & Call" },
  { display: "0300-8900025", raw: "+923008900025", label: "Helpline 1" },
  { display: "0333-8900026", raw: "+923338900026", label: "Helpline 2" },
];

export interface WhatsAppInquiryParams {
  name?: string;
  phone?: string;
  email?: string;
  packageTitle?: string;
  destination?: string;
  category?: string;
  travelDate?: string;
  travellers?: string | number;
  message?: string;
}

export function generateWhatsAppLink(params?: WhatsAppInquiryParams): string {
  let text = "Assalam-o-Alaikum Khan Tours Nawabshah!\n";

  if (params?.packageTitle) {
    text += `I am interested in booking/inquiring about: *${params.packageTitle}*\n`;
  } else if (params?.destination) {
    text += `I want to plan a tour to: *${params.destination}*\n`;
  } else {
    text += "I want to inquire about your upcoming Northern Pakistan tour packages.\n";
  }

  if (params?.category) {
    text += `• Tour Type: ${params.category}\n`;
  }

  if (params?.name) {
    text += `• My Name: ${params.name}\n`;
  }

  if (params?.travelDate) {
    text += `• Preferred Date: ${params.travelDate}\n`;
  }

  if (params?.travellers) {
    text += `• Total Travellers: ${params.travellers}\n`;
  }

  if (params?.message) {
    text += `• Special Requirements: ${params.message}\n`;
  }

  text += "\nPlease share complete itinerary details, vehicle information, and availability. Thank you!";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Formats a high-converting, professional WhatsApp booking inquiry template
 * using WhatsApp Markdown: Bold (*), Italics (_), and Blockquotes (>)
 */
export function generateFormWhatsAppLink(params: WhatsAppInquiryParams): string {
  const lines: string[] = [
    "*✨ NEW TOUR BOOKING INQUIRY — KHAN TOURS NAWABSHAH*",
    "_Explore the Nature With Us!_",
    "━━━━━━━━━━━━━━━━━━━━━━",
    "",
    "*👤 CUSTOMER DETAILS:*",
    `> *Full Name:* ${params.name || "Valued Traveler"}`,
    `> *WhatsApp / Mobile:* ${params.phone || "Not provided"}`,
  ];

  if (params.email && params.email.trim()) {
    lines.push(`> *Email Address:* ${params.email.trim()}`);
  }

  lines.push("");
  lines.push("*🏔️ TOUR PREFERENCES:*");

  if (params.packageTitle) {
    lines.push(`> *Tour Package:* ${params.packageTitle}`);
  }

  lines.push(`> *Destination:* ${params.destination || "Northern Pakistan"}`);

  if (params.category) {
    lines.push(`> *Tour Category:* ${params.category}`);
  }

  if (params.travellers) {
    lines.push(`> *Total Travelers:* ${params.travellers}`);
  }

  if (params.travelDate) {
    lines.push(`> *Preferred Departure Date:* ${params.travelDate}`);
  } else {
    lines.push("> *Preferred Departure Date:* Flexible / To be finalized");
  }

  lines.push("");
  lines.push("*📝 SPECIAL REQUIREMENTS / NOTES:*");

  if (params.message && params.message.trim()) {
    lines.push(`> _${params.message.trim()}_`);
  } else {
    lines.push("> _Standard package with comfortable AC transport and clean hotel accommodations._");
  }

  lines.push("");
  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("_📍 Sent directly from official website: khantoursnawabshah.xyz_");
  lines.push("_Please check availability and send customized pricing & itinerary details. Shukriya!_");

  const fullText = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullText)}`;
}
