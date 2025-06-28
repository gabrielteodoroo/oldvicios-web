import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../utils/socialLinks';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-black/50 border-t border-yellow-400/30 py-12 text-center">
    <div className="container max-w-6xl mx-auto px-5">
      <div className="footer-content grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="footer-section">
          <h3 className="text-yellow-400 mb-4 text-xl">OldVicios</h3>
          <p className="text-[#b8bcc8]">O maior clã brasileiro de Old School RuneScape. Junte-se à nossa família de aventureiros!</p>
        </div>
        <div className="footer-section">
          <h3 className="text-yellow-400 mb-4 text-xl">Links Úteis</h3>
          <p><a href="https://oldschool.runescape.com" target="_blank" rel="noopener noreferrer" className="text-[#b8bcc8] hover:text-yellow-400 transition-colors">Old School RuneScape</a></p>
          <p><Link to="/regras" className="text-[#b8bcc8] hover:text-yellow-400 transition-colors">Regras do Clã</Link></p>
          <p><Link to="/entrar" className="text-[#b8bcc8] hover:text-yellow-400 transition-colors">Como Entrar</Link></p>
        </div>
        <div className="footer-section">
          <h3 className="text-yellow-400 mb-4 text-xl">Contato</h3>
          <div className="flex justify-center gap-6 mt-4">
            {socialLinks.map(social => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom border-t border-yellow-400/20 pt-8 text-center text-gray-500">
        <p>&copy; 2024 OldVicios. Todos os direitos reservados. | Old School RuneScape é marca registrada da Jagex Ltd.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 