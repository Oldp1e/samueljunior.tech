import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink } from 'lucide-react'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProjectModal from '../components/ProjectModal'
import { projects as centralizedProjects } from '../data/projects'
import { useProjectModal } from '../hooks/useProjectModal'

const Curriculum = () => {
  const navigate = useNavigate()
  const projectsRef = useRef(null)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  // Hook centralizado para gerenciar modais
  const {
    selectedProject,
    isModalOpen,
    openProjectModal,
    closeProjectModal
  } = useProjectModal(projectsRef)

  // Função para mapear projetos do currículo com os dados centralizados
  const findCentralizedProject = (projectName) => {
    const projectMap = {
      'Sistema de Cadastro de Fornecedores': 'Cadastro de Fornecedores',
      'Easy Bid': 'Easy Bid',
      'Outdoors Adventures Malta API': 'Outdoors Adventures Malta API',
      'Extensão Chrome - Desmarcar Checkboxes Publicador': 'SC Extension'
    }
    
    const mappedTitle = projectMap[projectName] || projectName
    return centralizedProjects.find(project => project.title === mappedTitle)
  }

  const handleProjectClick = (project) => {
    const centralizedProject = findCentralizedProject(project.name)
    if (centralizedProject) {
      openProjectModal(centralizedProject)
    } else if (project.link) {
      window.open(project.link, '_blank')
    } else {
      // Fallback para navegação com parâmetro
      navigate(`/projects?project=${encodeURIComponent(project.name)}`)
    }
  }

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true)
    try {
      // Temporariamente usando print do navegador como solução mais estável
      console.log('Gerando PDF via impressão do navegador...')
      
      // Adiciona classe de impressão para styling específico
      document.body.classList.add('printing')
      
      // Pequeno delay para aplicar estilos
      setTimeout(() => {
        window.print()
        document.body.classList.remove('printing')
        setIsGeneratingPDF(false)
      }, 100)
      
    } catch (error) {
      console.error('Erro ao preparar impressão:', error)
      alert('Erro ao preparar documento. Tente novamente.')
      setIsGeneratingPDF(false)
    }
  }

  const personalInfo = {
    name: 'Samuel Pereira Lima Júnior',
    title: 'Desenvolvedor Backend Sênior / Consultor de Sistemas',
    email: 'samuellima06091999@gmail.com',
    phone: '+55 (19) 99158-0864',
    location: 'São Paulo, Brasil',
    github: 'https://github.com/Oldp1e',
    linkedin: 'https://linkedin.com/in/samuel-pereira-lima-junior'
  }

  const summary = `Desenvolvedor Backend Sênior com forte experiência em PHP e arquitetura de sistemas escaláveis. Atuo no desenvolvimento e evolução de backends críticos, APIs e integrações complexas, com foco em performance, segurança e manutenibilidade. Atualmente trabalho como Consultor de Sistemas na Vivo, participando de decisões arquiteturais e evolução de sistemas corporativos de grande escala.`

  const skills = {
    'Linguagens de Programação': ['PHP 8+', 'JavaScript (ES6+)', 'SQL', 'PL/SQL', 'Java'],
    'Frameworks & Arquitetura': ['Laravel', 'Slim', 'Express', 'API REST', 'SOA', 'Microsserviços'],
    'Autenticação & Segurança': ['OAuth2', 'JWT', 'User Access Control (UAC)', 'Proteção de Dados', 'MD5 Hash'],
    'Banco de Dados': ['MySQL', 'PostgreSQL', 'Oracle', 'PL/SQL', 'Redis', 'Otimização de Queries'],
    'DevOps & Infraestrutura': ['Docker', 'Git/GitHub', 'CI/CD', 'RabbitMQ', 'Kafka', 'PFsense', 'VPN'],
    'Testes & Qualidade': ['PHPUnit', 'Testes Automatizados', 'Clean Code', 'Versionamento Estruturado'],
    'Outras': ['Integração APIs', 'Infraestrutura', 'Análise de Requisitos', 'Documentação Técnica', 'Scrum/Kanban']
  }

  const experience = [
    {
      title: 'Consultor de Sistemas | Desenvolvedor PHP Sênior',
      company: 'Vivo (Telefônica Brasil)',
      period: 'Set/2025 - Atual',
      description: 'Atuo no desenvolvimento e evolução de sistemas corporativos de grande escala em ambiente crítico, altamente regulado e com forte foco em segurança e confiabilidade.',
      achievements: [
        'Desenvolvimento e manutenção de sistemas em PHP, JavaScript e Java com foco em performance e escalabilidade',
        'Criação e evolução de APIs REST para integrações entre sistemas internos e externos',
        'Atuação em componentes de Segurança Digital, autenticação, autorização e proteção de dados',
        'Análise técnica de requisitos e proposição de soluções arquiteturais eficientes',
        'Participação ativa em decisões de arquitetura, escolha de tecnologias e desenho de novos fluxos',
        'Garantia de qualidade de código através de boas práticas, versionamento estruturado e testes automatizados',
        'Atuação em times ágeis (planning, dailies, reviews e retrospectives) com contato direto com stakeholders'
      ]
    },
    {
      title: 'Desenvolvedor PHP',
      company: 'GTPLAN Supply Chain 4.0',
      period: '2021 - 2025',
      description: 'Desenvolvimento de backends escaláveis e resilientes, integrações com APIs de pagamento (Vindi), implementação de controle de acesso seguro (UAC), otimização de queries PL/SQL e sincronização em tempo real.',
      achievements: [
        'Desenvolvimento de Sistema de Cadastro de Fornecedores com +15.000 usuários',
        'Criação de bibliotecas próprias e integrações com gateways de pagamento',
        'Implementação de User Access Control (UAC) robusto e autenticação segura',
        'Otimização de queries PL/SQL em bancos de alto volume',
        'Integração de APIs internas e externas para sincronização em tempo real',
        'Atuação com Scrum e Kanban, CI/CD e entrega contínua'
      ]
    },
    {
      title: 'Senior PHP Developer',
      company: 'Tegra',
      period: '2024',
      description: 'Gerenciei a modernização de um sistema legado de RH para uma solução web, implementando múltiplas camadas de segurança, importação de dados (XML/XLSX) e regras de negócio complexas.',
      achievements: [
        'Modernização completa do sistema legado Gurhu para web',
        'Implementação de múltiplas camadas de segurança (JWT, MD5 Hash)',
        'Sistema de importação automática de dados XML/XLSX',
        'Desenvolvimento de regras de negócio complexas para área da saúde'
      ]
    },
    {
      title: 'Analista de TI Junior / Desenvolvedor Full Stack',
      company: 'Brand Têxtil',
      period: '2020 - 2021',
      description: 'Atuei em infraestrutura, suporte, segurança de rede (PFsense), virtualização e desenvolvimento de soluções web internas usando PHP, MySQL e JavaScript.',
      achievements: [
        'Desenvolvimento de soluções web internas com PHP e MySQL',
        'Configuração e manutenção de infraestrutura de TI',
        'Implementação de segurança de rede com PFsense',
        'Suporte técnico e virtualização de sistemas'
      ]
    },
    {
      title: 'Analista de Redes Jr / Desenvolvedor WEB Full Stack',
      company: 'Tecelagem Panamericana',
      period: '2019 - 2020',
      description: 'Responsável por suporte técnico, manutenção de hardware/software, rotinas de backup e desenvolvimento de soluções web para demandas internas.',
      achievements: [
        'Desenvolvimento de soluções web para demandas internas',
        'Manutenção de infraestrutura de hardware e software',
        'Implementação de rotinas de backup e segurança',
        'Suporte técnico especializado em redes'
      ]
    },
    {
      title: 'Professor de TI',
      company: 'Microlins',
      period: '2018 - 2019',
      description: 'Ministrei aulas de informática e gestão empresarial para alunos de diferentes idades, elaborando conteúdos e treinamentos técnicos.',
      achievements: [
        'Elaboração de conteúdos técnicos e treinamentos',
        'Ensino de informática para diferentes faixas etárias',
        'Desenvolvimento de metodologias de ensino',
        'Capacitação em gestão empresarial'
      ]
    }
  ]

  const projects = [
    {
      name: 'Sistema de Cadastro de Fornecedores',
      description: 'Plataforma híbrida robusta com +15.000 usuários e integração com APIs governamentais',
      technologies: ['Scriptcase', 'PHP', 'MySQL', 'API Receita Federal', 'UAC'],
      link: 'https://app.gtplan.net/uac222b_prereg_validate/uac222b_prereg_validate.php'
    },
    {
      name: 'Easy Bid',
      description: 'Plataforma inovadora de cotações empresariais com IA e sistema de aprovações multi-nível',
      technologies: ['React', 'Node.js', 'AI', 'JWT', 'API REST'],
      link: 'https://github.com/Oldp1e/easybid/'
    },
    {
      name: 'Outdoors Adventures Malta API',
      description: 'API completa para sistema de aluguel de embarcações com reservas, Stripe e painel administrativo',
      technologies: ['PHP', 'SQL', 'JWT', 'Stripe API', 'Swagger', 'Web Routing'],
      link: null,
    },
    {
      name: 'Extensão Chrome - Desmarcar Checkboxes Publicador',
      description: 'Extensão para automação de workflow no ambiente Publicador do Scriptcase',
      technologies: ['JavaScript', 'Chrome Extension API', 'DOM Manipulation'],
      link: 'https://github.com/Oldp1e/desmarcar-checkboxes-publicador'
    }
  ]

  const education = [
    {
      degree: 'Bacharelado, Engenharia de Software',
      institution: 'Anhanguera Educacional',
      period: 'nov de 2024 - abr de 2028',
      description: 'Curso superior focado em engenharia de software, desenvolvimento de sistemas e gestão de projetos tecnológicos'
    },
    {
      degree: 'Graduação, Tecnólogo em Desenvolvimento de Jogos Digitais',
      institution: 'Fatec Americana "Ministro Ralph Biasi"',
      period: '2021 - 2023',
      description: 'Ganhador do Prêmio em Grupo Huizinga no desenvolvimento de um jogo analógico. Competências: TypeScript'
    },
    {
      degree: 'Bacharelado em Ciências da Computação, Tecnologia da Informação',
      institution: 'Faculdade de Americana',
      period: 'fev de 2018 - fev de 2022',
      description: 'Qualificado para tratar tarefas computacionais em qualquer ramo do conhecimento onde a informática é utilizada. Curso trancado em 2020 devido à mudança de foco profissional.'
    },
    {
      degree: 'Técnico, Tecnologia em Informática/Software',
      institution: 'ETEC - Escola Técnica Estadual de São Paulo',
      period: '2015 - 2017',
      description: 'Formação técnica em desenvolvimento de software e tecnologias da informação'
    }
  ]

  return (
    <div className="min-h-screen pt-24 print:pt-0 curriculum-container">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-12 print:px-8 print:py-4">
        <div className="max-w-4xl mx-auto">
          {/* Header com botão de download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 print:hidden no-print"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meu <span className="gradient-text">Currículo</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Baixe meu currículo em PDF ou visualize online
            </p>
            <Button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="group download-button"
              size="lg"
            >
              {isGeneratingPDF ? (
                <span className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Gerando PDF...</span>
                </span>
              ) : (
                <span className="flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Baixar PDF</span>
                </span>
              )}
            </Button>
          </motion.div>

          {/* Conteúdo do Currículo */}
          <div className="print:text-black">
            {/* Cabeçalho do CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 mb-8 print:shadow-none print:border print:border-gray-300">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-white print:text-black mb-2">
                    {personalInfo.name}
                  </h1>
                  <h2 className="text-xl text-purple-400 print:text-gray-600 mb-6">
                    {personalInfo.title}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-gray-400 print:text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-400 print:text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-400 print:text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-gray-400 print:text-gray-600">
                      <Github className="w-4 h-4" />
                      <span>github.com/Oldp1e</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Resumo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <Card className="p-6 print:shadow-none print:border print:border-gray-300">
                <h3 className="text-xl font-bold text-white print:text-black mb-4">Resumo Profissional</h3>
                <p className="text-gray-400 print:text-gray-700 leading-relaxed">
                  {summary}
                </p>
              </Card>
            </motion.div>

            {/* Experiência */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <Card className="p-6 print:shadow-none print:border print:border-gray-300">
                <h3 className="text-xl font-bold text-white print:text-black mb-6">Experiência Profissional</h3>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-purple-500 print:border-gray-400 pl-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white print:text-black">{exp.title}</h4>
                        <span className="text-sm text-purple-400 print:text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-purple-300 print:text-gray-600 font-medium mb-2">{exp.company}</p>
                      <p className="text-gray-400 print:text-gray-700 text-sm mb-3">{exp.description}</p>
                      <ul className="list-disc list-inside text-gray-400 print:text-gray-700 text-sm space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Projetos Destacados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <Card className="p-6 print:shadow-none print:border print:border-gray-300">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white print:text-black">Projetos Destacados</h3>
                  <Button
                    onClick={() => navigate('/projects')}
                    className="text-sm print:hidden"
                    variant="outline"
                  >
                    Ver Todos os Projetos
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div 
                      key={index} 
                      className="p-4 bg-white/5 print:bg-gray-50 rounded-lg border border-white/10 print:border-gray-300 print:cursor-default cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-purple-500/50 print:hover:bg-gray-50 print:hover:border-gray-300 group"
                      onClick={() => {
                        if (!window.matchMedia('print').matches) {
                          handleProjectClick(project)
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if ((e.key === 'Enter' || e.key === ' ') && !window.matchMedia('print').matches) {
                          e.preventDefault()
                          handleProjectClick(project)
                        }
                      }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white print:text-black group-hover:text-purple-300 print:group-hover:text-black transition-colors">{project.name}</h4>
                        <ExternalLink className="w-4 h-4 text-gray-400 print:hidden group-hover:text-purple-400 transition-colors" />
                      </div>
                      <p className="text-gray-400 print:text-gray-700 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-purple-500/20 print:bg-gray-200 text-purple-300 print:text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Botão Ver Projeto - Apenas no modo web */}
                      <div className="print:hidden" onClick={(e) => e.stopPropagation()}>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full text-xs"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleProjectClick(project)
                          }}
                        >
                          <span className="flex items-center justify-center space-x-2">
                            <ExternalLink className="w-3 h-3" />
                            <span>Ver Projeto</span>
                          </span>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center print:hidden">
                  <p className="text-gray-400 text-sm mb-3">
                    Clique em qualquer projeto para ver mais detalhes e abrir o modal específico na página de projetos
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Habilidades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <Card className="p-6 print:shadow-none print:border print:border-gray-300">
                <h3 className="text-xl font-bold text-white print:text-black mb-6">Habilidades Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, skillList], index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-purple-300 print:text-gray-800 mb-3">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-white/10 print:bg-gray-100 text-gray-300 print:text-gray-700 rounded-full text-sm border border-white/20 print:border-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Educação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8"
            >
              <Card className="p-6 print:shadow-none print:border print:border-gray-300">
                <h3 className="text-xl font-bold text-white print:text-black mb-6">Educação</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-purple-500 print:border-gray-400 pl-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white print:text-black">{edu.degree}</h4>
                        <span className="text-sm text-purple-400 print:text-gray-600 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-purple-300 print:text-gray-600 font-medium mb-2">{edu.institution}</p>
                      <p className="text-gray-400 print:text-gray-700 text-sm">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Estilos de impressão */}
      <style jsx>{`
        @media print {
          @page {
            margin: 1cm;
            size: A4;
          }
          
          body {
            background: white !important;
            color: black !important;
          }
          
          .gradient-text {
            background: none !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: unset !important;
            color: black !important;
          }
          
          * {
            box-shadow: none !important;
          }
        }
      `}</style>
      
      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  )
}

export default Curriculum
