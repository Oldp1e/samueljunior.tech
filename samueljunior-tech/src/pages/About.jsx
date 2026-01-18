import { motion } from 'framer-motion'
import { Calendar, MapPin, Coffee, Code, Award, Users, Building } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const About = () => {
  const navigate = useNavigate()
  
 const experiences = [
    {
      year: 'Set/2025 - Atual',
      title: 'Consultor de Sistemas | Desenvolvedor PHP Sênior',
      company: 'Vivo (Telefônica Brasil)',
      description:
        'Desenvolvimento e evolução de sistemas corporativos de grande escala em ambiente crítico, altamente regulado. Atuo em decisões arquiteturais, desenvolvimento de APIs REST, segurança digital e componentes de autenticação/autorização.',
      skills: ['PHP 8+', 'Laravel', 'APIs REST', 'OAuth2', 'JWT', 'Docker', 'MySQL', 'Oracle', 'Arquitetura', 'Segurança Digital']
    },
    {
      year: '2021 - 2025',
      title: 'Desenvolvedor PHP',
      company: 'GTPLAN Supply Chain 4.0',
      description:
        'Desenvolvimento de backends escaláveis e resilientes com +15.000 usuários. Integrações com APIs de pagamento (Vindi), implementação de UAC robusto, otimização PL/SQL e sincronização em tempo real.',
      skills: ['PHP', 'PL/SQL', 'MySQL', 'APIs REST', 'JWT', 'UAC', 'CI/CD', 'Scrum']
    },
    {
      year: '2024',
      title: 'Senior PHP Developer',
      company: 'Tegra',
      description:
        'Modernização de sistema legado de RH para web com múltiplas camadas de segurança, importação automática de dados (XML/XLSX) e regras de negócio complexas para setor de saúde.',
      skills: ['PHP', 'Scriptcase', 'JWT', 'Security', 'Data Import', 'Healthcare Systems']
    },
    {
      year: '2020 - 2021',
      title: 'Analista de TI Junior / Desenvolvedor Full Stack',
      company: 'Brand Têxtil',
      description:
        'Atuei em infraestrutura, suporte, segurança de rede (PFsense), virtualização e desenvolvimento de soluções web internas usando PHP, MySQL e JavaScript.',
      skills: ['Infraestrutura', 'PHP', 'MySQL', 'JavaScript', 'PFsense']
    },
    {
      year: '2019 - 2020',
      title: 'Analista de Redes Jr / Desenvolvedor WEB Full Stack',
      company: 'Tecelagem Panamericana',
      description:
        'Responsável por suporte técnico, manutenção de hardware/software, rotinas de backup e desenvolvimento de soluções web para demandas internas.',
      skills: ['Redes', 'PHP', 'MySQL', 'Suporte Técnico']
    },
    {
      year: '2018 - 2019',
      title: 'Professor de TI',
      company: 'Microlins',
      description:
        'Ministrei aulas de informática e gestão empresarial para alunos de diferentes idades, elaborando conteúdos e treinamentos técnicos.',
      skills: ['Docência', 'Informática', 'Gestão Empresarial', 'Comunicação']
    }
  ]

  const stats = [
    { number: '20+', label: 'Projetos Concluídos', icon: Code },
    { number: '6+', label: 'Anos de Experiência', icon: Calendar },
    { number: '5', label: 'Empresas trabalhadas', icon: Building },
    { number: '6+', label: 'Certificações', icon: Award }
  ]

  return (
    <div className="min-h-screen pt-24">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-12 2xl:py-20">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 2xl:mb-24"
        >
          <h1 className="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6">
            Sobre <span className="gradient-text">Mim</span>
          </h1>
          <p className="text-xl xl:text-2xl text-gray-400 max-w-4xl mx-auto">
            Desenvolvedor Backend Sênior com foco em PHP, arquitetura escalável e sistemas de alta disponibilidade
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:gap-12 mb-16 2xl:mb-24">
            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="xl:col-span-2"
            >
              <Card className="p-8 xl:p-12">
                <h2 className="text-2xl xl:text-3xl font-bold text-white mb-6">Minha Jornada</h2>
                <div className="space-y-6 text-gray-300 leading-relaxed text-base xl:text-lg">
                  <p>
                    Olá, me chamo Samuel e sou <span className="text-purple-400 font-semibold">Desenvolvedor Backend Sênior</span> com foco em PHP e arquitetura de sistemas escaláveis. 
                    Apaixonado por engenharia de software, trilho minha carreira desenvolvendo backends críticos, APIs robustas e integrações complexas com foco em performance, segurança e manutenibilidade.
                  </p>
                  <p>
                    Minha jornada começou há 6+ anos passando por experiências variadas, mas encontrei minha especialização em <span className="text-purple-400 font-semibold">desenvolvimento backend</span> e <span className="text-purple-400 font-semibold">arquitetura de sistemas</span>. 
                    Tenho expertise sólida em PHP 8+, Laravel, Slim, PL/SQL, otimização de queries, OAuth2, JWT e implementação de sistemas de alta disponibilidade. 
                    Trabalho com tecnologias como Docker, CI/CD, RabbitMQ, Kafka e tenho mentalidade focada em engenharia de software, não apenas codificar features.
                  </p>
                  <p>
                    Atualmente sou <span className="text-purple-400 font-semibold">Consultor de Sistemas na Vivo (Telefônica Brasil)</span>, onde atuo em decisões arquiteturais, 
                    evolução de sistemas corporativos de grande escala e participação ativa em componentes críticos de segurança digital e proteção de dados.
                  </p>
                  <p>
                    Tenho perfil analítico, visão sistêmica e facilidade para transitar entre negócio, produto e tecnologia. Fora do trabalho, gosto de estudar novas tecnologias, 
                    experimentar com infraestrutura (homelab dockerizado com redes, VPN, DNS) e compartilhar conhecimento com a comunidade de desenvolvedores.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 xl:space-y-8"
            >
              <Card className="p-6 xl:p-8">
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">Informações Pessoais</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>SP - Brasil 🇧🇷</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Coffee className="w-5 h-5 text-purple-400" />
                    <span>Viciado em café ☕</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Code className="w-5 h-5 text-purple-400" />
                    <span>+20 projetos concluídos</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 xl:p-8">
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">Interesses</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Backend Development',
                    'DevOps',
                    'Arquitetura de Sistemas',
                    'Software Engineering',
                    'APIs REST',
                    'Segurança',
                  ].map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6 mb-16 2xl:mb-24 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 xl:p-8 text-center">
                  <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-purple-400 mx-auto mb-3" />
                  <div className="text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm xl:text-base">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 max-w-6xl mx-auto"
        >
          <h2 className="text-3xl xl:text-4xl font-bold text-white text-center mb-12 xl:mb-16">
            Experiência <span className="gradient-text">Profissional</span>
          </h2>
          
          <div className="space-y-6 xl:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 xl:p-8">
                  <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4">
                    <div>
                      <h3 className="text-xl xl:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-medium text-lg">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-gray-400 text-sm xl:text-base mt-2 xl:mt-0">
                      {exp.year}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-base xl:text-lg">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs xl:text-sm border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              Que tal conversarmos sobre seu próximo projeto?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Estou sempre em busca de novos desafios e oportunidades para criar soluções inovadoras. 
              Vamos transformar suas ideias em realidade!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg"
                onClick={() => navigate('/contact')}
              >
                Vamos Conversar
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                href="https://www.linkedin.com/in/samuel-lima-analista-ti/"
              >
                Conectar no LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
