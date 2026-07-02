import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { LocationsSection } from "@/components/LocationsSection";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Locations — Toluca Lake & Valencia",
  description:
    "Visit Skin 360 Face Body Scalp at our two California locations: Toluca Lake (Burbank) and Valencia. Hours, addresses, phone numbers, and online booking for facials, body contouring, and head spa.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ])}
      />
      <PageHeader
        eyebrow="Find Us"
        title={<>Two Locations, <span className="text-gold-gradient italic">One Standard</span></>}
        subtitle="Experience the full Skin 360 menu in Toluca Lake or Valencia — the same personalized care, premium products, and advanced technology at every studio."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <LocationsSection />
      </section>
    </>
  );
}
