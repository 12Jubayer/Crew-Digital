import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Tools from './pages/Tools';
import Subscriptions from './pages/Subscriptions';
import About from './pages/About';
import Contact from './pages/Contact';
import Affiliate from './pages/Affiliate';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate" element={<Affiliate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;