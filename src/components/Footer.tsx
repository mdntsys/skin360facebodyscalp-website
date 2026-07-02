import Link from "next/link";
import Image from "next/image";
import { SITE, LOCATIONS } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";
import { PhoneIcon, MailIcon, PinIcon, InstagramIcon } from "./icons";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-24 border-t border-line bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Image src="/logo.webp" alt={SITE.name} width={130} height={116} className="h-20 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-soft">
              {SITE.shortDescription}
            </p>
            {SITE.social.instagram && (
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-300 text-gold-600 transition-colors hover:bg-gold hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold-600">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              {SERVICE_CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/services/${c.slug}`} className="transition-colors hover:text-gold-600">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Explore */}
          <nav aria-label="Explore">
            <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold-600">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li><Link href="/about" className="transition-colors hover:text-gold-600">About Us</Link></li>
              <li><Link href="/testimonials" className="transition-colors hover:text-gold-600">Testimonials</Link></li>
              <li><Link href="/policies" className="transition-colors hover:text-gold-600">Policies</Link></li>
              <li><Link href="/gift-cards" className="transition-colors hover:text-gold-600">Gift Cards</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-gold-600">Contact</Link></li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-[0.22em] text-gold-600">
              Visit &amp; Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-soft">
              {LOCATIONS.map((loc) => (
                <li key={loc.slug} className="flex gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <span>
                    <Link href={`/locations/${loc.slug}`} className="font-medium text-ink transition-colors hover:text-gold-600">
                      {loc.neighborhood}
                    </Link>
                    <br />
                    {loc.addressLine}, {loc.city}, {loc.region} {loc.postalCode}
                  </span>
                </li>
              ))}
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <a href={`tel:${SITE.phoneRaw}`} className="transition-colors hover:text-gold-600">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                <a href={`mailto:${SITE.email}`} className="break-all transition-colors hover:text-gold-600">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule-gold my-12" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© {year} {SITE.name}. All Rights Reserved.</p>
          <p>Toluca Lake · Valencia · Los Angeles &amp; Santa Clarita, California</p>
        </div>
      </div>
    </footer>
  );
}
