import type { MetadataRoute } from "next";
import { SITE, LOCATIONS } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-07-01");
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/locations", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/testimonials", priority: 0.7, freq: "monthly" },
    { path: "/policies", priority: 0.4, freq: "yearly" },
    { path: "/gift-cards", priority: 0.6, freq: "yearly" },
    { path: "/contact", priority: 0.7, freq: "yearly" },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: new URL(p.path, SITE.url).toString(),
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));

  for (const c of SERVICE_CATEGORIES) {
    entries.push({
      url: `${SITE.url}/services/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const l of LOCATIONS) {
    entries.push({
      url: `${SITE.url}/locations/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
