import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { socialLinks } from '../utils/socialLinks';

const JoinPage: React.FC = () => (
  <div className="font-sans bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] text-[#e4e6ea] min-h-screen overflow-x-hidden">
    <Header />
    <main className="pt-24 pb-16">
      <div className="container max-w-2xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl mb-8 text-yellow-400 text-center">Como Entrar no Clã</h2>
        <ol className="list-decimal list-inside space-y-6 text-lg text-[#b8bcc8] bg-white/5 rounded-2xl p-8 border border-yellow-400/20 shadow-lg mb-8">
          <li>Tenha pelo menos <strong>500 total level</strong> no Old School RuneScape.</li>
          <li>Entre no <strong>Friend Chat</strong> <span className="text-yellow-400 font-bold">oldvicios</span> e peça para algum membro da staff te adicionar.</li>
          <li>Leia atentamente as <Link to="/regras" className="text-yellow-400 underline hover:text-yellow-300">regras do clã</Link> antes de interagir.</li>
          <li>Após entrar no clã, acesse nosso <strong>Discord</strong> e solicite seus <strong>ranks</strong> de acordo com sua participação e conquistas.</li>
        </ol>
        <div className="flex flex-col items-center gap-4">
          <span className="text-lg text-[#b8bcc8] mb-2">Entre em contato ou siga nossas redes:</span>
          <div className="flex gap-6">
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
    </main>
    <Footer />
  </div>
);

export default JoinPage; 