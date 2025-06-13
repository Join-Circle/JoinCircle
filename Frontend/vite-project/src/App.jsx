import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection"

export default function HomePage() {
  return (
    <div className="text-gray-900 dark:text-white">
      <Navbar />
      <BackgroundSection/>
      <AboutSection />
      <Footer />  
    </div>
  );
}
