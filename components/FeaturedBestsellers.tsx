"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import MenuCard from "@/components/MenuCard";
import { FEATURED_BESTSELLERS } from "@/config/menu";
import { bestsellerCard, fadeUp, inView, staggerContainer } from "@/lib/motion";

export default function FeaturedBestsellers() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";

  return (
    <motion.section
      id="bestsellers"
      className="relative scroll-mt-24 bg-cream-100/75 py-20 sm:py-24"
      variants={{ hidden: {}, visible: {} }}
      initial={initial}
      whileInView="visible"
      viewport={inView}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-blush-100/80 blur-3xl" />
        <div className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-caramel-light/40 blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.14, delayChildren: 0 },
          },
        }}
      >
        <motion.header className="mx-auto mb-16 max-w-2xl text-center" variants={fadeUp}>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            Featured bestsellers
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate-800 sm:text-5xl">
            The ones everyone asks for
          </h2>
          <p className="mt-4 text-lg leading-8 text-chocolate-600">
            Four of our most-loved bakes — fudgy, frosted, and finished by hand.
            The rest of the sweet list is one tap away.
          </p>
        </motion.header>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
        >
          {FEATURED_BESTSELLERS.slice(0, 4).map((item) => (
            <motion.div key={item.name} className="h-full" variants={bestsellerCard}>
              <MenuCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-14 flex justify-center" variants={fadeUp}>
          <Link
            href="/menu"
            className="group inline-flex min-h-16 items-center justify-center gap-3 rounded-full bg-chocolate-700 px-10 py-5 text-lg font-semibold tracking-wide text-cream-100 shadow-soft ring-2 ring-blush-200/90 transition duration-300 hover:-translate-y-0.5 hover:bg-chocolate-800 hover:shadow-blush hover:ring-blush-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-chocolate-500 sm:min-h-[4.5rem] sm:px-14 sm:text-xl"
          >
            Explore Our Full Menu
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
