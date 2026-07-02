"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "./icons";

/**
 * Lightweight YouTube facade: shows the poster image and only mounts the
 * (heavy) iframe after the visitor clicks play. Keeps initial page weight low
 * for fast loads / good Core Web Vitals while still featuring the video.
 */
export function LiteYouTube({
  videoId,
  title = "Skin 360 Face Body Scalp",
}: {
  videoId: string;
  title?: string;
}) {
  const [active, setActive] = useState(false);
  const poster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[var(--radius-xl2)] bg-ink shadow-[0_30px_80px_-40px_rgba(43,39,35,0.7)] ring-1 ring-gold-200">
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          className="group absolute inset-0 flex h-full w-full items-center justify-center"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 900px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-ink/10" />
          <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-gold-600 shadow-xl backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-white">
            <PlayIcon className="ml-1" />
          </span>
        </button>
      )}
    </div>
  );
}
