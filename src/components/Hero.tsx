import React from 'react';

const Hero: React.FC = () => (
  <section id="home" className="hero h-screen flex items-center justify-center text-center relative" style={{background:'radial-gradient(ellipse at center, rgba(255,215,0,0.1) 0%, transparent 70%)'}}>
    <div className="hero-content z-10 max-w-2xl fade-in">
      <h1 className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent font-bold animate-pulse" style={{WebkitTextFillColor:'transparent', WebkitBackgroundClip:'text', textShadow:'0 0 30px rgba(255,215,0,0.3)'}}>OldVicios</h1>
      <p className="subtitle text-2xl mb-8 text-[#b8bcc8] font-light">O maior clã brasileiro de Old School RuneScape</p>
      <a href="#about" className="cta-button inline-block px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#1a1a2e] font-bold text-lg rounded-full transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/30">Conheça o Clã</a>
    </div>
  </section>
);

export default Hero; 