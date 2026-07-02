import { SITE } from "@/data/site";
import type { ServiceCategory } from "@/data/services";
import { Reveal } from "./Reveal";

/** Renders a full treatment menu (all groups) for a service category page. */
export function ServiceList({ category }: { category: ServiceCategory }) {
  return (
    <div className="space-y-16">
      {category.groups.map((group, gi) => (
        <div key={gi}>
          {group.title && (
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-serif text-2xl text-ink sm:text-3xl">{group.title}</h2>
              <span className="h-px flex-1 bg-line" aria-hidden />
            </div>
          )}
          {group.intro && (
            <p className="mb-8 max-w-3xl text-sm italic text-muted">{group.intro}</p>
          )}
          <ul className="grid gap-5 md:grid-cols-2">
            {group.services.map((service, si) => (
              <Reveal
                as="li"
                key={service.name}
                delay={(si % 2) * 80}
                className="group flex h-full flex-col rounded-[var(--radius-xl2)] border border-line bg-white p-7 transition-all duration-500 hover:border-gold-300 hover:shadow-[0_24px_60px_-40px_rgba(166,124,52,0.55)]"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl text-ink">{service.name}</h3>
                  <span className="whitespace-nowrap font-serif text-xl text-gold-600">
                    {service.price}
                  </span>
                </div>
                {service.duration && (
                  <span className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                    {service.duration}
                  </span>
                )}
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{service.description}</p>
                {service.includes && (
                  <p className="mt-4 rounded-2xl bg-cream px-4 py-3 text-xs leading-relaxed text-ink-soft">
                    <span className="font-medium text-gold-700">Includes: </span>
                    {service.includes}
                  </p>
                )}
                {service.note && (
                  <p className="mt-3 text-xs italic text-gold-700">{service.note}</p>
                )}
                <a
                  href={SITE.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.18em] text-gold-600 transition-colors hover:text-gold-700"
                >
                  Book this treatment
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
