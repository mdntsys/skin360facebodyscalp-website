import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  title: "Terms",
  description:
    "Terms for Skin 360 Face Body Scalp appointment texts and booking. Msg & data rates may apply. Message frequency varies. Reply STOP to unsubscribe.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ])}
      />
      <PageHeader
        eyebrow="Legal"
        title="Terms"
        subtitle="Booking and appointment texts from Skin 360 Face Body Scalp."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
      />

      <section className="mx-auto max-w-3xl space-y-8 px-5 py-16 text-ink-soft lg:px-8">
        <Reveal>
          <h2 className="font-serif text-2xl text-ink">Appointment texts</h2>
          <p className="mt-3 leading-relaxed">
            If you check the box when booking, Skin 360 Face Body Scalp may text
            you confirmations, reminders, and cancellations for that appointment.
            Message frequency varies. Message and data rates may apply. Reply STOP
            to unsubscribe, HELP for help.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-2xl text-ink">How you opt in</h2>
          <p className="mt-3 leading-relaxed">
            Online at app.skin360facebodyscalp.com/book, or when we book you in
            the salon. The box is unchecked unless you choose it. Leave it
            unchecked and we email you instead.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-2xl text-ink">What we will not text</h2>
          <p className="mt-3 leading-relaxed">
            These texts are not marketing. We will not use this opt-in to send
            promotions or ads.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="font-serif text-2xl text-ink">Cancellations</h2>
          <p className="mt-3 leading-relaxed">
            Salon visit rules are on our{" "}
            <Link href="/policies" className="text-gold-600 underline">
              policies
            </Link>{" "}
            page. Privacy details are at{" "}
            <Link href="/privacy" className="text-gold-600 underline">
              /privacy
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </>
  );
}
