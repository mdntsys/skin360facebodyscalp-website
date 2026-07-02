import type { Metadata } from "next";
import { LOCATIONS } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { PhoneIcon, PinIcon, ClockIcon, ArrowIcon } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Book an Appointment — Toluca Lake & Valencia",
  description:
    "Book your Skin 360 appointment online. Choose your location — Toluca Lake books through GlossGenius and Valencia through Square. Facials, body contouring, and Japanese Head Spa.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ])}
      />
      <PageHeader
        eyebrow="Reserve Your Visit"
        title={<>Book Your <span className="text-gold-gradient italic">Appointment</span></>}
        subtitle="Choose your location below. Each studio books through its own secure system — pick where you'd like to be pampered."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Book", path: "/book" },
        ]}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.slug}
              className="flex h-full flex-col rounded-[var(--radius-xl2)] border border-line bg-white p-8 shadow-[0_20px_60px_-45px_rgba(43,39,35,0.5)]"
            >
              <span className="eyebrow">{loc.city}, {loc.region}</span>
              <h2 className="mt-3 font-serif text-3xl text-ink">{loc.neighborhood}</h2>

              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                <li className="flex gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>{loc.addressLine}, {loc.city}, {loc.region} {loc.postalCode}</span>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    {loc.hours.map((h) => (
                      <span key={h.days} className="block">
                        <span className="text-ink">{h.days}:</span> {h.time}
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <a href={`tel:${loc.phoneRaw}`} className="hover:text-gold-600">{loc.phone}</a>
                </li>
              </ul>

              <div className="mt-auto pt-8">
                {loc.bookingUrl ? (
                  <>
                    <a
                      href={loc.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      Book at {loc.neighborhood}
                      <ArrowIcon className="h-4 w-4" />
                    </a>
                    <p className="mt-3 text-center text-xs text-muted">
                      Secure online booking via {loc.bookingPlatform}
                    </p>
                  </>
                ) : (
                  <>
                    <a href={`tel:${loc.phoneRaw}`} className="btn btn-primary w-full">
                      Call to Book — {loc.phone}
                    </a>
                    <p className="mt-3 text-center text-xs text-muted">
                      Online booking via {loc.bookingPlatform} coming soon.
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted">
          Not sure which location suits you best? Give us a call and we'll help you find the perfect
          time and treatment.
        </p>
      </section>
    </>
  );
}
