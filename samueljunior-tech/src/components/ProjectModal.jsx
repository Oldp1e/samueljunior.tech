import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Tag, MessageCircle, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './ui/Button'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const navigate = useNavigate()
  
  // Função para extrair ID do YouTube da URL
  const getYouTubeId = (url) => {
    if (!url) return null
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }
  
  // Adiciona listener para tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Previne scroll do body quando modal está aberto
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  const handleBackdropClick = (e) => {
    // Só fecha se o clique foi no backdrop, não no conteúdo do modal
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              
              {/* Project badge */}
              {project.featured && (
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold rounded-full">
                    ⭐ Projeto Destaque
                  </span>
                </div>
              )}
              
              {/* Category badge */}
              <div className="absolute top-6 right-16">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
                  <Tag className="w-4 h-4 inline mr-2" />
                  {project.category === 'web' ? 'Web App' : 
                   project.category === 'game' ? 'Game' : 
                   project.category === 'mobile' ? 'Mobile' : project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                {project.title}
              </motion.h1>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-6"
              >
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Video Section (se existir) - Logo após o header */}
              {project.videoUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">🎥 Demonstração</h3>
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 border border-white/10">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(project.videoUrl)}?rel=0&modestbranding=1`}
                      title={`${project.title} - Demonstração`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              )}

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="prose prose-invert max-w-none mb-8"
              >
                {/* Renderizar o conteúdo detalhado do projeto */}
                <div className="text-gray-300 text-lg leading-relaxed">
                  {project.detailedDescription ? (
                    <div dangerouslySetInnerHTML={{ __html: project.detailedDescription }} />
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
              </motion.div>

              {/* Features (se existir) */}
              {project.features && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">🚀 Principais Funcionalidades</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Challenges (se existir) */}
              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">💡 Desafios e Soluções</h3>
                  <div className="text-gray-300 leading-relaxed">
                    {project.challenges}
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    size="lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {project.liveUrlText || 'Ver Demo'}
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    variant="secondary"
                    size="lg"
                    className="flex-1"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Ver Código
                  </Button>
                )}
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/20"
              >
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Gostou deste projeto? 🚀
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Vamos conversar sobre como posso ajudar você a criar algo incrível também!
                  </p>
                  <Button
                    onClick={() => {
                      onClose()
                      navigate('/contact')
                    }}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                    size="lg"
                  >                   
                    Entre em Contato                    
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
