import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/data/site";
import { PageHeader } from "@/components/PageHeader";
import { BookingButton } from "@/components/BookingButton";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us — A Boutique Esthetics Clinic",
  description:
    "Skin 360 Face Body Scalp is a boutique esthetics clinic founded by Carolina, combining premium products and state-of-the-art technology to boost self-esteem and inspire confidence in Toluca Lake & Valencia, CA.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        eyebrow="About Skin 360"
        title={<>Elevating Confidence Through <span className="text-gold-gradient italic">Advanced Aesthetic Care</span></>}
        subtitle="A boutique esthetics clinic designed to pamper clients in a refined, intimate setting."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
      />

      {/* Intro */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)] border border-gold-200 bg-gradient-to-br from-cream via-ivory to-sand shadow-[0_40px_100px_-50px_rgba(166,124,52,0.6)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                <Image src="/logo.webp" alt={SITE.name} width={240} height={215} className="w-48 max-w-full" />
                <p className="mt-6 max-w-xs text-sm italic text-ink-soft">
                  Founded and led by Carolina — an esthetician devoted to her craft.
                </p>
              </div>
              <span className="absolute left-5 top-5 h-10 w-10 border-l border-t border-gold-300" aria-hidden />
              <span className="absolute bottom-5 right-5 h-10 w-10 border-b border-r border-gold-300" aria-hidden />
            </div>
          </Reveal>

          <Reveal>
            <span className="eyebrow flex items-center gap-3">
              <span className="inline-block h-px w-6 bg-gold-400" aria-hidden /> Our Story
            </span>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Personalized care, <span className="text-gold-gradient italic">premium results</span>
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Skin 360 Face Body Scalp is a boutique esthetics clinic designed to pamper clients
                in a refined, intimate setting. With a mission centered on boosting self-esteem and
                inspiring confidence, the clinic combines premium products with state-of-the-art
                technology.
              </p>
              <p>
                Through highly personalized treatments, Skin 360 helps clients age gracefully and
                feel empowered to become the best version of themselves — inside and out.
              </p>
            </div>
            <div className="mt-8">
              <BookingButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission band */}
      <section className="bg-cream/60 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <SectionHeading eyebrow="Our Mission" title="Why We Do What We Do" className="mb-8" />
          <Reveal>
            <p className="text-xl leading-relaxed text-ink-soft">{SITE.mission}</p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center lg:px-8">
        <SectionHeading
          eyebrow="Let's Get Connected"
          title="Ready to Begin Your Skin Journey?"
          subtitle="Every treatment begins with understanding your unique skin needs, creating a personalized pathway to radiant, healthy skin you'll love. Get in touch now."
          className="mb-10"
        />
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookingButton />
          <Link href="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
