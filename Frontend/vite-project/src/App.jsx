import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
// 

export default function HomePage() {
  return (
    <div className="text-gray-900 dark:text-white">
      <Navbar />
      {/* <BackGround /> */}
      {/* <PopularCommunities /> */}
      <AboutSection />
      {/* <Footer /> */}
    </div>
  );
}
