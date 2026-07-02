import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Testimonials — What Our Clients Say",
  description:
    "Read real reviews from Skin 360 Face Body Scalp clients. Facials, body lymphatic drainage, DMK treatments, and more — see why clients trust Carolina in Toluca Lake & Valencia, CA.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ])}
      />
      <PageHeader
        eyebrow="Client Love"
        title={<>Kind Words From <span className="text-gold-gradient italic">Real Clients</span></>}
        subtitle="From glowing facials to transformative body work, here's what clients say about their Skin 360 experience."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Testimonials", path: "/testimonials" },
        ]}
      />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <TestimonialsSection />
        <div className="mt-16 text-center">
          <p className="mx-auto mb-8 max-w-lg font-serif text-2xl text-ink">
            Ready to experience it for yourself?
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
