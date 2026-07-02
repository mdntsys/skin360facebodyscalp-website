/**
 * Frequently asked questions. Rendered visibly AND emitted as FAQPage
 * structured data (JSON-LD) so answers can surface in Google and AI results.
 */

export type FAQ = {
  question: string;
  answer: string;
};

export const FAQS: FAQ[] = [
  {
    question: "What skin types do you work with?",
    answer:
      "We treat all skin types, including sensitive, oily, dry, and combination skin. Every service is customized, beginning with a consultation to assess your skin and create a personalized treatment plan.",
  },
  {
    question: "How often should I get a facial?",
    answer:
      "For optimal skin health, facials are typically recommended every 4–6 weeks. Frequency may vary based on your skin concerns and goals.",
  },
  {
    question: "Will extractions during a facial hurt?",
    answer:
      "Extractions may cause mild discomfort but are generally well tolerated. Our therapists use gentle techniques and calming products to minimize discomfort and reduce redness.",
  },
  {
    question: "Where is Skin 360 located?",
    answer:
      "Skin 360 Face Body Scalp has two locations: our Toluca Lake studio at 4425 W. Riverside Drive, Suite 203, Burbank, CA 91505, and our Valencia location serving the Santa Clarita area. Both offer our full range of face, body, and scalp treatments.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book online any time through our GlossGenius booking page. Every service — facials, body contouring, Japanese Head Spa, nails, and post-cosmetic surgery care — can be reserved online, or you can call us at (818) 601-2852.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Appointments must be canceled or rescheduled at least 24 hours in advance. Cancellations made less than 24 hours before the appointment incur a fee of 50% of the scheduled service, and no-shows are charged 100%. Clients arriving more than 10–15 minutes late may need to reschedule.",
  },
];
