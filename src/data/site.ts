/**
 * Central business configuration for Skin 360 Face Body Scalp.
 * All copy, contact details, and booking links flow from here so the site
 * stays consistent and is trivial to update.
 */

export const SITE = {
  name: "Skin 360 Face Body Scalp",
  shortName: "Skin 360",
  legalName: "Skin 360 Face Body Scalp",
  // Canonical production domain (update if the live domain changes).
  url: "https://skin360facebodyscalp.com",
  tagline:
    "Enhance Your Self-Esteem With Unparalleled Esthetic Treatments With the Finest Skincare Products Available",
  shortDescription:
    "A boutique face, body, and scalp esthetics clinic in Toluca Lake and Valencia, offering personalized facials, body contouring, lymphatic drainage, Japanese head spa, nails, and post-cosmetic surgery care.",
  mission:
    "Our mission, at Skin 360 Face Body Scalp, is to pamper and serve each client in a personalized, intimate setting while elevating self-esteem and inspiring lasting confidence. We are dedicated to helping clients age gracefully and look and feel their best through a commitment to the finest products and advanced technology, supporting healthier skin, a sculpted body, and beautiful results at every stage.",
  founder: "Carolina",
  // Primary call-to-action — every "Book" action routes here.
  bookingUrl: "https://skin360facebodyscalp.glossgenius.com/",
  // Homepage feature video (extracted from the current site).
  youtubeVideoId: "pI_wfvBpkG4",
  email: "skin360facebodyscalp@yahoo.com",
  phone: "(818) 601-2852",
  phoneRaw: "+18186012852",
  social: {
    // NOTE: current site links to a bare instagram.com with no handle.
    // Fill in the real handle/URL when confirmed.
    instagram: "",
  },
} as const;

export type Location = {
  slug: string;
  name: string;
  neighborhood: string;
  addressLine: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  phoneRaw: string;
  email: string;
  // Approximate coordinates for map/schema (verify against Google Business Profile).
  geo: { lat: number; lng: number };
  mapQuery: string;
  hours: { days: string; time: string }[];
  heading: string;
  intro: string;
  // Each location books through its own platform. Toluca uses GlossGenius;
  // Valencia uses Square. Leave bookingUrl empty to fall back to phone booking.
  bookingPlatform: string;
  bookingUrl: string;
};

export const LOCATIONS: Location[] = [
  {
    slug: "toluca-lake",
    name: "Skin 360 — Toluca Lake",
    neighborhood: "Toluca Lake",
    addressLine: "4425 W. Riverside Drive, Suite 203",
    city: "Burbank",
    region: "CA",
    postalCode: "91505",
    country: "US",
    phone: "(818) 601-2852",
    phoneRaw: "+18186012852",
    email: "skin360facebodyscalp@yahoo.com",
    geo: { lat: 34.1522, lng: -118.3712 },
    mapQuery: "4425 W. Riverside Drive, Suite 203, Burbank, CA 91505",
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 6:00 PM" },
      { days: "Saturday", time: "9:00 AM – 4:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    heading: "Premier Skincare Services in Toluca Lake",
    intro:
      "Our Toluca Lake studio in Burbank is a refined, intimate space for face, body, and scalp treatments — personalized care with premium products and advanced technology, just minutes from the heart of the neighborhood.",
    bookingPlatform: "GlossGenius",
    bookingUrl: "https://skin360facebodyscalp.glossgenius.com/",
  },
  {
    slug: "valencia",
    name: "Skin 360 — Valencia",
    neighborhood: "Valencia",
    // Street corrected to "Town Center Dr" (was "Can Center" on the old site)
    // and zip to 91355 (old menu listed 91335 = Reseda) per CEO confirmation.
    addressLine: "24510 Town Center Dr, Suite 170",
    city: "Valencia",
    region: "CA",
    postalCode: "91355",
    country: "US",
    phone: "(661) 812-6999",
    phoneRaw: "+16618126999",
    email: "skin360facebodyscalp@yahoo.com",
    geo: { lat: 34.4148, lng: -118.5495 },
    mapQuery: "24510 Town Center Dr, Valencia, CA 91355",
    hours: [
      { days: "Monday – Friday", time: "10:00 AM – 6:00 PM" },
      { days: "Saturday", time: "9:00 AM – 4:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    heading: "Skincare Services in Valencia",
    intro:
      "Our Valencia location brings the full Skin 360 experience — facials, body sculpting, Brazilian lymphatic drainage, and our signature Japanese Head Spa — to Santa Clarita in a serene, welcoming setting.",
    bookingPlatform: "Square",
    // TODO: add the Square Appointments booking URL for Valencia.
    // Until set, Valencia routes to phone booking.
    bookingUrl: "",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Face", href: "/services/face" },
      { label: "Body", href: "/services/body" },
      { label: "Scalp — Head Spa", href: "/services/scalp" },
      { label: "Nails", href: "/services/nails" },
      { label: "Post-Cosmetic Surgery", href: "/services/post-cosmetic-surgery" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Toluca Lake", href: "/locations/toluca-lake" },
      { label: "Valencia", href: "/locations/valencia" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Policies", href: "/policies" },
  { label: "Gift Cards", href: "/gift-cards" },
  { label: "Contact", href: "/contact" },
] as const;
