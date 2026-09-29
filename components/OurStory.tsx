import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import { site } from "@/config/site";

const ORGANIC_RADIUS = "3rem 6.5rem 3.5rem 5.5rem / 4.5rem 3rem 6rem 3.25rem";

function Signature() {
  return (
    <svg
      viewBox="0 0 340 120"
      className="h-24 w-auto text-chocolate-700 sm:h-28"
      role="img"
      aria-label={`Signed, ${site.founder.name}`}
    >
      <text
        x="8"
        y="68"
        className="font-script"
        fontSize="62"
        fill="currentColor"
      >
        {site.founder.name}
      </text>
      <path
        d="M16 92 C 80 76, 150 104, 228 86 S 312 70, 330 80"
        fill="none"
        stroke="#D484A8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function OurStory() {
  return (
    <RevealSection
      id="story"
      className="relative scroll-mt-24 overflow-hidden bg-cream-200/75 py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-blush-100/70 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <figure className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div
            className="absolute -left-5 -top-5 h-full w-full bg-blush-200/60"
            style={{ borderRadius: ORGANIC_RADIUS }}
            aria-hidden="true"
          />
          <div
            className="relative aspect-[4/5] overflow-hidden bg-chocolate-100 shadow-soft ring-1 ring-chocolate-100"
            style={{ borderRadius: ORGANIC_RADIUS }}
          >
            <Image
              src="/images/our-story.jpg"
              alt="Placeholder for a behind-the-scenes photo of our kitchen: flour-dusted loaves fresh from the oven"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <figcaption className="absolute -bottom-6 right-4 rounded-2xl bg-cream-50 px-5 py-3 text-sm font-semibold text-chocolate-700 shadow-soft ring-1 ring-chocolate-100 sm:right-8">
            Small-batch · Made to order
          </figcaption>
        </figure>

        <div className="max-w-xl lg:col-span-6 lg:col-start-7 lg:pt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            Our story
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-chocolate-800 sm:text-5xl">
            Baked from Scratch,{" "}
            <span className="font-script block font-normal text-blush-500">
              Just for You
            </span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-chocolate-600">
            <p>
              Melt Matter began in a tiny home kitchen with one stubborn goal: a
              brownie that stays fudgy in the middle and crackles on top, every
              single time.
            </p>
            <p>
              We still bake the same way — real butter, good chocolate, no
              shortcuts, and every order mixed by hand the day it leaves our
              oven. Whether it’s a box for the office or the cake at the center
              of your celebration, we bake it like it’s for our own table.
            </p>
          </div>

          <div className="mt-8">
            <Signature />
            <p className="mt-1 pl-2 text-sm font-semibold uppercase tracking-[0.2em] text-chocolate-400">
              {site.founder.role}
            </p>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
