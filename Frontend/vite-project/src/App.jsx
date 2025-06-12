import Navbar from "@/components/Navbar";
import BackgroundSection from "@/components/BackGroundSection";
import PopularCommunities from "@/components/PopularCommunities";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="text-gray-900 dark:text-white">
      <Navbar />
      <BackGround />
      <PopularCommunities />
      <AboutSection />
      <Footer />
    </div>
  );
}
