import Link from "next/link";

/** Elegant interior-page header with breadcrumb, used across sub-pages. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  breadcrumbs?: { name: string; path: string }[];
}) {
  return (
    <header className="relative overflow-hidden bg-cream pt-36 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 0%, rgba(216,189,120,0.22) 0%, rgba(216,189,120,0) 70%)",
        }}
      />
      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.path} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden className="text-gold-400">/</span>}
                  {i < breadcrumbs.length - 1 ? (
                    <Link href={crumb.path} className="transition-colors hover:text-gold-600">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-ink-soft">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{subtitle}</p>
        )}
      </div>
    </header>
  );
}
