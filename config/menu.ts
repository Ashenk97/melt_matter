export type MenuCategoryId = "brownies" | "classic-cakes" | "custom-cakes" | "cupcakes";

export type MenuFilterId = "all" | MenuCategoryId;

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export type MenuCategory = {
  id: MenuCategoryId;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export const MENU_FILTERS: { id: MenuFilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "brownies", label: "Brownies" },
  { id: "classic-cakes", label: "Classic Cakes" },
  { id: "custom-cakes", label: "Custom Cakes" },
  { id: "cupcakes", label: "Cupcakes" },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "brownies",
    title: "Brownies",
    subtitle: "Baked in small batches, still a little gooey at the center.",
    items: [
      {
        name: "Classic Fudge",
        description:
          "Crackly-topped cocoa squares with a molten middle and a ribbon of ganache. Each piece is mixed by hand, baked until the edges set, and finished with a glossy chocolate pour.",
        price: "$4.50",
        image: "/images/menu/brownie-fudge.jpg",
        imageAlt: "Stacked fudge brownies with chocolate ganache poured over the top",
        featured: true,
      },
      {
        name: "Salted Caramel",
        description:
          "Dense chocolate wedges glazed with warm caramel and a pinch of sea salt. The bitter cocoa, buttery caramel, and salt flake are balanced so every bite stays fudgy, not cloying.",
        price: "$5.25",
        image: "/images/menu/brownie-caramel.jpg",
        imageAlt: "Brownie slices on a plate finished with caramel sauce",
        featured: true,
      },
      {
        name: "Brownie Sundae",
        description:
          "A warm fudge brownie served with vanilla cream, a crisp wafer, and a slow pour of caramel. Order it as a plated treat for sharing — or as a boxed brownie with the toppings packed separately.",
        price: "$7.50",
        image: "/images/menu/brownie-sundae.jpg",
        imageAlt: "Warm brownie sundae with ice cream, caramel, and a wafer",
      },
    ],
  },
  {
    id: "classic-cakes",
    title: "Classic Cakes",
    subtitle: "Beloved layer cakes in flavors we bake again and again.",
    items: [
      {
        name: "Raspberry Vanilla",
        description:
          "Tender vanilla sponge layered with raspberry cream and finished with a crown of fresh berries. A bright, not-too-sweet celebration cake that slices cleanly and keeps overnight.",
        price: "from $48",
        image: "/images/menu/cake-raspberry.jpg",
        imageAlt: "Slice of vanilla layer cake with raspberries and cream",
      },
      {
        name: "Mocha Tiramisu",
        description:
          "Espresso-soaked layers, mascarpone cream, and a dusting of cocoa. Soft, coffee-forward, and finished with chocolate shards — a grown-up classic for dinner tables and birthdays.",
        price: "from $52",
        image: "/images/menu/cake-tiramisu.jpg",
        imageAlt: "Layered mocha tiramisu cake slice with chocolate shards",
      },
    ],
  },
  {
    id: "custom-cakes",
    title: "Custom Cakes",
    subtitle: "Layered, finished by hand, and sized to your celebration.",
    items: [
      {
        name: "Chocolate Drip",
        description:
          "Cocoa layers, silk ganache, and piped chocolate rosettes on a tall drip cake. Tell us the size, filling, and any inscription — we’ll quote the finish to match your table.",
        price: "from $54",
        image: "/images/menu/cake-chocolate.jpg",
        imageAlt: "Chocolate drip cake with ganache and piped chocolate rosettes",
        featured: true,
      },
    ],
  },
  {
    id: "cupcakes",
    title: "Cupcakes",
    subtitle: "Petite, pretty, and easy to mix for a party box.",
    items: [
      {
        name: "Strawberry Cloud",
        description:
          "Vanilla sponge piled with blush frosting, white chocolate, and a ripe strawberry. Soft, pastel, and easy to pack — a favorite for birthday boxes and afternoon orders.",
        price: "$4.75",
        image: "/images/menu/cupcake-vanilla.jpg",
        imageAlt: "Vanilla cupcakes with pink frosting and strawberries",
        featured: true,
      },
      {
        name: "Red Velvet",
        description:
          "Cocoa-kissed crumb with a cream cheese swirl and a scatter of velvet crumbs. Tangy, tender, and just chocolatey enough — baked as singles or as a mixed dozen.",
        price: "$4.75",
        image: "/images/menu/cupcake-chocolate.jpg",
        imageAlt: "Red velvet cupcake with cream cheese frosting",
      },
      {
        name: "Party Sprinkle",
        description:
          "Soft vanilla cupcakes with pastel frosting and a confetti crunch. The cheerful pick for kids’ tables, office boxes, and any day that needs a little extra sugar.",
        price: "$4.25",
        image: "/images/menu/cupcake-strawberry.jpg",
        imageAlt: "Row of vanilla cupcakes with mint frosting and sprinkles",
      },
    ],
  },
];

export const FEATURED_BESTSELLERS: MenuItem[] = MENU_CATEGORIES.flatMap(
  (category) => category.items,
).filter((item) => item.featured);
