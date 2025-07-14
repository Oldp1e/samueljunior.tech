// Dados centralizados dos projetos para uso em todo o portfólio
export const projects = [
  {
    id: 1,
    title: 'Outdoors Adventures Malta API',
    category: 'web',
    description: 'API completa para sistema de aluguel de embarcações e esportes aquáticos com reservas, pagamentos via Stripe e painel administrativo.',
    detailedDescription: `
      <p><strong>Outdoors Adventures Malta API</strong> é uma API REST robusta desenvolvida para gerenciar um sistema completo de aluguel de embarcações e atividades aquáticas.</p>
      
      <p>O sistema oferece:</p>
      <ul>
        <li><strong>Sistema de Reservas:</strong> Gestão completa de agendamentos com slots de tempo pré-definidos (Manhã, Tarde, Dia Inteiro)</li>
        <li><strong>Integração Stripe:</strong> Processamento seguro de pagamentos com aprovação administrativa</li>
        <li><strong>Autenticação JWT:</strong> Sistema de autenticação seguro com hash para proteção de dados</li>
        <li><strong>Painel Administrativo:</strong> Interface completa para gestão de reservas, aprovações e recursos</li>
        <li><strong>Múltiplos Serviços:</strong> Suporte a lanchas, jet skis, kayaks, e atividades com skipper</li>
      </ul>
      
      <p>A API está 100% documentada via Swagger e utiliza arquitetura moderna com migrations, seeds e web routing avançado.</p>
    `,
    features: [
      'Web Routing com PHP nativo',
      'Autenticação JWT com hash security',
      'Integração completa com Stripe',
      'Migrations e Seeds automatizados',
      'Documentação 100% via Swagger',
      'Sistema de aprovação administrativa',
      'Gestão de slots de tempo dinâmicos',
      'API REST com padrões modernos',
      'Composer para gerenciamento de dependências',
      'Banco de dados SQL otimizado',
      'Sistema de reviews e avaliações',
      'Integração com redes sociais'
    ],
    challenges: 'O maior desafio foi criar um sistema de reservas que gerenciasse múltiplos tipos de embarcações com diferentes regras de negócio, slots de tempo limitados e aprovação administrativa antes do processamento do pagamento. Implementei um sistema de estados para reservas que mantém os pagamentos em hold até aprovação, além de criar uma arquitetura de routing personalizada que suporta todas as funcionalidades necessárias.',
    image: 'outdoors.png',
    videoUrl: null,
    technologies: ['PHP', 'SQL', 'JWT', 'Stripe API', 'Swagger', 'Composer', 'Web Routing', 'Migrations'],
    liveUrl: 'https://outdooradventuresmalta.com/',
    githubUrl: null,
    featured: true
  },
  {
    id: 2,
    title: 'Easy Bid',
    category: 'web',
    description: 'Plataforma de cotações fáceis com prompts via IA para otimizar processos com sistema de controle.',
    detailedDescription: `
      <p><strong>Easy Bid</strong> é uma plataforma inovadora que revoluciona o processo de cotações empresariais através da inteligência artificial.</p>
      
      <p>A aplicação permite:</p>
      <ul>
        <li>Geração automática de cotações via prompts inteligentes</li>
        <li>Sistema de controle e aprovação multi-nível</li>
        <li>Dashboard analítico com métricas em tempo real</li>
        <li>Integração com fornecedores e sistemas ERP</li>
      </ul>
    `,
    features: [
      'IA para geração de cotações',
      'Sistema de aprovação workflow',
      'Dashboard analytics',
      'API REST completa',
      'Autenticação JWT',
      'Notificações em tempo real'
    ],
    challenges: 'Implementar um sistema de IA que compreendesse o contexto específico de cada empresa foi complexo. Criamos um sistema de treinamento personalizado que aprende com os dados históricos de cada cliente.',
    image: 'login.png',
    videoUrl: null,
    technologies: ['React', 'Node.js', 'AI'],
    liveUrl: null,
    githubUrl: 'https://github.com/Oldp1e/easybid/',
    featured: true
  },
  {
    id: 3,
    title: 'Cadastro de Fornecedores',
    category: 'web',
    description: 'Sistema híbrido de cadastro de fornecedores com mais de 15.000 usuários, integração com APIs governamentais e fluxo de aprovações multi-nível.',
    detailedDescription: `
      <p><strong>Sistema de Cadastro de Fornecedores</strong> é uma plataforma híbrida robusta que revolucionou o processo de onboarding de fornecedores para a GTPlan e empresas parceiras.</p>
      
      <p>O sistema oferece:</p>
      <ul>
        <li><strong>Cadastro Inteligente:</strong> Preenchimento automático de dados através de APIs da Receita Federal</li>
        <li><strong>Validação em Tempo Real:</strong> Verificação instantânea de CNPJ e dados empresariais</li>
        <li><strong>Fluxo de Aprovação Dupla:</strong> Sistema interno GTPlan + aprovação das empresas usuárias</li>
        <li><strong>Arquitetura Híbrida:</strong> Serve tanto para cadastro de empresas quanto usuários individuais</li>
        <li><strong>Escala Comprovada:</strong> Mais de 15.000 usuários cadastrados com sucesso</li>
      </ul>
      
      <p>A plataforma eliminou gargalos manuais e reduziu o tempo de onboarding de dias para horas, mantendo alta qualidade e conformidade regulatória.</p>
    `,
    features: [
      'Integração com API da Receita Federal',
      'Preenchimento automático de dados empresariais',
      'Sistema dual de aprovações (GTPlan + Cliente)',
      'Validação de CNPJ em tempo real',
      'Dashboard de controle de fluxo UAC',
      'Suporte a cadastro híbrido (empresa/usuário)',
      'Notificações automáticas por email',
      'Relatórios de conversão e métricas',
      'Interface responsiva e intuitiva',
      'Sistema de auditoria completo',
      'Gestão de documentos anexos',
      'API REST para integrações externas'
    ],
    challenges: 'O maior desafio foi criar um sistema que atendesse simultaneamente dois públicos distintos (empresas e usuários individuais) mantendo a simplicidade. Implementei uma arquitetura modular que adapta o fluxo conforme o tipo de cadastro, além de integrar múltiplas APIs governamentais com diferentes padrões de resposta. A escalabilidade para 15.000+ usuários exigiu otimizações específicas no banco de dados e cache inteligente para as consultas de CNPJ.',
    image: 'gt-app.png',
    videoUrl: null,
    technologies: ['Scriptcase', 'PHP', 'Javascript', 'API Receita Federal', 'MySQL', 'UAC'],
    liveUrl: 'https://app.gtplan.net/uac222b_prereg_validate/uac222b_prereg_validate.php',
    liveUrlText: 'Live',
    githubUrl: null,
    featured: false
  },
  {
    id: 4,
    title: 'Entity Strike',
    category: 'game',
    description: 'Jogo estilo Survivors onde o player deve sobreviver a hordas de inimigos.',
    detailedDescription: `
      <p><strong>Entity Strike</strong> é um jogo indie no estilo bullet-hell/survivors desenvolvido em Unity. O jogador deve sobreviver a ondas infinitas de inimigos enquanto coleta power-ups e evolui suas habilidades.</p>
      
      <p>O jogo apresenta:</p>
      <ul>
        <li>Sistema de progressão de personagem com múltiplas habilidades</li>
        <li>Mecânicas de combate fluidas e responsivas</li>
        <li>Geração procedural de inimigos e power-ups</li>
        <li>Sistema de pontuação e ranking global</li>
      </ul>
    `,
    features: [
      'Sistema de progressão dinâmico',
      'Múltiplas armas e habilidades',
      'Sistema de conquistas e desafios',
      'Gráficos 2D Integrados junto com Artista',
      'Soundtrack Insana',
      'Sistema de conquistas'
    ],
    challenges: 'O maior desafio foi otimizar o sistema de spawn de inimigos para manter 60fps mesmo com centenas de entidades na tela. Implementei um sistema de object pooling e otimizações específicas para dispositivos de menor performance.',
    image: 'store_capsule_header.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=wzA4JLpE3ts',
    technologies: ['Unity', 'C#', '2D'],
    liveUrl: 'https://store.steampowered.com/app/3685980/Entity_Strike/',
    liveUrlText: 'Steam',
    githubUrl: 'https://github.com/Oldp1e/EntityStrike',
    featured: true
  },
  {
    id: 5,
    title: 'Plugin - Desmarcar Checkboxes Publicador',
    category: 'web',
    description: 'Extensão para Chrome que facilita a experiência do usuário no Publicador, desmarcando automaticamente checkboxes quando detectadas.',
    detailedDescription: `
      <p><strong>Desmarcar Checkboxes Publicador</strong> é uma extensão para Chrome desenvolvida especificamente para otimizar o workflow no ambiente Publicador do Scriptcase.</p>
      
      <p>A extensão oferece:</p>
      <ul>
        <li>Detecção automática de checkboxes específicas na plataforma</li>
        <li>Desmarcação automática para agilizar o processo</li>
        <li>Interface simples e não intrusiva</li>
        <li>Compatibilidade total com Chrome</li>
      </ul>
      
      <p>Esta ferramenta foi criada para eliminar tarefas repetitivas e aumentar a produtividade dos desenvolvedores que trabalham com o Publicador.</p>
    `,
    features: [
      'Detecção automática de checkboxes',
      'Desmarcação automática inteligente',
      'Interface não intrusiva',
      'Compatibilidade com Chrome',
      'Ativação automática no Publicador',
      'Código aberto e personalizável'
    ],
    challenges: 'O principal desafio foi criar uma extensão que fosse específica o suficiente para funcionar apenas no ambiente Publicador, sem interferir em outras páginas. Implementei detectores inteligentes que identificam o contexto correto antes de executar as ações.',
    image: 'sc-extension.png',
    videoUrl: null,
    technologies: ['JavaScript', 'Chrome Extension API', 'DOM Manipulation', 'Manifest V3'],
    liveUrl: null,
    githubUrl: 'https://github.com/Oldp1e/desmarcar-checkboxes-publicador',
    featured: false
  },
  {
    id: 6,
    title: 'Módulo Frequência Web',
    category: 'web',
    description: 'Modernização do sistema legado Gurhu para uma aplicação web intuitiva, focada em gestão de frequência, plantões e recursos humanos na área da saúde pública.',
    detailedDescription: `
      <p><strong>Módulo Frequência Web</strong> é a modernização completa do sistema legado Gurhu, transformando-o em uma aplicação web moderna e intuitiva.</p>
      
      <p>O sistema abrange:</p>
      <ul>
        <li>Gestão completa de frequência de servidores</li>
        <li>Controle de plantões médicos e turnos</li>
        <li>Registro de faltas, horas extras e adicional noturno</li>
        <li>Importação automática de arquivos XML/XLSX</li>
        <li>Dashboard gerencial com relatórios avançados</li>
      </ul>
      
      <p>Atende UBS, hospitais e UPAs com interface responsiva acessível de qualquer dispositivo.</p>
    `,
    features: [
      'Cadastro de feriados regionais',
      'Registro de plantões automático',
      'Controle de frequência em tempo real',
      'Importação de dados em lote',
      'Relatórios personalizáveis',
      'Sistema de notificações',
      'Controle de acesso por perfil',
      'Interface responsiva'
    ],
    challenges: 'Migrar um sistema legado mantendo a integridade dos dados históricos enquanto modernizava a interface foi um grande desafio. Implementei uma estratégia de migração gradual com validação dupla dos dados.',
    image: 'tegra.png',
    videoUrl: '',
    technologies: ['PHP', 'Scriptcase', 'MySQL', 'PL/SQL', 'JWT', 'Importação XML/XLSX'],
    liveUrl: '',
    githubUrl: '',
    featured: false
  }
]

