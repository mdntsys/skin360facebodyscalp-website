import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

/**
 * Robots policy. We explicitly welcome AI/answer-engine crawlers (GEO) in
 * addition to traditional search bots, so the clinic can surface in AI results.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "PerplexityBot",
    "Perplexity-User",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "Amazonbot",
    "Bytespider",
    "CCBot",
    "cohere-ai",
    "Meta-ExternalAgent",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...aiBots.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
