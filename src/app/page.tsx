import Link from "next/link";
import { SITE } from "@/data/site";
import { Hero } from "@/components/Hero";
import { LiteYouTube } from "@/components/LiteYouTube";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicePillars } from "@/components/ServicePillars";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQ } from "@/components/FAQ";
import { LocationsSection } from "@/components/LocationsSection";
import { BookingButton } from "@/components/BookingButton";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { faqSchema } from "@/lib/seo";
import { SparkleIcon, LeafIcon, ClockIcon } from "@/components/icons";

const VALUES = [
  {
    icon: SparkleIcon,
    title: "Intimate Care That Transforms Confidence",
    body: "Every visit is a private, personalized experience — designed to elevate self-esteem and inspire lasting confidence.",
  },
  {
    icon: LeafIcon,
    title: "Personalized Consultations",
    body: "We begin by understanding your unique skin, body, and scalp goals, then build a treatment plan made just for you.",
  },
  {
    icon: ClockIcon,
    title: "Streamlined Process",
    body: "From easy online booking to advanced technology and premium products, your time with us is effortless and elevated.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema()} />
      <Hero />

      {/* Video */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Welcome to Skin 360"
          title={<>A Boutique Escape for <span className="text-gold-gradient italic">Face, Body &amp; Scalp</span></>}
          subtitle="Step inside our world of personalized esthetics and see what a Skin 360 experience feels like."
          className="mb-12"
        />
        <Reveal>
          <LiteYouTube videoId={SITE.youtubeVideoId} title="Skin 360 Face Body Scalp" />
        </Reveal>
      </section>

      {/* Services / pillars */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Treatment Options for Everyone"
            title={<>Explore Our <span className="text-gold-gradient italic">Signature</span> Services</>}
            subtitle="Personalized facials, non-invasive body contouring, and our exclusive Japanese Head Spa — plus nails and post-cosmetic surgery recovery care."
            className="mb-14"
          />
          <ServicePillars />
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-gold-400" aria-hidden /> Our Philosophy
            </span>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Enhance Your Self-Esteem With Unparalleled{" "}
              <span className="text-gold-gradient italic">Esthetic Treatments</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{SITE.mission}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <BookingButton />
              <Link href="/about" className="btn btn-outline">
                About Us
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 100}
                className="flex gap-5 rounded-[var(--radius-xl2)] border border-line bg-white p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-600">
                  <v.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-serif text-xl text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="Your Journey to Radiant Skin"
            className="mb-16"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Loved by Our Clients"
          title={<>Kind Words From <span className="text-gold-gradient italic">Real Clients</span></>}
          subtitle="Carolina's clients keep coming back for results they can see and feel."
          className="mb-14"
        />
        <TestimonialsSection limit={6} />
        <div className="mt-12 text-center">
          <Link href="/testimonials" className="btn btn-outline">
            Read More Reviews
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream/60 py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Good to Know"
            title="Frequently Asked Questions"
            className="mb-14"
          />
          <FAQ />
        </div>
      </section>

      {/* Locations */}
      <section className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Find Us"
          title="Two Locations to Serve You"
          subtitle="Visit us in Toluca Lake or Valencia for the full Skin 360 experience."
          className="mb-14"
        />
        <LocationsSection />
      </section>

      {/* Final CTA */}
      <section className="px-5 pb-24 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[var(--radius-xl2)] px-6 py-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{ background: "linear-gradient(120deg, #82602a, #c19a43 55%, #a67c34)" }}
          />
          <div aria-hidden className="absolute inset-0 -z-10 opacity-20"
            style={{ background: "radial-gradient(50% 60% at 50% 0%, #fff, transparent 70%)" }} />
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-white/80">Ready When You Are</span>
            <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight text-white sm:text-5xl">
              Your Skin Will Thank You
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/90">
              Book your personalized face, body, or scalp treatment today and discover confidence
              that lasts.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SITE.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-gold-700 hover:bg-ivory"
              >
                Book an Appointment
              </a>
              <a href={`tel:${SITE.phoneRaw}`} className="btn border border-white/70 text-white hover:bg-white/10">
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