// Projetos Sandbox - Experimentos e protótipos
export const sandboxProjects = [
  {
    id: 'dino-encyclopedia',
    title: 'Dino Encyclopedia',
    description: 'Site temático do Jurassic Park com enciclopédia de dinossauros, sistema de segurança e monitoramento em tempo real.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    features: [
      'Enciclopédia completa com 8+ espécies de dinossauros',
      'Sistema de segurança com dashboard em tempo real',
      'Filtros avançados por período, dieta e nível de perigo',
      'Design system com tema Jurassic Park',
      'Glassmorphism e animações fluidas',
      'Alertas de emergência e monitoramento'
    ],
    githubUrl: 'https://github.com/Oldp1e/DinoEncyclopedia',
    liveUrl: 'https://dino-encyclopedia-mu.vercel.app/',
    vercelUrl: 'https://vercel.com/samuel-juniors-projects-5e157e6a/dino-encyclopedia',
    videoUrl: 'https://www.youtube.com/watch?v=TzLkJKAK_00',
    image: 'dino.png',
    category: 'sandbox',
    theme: {
      colors: ['Verde musgo', 'Dourado', 'Marrom', 'Cinza rocha', 'Vermelho alerta'],
      style: 'Glassmorphism com tema Jurassic Park'
    }
  },
  {
    id: 'holocron-databank',
    title: 'Holocron Databank',
    description: 'Banco de dados fictício inspirado no universo Star Wars, simulando uma interface holográfica e tecnológica de um Holocron Jedi/Sith.',
    technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'App Router'],
    features: [
      'Design system holográfico com glassmorphism',
      'Sistema de arquivo com categorias (Jedi, Sith, Relíquias)',
      'Filtros avançados por era, alinhamento e raridade',
      'Sistema de raridade: Comum, Raro, Lendário, Proibido',
      'Interface responsiva com efeitos visuais avançados',
      'Controle de acesso para conteúdo sensível',
      'Animações fluidas e microinterações',
      'Efeitos holográficos e partículas de fundo'
    ],
    githubUrl: 'https://github.com/Oldp1e/HolocronDatabank',
    liveUrl: 'https://holocron-databank.vercel.app/',
    vercelUrl: 'https://vercel.com/samuel-juniors-projects-5e157e6a/holocron-databank',
    videoUrl: 'https://www.youtube.com/watch?v=CUge29aEFAc',
    image: 'holocron.png',
    category: 'sandbox',
    theme: {
      colors: ['Azul claro', 'Roxo', 'Ciano', 'Preto espacial', 'Azul escuro'],
      style: 'Glassmorphism com tema Star Wars holográfico'
    }
  },
  {
    id: '3d-retro-library',
    title: '3D Retro Library',
    description: 'Arcade nostálgico dos anos 80 em sua tela! Uma experiência 3D interativa onde cartuchos de jogos flutuam no espaço usando Three.js e React Three Fiber.',
    technologies: ['React 18', 'TypeScript', 'Three.js', 'React Three Fiber', 'GSAP', 'Vite'],
    features: [
      'Cartuchos 3D flutuantes com física e animações suaves',
      'Console 3D com slot funcional e luzes neon',
      'Sistema de câmera cinematográfica animada',
      'Sistema de áudio imersivo com synthwave',
      'Visual cyberpunk/neon com efeitos de glow e bloom',
      'Starfield animado e scanlines estilo CRT',
      'Interface retrô com tipografia pixel-perfect',
      'Experiência totalmente responsiva e interativa'
    ],
    githubUrl: 'https://github.com/Oldp1e/3DRetroLibrary',
    liveUrl: 'https://oldp1e.github.io/3DRetroLibrary/',
    vercelUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=nWECNSoKgRY',
    image: '3d-retro-library.png',
    category: 'sandbox',
    theme: {
      colors: ['Magenta neon', 'Cyan', 'Verde limão', 'Roxo escuro', 'Preto espacial'],
      style: 'Cyberpunk/Neon com efeitos 3D e CRT'
    }
  }
]

// Funções auxiliares para filtrar projetos
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id))
}

// Categorias disponíveis
export const categories = [
  { id: 'all', label: 'Todos', count: projects.length },
  { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  { id: 'game', label: 'Games', count: projects.filter(p => p.category === 'game').length },
]

// Mapeamento de categorias para labels
export const categoryLabels = {
  'web': 'Web Development',
  'game': 'Game Development'
}

// Função para obter label da categoria
export const getCategoryLabel = (category) => {
  return categoryLabels[category] || category
}
