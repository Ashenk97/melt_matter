export const site = {
  name: "Melt Matter",
  tagline: "Handcrafted brownies & cakes",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@meltmatter.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ??
      "https://www.instagram.com/meltmatter",
    facebook:
      process.env.NEXT_PUBLIC_FACEBOOK_URL ??
      "https://www.facebook.com/meltmatter",
  },
} as const;
