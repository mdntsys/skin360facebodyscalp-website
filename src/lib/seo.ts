import type { Metadata } from "next";
import { SITE, LOCATIONS, type Location } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";
import { FAQS } from "@/data/faqs";

/**
 * Build a fully-formed <Metadata> object for a page, with sensible SEO/GEO
 * defaults (canonical, Open Graph, Twitter) derived from the site config.
 */
export function pageMetadata({
  title,
  description,
  path = "/",
  images,
}: {
  title: string;
  description: string;
  path?: string;
  images?: string[];
}): Metadata {
  const url = new URL(path, SITE.url).toString();
  const ogImages = images ?? ["/logo.webp"];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImages,
    },
  };
}

const geoIds = {
  organization: `${SITE.url}/#organization`,
  website: `${SITE.url}/#website`,
};

function locationId(loc: Location) {
  return `${SITE.url}/locations/${loc.slug}/#localbusiness`;
}

/** LocalBusiness node for a single studio location. */
export function localBusinessSchema(loc: Location) {
  return {
    "@type": ["HealthAndBeautyBusiness", "DaySpa"],
    "@id": locationId(loc),
    name: `${SITE.name} — ${loc.neighborhood}`,
    parentOrganization: { "@id": geoIds.organization },
    image: `${SITE.url}/logo.webp`,
    url: `${SITE.url}/locations/${loc.slug}`,
    telephone: loc.phoneRaw,
    email: loc.email,
    priceRange: "$$$",
    currenciesAccepted: "USD",
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.addressLine,
      addressLocality: loc.city,
      addressRegion: loc.region,
      postalCode: loc.postalCode,
      addressCountry: loc.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: loc.geo.lat,
      longitude: loc.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: [loc.city, loc.neighborhood, "Los Angeles", "Santa Clarita"],
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      loc.mapQuery
    )}`,
    potentialAction: {
      "@type": "ReserveAction",
      target: SITE.bookingUrl,
      name: "Book an appointment",
    },
  };
}

/** Top-level Organization + WebSite + both LocalBusiness locations. */
export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": geoIds.organization,
        name: SITE.name,
        legalName: SITE.legalName,
        url: SITE.url,
        logo: {
          "@type": "ImageObject",
          url: `${SITE.url}/logo.webp`,
        },
        image: `${SITE.url}/logo.webp`,
        description: SITE.shortDescription,
        email: SITE.email,
        telephone: SITE.phoneRaw,
        founder: { "@type": "Person", name: SITE.founder },
        slogan: SITE.tagline,
        sameAs: [SITE.social.instagram].filter(Boolean),
        location: LOCATIONS.map((l) => ({ "@id": locationId(l) })),
      },
      {
        "@type": "WebSite",
        "@id": geoIds.website,
        url: SITE.url,
        name: SITE.name,
        publisher: { "@id": geoIds.organization },
        inLanguage: "en-US",
      },
      ...LOCATIONS.map(localBusinessSchema),
    ],
  };
}

/** Service schema for a category page (with each treatment as an offer). */
export function serviceCategorySchema(slug: string) {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return null;
  const offers = category.groups.flatMap((g) =>
    g.services.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.description,
      priceCurrency: "USD",
      price: s.price.replace(/[^0-9.]/g, "") || undefined,
      availability: "https://schema.org/InStock",
      url: SITE.bookingUrl,
    }))
  );
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${category.name} Services`,
    serviceType: category.tagline,
    description: category.heroDescription,
    provider: { "@id": geoIds.organization },
    areaServed: ["Toluca Lake", "Burbank", "Valencia", "Santa Clarita", "Los Angeles"],
    url: `${SITE.url}/services/${category.slug}`,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${category.name} Treatment Menu`,
      itemListElement: offers,
    },
  };
}

/** FAQPage schema built from the shared FAQ list. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList schema from an ordered list of {name, path}. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).toString(),
    })),
  };
}
