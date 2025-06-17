
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection"
import Home from "./pages/Home"
import SportsPage from "./pages/SportsPage";  
import AnimalPage from "./pages/AnimalPage";  
import MoviePage from "./pages/MoviePage"
import CafePage from "./pages/CafePage"
import HackathonPage from "./pages/HackathonPage"

export default function HomePage() {
   return (
    <Router>
      <div className="text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <BackgroundSection />
                <Home />
                <AboutSection />
              </>
            }
          />
          <Route path="/sports" element={<SportsPage />} />
          <Route path="/animal" element={<AnimalPage />} />
          <Route path="/movie" element={<MoviePage />} />
          <Route path="/hack" element={<HackathonPage />} />
          <Route path="/cafe" element={<CafePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}