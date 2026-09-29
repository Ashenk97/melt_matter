import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Nunito } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import { announcementInitScript } from "@/config/announcement";
import MobileBottomBar from "@/components/MobileBottomBar";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melt Matter | Brownies & Cakes",
  description:
    "Handcrafted brownies and cakes made with warm chocolate, soft pastels, and a lot of love.",
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${nunito.variable} ${cormorant.variable} ${greatVibes.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: announcementInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-cream-200 font-sans text-chocolate-800 antialiased">
        <AnnouncementBar />
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <MobileBottomBar />
      </body>
    </html>
  );
}
