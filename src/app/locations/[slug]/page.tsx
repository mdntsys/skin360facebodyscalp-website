import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LOCATIONS, SITE } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, localBusinessSchema, breadcrumbSchema } from "@/lib/seo";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return pageMetadata({
    title: `${loc.neighborhood} Location — Facials, Body & Head Spa`,
    description: `${loc.heading}. Visit Skin 360 at ${loc.addressLine}, ${loc.city}, ${loc.region} ${loc.postalCode}. Book facials, body contouring, and Japanese head spa. Call ${loc.phone}.`,
    path: `/locations/${loc.slug}`,
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    loc.mapQuery
  )}&output=embed`;
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    loc.mapQuery
  )}`;

  return (
    <>
      <JsonLd data={localBusinessSchema(loc)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: loc.neighborhood, path: `/locations/${loc.slug}` },
        ])}
      />
      <PageHeader
        eyebrow={`${loc.city}, ${loc.region}`}
        title={loc.heading}
        subtitle={loc.intro}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          { name: loc.neighborhood, path: `/locations/${loc.slug}` },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <div>
            <h2 className="font-serif text-3xl text-ink">Visit Us in {loc.neighborhood}</h2>
            <ul className="mt-8 space-y-6 text-ink-soft">
              <li className="flex gap-4">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="font-medium text-ink">Address</p>
                  <p className="mt-1">
                    {loc.addressLine}
                    <br />
                    {loc.city}, {loc.region} {loc.postalCode}
                  </p>
                  <a
                    href={directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-gold-600 hover:text-gold-700"
                  >
                    Get directions <ArrowIcon className="h-4 w-4" />
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <ClockIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="font-medium text-ink">Hours</p>
                  <div className="mt-1 space-y-0.5">
                    {loc.hours.map((h) => (
                      <p key={h.days}>
                        <span className="text-ink">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <PhoneIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="font-medium text-ink">Phone</p>
                  <a href={`tel:${loc.phoneRaw}`} className="mt-1 inline-block hover:text-gold-600">
                    {loc.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MailIcon className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
                <div>
                  <p className="font-medium text-ink">Email</p>
                  <a href={`mailto:${loc.email}`} className="mt-1 inline-block break-all hover:text-gold-600">
                    {loc.email}
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              {loc.bookingUrl ? (
                <a
                  href={loc.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book at {loc.neighborhood}
                  <ArrowIcon className="h-4 w-4" />
                </a>
              ) : (
                <a href={`tel:${loc.phoneRaw}`} className="btn btn-primary">
                  Call to Book — {loc.phone}
                </a>
              )}
              <p className="mt-3 text-xs text-muted">
                {loc.bookingUrl
                  ? `Secure online booking via ${loc.bookingPlatform}.`
                  : `Online booking via ${loc.bookingPlatform} coming soon.`}
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[var(--radius-xl2)] border border-line shadow-sm">
            <iframe
              title={`Map to Skin 360 ${loc.neighborhood}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full"
            />
          </div>
        </div>

        {/* Services available here */}
        <div className="mt-20">
          <h2 className="text-center font-serif text-3xl text-ink">
            Services at {loc.neighborhood}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink-soft">
            Our full menu is available at this location.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group rounded-[var(--radius-xl2)] border border-line bg-white p-6 transition-all hover:border-gold-300 hover:shadow-md"
              >
                <h3 className="font-serif text-xl text-ink">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{c.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-gold-600">
                  View menu <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
