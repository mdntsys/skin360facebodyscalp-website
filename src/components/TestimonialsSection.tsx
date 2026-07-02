import { TESTIMONIALS } from "@/data/testimonials";
import { Reveal } from "./Reveal";

function QuoteCard({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="flex h-full break-inside-avoid flex-col rounded-[var(--radius-xl2)] border border-line bg-white p-7 shadow-[0_20px_50px_-40px_rgba(43,39,35,0.5)]">
      <span className="font-serif text-5xl leading-none text-gold-300" aria-hidden>
        &ldquo;
      </span>
      <blockquote className="-mt-3 text-sm leading-relaxed text-ink-soft">{quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <span className="h-px w-6 bg-gold-400" aria-hidden />
        <span className="text-sm font-medium tracking-wide text-ink">{author}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Masonry-style wall of testimonials. `limit` renders a subset (e.g. on the
 * home page); omit it on the dedicated testimonials page for the full wall.
 */
export function TestimonialsSection({ limit }: { limit?: number }) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
      {items.map((t, i) => (
        <Reveal key={t.author + i} delay={(i % 3) * 70} className="break-inside-avoid">
          <QuoteCard quote={t.quote} author={t.author} />
        </Reveal>
      ))}
    </div>
  );
}
