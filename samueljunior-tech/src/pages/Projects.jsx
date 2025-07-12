import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Filter, Search } from 'lucide-react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import YouTubePlayer from '../components/YouTubePlayer'
import ProjectModal from '../components/ProjectModal'
import useHotjar from '../hooks/useHotjar'
import { HOTJAR_CONFIG } from '../config/hotjar'

const Projects = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentVideo, setCurrentVideo] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [urlProjectProcessed, setUrlProjectProcessed] = useState(false)

  // Hook do Hotjar para rastreamento
  const { triggerEvent } = useHotjar(
    HOTJAR_CONFIG.SITE_ID,
    HOTJAR_CONFIG.VERSION,
    HOTJAR_CONFIG.DEBUG
  )

  const categories = [
    { id: 'all', label: 'Todos', count: 6 },
    { id: 'web', label: 'Web Apps', count: 5 },
    { id: 'game', label: 'Games', count: 1 },
  ]

  const projects = [
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
      liveUrlText: 'Visualizar',
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
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    triggerEvent(`project_modal_open_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    
    // Remove o parâmetro da URL se ainda existir
    const projectParam = searchParams.get('project')
    if (projectParam) {
      // Usa replace ao invés de push para não criar histórico extra
      navigate(location.pathname, { replace: true })
    }
  }

  // Effect para abrir modal automaticamente com base na URL
  useEffect(() => {
    const projectName = searchParams.get('project')
    
    if (projectName && !urlProjectProcessed && projects.length > 0) {
      // Busca case-insensitive por nome do projeto
      // Aceita tanto o nome exato quanto variações (ex: "Sistema de Cadastro de Fornecedores" -> "Cadastro de Fornecedores")
      const project = projects.find(p => {
        const projectTitle = p.title.toLowerCase()
        const searchName = projectName.toLowerCase()
        
        // Busca exata
        if (projectTitle === searchName) return true
        
        // Busca parcial - se o nome da URL contém o título do projeto ou vice-versa
        if (projectTitle.includes(searchName) || searchName.includes(projectTitle)) return true
        
        // Busca por palavras-chave principais
        const projectWords = projectTitle.split(' ').filter(word => word.length > 2)
        const searchWords = searchName.split(' ').filter(word => word.length > 2)
        const matchingWords = projectWords.filter(word => 
          searchWords.some(searchWord => searchWord.includes(word) || word.includes(searchWord))
        )
        
        // Se pelo menos 2 palavras principais coincidem, considera um match
        return matchingWords.length >= 2
      })
      
      if (project) {
        setUrlProjectProcessed(true)
        setSelectedProject(project)
        setIsModalOpen(true)
        
        // Remove o parâmetro da URL imediatamente após abrir
        setTimeout(() => {
          navigate(location.pathname, { replace: true })
        }, 100)
      }
    }
    
    // Reset quando não há parâmetro de projeto na URL
    if (!projectName) {
      setUrlProjectProcessed(false)
    }
  }, [searchParams, projects, urlProjectProcessed, navigate, location.pathname])

  return (
    <div className="min-h-screen pt-24">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-12">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meus <span className="gradient-text">Projetos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos destacados
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedCategory(category.id)
                        triggerEvent(`projects_filter_${category.id}`)
                      }}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.label} ({category.count})
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="group overflow-hidden h-full cursor-pointer" onClick={() => openProjectModal(project)}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center cursor-pointer relative"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Se tem vídeo, abre o vídeo; senão, abre o modal
                        if (project.videoUrl) {
                          setCurrentVideo(project.videoUrl)
                          triggerEvent(`project_video_play_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                        } else {
                          openProjectModal(project)
                        }
                      }}
                    >
                      {/* Tentar carregar a imagem, fallback para gradiente */}
                      <img
                        src={`/images/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                      
                      {/* Play button overlay se houver vídeo */}
                      {project.videoUrl && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                      
                     
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          Destaque
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                      {project.liveUrl && (
                        <Button 
                          variant="secondary" 
                          size="sm"
                          href={project.liveUrl}
                          className="flex-1 group"
                          onClick={(e) => {
                            e.stopPropagation()
                            triggerEvent(`project_demo_click_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                          }}
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <ExternalLink className="w-4 h-4" />
                            <span>{project.liveUrlText || 'Demo'}</span>
                          </span>
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          href={project.githubUrl}
                          className="flex items-center justify-center"
                          onClick={(e) => {
                            e.stopPropagation()
                            triggerEvent(`project_github_click_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-lg mb-4">
              Nenhum projeto encontrado para os filtros selecionados
            </div>
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedCategory('all')
                setSearchTerm('')
                triggerEvent('projects_clear_filters')
              }}
            >
              Limpar Filtros
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Gostou do que viu?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Vamos trabalhar juntos no seu próximo projeto e criar algo incrível
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                onClick={() => {
                  navigate('/contact')
                  triggerEvent('projects_cta_contact')
                }}
              >
                Iniciar Projeto
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="https://github.com/Oldp1e"
                onClick={() => triggerEvent('projects_cta_github')}
              >
                Ver Mais no GitHub
              </Button>
            </div>
          </Card>
        </motion.div>
        </div>
      </div>
      
      {/* YouTube Player Modal */}
      {currentVideo && (
        <YouTubePlayer 
          videoUrl={currentVideo} 
          onClose={() => setCurrentVideo(null)} 
        />
      )}

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  )
}

export default Projects
