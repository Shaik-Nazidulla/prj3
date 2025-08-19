//app.jsx 
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/design-house" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>

      {/* Footer Component */}
      <Footer />
    </>
  );
}

export default App;