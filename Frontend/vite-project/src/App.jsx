import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection"
import Home from "./pages/Home"

export default function HomePage() {
  return (
    <div className="text-gray-900 dark:text-white">
      <Navbar />
      <BackgroundSection/>
      <Home/>
      <AboutSection />
      <Footer />  
    </div>
  );
}
