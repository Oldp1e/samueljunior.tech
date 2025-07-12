import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { ArrowRight, Download, Github, Linkedin, Play, Code, Gamepad2, Shield, Server, Database, Cog, Eye, ExternalLink, Star } from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import ProjectModal from '../components/ProjectModal'
import { getFeaturedProjects, getCategoryLabel } from '../data/projects'
import { useProjectModal } from '../hooks/useProjectModal'

const Home = () => {
  const navigate = useNavigate()
  const projectsRef = useRef(null)
  
  // Hook centralizado para gerenciar modais
  const {
    selectedProject,
    isModalOpen,
    openProjectModal,
    closeProjectModal
  } = useProjectModal(projectsRef)
  
  // Projetos em destaque - vem dos dados centralizados
  const featuredProjects = getFeaturedProjects()
  
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
              {/* Profile Avatar */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="relative mx-auto mb-8"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mx-auto relative">
                  {/* Animated gradient ring with breathing effect */}
                  <div className="absolute inset-0 rounded-full animate-gradient-shift animate-pulse-glow p-1">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                      <img
                        src="/images/samuel-avatar.jpeg"
                        alt="Samuel Junior - Software Engineer"
                        className="w-full h-full rounded-full object-cover border-2 border-gray-800"
                        onError={(e) => {
                          // Fallback para um gradiente se a imagem não carregar
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }}
                      />
                      {/* Fallback avatar */}
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-3xl md:text-4xl xl:text-5xl font-bold hidden">
                        SJ
                      </div>
                    </div>
                  </div>
                  
                  {/* Status indicator with gentle pulse */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1, type: "spring", stiffness: 500 }}
                    className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                  </motion.div>
                </div>
              </motion.div>

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

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 2xl:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
              Projetos em <span className="gradient-text">Destaque</span>
            </h2>
            <p className="text-gray-400 text-lg xl:text-xl max-w-3xl mx-auto">
              Uma seleção dos meus trabalhos mais impactantes e inovadores
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                      onClick={() => openProjectModal(project)}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative">
                      <img
                        src={`/images/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none'
                        }}
                      />
                      {/* Overlay with play icon for video projects */}
                      {project.videoUrl && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                      {/* Featured Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          <Star className="w-3 h-3" />
                          <span>Destaque</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                        {getCategoryLabel(project.category)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              className="group"
              onClick={() => navigate('/projects')}
            >
              <span className="flex items-center space-x-2">
                <span>Ver Todos os Projetos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
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
      
      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
      />
    </div>
  )
}

export default Home
