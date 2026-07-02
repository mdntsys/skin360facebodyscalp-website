"use client";

import { useState } from "react";
import { FAQS } from "@/data/faqs";
import { ChevronDown } from "./icons";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="mx-auto max-w-3xl divide-y divide-line rounded-[var(--radius-xl2)] border border-line bg-white">
      {FAQS.map((faq, i) => {
        const isOpen = open === i;
        return (
          <li key={faq.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg text-ink">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft sm:px-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
