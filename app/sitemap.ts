import { MetadataRoute } from "next";
import { TOUR_PACKAGES } from "@/data/tours";
import { DESTINATIONS } from "@/data/destinations";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://khantoursnawabshah.xyz";

  const staticRoutes = [
    "",
    "/about",
    "/packages",
    "/destinations",
    "/family-tours",
    "/group-tours",
    "/honeymoon-tours",
    "/customized-tours",
    "/contact",
    "/booking",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const packageRoutes = TOUR_PACKAGES.map((pkg) => ({
    url: `${baseUrl}/packages/${pkg.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const destinationRoutes = DESTINATIONS.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...packageRoutes, ...destinationRoutes];
}
