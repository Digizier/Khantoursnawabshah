export const WHATSAPP_NUMBER = "923002870384";
export const DISPLAY_WHATSAPP = "0300-2870384";
export const CALL_NUMBERS = [
  { display: "0300-2870384", raw: "+923002870384", label: "WhatsApp & Call" },
  { display: "0300-8900025", raw: "+923008900025", label: "Helpline 1" },
  { display: "0333-8900026", raw: "+923338900026", label: "Helpline 2" },
];

export interface WhatsAppInquiryParams {
  name?: string;
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
