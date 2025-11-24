import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Hardwood from './pages/Hardwood';
import Carpet from './pages/Carpet';
import Tile from './pages/Tile';
import LuxuryVinyl from './pages/LuxuryVinyl';
import Laminate from './pages/Laminate';

const App: React.FC = () => {
  return (
        <Router>
          <ScrollToTop />
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/financing" element={<Financing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/hardwood" element={<Hardwood />} />
            <Route path="/carpet" element={<Carpet />} />
            <Route path="/tile" element={<Tile />} />
            <Route path="/luxury-vinyl" element={<LuxuryVinyl />} />
            <Route path="/laminate" element={<Laminate />} />
          </Routes>
      </main>

      <Footer />
      
      {/* Integrated Gemini AI Assistant */}
      <AIChat />
    </div>
    </Router>
  );
};

export default App;