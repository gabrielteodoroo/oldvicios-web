import React from 'react';

const navLinks = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#features', label: 'Recursos' },
  { href: '#contact', label: 'Contato' },
];

const Header: React.FC = () => (
  <header className="fixed w-full top-0 z-50 backdrop-blur-lg border-b border-yellow-400/30 transition-all">
    <nav className="container max-w-6xl mx-auto flex justify-between items-center py-4 px-5">
      <div className="logo flex items-center gap-2">
        <h1 className="text-yellow-400 text-2xl font-bold drop-shadow-lg" style={{textShadow:'2px 2px 4px rgba(0,0,0,0.5)'}}>OldVicios</h1>
      </div>
      <ul className="nav-links hidden md:flex gap-8 list-none">
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} className="text-[#e4e6ea] hover:text-yellow-400 font-medium transition-colors">{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header; 