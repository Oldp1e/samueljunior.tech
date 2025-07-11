import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, MessageSquare } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const projectTypes = [
    'Desenvolvimento Web',
    'Desenvolvimento de Jogos',
    'Aplicativo Mobile',
    'UI/UX Design',
    'Consultoria',
    'Outro'
  ]

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'contato@samueljunior.tech',
      action: 'mailto:contato@samueljunior.tech'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      description: '+55 (11) 99999-9999',
      action: 'https://wa.me/5511999999999'
    },
    {
      icon: MapPin,
      title: 'Localização',
      description: 'São Paulo, Brasil',
      action: null
    },
    {
      icon: Clock,
      title: 'Horário',
      description: 'Seg - Sex: 9h às 18h',
      action: null
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulação de envio (aqui você integraria com sua API)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto e transformar suas ideias em realidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Envie uma Mensagem</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome e Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Tipo de Projeto */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Tipo de Projeto
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Selecione um tipo</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-800">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Assunto */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Assunto da sua mensagem"
                  />
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Conte-me mais sobre seu projeto..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group"
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Enviar Mensagem</span>
                    </span>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                        : 'bg-red-500/20 border border-red-500/30 text-red-400'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span className="text-sm">
                      {submitStatus === 'success'
                        ? 'Mensagem enviada com sucesso! Retornarei em breve.'
                        : 'Erro ao enviar mensagem. Tente novamente.'
                      }
                    </span>
                  </motion.div>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h2>
              <p className="text-gray-400 mb-8">
                Prefere um contato mais direto? Use uma das opções abaixo para entrar em contato comigo.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className={`flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 ${
                        info.action ? 'hover:bg-white/5 cursor-pointer' : ''
                      }`}
                      onClick={() => info.action && window.open(info.action)}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Perguntas Frequentes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">
                    Qual o tempo médio de resposta?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Normalmente respondo em até 24 horas durante dias úteis.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    Fazem orçamentos gratuitos?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sim! A análise inicial e orçamento são sempre gratuitos.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    Trabalham com projetos internacionais?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Absolutamente! Temos experiência com clientes globais.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

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
              Pronto para começar?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Vamos marcar uma conversa para discutir seu projeto em detalhes
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                href="https://calendly.com/samueljunior"
                className="group"
              >
                <span className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Agendar Reunião</span>
                </span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://wa.me/5511999999999"
              >
                WhatsApp
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
