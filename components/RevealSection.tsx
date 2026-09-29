"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, inView } from "@/lib/motion";

type RevealSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  animateOnMount?: boolean;
};

export default function RevealSection({
  id,
  className,
  children,
  animateOnMount = false,
}: RevealSectionProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";

  return (
    <motion.section
      id={id}
      className={className}
      variants={fadeUp}
      initial={initial}
      {...(animateOnMount
        ? { animate: "visible" as const }
        : { whileInView: "visible" as const, viewport: inView })}
    >
      {children}
    </motion.section>
  );
}
