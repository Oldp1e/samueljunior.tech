import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, Filter, Search } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import YouTubePlayer from '../components/YouTubePlayer'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [currentVideo, setCurrentVideo] = useState(null)

  const categories = [
    { id: 'all', label: 'Todos', count: 12 },
    { id: 'web', label: 'Web Apps', count: 5 },
    { id: 'game', label: 'Games', count: 4 },
    { id: 'mobile', label: 'Mobile', count: 3 }
  ]

  const projects = [
    {
      id: 1,
      title: 'Entity Strike',
      category: 'game',
      description: 'Jogo estilo Survivors onde o player deve sobreviver a hordas de inimigos.',
      image: 'store_capsule_header.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=wzA4JLpE3ts',
      technologies: ['Unity', 'C#', '2D'],
      liveUrl: 'https://store.steampowered.com/app/3685980/Entity_Strike/',
      liveUrlText: 'Steam', // Texto customizado para o botão
      githubUrl: 'https://github.com/Oldp1e/EntityStrike',
      featured: true
    },
    {
      id: 2,
      title: 'Easy Bid',
      category: 'web',
      description: 'Plataforma de cotações fáceis com prompts via IA para otimizar processos com sistema de controle.',
      image: 'login.png',
      videoUrl:  null,
      technologies: ['React', 'Node.js', 'AI'],
      liveUrl: null,     
      githubUrl: 'https://github.com/Oldp1e/easybid/',
      featured: true
    },
    {
      id: 3,
      title: 'Cadastro de Fornecedores',
      category: 'web',
      description: 'Fiz diversas aplicações, com fluxo interno de aprovações de usuarios e controle geral de UAC.',
      image: 'gt-app.png',
      videoUrl: null, // Sem vídeo
      technologies: ['Scriptcase', 'PHP', 'Javascript'],
      liveUrl: 'https://app.gtplan.net/uac222b_prereg_validate/uac222b_prereg_validate.php',
      liveUrlText: 'Visualizar',
      githubUrl: null,
      featured: false
    },
    {
      id: 4,
      title: 'Módulo Frequência Web',
      category: 'web',
      description: 'Modernização do sistema legado Gurhu para uma aplicação web intuitiva, focada em gestão de frequência, plantões e recursos humanos na área da saúde pública. Permite cadastro de feriados, registro de plantões, faltas, hora extra, adicional noturno, importação de arquivos e controle de frequência dos servidores das UBS, hospitais e UPAs, acessível de qualquer dispositivo.',
      image: 'tegra.png',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Substitua pela URL real
      technologies: ['Vue.js', 'Python', 'FastAPI', 'WebSocket'],
      liveUrl: 'https://security.com',
      // liveUrlText não definido, usará "Demo" como padrão
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 5,
      title: 'RPG Maker Plugin',
      category: 'game',
      description: 'Plugin para RPG Maker que adiciona sistema de combate avançado',
      image: 'rpg-plugin.jpg',
      videoUrl: null, // Sem vídeo
      technologies: ['JavaScript', 'RPG Maker', 'Plugin'],
      liveUrl: null,
      githubUrl: 'https://github.com',
      featured: false
    },
    {
      id: 6,
      title: 'Weather App',
      category: 'mobile',
      description: 'Aplicativo de clima com previsões detalhadas e interface moderna',
      image: 'weather-app.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Substitua pela URL real
      technologies: ['Flutter', 'Dart', 'OpenWeather API'],
      liveUrl: 'https://weather.com',
      liveUrlText: 'Ver App', // Texto customizado para o botão
      githubUrl: 'https://github.com',
      featured: false
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              {/* Category Filters */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/10 text-gray-300 hover:bg-white/20'
                      }`}
                    >
                      {category.label} ({category.count})
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
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
                <Card className="group overflow-hidden h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center cursor-pointer relative"
                      onClick={() => project.videoUrl && setCurrentVideo(project.videoUrl)}
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
                    <div className="flex space-x-3">
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
              <Button size="lg">
                Iniciar Projeto
              </Button>
              <Button variant="secondary" size="lg">
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
    </div>
  )
}

export default Projects
