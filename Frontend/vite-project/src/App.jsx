import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection";
import Signup from "./components/LoginRegister/Client/Signup_page";
import Login from "./components/LoginRegister/Client/Login_page";
import Home from "./pages/Home";
import SportsPage from "./pages/SportsPage";  
import AnimalPage from "./pages/AnimalPage";  
import MoviePage from "./pages/MoviePage";
import CafePage from "./pages/CafePage";
import HackathonPage from "./pages/HackathonPage";

// You can keep this for reusability if needed
function HomeContent() {
  return (
    <>
      <BackgroundSection />
      <AboutSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="text-gray-900 dark:text-white">
        <Navbar />
        <Routes>
          {/* From main branch */}
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

          {/* From login branch */}
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomeContent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}