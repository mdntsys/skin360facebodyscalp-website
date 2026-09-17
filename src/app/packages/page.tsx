import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/data/site";
import { PACKAGES_NOTE } from "@/data/services";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Packages — 10 Sessions, 15% Off",
  description:
    "Buy 10 of the same Skin 360 treatment and save 15% when you pay in full. Packages are sold at our Toluca Lake and Valencia salons.",
  path: "/packages",
});

const STEPS = [
  {
    title: "One treatment",
    body: "A package is 10 visits of the same service. Facials with facials, body with body. We do not mix treatments in one package.",
  },
  {
    title: "15% off",
    body: "Pay for all 10 at once and the series is 15% off the regular price. Example: 10 of the same facial, paid in full, 15% off.",
  },
  {
    title: "In the salon",
    body: "Packages are sold at Toluca Lake and Valencia. Call or stop in. They are not sold online.",
  },
];

export default function PackagesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Packages", path: "/packages" },
        ])}
      />
      <PageHeader
        eyebrow="Series of 10"
        title="Packages"
        subtitle={PACKAGES_NOTE}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Packages", path: "/packages" },
        ]}
      />

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((s) => (
            <Reveal key={s.title}>
              <div className="rounded-[var(--radius-xl2)] border border-line bg-white px-6 py-8">
                <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-[var(--radius-xl2)] bg-cream px-6 py-12 text-center">
            <h2 className="font-serif text-3xl text-ink">Ask us at the salon</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-ink-soft">
              Tell us which treatment you want 10 of. We will quote the 15%
              package price and you pay in full that day.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {LOCATIONS.map((loc) => (
                <a
                  key={loc.slug}
                  href={`tel:${loc.phoneRaw}`}
                  className="btn btn-primary"
                >
                  {loc.neighborhood} {loc.phone}
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-ink-soft">
              Or{" "}
              <Link href="/contact" className="text-gold-600 underline">
                send a message
              </Link>
              . Gift cards are separate, on{" "}
              <Link href="/gift-cards" className="text-gold-600 underline">
                Gift Cards
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
