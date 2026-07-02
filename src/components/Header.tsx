"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SITE, NAV_LINKS } from "@/data/site";
import { ChevronDown, MenuIcon, CloseIcon, PhoneIcon } from "./icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Lock scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || mobileOpen
          ? "bg-ivory/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
          <Image
            src="/logo.webp"
            alt={SITE.name}
            width={112}
            height={100}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm tracking-wide text-ink-soft transition-colors hover:text-gold-600"
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full w-60 -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  <ul className="overflow-hidden rounded-2xl border border-line bg-ivory p-2 shadow-xl">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-4 py-2.5 text-sm text-ink-soft transition-colors hover:bg-cream hover:text-gold-600"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm tracking-wide transition-colors hover:text-gold-600 ${
                  pathname === link.href ? "text-gold-600" : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-gold-600"
          >
            <PhoneIcon className="h-4 w-4 text-gold-600" />
            {SITE.phone}
          </a>
          <a
            href={SITE.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-6 !py-3"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-line bg-ivory px-5 pb-8 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="divide-y divide-line">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <li key={link.href} className="py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenGroup((g) => (g === link.href ? null : link.href))
                    }
                    className="flex w-full items-center justify-between py-3 text-left text-base text-ink"
                    aria-expanded={openGroup === link.href}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        openGroup === link.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openGroup === link.href && (
                    <ul className="pb-2">
                      <li>
                        <Link
                          href={link.href}
                          className="block py-2 pl-4 text-sm text-gold-600"
                        >
                          All {link.label}
                        </Link>
                      </li>
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block py-2 pl-4 text-sm text-ink-soft"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link href={link.href} className="block py-3 text-base text-ink">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full"
            >
              Book an Appointment
            </a>
            <a href={`tel:${SITE.phoneRaw}`} className="btn btn-outline w-full">
              Call {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
