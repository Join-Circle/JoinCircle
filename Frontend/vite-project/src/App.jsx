

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import BackgroundSection from './components/BackgroundSection'
import PopularCommunities from './components/PopularCommunities'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import Home from './pages/Home'
import Communities from './pages/Communities';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<>
            <BackgroundSection />
            <PopularCommunities />
            <AboutSection />
            <Footer />
          </>} />

          <Route path="/communities" element={<Communities />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App