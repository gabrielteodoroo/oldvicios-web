# OldVicios - Site do Clã

Site oficial do clã OldVicios, o maior clã brasileiro de Old School RuneScape.

## 🎮 Sobre o Projeto

Este é o site oficial do clã OldVicios, desenvolvido com React, TypeScript e Tailwind CSS. O site apresenta informações sobre o clã, recursos disponíveis para membros e formas de contato.

## ✨ Funcionalidades

- **Página Inicial**: Apresentação do clã com seção hero
- **Sobre**: Informações sobre o clã e estatísticas
- **Recursos**: Cards com funcionalidades disponíveis para membros
- **Contato**: Formulário de contato e informações de comunicação
- **Design Responsivo**: Interface adaptável para diferentes dispositivos
- **Animações**: Efeitos visuais suaves e interativos
- **Navegação**: Sistema de roteamento com React Router

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Router** - Roteamento para aplicações React
- **Vite** - Build tool e dev server

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── StatItem.tsx
│   ├── FeatureCard.tsx
│   ├── FooterSection.tsx
│   └── index.ts
├── pages/              # Páginas da aplicação
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── FeaturesPage.tsx
│   ├── ContactPage.tsx
│   ├── NotFoundPage.tsx
│   └── index.ts
├── layouts/            # Layouts da aplicação
│   └── MainLayout.tsx
├── hooks/              # Hooks personalizados
│   └── useScrollEffects.ts
├── types/              # Definições de tipos TypeScript
│   └── index.ts
├── utils/              # Utilitários e dados
│   └── data.ts
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd oldvicios
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:5173](http://localhost:5173) no seu navegador.

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🎨 Design System

O site utiliza um design system baseado em:

- **Cores**: Gradientes de azul escuro com detalhes em amarelo dourado
- **Tipografia**: Fonte system-ui com hierarquia clara
- **Espaçamento**: Sistema de espaçamento consistente
- **Animações**: Transições suaves e efeitos hover
- **Responsividade**: Design mobile-first

## 📱 Páginas

### Página Inicial (/)
- Seção hero com apresentação do clã
- Call-to-action para conhecer mais sobre o clã

### Sobre (/sobre)
- Informações sobre o clã OldVicios
- Estatísticas dos membros
- História do Old School RuneScape

### Recursos (/recursos)
- Cards com funcionalidades disponíveis
- PvP & PvM, eventos, comunidade, etc.

### Contato (/contato)
- Formulário de contato
- Informações de comunicação
- Instruções para entrar no clã

## 🤝 Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

- **Discord**: OldVicios
- **In-Game**: OldVicios CC
- **Email**: contato@oldvicios.com.br

---

Desenvolvido com ❤️ para a comunidade OldVicios
