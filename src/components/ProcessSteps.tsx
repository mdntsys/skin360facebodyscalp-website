import { Reveal } from "./Reveal";

const STEPS = [
  {
    title: "Schedule Your Visit",
    label: "Personal Consultation",
    body: "Meet with our experts to discuss your skin and body goals and create a tailored treatment plan.",
  },
  {
    title: "Customize Your Treatment",
    label: "Personalized Care",
    body: "Treatments are thoughtfully customized to address your unique needs and desired results.",
  },
  {
    title: "Experience & Enjoy",
    label: "Relax and Rejuvenate",
    body: "Unwind in a serene, comfortable setting while enjoying your personalized treatment.",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {STEPS.map((step, i) => (
        <Reveal key={step.title} delay={i * 110} className="relative">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-300 font-serif text-2xl text-gold-600">
              {i + 1}
            </span>
            {i < STEPS.length - 1 && (
              <span className="hidden h-px flex-1 bg-gradient-to-r from-gold-300 to-transparent md:block" aria-hidden />
            )}
          </div>
          <h3 className="mt-6 font-serif text-2xl text-ink">{step.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-600">{step.label}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{step.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
