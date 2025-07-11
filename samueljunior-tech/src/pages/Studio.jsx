import { motion } from 'framer-motion'
import { Gamepad2, Code, Palette, Users, Trophy, Zap, ArrowRight, Star } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Studio = () => {
  const services = [
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Criação de jogos 2D e 3D para múltiplas plataformas',
      features: ['Unity & Unreal Engine', 'Mobile & PC', 'Multiplayer', 'VR/AR']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Desenvolvimento de aplicações web modernas e responsivas',
      features: ['React & Vue.js', 'Node.js & Python', 'API Development', 'Cloud Deploy']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Design de interfaces intuitivas e experiências memoráveis',
      features: ['Figma & Adobe XD', 'Prototyping', 'User Research', 'Brand Identity']
    }
  ]

  const portfolio = [
    {
      title: 'Mystic Forest',
      category: 'RPG Adventure',
      description: 'Jogo de aventura em pixel art com mundo aberto',
      status: 'Em Desenvolvimento',
      image: '/api/placeholder/300/200',
      technologies: ['Unity', 'C#', 'Pixel Art']
    },
    {
      title: 'TaskFlow Pro',
      category: 'Productivity App',
      description: 'Aplicativo de produtividade para equipes',
      status: 'Lançado',
      image: '/api/placeholder/300/200',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Space Defender',
      category: 'Arcade Game',
      description: 'Jogo arcade de defesa espacial',
      status: 'Lançado',
      image: '/api/placeholder/300/200',
      technologies: ['Unity', 'Mobile', '2D']
    }
  ]

  const stats = [
    { number: '25+', label: 'Jogos Desenvolvidos' },
    { number: '50+', label: 'Projetos Web' },
    { number: '100K+', label: 'Downloads' },
    { number: '4.8/5', label: 'Rating Médio' }
  ]

  const team = [
    {
      name: 'Samuel Junior',
      role: 'Founder & Lead Developer',
      description: 'Full Stack Developer e Game Developer com 5+ anos de experiência',
      avatar: '/api/placeholder/100/100'
    },
    {
      name: 'Maria Silva',
      role: 'Game Designer',
      description: 'Especialista em game design e narrativa interativa',
      avatar: '/api/placeholder/100/100'
    },
    {
      name: 'João Santos',
      role: 'UI/UX Designer',
      description: 'Designer focado em experiências de usuário inovadoras',
      avatar: '/api/placeholder/100/100'
    }
  ]

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
            >
              <Gamepad2 className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="gradient-text">Tropical Pixel</span> Studios
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Estúdio independente especializado em desenvolvimento de jogos e aplicações digitais inovadoras
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Oferecemos soluções completas para transformar suas ideias em realidade digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <Zap className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* Portfolio */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Portfólio do <span className="gradient-text">Studio</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Alguns dos nossos projetos mais recentes e destacados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <Gamepad2 className="w-12 h-12 text-white/60" />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Lançado' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossa <span className="gradient-text">Equipe</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Profissionais apaixonados por tecnologia e inovação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para criar algo incrível?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e vamos transformar sua visão em realidade digital
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group">
                <span className="flex items-center space-x-2">
                  <span>Iniciar Projeto</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="secondary" size="lg">
                Ver Portfólio Completo
              </Button>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  )
}

export default Studio
