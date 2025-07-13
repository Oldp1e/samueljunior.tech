import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Filter, Search } from 'lucide-react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import YouTubePlayer from '../components/YouTubePlayer'
import ProjectModal from '../components/ProjectModal'
import SandboxModal from '../components/SandboxModal'
import useHotjar from '../hooks/useHotjar'
import { HOTJAR_CONFIG } from '../config/hotjar'
import { projects, categories, getFeaturedProjects, getProjectsByCategory, sandboxProjects } from '../data/projects'
import { useProjectModal } from '../hooks/useProjectModal'

const Projects = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentVideo, setCurrentVideo] = useState(null)
  const [urlProjectProcessed, setUrlProjectProcessed] = useState(false)
  const [selectedSandboxProject, setSelectedSandboxProject] = useState(null)
  const [isSandboxModalOpen, setIsSandboxModalOpen] = useState(false)

  // Hook centralizado para gerenciar modais
  const {
    selectedProject,
    isModalOpen,
    openProjectModal,
    closeProjectModal
  } = useProjectModal()

  // Hook do Hotjar para rastreamento
  const { triggerEvent } = useHotjar(
    HOTJAR_CONFIG.SITE_ID,
    HOTJAR_CONFIG.VERSION,
    HOTJAR_CONFIG.DEBUG
  )

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const openProjectModalWithTracking = (project) => {
    openProjectModal(project)
    triggerEvent(`project_modal_open_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
  }

  const closeProjectModalWithNavigation = () => {
    closeProjectModal()
    
    // Remove o parâmetro da URL se ainda existir
    const projectParam = searchParams.get('project')
    if (projectParam) {
      // Usa replace ao invés de push para não criar histórico extra
      navigate(location.pathname, { replace: true })
    }
  }

  const openSandboxModal = (project) => {
    setSelectedSandboxProject(project)
    setIsSandboxModalOpen(true)
    triggerEvent(`sandbox_modal_open_${project.id}`)
  }

  const closeSandboxModal = () => {
    setSelectedSandboxProject(null)
    setIsSandboxModalOpen(false)
  }

  // Effect para abrir modal automaticamente com base na URL
  useEffect(() => {
    if (urlProjectProcessed) return
    
    const projectParam = searchParams.get('project')
    if (projectParam) {
      const project = projects.find(p => p.id === projectParam)
      if (project) {
        openProjectModalWithTracking(project)
        setUrlProjectProcessed(true)
      }
    }
  }, [searchParams, urlProjectProcessed])

  // Effect para abrir modal automaticamente com base na URL
  useEffect(() => {
    const projectName = searchParams.get('project')
    
    if (projectName && !urlProjectProcessed && projects.length > 0) {
      // Busca case-insensitive por nome do projeto
      // Aceita tanto o nome exato quanto variações (ex: "Sistema de Cadastro de Fornecedores" -> "Cadastro de Fornecedores")
      const project = projects.find(p => {
        const projectTitle = p.title.toLowerCase()
        const searchName = projectName.toLowerCase()
        
        // Busca exata
        if (projectTitle === searchName) return true
        
        // Busca parcial - se o nome da URL contém o título do projeto ou vice-versa
        if (projectTitle.includes(searchName) || searchName.includes(projectTitle)) return true
        
        // Busca por palavras-chave principais
        const projectWords = projectTitle.split(' ').filter(word => word.length > 2)
        const searchWords = searchName.split(' ').filter(word => word.length > 2)
        const matchingWords = projectWords.filter(word => 
          searchWords.some(searchWord => searchWord.includes(word) || word.includes(searchWord))
        )
        
        // Se pelo menos 2 palavras principais coincidem, considera um match
        return matchingWords.length >= 2
      })
      
      if (project) {
        setUrlProjectProcessed(true)
        setSelectedProject(project)
        setIsModalOpen(true)
        
        // Adiciona estado ao histórico para o modal aberto via URL
        window.history.replaceState({ modalOpen: true }, '', '')
        
        // Remove o parâmetro da URL imediatamente após abrir
        setTimeout(() => {
          navigate(location.pathname, { replace: true })
        }, 100)
      }
    }
    
    // Reset quando não há parâmetro de projeto na URL
    if (!projectName) {
      setUrlProjectProcessed(false)
    }
  }, [searchParams, projects, urlProjectProcessed, navigate, location.pathname])

  return (
    <div className="min-h-screen pt-24">
      <div className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-12">
        <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meus <span className="gradient-text">Projetos</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos destacados
          </p>
        </motion.div>     

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="group overflow-hidden h-full cursor-pointer" onClick={() => openProjectModalWithTracking(project)} role="button" aria-label={`Ver detalhes do projeto ${project.title}`} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openProjectModalWithTracking(project); } }}>
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center cursor-pointer relative"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Se tem vídeo, abre o vídeo; senão, abre o modal
                        if (project.videoUrl) {
                          setCurrentVideo(project.videoUrl)
                          triggerEvent(`project_video_play_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                        } else {
                          openProjectModalWithTracking(project)
                        }
                      }}
                      role="button"
                      aria-label={project.videoUrl ? `Reproduzir vídeo do projeto ${project.title}` : `Ver imagem do projeto ${project.title}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault()
                          e.stopPropagation()
                          if (project.videoUrl) {
                            setCurrentVideo(project.videoUrl)
                            triggerEvent(`project_video_play_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                          } else {
                            openProjectModalWithTracking(project)
                          }
                        }
                      }}
                    >
                      {/* Tentar carregar a imagem, fallback para gradiente */}
                      <img
                        src={`/images/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.classList.add('image-error-hidden')
                        }}
                      />
                      
                      {/* Play button overlay se houver vídeo */}
                      {project.videoUrl && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                      )}
                      
                     
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full">
                          Destaque
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs text-purple-400 font-medium uppercase tracking-wide">
                        {categories.find(cat => cat.id === project.category)?.label}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
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
                          aria-label={`Ver demonstração do projeto ${project.title}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            triggerEvent(`project_demo_click_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                          }}
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
                          aria-label={`Ver código fonte do projeto ${project.title} no GitHub`}
                          onClick={(e) => {
                            e.stopPropagation()
                            triggerEvent(`project_github_click_${project.title.toLowerCase().replace(/\s+/g, '_')}`)
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-gray-400 text-lg mb-4">
              Nenhum projeto encontrado para os filtros selecionados
            </div>
            <Button
              variant="ghost"
              onClick={() => {
                setSelectedCategory('all')
                setSearchTerm('')
                triggerEvent('projects_clear_filters')
              }}
            >
              Limpar Filtros
            </Button>
          </motion.div>
        )}
        </div>
      </div>

      {/* Sandbox Projects Section */}
      <section className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30 mb-6">
              <Play className="w-4 h-4" />
              <span>Projetos Experimentais</span>
            </div>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
              Sandbox & <span className="gradient-text">Experimentos</span>
            </h2>
            <p className="text-gray-400 text-lg xl:text-xl max-w-3xl mx-auto">
              Projetos experimentais e protótipos criados para explorar novas tecnologias e conceitos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sandboxProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden h-full hover:transform hover:scale-105 transition-all duration-300 cursor-pointer" onClick={() => openSandboxModal(project)}>
                  {/* Project Header */}
                  <div className="relative overflow-hidden h-48">
                    <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-amber-500/20 flex items-center justify-center relative">
                      <img
                        src={`/images/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.classList.add('image-error-hidden')
                          e.target.nextSibling.classList.add('image-error-fallback')
                        }}
                      />
                      {/* Fallback with project icon */}
                      <div className="w-full h-full bg-gradient-to-br from-green-500/30 to-amber-500/30 flex items-center justify-center text-white text-6xl font-bold hidden">
                        🦕
                      </div>
                      
                      {/* Sandbox Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full">
                          <Play className="w-3 h-3" />
                          <span>Sandbox</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-xs text-green-400 font-medium uppercase tracking-wide">
                        Projeto Experimental
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-green-500/10 text-green-300 rounded text-xs border border-green-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-green-500/10 text-green-300 rounded text-xs border border-green-500/30">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Features Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-2">🚀 Principais Features:</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-green-400 text-xs">+{project.features.length - 3} mais features...</li>
                        )}
                      </ul>
                    </div>

                    {/* GitHub Embed Style Info */}
                    <div className="mb-6 p-3 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex items-center space-x-2 mb-2">
                        <Github className="w-4 h-4 text-gray-400" />
                        <span className="text-xs text-gray-400 font-medium">Repository Info</span>
                      </div>
                      <div className="text-xs text-gray-300">
                        <div className="flex justify-between items-center mb-1">
                          <span>Status:</span>
                          <span className="text-green-400">🟢 Active</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Deploy:</span>
                          <span className="text-blue-400">📦 Vercel</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3" onClick={(e) => e.stopPropagation()}>
                      <Button 
                        variant="secondary" 
                        size="sm"
                        href={project.liveUrl}
                        className="flex-1 group border-green-500/30 hover:bg-green-500/20"
                        onClick={() => triggerEvent(`sandbox_live_${project.id}`)}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </span>
                      </Button>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        href={project.githubUrl}
                        className="flex items-center justify-center hover:bg-white/10"
                        onClick={() => triggerEvent(`sandbox_github_${project.id}`)}
                      >
                        <Github className="w-4 h-4" />
                      </Button>

                      {project.vercelUrl && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          href={project.vercelUrl}
                          className="flex items-center justify-center hover:bg-blue-500/20 text-blue-400"
                          onClick={() => triggerEvent(`sandbox_vercel_${project.id}`)}
                        >
                          <span className="text-xs font-bold">▲</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-4 lg:px-8 xl:px-16 2xl:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Gostou do que viu?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Vamos trabalhar juntos no seu próximo projeto e criar algo incrível
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg"
                  onClick={() => {
                    navigate('/contact')
                    triggerEvent('projects_cta_contact')
                  }}
                >
                  Iniciar Projeto
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  href="https://github.com/Oldp1e"
                  onClick={() => triggerEvent('projects_cta_github')}
                >
                  Ver Mais no GitHub
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* YouTube Player Modal */}
      {currentVideo && (
        <YouTubePlayer 
          videoUrl={currentVideo} 
          onClose={() => setCurrentVideo(null)} 
        />
      )}

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModalWithNavigation}
      />

      {/* Sandbox Project Modal */}
      <SandboxModal 
        project={selectedSandboxProject}
        isOpen={isSandboxModalOpen}
        onClose={closeSandboxModal}
      />
    </div>
  )
}

export default Projects
