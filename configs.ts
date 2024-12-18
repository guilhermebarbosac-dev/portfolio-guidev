export const siteConfig = {
  // Cores e gradientes padrão
  colors: {
    gradient: {
      primary: "from-[#2380c4] to-pink-500",
      hover: "linear-gradient(to right, #ec4899, #2380c4)"
    },
    text: {
      primary: "text-gray-300",
      muted: "text-gray-400",
      heading: "text-white"
    }
  },

  // Imagens
  images: {
    profile: "/maisproximo.png?height=500&width=500",
    projects: {
      schia: "/projects_images/schia.png",
      project2: "/project2.png", 
      project3: "/project3.png"
    }
  },

  // Conteúdo da Home
  home: {
    title: "Guilherme Barbosa",
    role: "Frontend Developer",
    description: "Desenvolvedor Web apaixonado por criar experiências digitais únicas e funcionais"
  },

  // Conteúdo dos Projetos
  projects: {
    sectionTitle: "Meus Projetos",
    list: [
      {
        id: 1,
        title: "Sch.IA",
        description: "Sch.IA é um micro-SaaS que utiliza chatbot para automatizar o processo de agendamento de seus clientes.",
        image: "/projects_images/schia.png",
        stack: ["React", "TypeScript", "Shadcn UI", "Node.js", "Postgres"],
        liveUrl: "https://schia.com.br",
        githubUrl: "https://github.com/guilhermebarbosac-dev"
      },
      {
        id: 2,
        title: "Hyst",
        description: "Do consectetur proident proident id eiusmod deserunt consequat Do consectetur proident proident id eiusmod",
        image: "/project2.png",
        stack: ["React", "TypeScript", "SCSS", "Solidity", "AWS"],
        liveUrl: "https://project2.com",
        githubUrl: "https://github.com/project2"
      },
      {
        id: 3,
        title: "Project",
        description: "Do consectetur proident proident id eiusmod deserunt consequat Do consectetur proident proident id eiusmod",
        image: "/project3.png",
        stack: ["React", "TypeScript", "SCSS", "Slider", "AWS", "Vercel"],
        liveUrl: "https://project3.com",
        githubUrl: "https://github.com/project3"
      }
    ],
    buttons: {
      view: "Ver Projeto",
      github: "GitHub"
    }
  },

  // Conteúdo do About
  about: {
    sectionTitle: "Quem sou",
    paragraphs: [
      "Sou um profissional multifacetado na área de tecnologia, atualmente atuando como QA Engineer com foco em testes manuais e automatizados. Paralelamente, venho me desenvolvendo como desenvolvedor Front-end, com sólidos conhecimentos em React, Next.js, Angular e TypeScript.",
      "Em 2024, alcancei um marco significativo ao desenvolver meu primeiro micro-SaaS, implementando integrações avançadas com IA e chatbot. Este projeto demonstra minha capacidade de criar soluções inovadoras e funcionais do conceito ao deploy.",
      "Minha formação inclui diversos cursos especializados em desenvolvimento front-end, além de conhecimentos em Node.js e desenvolvimento full-stack. Tenho paixão por criar interfaces intuitivas e experiências de usuário excepcionais, sempre buscando combinar minha experiência em QA com as melhores práticas de desenvolvimento front-end para entregar produtos de alta qualidade."
    ]
  },

  // Navegação
  navigation: {
    sections: ["inicio", "projetos", "sobre"],
    height: 64 // altura da navbar em pixels
  },

  // Footer
  footer: {
    copyright: (year: number) => `© ${year} Guilherme Barbosa. Todos os direitos reservados.`
  }
}
