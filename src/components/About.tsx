import React from 'react';

const stats = [
  { number: '150+', label: 'Membros Ativos' },
  { number: '5+', label: 'Anos de História' },
  { number: '24/7', label: 'Comunidade Online' },
  { number: '100%', label: 'Diversão Garantida' },
];

const About: React.FC = () => (
  <section id="about" className="about py-24 bg-black/20">
    <div className="container max-w-6xl mx-auto px-5">
      <div className="about-content grid grid-cols-1 md:grid-cols-2 gap-16 items-center scroll-reveal">
        <div className="about-text">
          <h2 className="text-4xl md:text-5xl mb-8 text-yellow-400">Bem-vindos, Aventureiros!</h2>
          <p className="text-lg mb-6 text-[#b8bcc8]">O <strong>OldVicios</strong> é uma comunidade apaixonada de jogadores brasileiros dedicados ao Old School RuneScape. Desde nossa fundação, construímos uma família unida pela nostalgia e pela paixão por um dos maiores MMORPGs de todos os tempos.</p>
          <p className="text-lg text-[#b8bcc8]">Old School RuneScape é um jogo de RPG online multijogador desenvolvido pela Jagex, lançado em 2013 como uma versão nostálgica do RuneScape clássico. Com uma base de jogadores ativa e conteúdo constantemente atualizado, oferece experiências únicas tanto para veteranos quanto para novos aventureiros.</p>
        </div>
        <div className="stats grid grid-cols-2 gap-8 mt-8 md:mt-0">
          {stats.map(stat => (
            <div key={stat.label} className="stat-item text-center p-8 bg-yellow-400/10 rounded-2xl border border-yellow-400/20 transition-transform hover:-translate-y-2">
              <span className="stat-number text-4xl md:text-5xl font-bold text-yellow-400 block">{stat.number}</span>
              <span className="stat-label text-[#b8bcc8] text-lg mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About; 