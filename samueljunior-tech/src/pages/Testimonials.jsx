import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Linkedin, Star, ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(0)

  const categories = [
    { id: 'all', label: 'Todos', count: 6 },
    { id: 'colleague', label: 'Colegas', count: 4 },
    { id: 'manager', label: 'Gestores', count: 2 },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Michael Fernandes',
      position: 'Desenvolvedor de Software na GTPlan',
      company: 'Javascript | PHP | SQL',
      category: 'colleague',
      rating: 5,
      text: 'Trabalhei com o Samuel durante 3 anos e afirmo que ele é um excelente profissional. Ele tem uma postura colaborativa, está sempre disposto a ajudar, além de enxergar bem o trabalho em equipe. Ele prioriza o desenvolvimento de códigos simples e claros, sempre pensando na escalabilidade.',
      keywords: ['Excelente Profissional', 'Postura Colaborativa', 'Escalabilidade'],
      avatar: '/images/michael-fernandes.jpeg',
      linkedinUrl: '#',
      date: 'julho de 2025'
    },
    {
      id: 2,
      name: 'Steffany Candalaft',
      position: 'Developer',
      company: 'GTPlan',
      category: 'colleague',
      rating: 5,
      text: 'Trabalhei com o Samuel por alguns anos e posso dizer com tranquilidade que ele é um profissional excelente. Ele sabe bem de onde organizar tarefas com extrema qualidade e foco sempre sendo muito responsável! Trabalhar com o Samuca sempre foi muito leve e tranquilo, nunca tive problemas em relação a nada e toda vez que precisei de ajuda ele estava lá para explicar, trocar códigos e auxiliar no que fosse necessário.',
      keywords: ['Profissional Excelente', 'Extrema Qualidade', 'Muito Responsável'],
      avatar: '/images/stefanny.jpeg',
      linkedinUrl: '#',
      date: 'julho de 2025'
    },
    {
      id: 3,
      name: 'Paloma do Espírito Santo Jesus',
      position: 'Analista de Negócios | Analista de Requisitos |Product Owner',
      company: 'GTPlan',
      category: 'colleague',
      rating: 5,
      text: 'Trabalhei com Samuel por aproximadamente três meses em um projeto de modernização de um módulo importante de um sistema de BH CONS tinha especificações altas, e a documentação da limpeza. Samuel se destacou pela sua competência, assertividade e agilidade. Ele estimava as tarefas com precisão e as cumpria com dedicação. Durante a fase final de homologação, ele realizou os ajustes solicitados em tempo real, o que foi fundamental para a entrega bem-sucedida do projeto. Foi um prazer trabalhar com um profissional tão comprometido e eficiente.',
      keywords: ['Competência', 'Assertividade', 'Agilidade'],
      avatar: '/images/paloma.jpeg',
      linkedinUrl: '#',
      date: 'julho de 2024'
    },
    {
      id: 4,
      name: 'Matheus Valezin',
      position: 'UI & UX Designer - Criando Soluções Digitais Modernas e Intuitivas para Problemas Reais',
      company: 'Freelancer',
      category: 'colleague',
      rating: 5,
      text: 'Sem dúvidas é um profissional que tem muita bagagem em programação. Desde que o conheci na escola em 2015 ele era o primeiro da sala em terminar os trabalhos com muita perfeição e sempre fazia a mais do que era pedido.',
      keywords: ['Muita Bagagem', 'Perfeição', 'Sempre Fazia Mais'],
      avatar: '/images/valezin.jpeg',
      linkedinUrl: '#',
      date: 'abril de 2022'
    },
    {
      id: 5,
      name: 'Lucas Pereira',
      position: 'Desenvolvedor Frontend | React | Typescript | Javascript',
      company: 'Freelancer',
      category: 'colleague',
      rating: 5,
      text: 'Conheço o Samuel desde o período do ensino médio até a faculdade e digo com certeza que sempre foi uma pessoa muito competente, performando muito bem tanto em trabalhos individuais quanto em trabalhos em equipe! Posso dizer com segurança que é um ótimo Analista e Desenvolvedor!',
      keywords: ['Muito Competente', 'Performance', 'Ótimo Analista'],
      avatar: '/images/lucas-pereira.jpeg',
      linkedinUrl: '#',
      date: 'agosto de 2021'
    },
    {
      id: 6,
      name: 'Felipe Lucate',
      position: 'Site Reliability Engineer | DevOps | Senior Support & Systems Engineer | Atlassian Administrator & Consultant',
      company: 'Freelancer',
      category: 'manager',
      rating: 5,
      text: 'Tive a oportunidade de trabalhar com o Samuel em vários projetos na faculdade de Jogos Digitais e estou certo em dizer que o Samuel possui uma contribuição profissional, bastante visível e com bons frutos para contribuir na equipe da melhor forma possível. Me gosta muito de aprender coisas novas e está sempre buscando soluções diferentes, criando desafios interessantes para aplicações de qualidades mais evidentes no Samuel. Fora do contexto profissional, o Samuel também é ágil, sempre interessado, comunicativo e solicito. Tenho certeza de que suas qualidades como pessoa e profissional serão uma ótima contribuição para qualquer projeto ou empresa.',
      keywords: ['Contribuição Profissional', 'Bons Frutos', 'Sempre Interessado'],
      avatar: '/images/felipe-lucate.jpeg',
      linkedinUrl: '#',
      date: 'abril de 2021'
    }
  ]

  const filteredTestimonials = testimonials.filter(testimonial => {
    return selectedCategory === 'all' || testimonial.category === selectedCategory
  })

  const testimonialsPerPage = 4
  const totalPages = Math.ceil(filteredTestimonials.length / testimonialsPerPage)
  const currentTestimonials = filteredTestimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // Reset pagination when category changes
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    setCurrentPage(0)
  }

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
              <span className="gradient-text">Depoimentos</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              O que clientes, colegas e gestores dizem sobre o meu trabalho
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">6+</div>
              <div className="text-gray-400">Depoimentos</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
                <Star className="w-8 h-8 text-yellow-400 fill-current mr-1" />
                5.0
              </div>
              <div className="text-gray-400">Avaliação Média</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Satisfação</div>
            </Card>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <Card className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <span className="text-white font-medium">Filtrar por:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCategoryChange(category.id)}
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
            </Card>
          </motion.div>

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            >
              {currentTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                >
                  <Card className="group h-full hover:scale-105 transition-transform duration-300">
                    <div className="p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-purple-400 opacity-60" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-300 mb-6 leading-relaxed flex-grow text-sm">
                        "{testimonial.text}"
                      </p>

                      {/* Keywords */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {testimonial.keywords.map((keyword, keyIndex) => (
                          <span
                            key={keyIndex}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="mt-auto">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3 flex-1">
                            <div className="relative w-12 h-12 flex-shrink-0">
                              <img
                                src={testimonial.avatar}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                                onError={(e) => {
                                  // Fallback para iniciais se a imagem não carregar
                                  e.target.style.display = 'none'
                                  e.target.nextSibling.style.display = 'flex'
                                }}
                              />
                              <div 
                                className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full hidden items-center justify-center text-white font-bold text-sm"
                              >
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-white font-semibold text-sm">
                                {testimonial.name}
                              </h4>
                              <p className="text-gray-400 text-xs leading-tight">
                                {testimonial.position}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {testimonial.company}
                              </p>
                              <p className="text-gray-500 text-xs italic mt-1">
                                {testimonial.date}
                              </p>
                            </div>
                          </div>
                          
                          <Button
                            variant="ghost"
                            size="sm"
                            href={testimonial.linkedinUrl}
                            className="p-2 flex-shrink-0"
                          >
                            <Linkedin className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-4 mb-12"
            >
              <Button
                variant="ghost"
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Anterior</span>
              </Button>

              <div className="flex items-center space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index
                        ? 'bg-purple-500'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className="flex items-center space-x-2"
              >
                <span>Próximo</span>
                <ChevronRight className="w-4 h-4" />
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
                Quer fazer parte dos próximos depoimentos?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Vamos trabalhar juntos e criar soluções incríveis que gerem resultados reais
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg"
                  href="/contact"
                >
                  Iniciar Projeto
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  href="https://linkedin.com/in/samuel-junior-dev"
                >
                  Conectar no LinkedIn
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
