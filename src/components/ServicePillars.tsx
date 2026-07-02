import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/data/services";
import { ArrowIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ServicePillars() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {SERVICE_CATEGORIES.map((cat, i) => (
        <Reveal
          key={cat.slug}
          delay={(i % 3) * 90}
          as="article"
          className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[0_30px_70px_-45px_rgba(166,124,52,0.6)]"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 font-serif text-8xl text-cream transition-colors duration-500 group-hover:text-gold-100"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="relative font-serif text-3xl text-ink">{cat.name}</h3>
          <p className="relative mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
            {cat.caption}
          </p>
          <Link
            href={`/services/${cat.slug}`}
            className="relative mt-6 inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.18em] text-gold-600 transition-colors hover:text-gold-700"
          >
            View menu
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
