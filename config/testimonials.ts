/** Sample reviews shown until the Elfsight Facebook Reviews widget is configured. */
export const SAMPLE_TESTIMONIALS = [
  {
    quote:
      "The fudge brownies disappeared in minutes at our office party. Gooey middle, crackly top — exactly how a brownie should be.",
    name: "Nadia P.",
    occasion: "Office celebration",
  },
  {
    quote:
      "Our daughter's birthday cake looked like a dream and tasted even better. Everyone asked where it came from!",
    name: "Kavin R.",
    occasion: "Birthday cake",
  },
  {
    quote:
      "Ordering was so easy and the salted caramel brownies arrived beautifully boxed. Already planning my next order.",
    name: "Shehani D.",
    occasion: "Gift box",
  },
] as const;

export const GALLERY_PHOTOS = [
  { src: "/images/menu/cake-chocolate.jpg", alt: "Chocolate drip cake with piped rosettes" },
  { src: "/images/menu/brownie-fudge.jpg", alt: "Stack of fudgy brownies" },
  { src: "/images/menu/cupcake-strawberry.jpg", alt: "Strawberry cupcakes with blush frosting" },
  { src: "/images/menu/cake-raspberry.jpg", alt: "Raspberry vanilla layer cake" },
  { src: "/images/menu/brownie-caramel.jpg", alt: "Salted caramel brownies" },
] as const;
