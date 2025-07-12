import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Filter, Search } from 'lucide-react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import YouTubePlayer from '../components/YouTubePlayer'
import ProjectModal from '../components/ProjectModal'
import useHotjar from '../hooks/useHotjar'
import { HOTJAR_CONFIG } from '../config/hotjar'
import { projects, categories, getFeaturedProjects, getProjectsByCategory } from '../data/projects'
import { useProjectModal } from '../hooks/useProjectModal'

const Projects = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentVideo, setCurrentVideo] = useState(null)
  const [urlProjectProcessed, setUrlProjectProcessed] = useState(false)

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
                <Card className="group overflow-hidden h-full cursor-pointer" onClick={() => openProjectModalWithTracking(project)}>
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
                    >
                      {/* Tentar carregar a imagem, fallback para gradiente */}
                      <img
                        src={`/images/${project.image}`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none'
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
      </div>
      
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
    </div>
  )
}

export default Projects
