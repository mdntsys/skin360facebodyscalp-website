# Skin 360 Face Body Scalp — Website

Modern, SEO- and GEO-optimized marketing site for **Skin 360 Face Body Scalp**, a boutique
esthetics clinic in Toluca Lake (Burbank) and Valencia, CA.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript** — server-rendered static HTML for
  maximum crawlability by search engines and AI answer engines.
- **Tailwind CSS v4** — white & gold design system (see `src/app/globals.css`).
- **next/font** (Cormorant Garamond + Jost), **next/image** for optimized assets.
- Deploys on **Vercel**.

## SEO / GEO features

- Per-page metadata, canonical URLs, Open Graph & Twitter cards.
- JSON-LD structured data: `Organization`, `WebSite`, `LocalBusiness` (×2 locations), `Service`
  with offer catalogs, `FAQPage`, and `BreadcrumbList`.
- `sitemap.xml` and `robots.txt` (explicitly allowing GPTBot, ClaudeBot, PerplexityBot, etc.).
- `/llms.txt` — a structured brief for AI agents.
- The clinic's PDF service menus are rendered as indexable HTML service pages.
- Lazy-loaded YouTube facade for fast Core Web Vitals.

## Content

All copy, pricing, locations, testimonials, and FAQs live in `src/data/`:

- `site.ts` — business config, locations, hours, booking URL, nav.
- `services.ts` — full Face / Body / Scalp / Nails / Post-Cosmetic Surgery menus.
- `testimonials.ts`, `faqs.ts`.

Update content there; every page and the structured data stay in sync automatically.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Bookings

Every "Book" action links to GlossGenius: `https://skin360facebodyscalp.glossgenius.com/`.

## To confirm / customize

- Instagram handle (currently unset in `src/data/site.ts`).
- Valencia street address & zip (verify against Google Business Profile).
- Business hours (two sources on the old site differed slightly).
- Swap the hero/section placeholder panels for photography when available.
