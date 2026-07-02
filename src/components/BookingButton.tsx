import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

/**
 * Generic conversion action. Routes to the /book chooser so visitors pick
 * their location (Toluca → GlossGenius, Valencia → Square) rather than being
 * sent to a single platform. For a location-specific button, link directly to
 * that location's bookingUrl instead.
 */
export function BookingButton({
  children = "Book an Appointment",
  variant = "primary",
  className = "",
}: Props) {
  return (
    <Link
      href="/book"
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`}
      data-book="chooser"
    >
      {children}
    </Link>
  );
}
