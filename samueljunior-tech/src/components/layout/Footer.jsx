import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { 
      href: 'https://github.com', 
      icon: Github, 
      label: 'GitHub',
      color: 'hover:text-gray-400'
    },
    { 
      href: 'https://linkedin.com', 
      icon: Linkedin, 
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    { 
      href: 'mailto:contato@samueljunior.tech', 
      icon: Mail, 
      label: 'Email',
      color: 'hover:text-green-400'
    },
  ]

  return (
    <footer className="relative mt-20">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-8">
        <div className="glass p-8 xl:p-12 max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between space-y-8 xl:space-y-0">
            {/* Left side - Brand */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
              >
                <Coffee className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-lg xl:text-xl font-bold text-white">Samuel Junior</h3>
                <p className="text-gray-400 text-sm xl:text-base">Full Stack Developer & Game Developer</p>
              </div>
            </div>

            {/* Center - Social Links */}
            <div className="flex items-center space-x-6 xl:space-x-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 glass-light rounded-xl text-gray-400 transition-all duration-300 ${link.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>

            {/* Right side - Copyright */}
            <div className="text-center xl:text-right">
              <p className="text-gray-400 text-sm xl:text-base flex items-center justify-center xl:justify-end space-x-1">
                <span>Feito com</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 xl:w-5 xl:h-5 text-red-500 fill-current" />
                </motion.div>
                <span>© 2025</span>
              </p>
              <p className="text-gray-500 text-xs xl:text-sm mt-1">
                Tropical Pixel Studios
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="mt-6 xl:mt-8 pt-6 xl:pt-8 border-t border-white/10">
            <div className="flex flex-col xl:flex-row items-center justify-between space-y-2 xl:space-y-0">
              <p className="text-gray-500 text-xs xl:text-sm">
                Desenvolvido com React, Vite e Tailwind CSS
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 text-xs xl:text-sm"
              >
                "Code is poetry in motion" ✨
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
