import type { StatItemProps, FeatureCardProps, NavItem, ContactInfo } from '../types';

export const navItems: NavItem[] = [
  { id: 'home', label: 'Início', path: '/' },
  { id: 'about', label: 'Sobre', path: '/sobre' },
  { id: 'features', label: 'Recursos', path: '/recursos' },
  { id: 'contact', label: 'Contato', path: '/contato' }
];

export const stats: StatItemProps[] = [
  { number: '150+', label: 'Membros Ativos' },
  { number: '5+', label: 'Anos de História' },
  { number: '24/7', label: 'Comunidade Online' },
  { number: '100%', label: 'Diversão Garantida' }
];

export const features: FeatureCardProps[] = [
  {
    icon: '⚔️',
    title: 'PvP & PvM',
    description: 'Participe de eventos de PvP organizados e raids épicas de PvM com a galera. Sempre tem alguém pronto para uma aventura!'
  },
  {
    icon: '🏆',
    title: 'Eventos Regulares',
    description: 'Competições, giveaways, boss hunts e muito mais. Nossa agenda está sempre cheia de atividades divertidas para todos os níveis.'
  },
  {
    icon: '🤝',
    title: 'Comunidade Brasileira',
    description: 'Conecte-se com jogadores brasileiros, faça amizades duradouras e compartilhe suas conquistas com quem realmente entende.'
  },
  {
    icon: '📚',
    title: 'Suporte & Guias',
    description: 'Membros experientes sempre dispostos a ajudar newcomers com dicas, estratégias e guias para maximizar sua experiência no jogo.'
  },
  {
    icon: '💬',
    title: 'Discord Ativo',
    description: 'Canal no Discord sempre movimentado com chat de voz, canais temáticos e bots personalizados para melhor experiência.'
  },
  {
    icon: '🎯',
    title: 'Metas & Conquistas',
    description: 'Estabeleça metas em grupo, comemore conquistas importantes e faça parte de uma comunidade que cresce junta.'
  }
];

export const contactInfo: ContactInfo = {
  discord: 'OldVicios',
  inGame: 'OldVicios CC',
  email: 'contato@oldvicios.com.br'
}; 