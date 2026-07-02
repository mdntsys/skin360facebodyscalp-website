import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  SERVICE_CATEGORIES,
  getCategory,
  POST_SURGERY_PACKAGE_NOTE,
} from "@/data/services";
import { PageHeader } from "@/components/PageHeader";
import { ServiceList } from "@/components/ServiceList";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, serviceCategorySchema, breadcrumbSchema } from "@/lib/seo";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return pageMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/services/${category.slug}`,
  });
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const others = SERVICE_CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <>
      <JsonLd data={serviceCategorySchema(slug)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.name, path: `/services/${category.slug}` },
        ])}
      />
      <PageHeader
        eyebrow={category.tagline}
        title={category.name}
        subtitle={category.heroDescription}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.name, path: `/services/${category.slug}` },
        ]}
      />

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <ServiceList category={category} />

        {slug === "post-cosmetic-surgery" && (
          <p className="mt-12 rounded-[var(--radius-xl2)] border border-gold-200 bg-cream px-6 py-5 text-center text-sm text-gold-700">
            {POST_SURGERY_PACKAGE_NOTE}
          </p>
        )}

        <div className="mt-16 flex flex-col items-center gap-4 rounded-[var(--radius-xl2)] bg-cream px-6 py-12 text-center">
          <h2 className="font-serif text-3xl text-ink">Ready to book your {category.name.toLowerCase()} treatment?</h2>
          <p className="max-w-lg text-sm text-ink-soft">
            Reserve online in seconds through our GlossGenius booking page, or reach out for a
            complimentary consultation.
          </p>
          <BookingButton />
        </div>
      </section>

      {/* Cross-links to other categories (internal linking for SEO) */}
      <section className="mx-auto max-w-6xl px-5 pb-24 lg:px-8">
        <h2 className="mb-8 text-center font-serif text-2xl text-ink">Explore More Services</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((c) => (
            <Link
              key={c.slug}
              href={`/services/${c.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-line bg-white px-5 py-4 text-sm transition-all hover:border-gold-300 hover:shadow-md"
            >
              <span className="font-medium text-ink">{c.name}</span>
              <ArrowIcon className="h-4 w-4 text-gold-500 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
