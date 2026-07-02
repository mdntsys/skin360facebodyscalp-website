import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMetadata({
  title: "Policies — Cancellations & Appointments",
  description:
    "Skin 360 Face Body Scalp appointment and cancellation policy. Please cancel or reschedule at least 24 hours in advance. Review our policies before your visit.",
  path: "/policies",
});

const POLICY_POINTS = [
  "Appointments must be canceled or rescheduled at least 24 hours in advance.",
  "Cancellations made less than 24 hours before the appointment will incur a fee of 50% of the scheduled service.",
  "No-shows will be charged 100% of the service cost.",
  "Clients arriving more than 10–15 minutes late may need to reschedule, and a cancellation fee may apply.",
];

export default function PoliciesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Policies", path: "/policies" },
        ])}
      />
      <PageHeader
        eyebrow="Good to Know"
        title="Policies"
        subtitle="We value your time and ours. To ensure fairness to all clients and our team, we kindly ask that you follow our cancellation policy."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Policies", path: "/policies" },
        ]}
      />

      <section className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl text-ink">Cancellation Policy</h2>
          <ul className="mt-8 space-y-4">
            {POLICY_POINTS.map((point) => (
              <li
                key={point}
                className="flex gap-4 rounded-2xl border border-line bg-white px-6 py-5 text-ink-soft"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 space-y-4 rounded-[var(--radius-xl2)] bg-cream px-7 py-8 text-ink-soft">
            <p>
              We understand that emergencies happen — please contact us as soon as possible, and
              we'll do our best to accommodate.
            </p>
            <p className="font-medium text-ink">
              By booking an appointment, you agree to this policy.
            </p>
          </div>

          <div className="mt-12 text-center">
            <BookingButton />
          </div>
        </Reveal>
      </section>
    </>
  );
}
