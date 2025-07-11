import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, Github, Linkedin, Calendar, ExternalLink } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Curriculum = () => {
  const handleDownloadPDF = () => {
    window.print()
  }

  const personalInfo = {
    name: 'Samuel Pereira Lima Júnior',
    title: 'Engenheiro de Software & Game Developer',
    email: 'samuellima06091999@gmail.com',
    phone: '+55 (19) 99158-0864',
    location: 'São Paulo, Brasil',
    github: 'https://github.com/Oldp1e',
    linkedin: 'https://linkedin.com/in/samuel-pereira-lima-junior'
  }

  const summary = `Engenheiro de Software, Game Developer e Especialista em Backend com mais de 6 anos de experiência. Apaixonado por tecnologia e inovação, trilho minha carreira desenvolvendo soluções robustas, criativas e seguras para diferentes segmentos do mercado. Founder da Tropical Pixel Studios, onde lidero todas as etapas do desenvolvimento de jogos indie. Experiência sólida em PHP, PL/SQL, JavaScript, React, Unity e integração de APIs, sempre adotando princípios de clean code e foco em performance.`

  const skills = {
    'Linguagens de Programação': ['JavaScript', 'C#', 'PHP', 'Python', 'SQL', 'PL/SQL'],
    'Frontend': ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    'Backend': ['Node.js', 'Express', 'API REST', 'JWT', 'Scriptcase', 'Autenticação'],
    'Banco de Dados': ['MySQL', 'PL/SQL', 'MongoDB'],
    'Game Development': ['Unity', 'C#', '2D/3D Graphics', 'Steam Publishing', 'Game Design'],
    'DevOps & Tools': ['Git', 'GitHub', 'Chrome Extensions', 'Vite', 'PFsense'],
    'Outras': ['Inteligência Artificial', 'Integração APIs', 'Infraestrutura', 'Segurança', 'Automação']
  }

  const experience = [
    {
      title: 'Founder & Game Developer',
      company: 'Tropical Pixel Studios',
      period: '2025 - Atual',
      description: 'Lidero todas as etapas do desenvolvimento de jogos indie, incluindo programação, direção de arte, marketing e publicação, criando experiências marcantes para a comunidade gamer.',
      achievements: [
        'Lançamento do jogo "Entity Strike" na Steam',
        'Desenvolvimento completo de jogos indie do conceito à publicação',
        'Direção de arte e criação de experiências únicas',
        'Construção de marca indie sustentável'
      ]
    },
    {
      title: 'PHP Developer III',
      company: 'GTPLAN Supply Chain 4.0',
      period: '2023 - 2025',
      description: 'Desenvolvimento de backends escaláveis, integrações com APIs de pagamento (Vindi), automação de processos, controle de acesso seguro (UAC) e otimização de sistemas corporativos.',
      achievements: [
        'Desenvolvimento do Sistema de Cadastro de Fornecedores com +15.000 usuários',
        'Integração com APIs de pagamento e governamentais (Receita Federal)',
        'Implementação de sistemas UAC e controle de acesso seguro',
        'Automação de processos e otimização de sistemas corporativos'
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
      name: 'Entity Strike',
      description: 'Jogo indie bullet-hell/survivors publicado na Steam pela Tropical Pixel Studios',
      technologies: ['Unity', 'C#', '2D Graphics', 'Steam SDK'],
      link: 'https://store.steampowered.com/app/3685980/Entity_Strike/'
    },
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
      name: 'Módulo Frequência Web',
      description: 'Modernização completa do sistema legado Gurhu para gestão de RH na área da saúde pública',
      technologies: ['PHP', 'Scriptcase', 'MySQL', 'JWT', 'XML/XLSX'],
      link: null
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
      degree: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Faculdade de Tecnologia',
      period: '2020 - 2022',
      description: 'Foco em desenvolvimento de software, gestão de projetos, banco de dados e engenharia de software'
    },
    {
      degree: 'Certificações Técnicas',
      institution: 'Diversas Instituições',
      period: '2018 - Atual',
      description: 'Mais de 6 certificações em tecnologias como Unity, PHP, JavaScript, Segurança e DevOps'
    }
  ]

  return (
    <div className="min-h-screen pt-24 print:pt-0">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-12 print:px-8 print:py-4">
        <div className="max-w-4xl mx-auto">
          {/* Header com botão de download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 print:hidden"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meu <span className="gradient-text">Currículo</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Baixe meu currículo em PDF ou visualize online
            </p>
            <Button
              onClick={handleDownloadPDF}
              className="group"
              size="lg"
            >
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Baixar PDF</span>
              </span>
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
                <h3 className="text-xl font-bold text-white print:text-black mb-6">Projetos Destacados</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 bg-white/5 print:bg-gray-50 rounded-lg border border-white/10 print:border-gray-300">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white print:text-black">{project.name}</h4>
                        {project.link && (
                          <ExternalLink className="w-4 h-4 text-gray-400 print:hidden" />
                        )}
                      </div>
                      <p className="text-gray-400 print:text-gray-700 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-purple-500/20 print:bg-gray-200 text-purple-300 print:text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
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
    </div>
  )
}

export default Curriculum
