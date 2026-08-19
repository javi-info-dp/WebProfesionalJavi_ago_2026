import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import BlackBox90 from './pages/BlackBox90';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/blackbox90" element={<BlackBox90 />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/experiencia" element={<About />} />
        <Route path="/habilidades" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/programas" element={<BlackBox90 />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
