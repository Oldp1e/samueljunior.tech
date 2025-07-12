import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Play, Code, Gamepad2, Shield, Server, Database, Cog, Eye } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Home = () => {
  const navigate = useNavigate()
  
  const skills = [
    { 
      icon: Code, 
      title: 'Full Stack Development',
      description: 'React, Node.js, PHP, Scriptcase, jQuery, TypeScript, JavaScript, CSS',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Gamepad2, 
      title: 'Game Development',
      description: 'Unity, C#, Game Design, Direção de Arte, Publicação, Marketing, Liderança de Equipe',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Shield, 
      title: 'Security & Infrastructure',
      description: 'UAC, Segurança de API, Firewall (PFsense), Windows Server, Hyper-V, Virtualização, Active Directory, FreeNAS, Monitoramento de Rede',
      color: 'from-red-500 to-orange-500'
    },
    { 
      icon: Cog, 
      title: 'Backend & API Engineering',
      description: 'PHP, PL/SQL, MySQL, Oracle, REST APIs, OAuth, JWT, Payment Gateways, Microservices, Monoliths',
      color: 'from-green-500 to-teal-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 2xl:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center space-y-8"
          >
            {/* Main heading */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white leading-tight"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Olá, eu sou{' '}
                <span className="gradient-text">Samuel Junior</span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl xl:text-3xl text-gray-300 max-w-4xl mx-auto"
              >
                Engenheiro de Software, Game Developer e Especialista em Backend
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg xl:text-xl text-gray-400 max-w-3xl mx-auto"
              >
                Criando experiências digitais inovadoras e divertidas 
                através do meu estúdio <span className="text-purple-400 font-semibold">Tropical Pixel Studios</span>
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button 
                size="lg" 
                className="group"
                onClick={() => navigate('/projects')}
              >
                <span className="flex items-center space-x-2">
                  <span>Ver Projetos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button variant="secondary" size="lg" className="group" onClick={() => navigate('/curriculum')}>
                <span className="flex items-center space-x-2">                  
                  <Eye className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Ver Currículo</span>
                </span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center space-x-6"
            >
              {[
                { icon: Github, href: 'https://github.com/Oldp1e', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/samuel-lima-analista-ti/', label: 'LinkedIn' },
                { icon: Play, href: 'https://youtube.com/oldp1e', label: 'YouTube' }
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 glass-light rounded-xl social-icon transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 2xl:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
              Minhas <span className="gradient-text">Especialidades</span>
            </h2>
            <p className="text-gray-400 text-lg xl:text-xl max-w-3xl mx-auto">
              Combinando criatividade com tecnologia para entregar soluções excepcionais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 xl:p-8 text-center h-full">
                    <div className={`w-16 h-16 xl:w-20 xl:h-20 mx-auto mb-4 xl:mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <Icon className="w-8 h-8 xl:w-10 xl:h-10 text-white" />
                    </div>
                    <h3 className="text-xl xl:text-2xl font-semibold text-white mb-2 xl:mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-gray-400 text-sm xl:text-base">
                      {skill.description}
                    </p>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 2xl:py-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 xl:p-16 text-center">
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4 xl:mb-6">
                Pronto para dar vida às suas ideias?
              </h2>
              <p className="text-gray-400 text-lg xl:text-xl mb-8 xl:mb-12 max-w-3xl mx-auto">
                Vamos conversar sobre seu próximo projeto e criar algo incrível juntos
              </p>
              <Button 
                size="lg" 
                className="group xl:text-lg xl:px-10 xl:py-5"
                onClick={() => navigate('/contact')}
              >
                <span className="flex items-center space-x-2">
                  <span>Vamos Conversar</span>
                  <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
