"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

/**
 * Zero-backend contact form: composes a pre-filled email to the studio using
 * the visitor's own mail client. Keeps the static site simple and reliable
 * (no server, no third-party keys) while still capturing an inquiry.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Website inquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-gold-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
            Name <span className="text-gold-600">*</span>
          </span>
          <input name="name" required className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
            Email <span className="text-gold-600">*</span>
          </span>
          <input name="email" type="email" required className={field} placeholder="you@email.com" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">Phone</span>
        <input name="phone" type="tel" className={field} placeholder="(optional)" />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-muted">
          Message <span className="text-gold-600">*</span>
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className={`${field} resize-y`}
          placeholder="How can we help? Let us know what you're interested in."
        />
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send Message
      </button>
      {sent && (
        <p className="text-sm text-gold-700">
          Your email app should have opened with your message ready to send. Prefer to book? Use the
          button above — we can't wait to see you!
        </p>
      )}
    </form>
  );
}
