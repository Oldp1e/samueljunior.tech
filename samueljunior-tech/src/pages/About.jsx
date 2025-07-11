import { motion } from 'framer-motion'
import { Calendar, MapPin, Coffee, Code, Award, Users } from 'lucide-react'
import Card from '../components/ui/Card'

const About = () => {
  const experiences = [
    {
      year: '2024 - Atual',
      title: 'Senior Full Stack Developer',
      company: 'Tropical Pixel Studios',
      description: 'Liderando o desenvolvimento de jogos e aplicações web inovadoras.',
      skills: ['React', 'Node.js', 'Unity', 'C#', 'Python']
    },
    {
      year: '2022 - 2024',
      title: 'Cybersecurity Specialist',
      company: 'Tech Security Corp',
      description: 'Implementação de soluções de segurança e testes de penetração.',
      skills: ['Ethical Hacking', 'AWS Security', 'Python', 'Linux']
    },
    {
      year: '2020 - 2022',
      title: 'Game Developer',
      company: 'Indie Game Studio',
      description: 'Desenvolvimento de jogos indie para múltiplas plataformas.',
      skills: ['Unity', 'C#', 'Game Design', 'Mobile Development']
    }
  ]

  const stats = [
    { number: '50+', label: 'Projetos Concluídos', icon: Code },
    { number: '5+', label: 'Anos de Experiência', icon: Calendar },
    { number: '20+', label: 'Clientes Satisfeitos', icon: Users },
    { number: '15+', label: 'Certificações', icon: Award }
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
            Desenvolvedor apaixonado por tecnologia, inovação e criação de experiências digitais únicas
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
                    Olá! Sou Samuel Junior, um desenvolvedor brasileiro apaixonado por tecnologia 
                    e inovação. Minha jornada no mundo da programação começou há mais de 5 anos, 
                    e desde então tenho me dedicado a criar soluções que fazem a diferença.
                  </p>
                  <p>
                    Especializo-me em desenvolvimento full stack, criação de jogos e cybersecurity. 
                    Minha abordagem combina criatividade com solidez técnica, sempre buscando 
                    entregar experiências excepcionais aos usuários.
                  </p>
                  <p>
                    Através do <span className="text-purple-400 font-semibold">Tropical Pixel Studios</span>, 
                    meu estúdio independente, desenvolvo projetos que vão desde aplicações web 
                    corporativas até jogos indie inovadores, sempre com foco na qualidade e na 
                    experiência do usuário.
                  </p>
                  <p>
                    Quando não estou codando, gosto de estudar novas tecnologias, contribuir 
                    para projetos open source e compartilhar conhecimento com a comunidade de 
                    desenvolvedores.
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
                    <span>Brasil 🇧🇷</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Coffee className="w-5 h-5 text-purple-400" />
                    <span>Viciado em café ☕</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Code className="w-5 h-5 text-purple-400" />
                    <span>+50 projetos concluídos</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 xl:p-8">
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">Interesses</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Inteligência Artificial',
                    'Game Development',
                    'Cybersecurity',
                    'Open Source',
                    'Mobile Apps',
                    'Cloud Computing'
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
        </div>
      </div>
    </div>
  )
}

export default About
