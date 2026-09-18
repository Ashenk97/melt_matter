import Image from "next/image";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
};

type MenuCategory = {
  title: string;
  subtitle: string;
  items: MenuItem[];
};

const CATEGORIES: MenuCategory[] = [
  {
    title: "Signature Brownies",
    subtitle: "Baked in small batches, still a little gooey at the center.",
    items: [
      {
        name: "Classic Fudge",
        description:
          "Crackly-topped cocoa squares with a molten middle and a ribbon of ganache.",
        price: "$4.50",
        image: "/images/menu/brownie-fudge.jpg",
        imageAlt: "Stacked fudge brownies with chocolate ganache poured over the top",
      },
      {
        name: "Salted Caramel",
        description:
          "Dense chocolate wedges glazed with warm caramel and a pinch of sea salt.",
        price: "$5.25",
        image: "/images/menu/brownie-caramel.jpg",
        imageAlt: "Brownie slices on a plate finished with caramel sauce",
      },
      {
        name: "Brownie Sundae",
        description:
          "Served warm with vanilla cream, a wafer, and a slow pour of caramel.",
        price: "$7.50",
        image: "/images/menu/brownie-sundae.jpg",
        imageAlt: "Warm brownie sundae with ice cream, caramel, and a wafer",
      },
    ],
  },
  {
    title: "Custom Cakes",
    subtitle: "Layered, finished by hand, and sized to your celebration.",
    items: [
      {
        name: "Chocolate Drip",
        description:
          "Cocoa layers, silk ganache, and piped chocolate rosettes on a tall drip cake.",
        price: "from $54",
        image: "/images/menu/cake-chocolate.jpg",
        imageAlt: "Chocolate drip cake with ganache and piped rosettes",
      },
      {
        name: "Raspberry Vanilla",
        description:
          "Tender vanilla sponge, raspberry cream, and a crown of fresh berries.",
        price: "from $48",
        image: "/images/menu/cake-raspberry.jpg",
        imageAlt: "Slice of vanilla layer cake with raspberries and cream",
      },
      {
        name: "Mocha Tiramisu",
        description:
          "Espresso-soaked layers, mascarpone cream, and a dusting of cocoa.",
        price: "from $52",
        image: "/images/menu/cake-tiramisu.jpg",
        imageAlt: "Layered mocha tiramisu cake slice with chocolate shards",
      },
    ],
  },
  {
    title: "Cupcakes",
    subtitle: "Petite, pretty, and easy to mix for a party box.",
    items: [
      {
        name: "Strawberry Cloud",
        description:
          "Vanilla sponge, blush frosting, white chocolate, and a ripe strawberry.",
        price: "$4.75",
        image: "/images/menu/cupcake-vanilla.jpg",
        imageAlt: "Vanilla cupcakes with pink frosting and strawberries",
      },
      {
        name: "Red Velvet",
        description:
          "Cocoa-kissed crumb with cream cheese swirl and a scatter of velvet crumbs.",
        price: "$4.75",
        image: "/images/menu/cupcake-chocolate.jpg",
        imageAlt: "Red velvet cupcake with cream cheese frosting",
      },
      {
        name: "Party Sprinkle",
        description:
          "Soft vanilla cupcakes with pastel frosting and a confetti crunch.",
        price: "$4.25",
        image: "/images/menu/cupcake-strawberry.jpg",
        imageAlt: "Row of vanilla cupcakes with mint frosting and sprinkles",
      },
    ],
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-cream-50 shadow-soft ring-1 ring-chocolate-100/80 transition duration-300 hover:-translate-y-1.5 hover:shadow-blush hover:ring-blush-200">
      <div className="relative aspect-[4/3] overflow-hidden bg-chocolate-100">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <h4 className="font-display text-2xl font-semibold text-chocolate-800">
            {item.name}
          </h4>
          <p className="shrink-0 pt-1 text-sm font-semibold tracking-wide text-blush-600">
            {item.price}
          </p>
        </div>
        <p className="mt-2 text-sm leading-6 text-chocolate-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function MenuPricing() {
  return (
    <section
      id="menu"
      className="relative scroll-mt-24 overflow-hidden border-t border-chocolate-100/70 bg-cream-100 py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-blush-100/80 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blush-600">
            Menu &amp; pricing
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-chocolate-800 sm:text-5xl">
            A little something sweet
          </h2>
          <p className="mt-4 text-lg leading-8 text-chocolate-600">
            Brownies for weeknights, cakes for celebrations, and cupcakes for
            whenever you need a pastel pause.
          </p>
        </header>

        <div className="space-y-16">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              <div className="mb-8 max-w-xl">
                <h3 className="font-display text-3xl text-chocolate-800">
                  {category.title}
                </h3>
                <p className="mt-2 text-chocolate-600">{category.subtitle}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item) => (
                  <MenuCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-sm text-chocolate-500">
          Custom cake prices begin at the listed amount and are quoted to size,
          filling, and finish.
        </p>
      </div>
    </section>
  );
}
