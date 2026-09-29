export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How far do you deliver?",
    answer:
      "We deliver within a 10-mile radius of our kitchen for a small flat fee, and delivery is free on orders over $60. Outside that area, you’re welcome to arrange a pickup — just mention it in your order notes.",
  },
  {
    question: "How much notice do you need for a custom cake?",
    answer:
      "Please give us at least 5–7 days for custom cakes, and 2–3 weeks for tiered or wedding cakes. Brownie boxes and cupcakes usually need just 48 hours. Last-minute request? Ask anyway — we’ll squeeze it in when we can.",
  },
  {
    question: "Do you cater to allergies or dietary needs?",
    answer:
      "Our kitchen handles wheat, dairy, eggs, soy, and nuts, so we can’t guarantee any bake is allergen-free. We do offer gluten-friendly and egg-free options on request — tell us about any allergies when you order and we’ll talk you through what’s safe.",
  },
  {
    question: "How long will my treats stay fresh?",
    answer:
      "Brownies keep for up to 5 days in an airtight container at room temperature. Cakes and cupcakes with cream or fresh fruit are best within 2–3 days and should be refrigerated — let them sit out for 30 minutes before serving for the softest crumb.",
  },
];
