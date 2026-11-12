import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBubbleDock from "@/components/MobileBubbleDock";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import ScrollToTop from "@/components/ScrollToTop";
import { UIProvider } from "@/context/UIContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A2318",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://khantoursnawabshah.xyz"),
  title: {
    default: "Khan Tours Nawabshah | Northern Pakistan Tour Operator",
    template: "%s | Khan Tours Nawabshah",
  },
  description:
    "Professional travel and tourism service based in Nawabshah, Sindh. Affordable family, group, and honeymoon tour packages to Hunza, Skardu, Naran Kaghan, Swat, and Azad Kashmir.",
  keywords: [
    "Khan Tours Nawabshah",
    "Tours from Nawabshah",
    "Northern Pakistan tour packages",
    "Travel agency in Nawabshah",
    "Hunza tour from Nawabshah",
    "Skardu tour packages Sindh",
    "Family tours Pakistan",
    "Kashmir Neelum Valley tour",
    "Mohammed Murad Khan tours",
  ],
  authors: [{ name: "Khan Tours Nawabshah" }],
  creator: "Khan Tours Nawabshah",
  publisher: "Khan Tours Nawabshah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://khantoursnawabshah.xyz",
    siteName: "Khan Tours Nawabshah",
    title: "Khan Tours Nawabshah | Explore The Nature With Us!",
    description:
      "Affordable family, group, and customized tour packages to Hunza, Skardu, Swat, Naran, and Azad Kashmir departing from Nawabshah, Sindh.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khan Tours Nawabshah - Northern Pakistan Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khan Tours Nawabshah | Explore The Nature With Us!",
    description:
      "Affordable group & customized tours to Northern Pakistan from Nawabshah, Sindh.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Khan Tours Nawabshah",
    image: "https://khantoursnawabshah.xyz/images/logo/khan-tours-nawabshah-logo.png",
    url: "https://khantoursnawabshah.xyz",
    telephone: "+923002870384",
    email: "khantoursnawabshah@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nawabshah",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "26.2483",
      longitude: "68.4096",
    },
    priceRange: "$$",
    slogan: "Explore the Nature With Us!",
    founder: {
      "@type": "Person",
      name: "Mohammed Murad Khan",
    },
    sameAs: [
      "https://www.facebook.com/share/1FLwVYqaTP/",
      "https://www.instagram.com/khantoursnawabshah",
      "https://www.tiktok.com/@mohammed.murad.kh4",
      "https://youtube.com/@mohammadmuradkhan6095",
      "https://maps.app.goo.gl/zEqHLyuVoGfpGyUr7",
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory-50 text-gray-900 font-sans antialiased">
        <UIProvider>
          <ScrollToTop />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBubbleDock />
          <WhatsAppFloatingButton />
        </UIProvider>
      </body>
    </html>
  );
}
