import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden scroll-mt-24 bg-cream-200"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-blush-200/70 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-96 w-96 rounded-full bg-caramel-light/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            Fresh from the oven
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.15] text-chocolate-800 sm:text-5xl lg:text-6xl">
            Handcrafted Brownies &amp; Cakes,{" "}
            <span className="font-script block text-4xl font-normal text-blush-500 sm:text-5xl">
              Baked with Love
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-chocolate-600">
            Fudgy chocolate squares and tender celebration cakes, mixed by hand
            and finished with a little extra sweetness.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-chocolate-700 px-8 py-4 text-lg font-semibold text-cream-100 shadow-soft transition-colors hover:bg-chocolate-800 hover:shadow-blush"
          >
            Order Now
          </a>
        </div>

        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-6 rounded-[2.5rem] bg-blush-200/40 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-cream-50 p-3 shadow-soft ring-1 ring-chocolate-100">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-chocolate-800">
              <Image
                src="/images/brownie-hero.jpg"
                alt="Placeholder for a mouth-watering chocolate brownie photograph"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
          <figcaption className="mt-4 text-center font-script text-2xl text-chocolate-500 lg:text-left">
            Our signature fudge brownie
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
