import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollEffects } from '../hooks/useScrollEffects';
import { navItems, contactInfo } from '../utils/data';
import FooterSection from '../components/FooterSection';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { isScrolled } = useScrollEffects();
  const location = useLocation();

  return (
    <div className="min-h-screen font-sans bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-100 leading-relaxed overflow-x-hidden">
      {/* Header */}
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-lg' 
            : 'bg-black/30 backdrop-blur-lg'
        } border-b border-yellow-400/30`}
      >
        <nav className="max-w-6xl mx-auto px-5 flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-yellow-400 text-3xl font-bold drop-shadow-lg">
              OldVicios
            </Link>
          </div>
          <ul className="hidden md:flex list-none gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`transition-colors font-medium capitalize ${
                    location.pathname === item.path 
                      ? 'text-yellow-400' 
                      : 'text-gray-100 hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-yellow-400/30 py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <FooterSection title="OldVicios">
              <p className="text-gray-300">
                O maior clã brasileiro de Old School RuneScape. Junte-se à nossa família de aventureiros!
              </p>
            </FooterSection>
            
            <FooterSection title="Links Úteis">
              <div className="space-y-2">
                <p>
                  <a 
                    href="https://oldschool.runescape.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    Old School RuneScape
                  </a>
                </p>
                <p>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Regras do Clã
                  </a>
                </p>
                <p>
                  <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                    Como Entrar
                  </a>
                </p>
              </div>
            </FooterSection>
            
            <FooterSection title="Contato">
              <div className="space-y-2 text-gray-300">
                <p>Discord: {contactInfo.discord}</p>
                <p>In-Game: {contactInfo.inGame}</p>
                <p>Email: {contactInfo.email}</p>
              </div>
            </FooterSection>
          </div>
          
          <div className="border-t border-yellow-400/20 pt-8 text-center text-gray-500">
            <p>&copy; 2024 OldVicios. Todos os direitos reservados. | Old School RuneScape é marca registrada da Jagex Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 