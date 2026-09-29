export const site = {
  name: "Melt Matter",
  tagline: "Handcrafted brownies & cakes",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@meltmatter.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  founder: {
    name: process.env.NEXT_PUBLIC_FOUNDER_NAME ?? "Melt Matter",
    role: "With love, from our kitchen",
  },
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/meltmatter",
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ??
      "https://www.facebook.com/meltmatter",
  },
} as const;
