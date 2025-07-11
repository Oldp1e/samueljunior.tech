import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Play, Code, Gamepad2, Shield, Server } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Home = () => {
  const skills = [
    { 
      icon: Code, 
      title: 'Full Stack Development',
      description: 'React, Node.js, Python, TypeScript',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Gamepad2, 
      title: 'Game Development',
      description: 'Unity, C#, Game Design',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      icon: Shield, 
      title: 'Cybersecurity',
      description: 'Ethical Hacking, Penetration Testing',
      color: 'from-red-500 to-orange-500'
    },
    { 
      icon: Server, 
      title: 'Infrastructure',
      description: 'AWS, Docker, DevOps',
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
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Main heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Olá, eu sou{' '}
              <span className="gradient-text">Samuel Junior</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Full Stack Developer, Game Developer e Especialista em Cybersecurity
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Criando experiências digitais inovadoras e soluções tecnológicas robustas 
              através do <span className="text-purple-400 font-semibold">Tropical Pixel Studios</span>
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button size="lg" className="group">
              <span className="flex items-center space-x-2">
                <span>Ver Projetos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button variant="secondary" size="lg" className="group">
              <span className="flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Play, href: 'https://youtube.com', label: 'YouTube' }
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 glass-light rounded-xl text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minhas <span className="gradient-text">Especialidades</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinando criatividade com tecnologia para entregar soluções excepcionais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Card className="p-6 text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para dar vida às suas ideias?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre seu próximo projeto e criar algo incrível juntos
            </p>
            <Button size="lg" className="group">
              <span className="flex items-center space-x-2">
                <span>Vamos Conversar</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
