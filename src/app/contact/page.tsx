import type { Metadata } from "next";
import { SITE, LOCATIONS } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us — Book & Get in Touch",
  description:
    "Reach Skin 360 Face Body Scalp in Toluca Lake or Valencia, CA. Call (818) 601-2852, email us, or book online. Find our addresses, hours, and contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        eyebrow="Say Hello"
        title="Reach Out for Further Assistance"
        subtitle="Have a question or ready to book? We'd love to hear from you. For the fastest response, book online anytime."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <div className="rounded-[var(--radius-xl2)] border border-line bg-white p-8">
              <h2 className="font-serif text-2xl text-ink">Get in Touch</h2>
              <ul className="mt-6 space-y-4 text-ink-soft">
                <li className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold-600">{SITE.phone}</a>
                </li>
                <li className="flex gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                  <a href={`mailto:${SITE.email}`} className="break-all hover:text-gold-600">{SITE.email}</a>
                </li>
              </ul>
              <div className="mt-6">
                <BookingButton />
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {LOCATIONS.map((loc) => (
                <div key={loc.slug} className="rounded-[var(--radius-xl2)] border border-line bg-white p-6">
                  <h3 className="font-serif text-xl text-ink">{loc.neighborhood}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                    <li className="flex gap-3">
                      <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      <span>{loc.addressLine}, {loc.city}, {loc.region} {loc.postalCode}</span>
                    </li>
                    <li className="flex gap-3">
                      <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                      <a href={`tel:${loc.phoneRaw}`} className="hover:text-gold-600">{loc.phone}</a>
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
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[var(--radius-xl2)] border border-line bg-white p-8">
            <h2 className="font-serif text-2xl text-ink">Send Us a Message</h2>
            <p className="mt-2 text-sm text-ink-soft">
              Fill out the form and we'll get back to you as soon as we can.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
