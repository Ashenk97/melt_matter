import Accordion from "@/components/Accordion";
import RevealSection from "@/components/RevealSection";
import { FAQ_ITEMS } from "@/config/faq";

export default function Faq() {
  return (
    <RevealSection
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-cream-200/75 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-blush-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate-800 sm:text-5xl">
            Sweet Questions,{" "}
            <span className="font-script font-normal text-blush-500">Answered</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-chocolate-600">
            Everything you might wonder before placing an order.
          </p>
        </header>

        <Accordion
          items={FAQ_ITEMS.map((item) => ({ title: item.question, content: item.answer }))}
          defaultOpenIndex={0}
        />

        <p className="mt-8 text-center text-sm text-chocolate-500">
          Still curious?{" "}
          <a href="#contact" className="font-semibold text-blush-600 underline-offset-4 hover:underline">
            Send us a note
          </a>{" "}
          — we’re happy to help.
        </p>
      </div>
    </RevealSection>
  );
}
