import type { Metadata } from "next";
import MenuBanner from "@/components/MenuBanner";
import MenuCatalog from "@/components/MenuCatalog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Menu | Melt Matter",
  description:
    "Browse the full Melt Matter menu — brownies, classic cakes, custom cakes, and cupcakes baked to order.",
};

export default function MenuPage() {
  return (
    <>
      <MenuBanner />
      <MenuCatalog />
      <Footer />
    </>
  );
}
