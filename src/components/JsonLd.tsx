/** Injects a JSON-LD structured-data script. Server component. */
export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, static, build-time content.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
