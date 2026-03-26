import './css/reset.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Class from './pages/Class'
import Placements from './pages/Placements'
import Contact from './pages/Contact'
import Donate from './pages/Donate'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/class" element={<Class />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </HelmetProvider>
  )
}

export default App