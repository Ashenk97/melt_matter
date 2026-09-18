import Hero from "@/components/Hero";
import Menu from "@/components/MenuPricing";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Contact from "@/components/OrderContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
