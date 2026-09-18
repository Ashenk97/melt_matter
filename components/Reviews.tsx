"use client";

import ElfsightWidget from "@/components/ElfsightWidget";
import ElfsightPlatformScript from "@/components/ElfsightPlatformScript";
import { facebookReviewsWidgetId } from "@/config/community-widgets";

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden bg-cream-100 py-20 sm:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate-800 sm:text-5xl">
            Client Love
          </h2>
          <p className="mt-4 text-lg leading-8 text-chocolate-600">
            Kind words from celebrations, late-night brownie orders, and
            everything in between.
          </p>
        </header>

        <div
          id="facebook-reviews-widget"
          className="overflow-hidden rounded-[1.75rem] bg-cream-50 p-3 shadow-soft ring-1 ring-chocolate-100/80 sm:p-4"
        >
          <ElfsightWidget
            appId={facebookReviewsWidgetId}
            label="Facebook reviews"
            description="Paste your Elfsight Facebook Reviews embed into config/community-widgets.ts to show client love here."
          />
        </div>
      </div>

      <ElfsightPlatformScript enabled={Boolean(facebookReviewsWidgetId)} />
    </section>
  );
}
