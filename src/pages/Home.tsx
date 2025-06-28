import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { useScrollEffects } from '../hooks/useScrollEffects';

const Home: React.FC = () => {
  useScrollEffects();
  return (
    <div className="font-sans bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] text-[#e4e6ea] min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
};

export default Home; 