"use client";

import ElfsightWidget from "@/components/ElfsightWidget";
import ElfsightPlatformScript from "@/components/ElfsightPlatformScript";
import { instagramWidgetId } from "@/config/community-widgets";

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 overflow-hidden bg-blush-50 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-cream-200/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate-800 sm:text-5xl">
            Our Latest Bakes
          </h2>
          <p className="mt-4 text-lg leading-8 text-chocolate-600">
            A living look at brownies, cakes, and the messier, prettier moments
            in between.
          </p>
        </header>

        <div
          id="instagram-feed-widget"
          className="overflow-hidden rounded-[1.75rem] bg-cream-50 p-3 shadow-soft ring-1 ring-chocolate-100/80 sm:p-4"
        >
          <ElfsightWidget
            appId={instagramWidgetId}
            label="Instagram feed"
            description="Paste your Elfsight Instagram embed into config/community-widgets.ts to show our latest bakes here."
          />
        </div>
      </div>

      <ElfsightPlatformScript enabled={Boolean(instagramWidgetId)} />
    </section>
  );
}
