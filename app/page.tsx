import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MenuPreview from "@/components/MenuPreview";
import ChefStory from "@/components/ChefStory";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky navigation — fixed over all sections */}
      <Navbar />

      <main>
        {/* 1. Hero — full-viewport coffee photography with CTAs */}
        <HeroSection />

        {/* 2. Features — why choose Amber Brew */}
        <FeaturesSection />

        {/* 3. Menu preview — vibrant drink photography */}
        <MenuPreview />

        {/* 4. Chef / barista origin story */}
        <ChefStory />

        {/* 5. Testimonials — social proof from regulars */}
        <TestimonialSection />

        {/* 6. Pricing — menu tiers and tasting experiences */}
        <PricingSection />

        {/* 7. Reservation — interactive booking form */}
        <ReservationSection />

        {/* 8. Location — embedded map + opening hours */}
        <LocationSection />
      </main>

      {/* Footer — links, newsletter, legal */}
      <Footer />
    </>
  );
}
