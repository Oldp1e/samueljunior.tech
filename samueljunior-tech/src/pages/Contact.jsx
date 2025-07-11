import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'samuellima06091999@gmail.com',
      action: 'mailto:samuellima06091999@gmail.com'
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      description: '+55 (19) 99158-0864',
      action: 'https://wa.me/5519991580864'
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
            Entre em <span className="gradient-text">Contato</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Vamos conversar sobre seu próximo projeto e transformar suas ideias em realidade
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h2>
              <p className="text-gray-400 mb-8">
                Entre em contato comigo através de uma das opções abaixo. Estou sempre disponível para discutir novos projetos e oportunidades.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                    Faz orçamentos gratuitos?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Sim! A análise inicial e orçamento são sempre gratuitos.
                  </p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">
                    Trabalha com projetos internacionais?
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Absolutamente! Tenho experiência com colaboradores globais.
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
                href="https://calendly.com/samuellima06091999/30min"
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
                href="https://wa.me/5519991580864"
                className="group"
              >
                <span className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </span>
              </Button>
            </div>
          </Card>
        </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
