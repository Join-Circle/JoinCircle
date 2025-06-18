import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import BackgroundSection from "./components/BackgroundSection";
import Signup from "./components/LoginRegister/Client/Signup_page";
import Login from "./components/LoginRegister/Client/Login_page";

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
    <div className="text-gray-900 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomeContent />} />
      </Routes>
      <Footer />
    </div>
  );
}