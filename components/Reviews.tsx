import ElfsightWidget from "@/components/ElfsightWidget";
import ElfsightPlatformScript from "@/components/ElfsightPlatformScript";
import RevealSection from "@/components/RevealSection";
import { facebookReviewsWidgetId } from "@/config/community-widgets";
import { SAMPLE_TESTIMONIALS } from "@/config/testimonials";

export default function Reviews() {
  return (
    <RevealSection id="reviews" className="relative scroll-mt-24 bg-cream-100/75 py-20 sm:py-24">
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

        {facebookReviewsWidgetId ? (
          <div
            id="facebook-reviews-widget"
            className="overflow-hidden rounded-[1.75rem] bg-cream-50 p-3 shadow-soft ring-1 ring-chocolate-100/80 sm:p-4"
          >
            <ElfsightWidget
              appId={facebookReviewsWidgetId}
              label="Facebook reviews"
              description="Kind words from our customers will appear here."
            />
          </div>
        ) : (
          <ul className="grid gap-5 md:grid-cols-3">
            {SAMPLE_TESTIMONIALS.map((review) => (
              <li
                key={review.name}
                className="flex flex-col rounded-[1.75rem] bg-cream-50 p-7 shadow-soft ring-1 ring-chocolate-100/80"
              >
                <div className="flex gap-1 text-blush-500" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 font-display text-xl leading-8 text-chocolate-800">
                  “{review.quote}”
                </blockquote>
                <p className="mt-6 text-sm font-bold text-chocolate-700">{review.name}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blush-600">
                  {review.occasion}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <ElfsightPlatformScript enabled={Boolean(facebookReviewsWidgetId)} />
    </RevealSection>
  );
}
