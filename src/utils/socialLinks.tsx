import { InstagramLogo, WhatsappLogo, DiscordLogo } from 'phosphor-react';
import type { ReactNode } from 'react';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/oldvicios',
    icon: <InstagramLogo size={35} weight="fill" color="#E1306C" />
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5599999999999',
    icon: <WhatsappLogo size={35} weight="fill" color="#25D366" />
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/oldvicios',
    icon: <DiscordLogo size={35} weight="fill" color="#5865F2" />
  }
]; 