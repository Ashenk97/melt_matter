export default function MenuBanner() {
  return (
    <section className="relative overflow-hidden bg-blush-100">
      <div className="sweet-sprinkles pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-cream-100/80 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-caramel-light/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
          Baked to order
        </p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-chocolate-800 sm:text-6xl lg:text-7xl">
          Our Sweet Menu
        </h1>
        <p className="mx-auto mt-3 font-script text-3xl text-blush-500 sm:text-4xl">
          Brownies, cakes &amp; little celebrations
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-chocolate-600">
          Browse by category, then tap Order on anything you’re craving. We’ll
          confirm availability, size, and the final total.
        </p>
      </div>
    </section>
  );
}
