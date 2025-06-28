import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { href: '#home', label: 'Início', type: 'anchor' },
  { href: '#about', label: 'Sobre', type: 'anchor' },
  { href: '#features', label: 'Recursos', type: 'anchor' },
  { href: '/regras', label: 'Regras', type: 'route' },
  { href: '#contact', label: 'Contato', type: 'anchor' },
  { href: '/entrar', label: 'Entrar', type: 'route' },
];

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      navigate('/');
      // Após navegação, scroll para a âncora
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    // Se já está na home, o scroll suave padrão funciona
  };

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg border-b border-yellow-400/30 transition-all">
      <nav className="container max-w-6xl mx-auto flex justify-between items-center py-4 px-5">
        <div className="logo flex items-center gap-2">
          <h1 className="text-yellow-400 text-2xl font-bold drop-shadow-lg" style={{textShadow:'2px 2px 4px rgba(0,0,0,0.5)'}}>OldVicios</h1>
        </div>
        <ul className="nav-links hidden md:flex gap-8 list-none">
          {navLinks.map(link => (
            <li key={link.href}>
              {link.type === 'route' ? (
                <Link to={link.href} className="text-[#e4e6ea] hover:text-yellow-400 font-medium transition-colors">{link.label}</Link>
              ) : (
                <a
                  href={link.href}
                  className="text-[#e4e6ea] hover:text-yellow-400 font-medium transition-colors"
                  onClick={e => handleAnchorClick(e, link.href)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header; 