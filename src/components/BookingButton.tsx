import { SITE } from "@/data/site";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

/** Primary conversion action — always routes to the GlossGenius booking page. */
export function BookingButton({
  children = "Book an Appointment",
  variant = "primary",
  className = "",
}: Props) {
  return (
    <a
      href={SITE.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`}
      data-book="glossgenius"
    >
      {children}
    </a>
  );
}
