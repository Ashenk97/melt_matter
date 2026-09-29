"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ANNOUNCEMENT_STORAGE_KEY, announcement } from "@/config/announcement";
import { motionEase } from "@/lib/motion";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  if (!announcement.enabled) return null;

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, announcement.id);
    } catch {}
  }

  return (
    <AnimatePresence initial={false}>
      {visible ? (
        <motion.div
          id="announcement-bar"
          role="region"
          aria-label="Announcement"
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: motionEase }}
          className="overflow-hidden bg-chocolate-800 text-cream-100"
        >
          <div className="relative mx-auto flex max-w-6xl items-center justify-center px-12 py-2 text-center text-xs font-medium tracking-wide sm:text-sm">
            <p>
              {announcement.message}{" "}
              {announcement.link ? (
                <Link
                  href={announcement.link.href}
                  className="ml-1 whitespace-nowrap font-semibold text-blush-200 underline decoration-blush-300/60 underline-offset-4 transition-colors hover:text-blush-100"
                >
                  {announcement.link.label}
                </Link>
              ) : null}
            </p>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="absolute right-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-cream-300 transition-colors hover:bg-chocolate-700 hover:text-cream-50 focus-visible:outline-2 focus-visible:outline-blush-300 sm:right-4"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
