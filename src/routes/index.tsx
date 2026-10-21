import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Dining } from "@/components/sections/Dining";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Contact } from "@/components/sections/Contact";
import { a11y } from "@/lib/content";
import { useLanguage } from "@/lib/language";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dar Al Sama Hotel & Residences · Old Sana'a, Yemen",
      },
      {
        name: "description",
        content:
          "دار السماء للفنادق والأجنحة — Dar Al Sama is a 48-key boutique hotel and serviced residence inside a restored Old Sana'a house: rooftop dining, hammam and spa, and courtyard rooms. / فندق بوتيك وأجنحة مخدومة في بيت صنعاني مُرمَّم، مع مطعم على السطح وحمّام وقاعات فناء.",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Dar Al Sama Hotel & Residences · Old Sana'a, Yemen",
      },
      {
        property: "og:description",
        content:
          "A restored Old Sana'a house reborn as a 48-key boutique hotel: courtyard rooms, rooftop mezze at sunset, and a hammam below the oldest mountain city in the world.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "ar_YE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HotelPage,
});

function HotelPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground ltr:focus:left-4 rtl:focus:right-4"
      >
        {a11y.skip[lang]}
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Dining />
        <Amenities />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
