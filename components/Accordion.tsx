"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { motionEase } from "@/lib/motion";

export type AccordionEntry = {
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionEntry[];
  defaultOpenIndex?: number | null;
};

export default function Accordion({ items, defaultOpenIndex = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const reduceMotion = useReducedMotion();
  const baseId = useId();

  return (
    <div className="divide-y divide-chocolate-100/80 overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-soft ring-1 ring-chocolate-100/80">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.title} className={isOpen ? "bg-blush-50/70" : undefined}>
            <h3>
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-blush-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blush-400 sm:px-8 sm:py-6"
              >
                <span className="font-display text-xl font-semibold text-chocolate-800 sm:text-2xl">
                  {item.title}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1 transition duration-300 ${
                    isOpen
                      ? "rotate-180 bg-chocolate-700 text-cream-100 ring-chocolate-700"
                      : "bg-cream-100 text-chocolate-600 ring-chocolate-200 group-hover:ring-blush-300"
                  }`}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, ease: motionEase }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-base leading-7 text-chocolate-600 sm:px-8 sm:pr-20">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
