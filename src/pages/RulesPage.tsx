import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Rules from '../components/Rules';

const RulesPage: React.FC = () => (
  <div className="font-sans bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] text-[#e4e6ea] min-h-screen overflow-x-hidden">
    <Header />
    <main className="pt-24">
      <Rules />
    </main>
    <Footer />
  </div>
);

export default RulesPage; 