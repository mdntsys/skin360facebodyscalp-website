import Link from "next/link";
import { LOCATIONS, SITE } from "@/data/site";
import { PhoneIcon, PinIcon, ClockIcon, ArrowIcon } from "./icons";
import { Reveal } from "./Reveal";

export function LocationsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {LOCATIONS.map((loc, i) => (
        <Reveal
          key={loc.slug}
          delay={i * 100}
          className="flex h-full flex-col rounded-[var(--radius-xl2)] border border-line bg-white p-8 transition-all duration-500 hover:border-gold-300 hover:shadow-[0_28px_70px_-45px_rgba(166,124,52,0.6)]"
        >
          <span className="eyebrow">{loc.region === "CA" ? "California" : loc.region}</span>
          <h3 className="mt-3 font-serif text-2xl text-ink">{loc.neighborhood}</h3>

          <ul className="mt-6 space-y-3 text-sm text-ink-soft">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              <span>
                {loc.addressLine}
                <br />
                {loc.city}, {loc.region} {loc.postalCode}
              </span>
            </li>
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              <a href={`tel:${loc.phoneRaw}`} className="transition-colors hover:text-gold-600">
                {loc.phone}
              </a>
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

          <div className="mt-7 flex flex-wrap gap-3 pt-2">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary !px-6 !py-3"
            >
              Book Here
            </a>
            <Link href={`/locations/${loc.slug}`} className="btn btn-outline !px-6 !py-3">
              Details <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
