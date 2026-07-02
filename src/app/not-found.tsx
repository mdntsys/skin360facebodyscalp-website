import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-5 py-32 text-center">
      <span className="eyebrow">Page not found</span>
      <h1 className="mt-4 font-serif text-6xl text-gold-gradient">404</h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        The page you're looking for has drifted away. Let's get you back to radiant skin.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/" className="btn btn-outline">Back Home</Link>
        <BookingButton />
      </div>
    </section>
  );
}
