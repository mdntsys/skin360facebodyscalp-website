import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <span className="eyebrow mb-4 flex items-center gap-3">
          <span className="inline-block h-px w-6 bg-gold-400" aria-hidden />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl text-balance text-4xl leading-tight sm:text-5xl">{title}</h2>
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-lg text-ink-soft ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
