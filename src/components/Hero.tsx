import Image from "next/image";
import { SITE, LOCATIONS } from "@/data/site";
import { BookingButton } from "./BookingButton";
import { ArrowIcon } from "./icons";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory pt-32 pb-20 lg:pt-40">
      {/* Soft gold ambiance */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(216,189,120,0.20) 0%, rgba(216,189,120,0) 70%), radial-gradient(40% 40% at 85% 30%, rgba(193,154,67,0.12) 0%, rgba(193,154,67,0) 70%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* Copy */}
        <div className="reveal is-visible text-center lg:text-left">
          <span className="eyebrow inline-flex items-center gap-3">
            <span className="inline-block h-px w-6 bg-gold-400" aria-hidden />
            Face · Body · Scalp — Toluca Lake &amp; Valencia
          </span>
          <h1 className="mt-6 text-balance text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Your Skin Will{" "}
            <span className="text-gold-gradient italic">Thank You</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
            {SITE.tagline}.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <BookingButton />
            <Link href="/services" className="btn btn-outline">
              Explore Services <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Trust row */}
          <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8 lg:mx-0">
            <div>
              <dt className="font-serif text-3xl text-gold-600">2</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Locations</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl text-gold-600">40+</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Treatments</dd>
            </div>
            <div>
              <dt className="font-serif text-3xl text-gold-600">5★</dt>
              <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Client Loved</dd>
            </div>
          </dl>
        </div>

        {/* Visual — feature photograph in an elegant gold frame */}
        <div className="reveal is-visible relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)] border border-gold-200 shadow-[0_40px_100px_-50px_rgba(166,124,52,0.6)]">
            <Image
              src="/images/hero-facial.webp"
              alt="A client relaxing during a luxury facial treatment at Skin 360 Face Body Scalp"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 620px"
              className="object-cover"
            />
            {/* subtle warm overlay for depth */}
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent"
            />
            {/* corner filigree */}
            <span className="absolute left-5 top-5 z-10 h-10 w-10 border-l border-t border-gold-200/90" aria-hidden />
            <span className="absolute bottom-5 right-5 z-10 h-10 w-10 border-b border-r border-gold-200/90" aria-hidden />
          </div>

          {/* floating location chips */}
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-2 lg:left-6 lg:translate-x-0">
            {LOCATIONS.map((loc) => (
              <span
                key={loc.slug}
                className="rounded-full border border-line bg-ivory/95 px-4 py-2 text-xs font-medium tracking-wide text-ink shadow-sm backdrop-blur"
              >
                {loc.neighborhood}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
