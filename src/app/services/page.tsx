import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ServicePillars } from "@/components/ServicePillars";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services — Facials, Body Contouring, Head Spa, Nails & Recovery",
  description:
    "Explore the full Skin 360 menu: personalized facials, advanced skin treatments, Brazilian lymphatic drainage & body contouring, Japanese Head Spa, nails, and post-cosmetic surgery recovery in Toluca Lake & Valencia, CA.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHeader
        eyebrow="Our Menu"
        title={<>Treatments for <span className="text-gold-gradient italic">Every You</span></>}
        subtitle="Face, body, and scalp care crafted around your goals — using the finest products and advanced, non-invasive technology."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <ServicePillars />
      </section>
      <section className="px-5 pb-24 text-center lg:px-8">
        <p className="mx-auto max-w-xl font-serif text-2xl text-ink">
          Not sure where to start? A personalized consultation will guide the way.
        </p>
        <div className="mt-8">
          <BookingButton />
        </div>
      </section>
    </>
  );
}
