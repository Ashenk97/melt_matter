import OrderForm from "@/components/OrderForm";

export default function OrderContact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden scroll-mt-24 bg-chocolate-800 py-20 text-cream-100 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-blush-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-300">
            Order &amp; contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Tell us what you’re craving
          </h2>
          <p className="mt-4 font-script text-3xl text-blush-300">We’ll bake it with love</p>
          <p className="mt-6 max-w-md text-base leading-7 text-cream-300">
            Share your name, when you need it, and any custom notes — flavor, size,
            inscription, or a box of brownies for the table. We’ll reply to confirm
            availability and the final total.
          </p>
        </div>

        <div className="rounded-[1.75rem] bg-cream-100 p-6 text-chocolate-800 shadow-soft sm:p-8">
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
