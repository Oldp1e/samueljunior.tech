import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Globe, Star, Play } from 'lucide-react'
import { useState, useEffect } from 'react'
import Button from './ui/Button'
import YouTubePlayer from './YouTubePlayer'

const SandboxModal = ({ project, isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentVideo, setCurrentVideo] = useState(null)
  
  // Reset loading state quando o modal abre ou o projeto muda
  useEffect(() => {
    if (isOpen && project) {
      setIsLoading(true)
    }
  }, [isOpen, project])
  
  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-slate-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col">
              
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 px-3 py-1 bg-gradient-to-r from-green-400/20 to-emerald-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    <Star className="w-4 h-4" />
                    <span>Projeto Experimental</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
                
                {/* Left Panel - Project Info */}
                <div className="lg:w-1/3 xl:w-2/5 p-6 overflow-y-auto">
                  <div className="space-y-6">
                    
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Sobre o Projeto</h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Tecnologias</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-500/10 text-blue-300 rounded-lg text-sm border border-blue-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">🚀 Funcionalidades</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-300">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons - Desktop Only */}
                    <div className="pt-2 hidden lg:block">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Live Demo button */}
                        <button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="flex items-center justify-center p-3 hover:bg-white/10 rounded-lg transition-colors group"
                          title="Abrir Demo ao Vivo"
                        >
                          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                        
                        {/* GitHub button */}
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex items-center justify-center p-3 hover:bg-white/10 rounded-lg transition-colors group"
                          title="Ver no GitHub"
                        >
                          <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </button>
                        
                        {/* Video button - only if video exists */}
                        {project.videoUrl && (
                          <button
                            onClick={() => setCurrentVideo(project.videoUrl)}
                            className="flex items-center justify-center p-3 hover:bg-white/10 rounded-lg transition-colors group col-span-2"
                            title="Assistir Demonstração"
                          >
                            <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Mobile Action Buttons - Only show on mobile */}
                    <div className="lg:hidden pt-4 block">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Live Demo button */}
                        <button
                          onClick={() => window.open(project.liveUrl, '_blank')}
                          className="flex flex-col items-center justify-center p-4 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors mb-1" />
                          <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Demo</span>
                        </button>
                        
                        {/* GitHub button */}
                        <button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          className="flex flex-col items-center justify-center p-4 hover:bg-white/10 rounded-lg transition-colors group"
                        >
                          <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors mb-1" />
                          <span className="text-xs text-gray-400 group-hover:text-white transition-colors">GitHub</span>
                        </button>
                        
                        {/* Video button - spans full width if exists */}
                        {project.videoUrl && (
                          <button
                            onClick={() => setCurrentVideo(project.videoUrl)}
                            className="flex flex-col items-center justify-center p-4 hover:bg-white/10 rounded-lg transition-colors group col-span-2"
                          >
                            <Play className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors mb-1" />
                            <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Assistir Demonstração</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Theme */}
                    {project.theme && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3">🎨 Design System</h3>
                        <div className="space-y-2">
                          <p className="text-sm text-gray-300">
                            <span className="font-medium">Estilo:</span> {project.theme.style}
                          </p>
                          <div>
                            <span className="font-medium text-sm text-gray-300">Paleta de Cores:</span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {project.theme.colors.map((color, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs"
                                >
                                  {color}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Panel - Live Preview (Desktop Only) */}
                <div className="hidden lg:block lg:w-2/3 xl:w-3/5 border-l border-white/10 bg-white/5">
                  <div className="h-full flex flex-col">
                    <div className="p-4 border-b border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="flex-1 bg-white/10 rounded px-3 py-1 text-sm text-gray-300 font-mono">
                          {project.liveUrl}
                        </div>
                        <Button
                          href={project.liveUrl}
                          variant="ghost"
                          size="sm"
                          className="p-2"
                        >
                          ↗
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex-1 relative">
                      <iframe
                        src={project.liveUrl}
                        className="w-full h-full border-0"
                        title={`Preview de ${project.title}`}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                        onLoad={() => setIsLoading(false)}
                      />
                      
                      {/* Loading overlay - apenas quando está carregando */}
                      {isLoading && (
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 to-black/90 flex items-center justify-center">
                          <div className="text-white/80 text-center">
                            <div className="animate-spin w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full mx-auto mb-3"></div>
                            <p className="text-sm font-medium">Carregando preview...</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* YouTube Player */}
          {currentVideo && (
            <YouTubePlayer 
              videoUrl={currentVideo} 
              title={`Demonstração - ${project.title}`}
              onClose={() => setCurrentVideo(null)} 
            />
          )}
        </>
      )}
    </AnimatePresence>
  )
}

export default SandboxModal
