import BackgroundBlobs from "@/components/BackgroundBlobs";
import Hero from "@/components/Hero";
import FeaturedBestsellers from "@/components/FeaturedBestsellers";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Contact from "@/components/OrderContact";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      <BackgroundBlobs />
      <Hero />
      <WaveDivider from="fill-cream-200/75" to="fill-cream-100/75" variant={0} />
      <FeaturedBestsellers />
      <WaveDivider from="fill-cream-100/75" to="fill-cream-200/75" variant={1} flip />
      <OurStory />
      <WaveDivider from="fill-cream-200/75" to="fill-blush-50/75" variant={2} />
      <Gallery />
      <WaveDivider from="fill-blush-50/75" to="fill-cream-100/75" variant={0} flip />
      <Reviews />
      <WaveDivider from="fill-cream-100/75" to="fill-cream-200/75" variant={1} />
      <Faq />
      <WaveDivider from="fill-cream-200/75" to="fill-chocolate-800" variant={2} flip />
      <Contact />
      <WaveDivider
        from="fill-chocolate-800"
        to="fill-chocolate-900"
        accent="fill-chocolate-700"
        variant={0}
      />
      <Footer />
    </>
  );
}
