export interface StatItemProps {
  number: string;
  label: string;
}

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaAction: () => void;
}

export interface AboutSectionProps {
  title: string;
  description: string;
  stats: StatItemProps[];
}

export interface FeaturesSectionProps {
  title: string;
  features: FeatureCardProps[];
}

export interface ContactInfo {
  discord: string;
  inGame: string;
  email: string;
} 