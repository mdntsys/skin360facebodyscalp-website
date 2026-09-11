import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Skin 360 Face Body Scalp uses your information, including appointment text messages. We do not share mobile numbers. Msg & data rates may apply.",
  path: "/privacy",
});

const SECTIONS = [
  {
    title: "Who we are",
    body: "Skin 360 Face Body Scalp LLC, with salons in Toluca Lake (Burbank) and Valencia, California. Questions: skin360facebodyscalp@yahoo.com or (818) 601-2852.",
  },
  {
    title: "Appointment texts",
    body: "If you opt in, we text you about your appointment only: confirmations, reminders, and cancellations. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe, HELP for help.",
  },
  {
    title: "We do not share mobile numbers",
    body: "We do not sell, rent, or share mobile numbers with third parties or affiliates for their marketing. Your number is used to send the appointment texts you asked for, and to run the salon.",
  },
  {
    title: "What else we keep",
    body: "Name, phone, email, and visit details so we can book you, take payment, and keep your chart. We do not sell that information.",
  },
  {
    title: "Opt out",
    body: "Reply STOP to any text. You can also call the salon. Opting out of texts does not cancel email or your appointment.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ])}
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How we use your information, including texts about your appointment."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy", path: "/privacy" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <Reveal>
          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <div key={s.title}>
                <h2 className="font-serif text-2xl text-ink">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
