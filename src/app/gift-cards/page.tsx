import type { Metadata } from "next";
import { SITE } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import { SparkleIcon } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Gift Cards — The Perfect Gift of Self-Care",
  description:
    "Give the gift of radiant skin and relaxation. Purchase a Skin 360 Face Body Scalp gift card online — perfect for facials, body treatments, and our Japanese Head Spa.",
  path: "/gift-cards",
});

export default function GiftCardsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Gift Cards", path: "/gift-cards" },
        ])}
      />
      <PageHeader
        eyebrow="Give the Glow"
        title={<>The Gift of <span className="text-gold-gradient italic">Self-Care</span></>}
        subtitle="Treat someone you love to radiant skin, relaxation, and confidence with a Skin 360 gift card."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Gift Cards", path: "/gift-cards" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8">
        <Reveal>
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[var(--radius-xl2)] p-10 text-white shadow-xl">
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ background: "linear-gradient(120deg, #82602a, #c19a43 55%, #a67c34)" }}
            />
            <SparkleIcon className="mx-auto h-8 w-8 text-white/90" />
            <p className="mt-4 font-serif text-3xl">Skin 360 Gift Card</p>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-white/80">Face · Body · Scalp</p>
            <p className="mt-6 text-sm text-white/90">
              Redeemable for any service at our Toluca Lake and Valencia locations.
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-ink-soft">
            Gift cards are available to purchase online through our secure GlossGenius booking page.
            Choose an amount and send radiant confidence to someone special.
          </p>

          <div className="mt-8">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Purchase a Gift Card
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">
            Have a question about gift cards? Call us at{" "}
            <a href={`tel:${SITE.phoneRaw}`} className="text-gold-600 hover:underline">
              {SITE.phone}
            </a>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
