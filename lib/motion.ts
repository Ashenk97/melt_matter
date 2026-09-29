import type { Transition, Variants } from "framer-motion";

export const motionEase: NonNullable<Transition["ease"]> = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.65,
      ease: motionEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

export const bestsellerCard: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: motionEase,
    },
  },
};

export const inView = {
  once: true,
  amount: 0.2,
} as const;
