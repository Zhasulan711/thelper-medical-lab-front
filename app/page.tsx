import medicalBuilding from "@/assets/images/ironwood-medical.jpg"
import { HomeHero } from "@/features/home/components/HomeHero"
import { HomeStatsWhy } from "@/features/home/components/HomeStatsWhy"
import { HomeCategories } from "@/features/home/components/HomeCategories"
import { PopularAnalysesCarousel } from "@/features/home/components/PopularAnalysesCarousel"
import { FaqSection } from "@/features/home/components/FaqSection"
import { ReviewsSection } from "@/features/home/components/ReviewsSection"
import { CtaFormSection } from "@/features/home/components/CtaFormSection"

export default function Home() {
  return (
    <main>
      <HomeHero imageSrc={medicalBuilding} />

      <HomeStatsWhy />

      <PopularAnalysesCarousel />

      <HomeCategories />

      <FaqSection imageSrc={medicalBuilding} />

      <ReviewsSection />

      <CtaFormSection imageSrc={medicalBuilding} />
    </main>
  );
}
