import React from 'react';

const features = [
  {
    icon: '⚔️',
    title: 'PvP & PvM',
    desc: 'Participe de eventos de PvP organizados e raids épicas de PvM com a galera. Sempre tem alguém pronto para uma aventura!'
  },
  {
    icon: '🏆',
    title: 'Eventos Regulares',
    desc: 'Competições, giveaways, boss hunts e muito mais. Nossa agenda está sempre cheia de atividades divertidas para todos os níveis.'
  },
  {
    icon: '🤝',
    title: 'Comunidade Brasileira',
    desc: 'Conecte-se com jogadores brasileiros, faça amizades duradouras e compartilhe suas conquistas com quem realmente entende.'
  },
  {
    icon: '📚',
    title: 'Suporte & Guias',
    desc: 'Membros experientes sempre dispostos a ajudar newcomers com dicas, estratégias e guias para maximizar sua experiência no jogo.'
  },
  {
    icon: '💬',
    title: 'Discord Ativo',
    desc: 'Canal no Discord sempre movimentado com chat de voz, canais temáticos e bots personalizados para melhor experiência.'
  },
  {
    icon: '🎯',
    title: 'Metas & Conquistas',
    desc: 'Estabeleça metas em grupo, comemore conquistas importantes e faça parte de uma comunidade que cresce junta.'
  },
];

const Features: React.FC = () => (
  <section id="features" className="features py-24">
    <div className="container max-w-6xl mx-auto px-5">
      <h2 className="text-center text-4xl md:text-5xl mb-16 text-yellow-400 scroll-reveal">Por que escolher o OldVicios?</h2>
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(f => (
          <div key={f.title} className="feature-card p-10 bg-white/5 rounded-3xl border border-yellow-400/20 text-center transition-all hover:-translate-y-3 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/10 backdrop-blur-sm scroll-reveal">
            <span className="feature-icon text-5xl mb-4 block">{f.icon}</span>
            <h3 className="text-2xl mb-4 text-yellow-400">{f.title}</h3>
            <p className="text-[#b8bcc8]">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features; 