import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Mail, Github, Linkedin } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import useHotjar from '../hooks/useHotjar'
import { HOTJAR_CONFIG } from '../config/hotjar'

const NotFound = () => {
  const navigate = useNavigate()

  // Hook do Hotjar para rastreamento
  const { triggerEvent } = useHotjar(
    HOTJAR_CONFIG.SITE_ID,
    HOTJAR_CONFIG.VERSION,
    HOTJAR_CONFIG.DEBUG
  )

  const handleNavigation = (path, eventName) => {
    triggerEvent(eventName)
    navigate(path)
  }

  const quickLinks = [
    {
      title: 'Início',
      description: 'Voltar para a página principal',
      icon: Home,
      path: '/',
      event: '404_home_click'
    },
    {
      title: 'Projetos',
      description: 'Explore meu portfólio de projetos',
      icon: Search,
      path: '/projects',
      event: '404_projects_click'
    },
    {
      title: 'Sobre Mim',
      description: 'Conheça minha trajetória',
      icon: Mail,
      path: '/about',
      event: '404_about_click'
    },
    {
      title: 'Contato',
      description: 'Vamos conversar sobre seu projeto',
      icon: Mail,
      path: '/contact',
      event: '404_contact_click'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Oldp1e',
      event: '404_github_click'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/samuel-lima-analista-ti/',
      event: '404_linkedin_click'
    }
  ]

  return (
    <div className="min-h-screen pt-24 flex items-center justify-center">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">
              404
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Oops! Página não encontrada
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A página que você está procurando pode ter sido movida, renomeada ou não existe.
                Mas não se preocupe, há muito conteúdo interessante para explorar!
              </p>
            </motion.div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-8">
              Onde você gostaria de ir?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Card 
                      className="p-6 h-full cursor-pointer group hover:scale-105 transition-all duration-300"
                      onClick={() => handleNavigation(link.path, link.event)}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                          <Icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {link.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {link.description}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <Button
              size="lg"
              onClick={() => handleNavigation('/', '404_home_button')}
              className="flex items-center space-x-2"
            >
              <Home className="w-5 h-5" />
              <span>Voltar ao Início</span>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Página Anterior</span>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-4">
              Ou conecte-se comigo nas redes sociais:
            </p>
            <div className="flex items-center justify-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 glass-light rounded-xl social-icon transition-colors"
                    onClick={() => triggerEvent(social.event)}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Fun Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <div className="text-center">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="inline-block text-4xl mb-4"
              >
                🚀
              </motion.div>
              <p className="text-gray-500 text-sm">
                Enquanto isso, que tal explorar meus projetos?
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
