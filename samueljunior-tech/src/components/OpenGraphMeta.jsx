import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const OpenGraphMeta = () => {
  const location = useLocation()

  // Configurações para cada página
  const pageConfigs = {
    '/': {
      title: 'Samuel Junior - Desenvolvedor Full Stack | React, Node.js, PHP',
      description: 'Desenvolvedor Full Stack especializado em React, Node.js e PHP. Criando soluções digitais modernas e escaláveis. Veja meu portfólio e depoimentos de clientes.',
      image: '/images/card-preview.png',
      url: 'https://samueljunior.tech/'
    },
    '/about': {
      title: 'Sobre Mim - Samuel Junior | Desenvolvedor Full Stack',
      description: 'Conheça minha trajetória profissional, habilidades técnicas e experiências como desenvolvedor full stack. Especialista em React, Node.js e PHP.',
      image: '/images/card-preview.png',
      url: 'https://samueljunior.tech/about'
    },
    '/projects': {
      title: 'Projetos - Samuel Junior | Portfólio de Desenvolvimento',
      description: 'Explore meus projetos de desenvolvimento web e mobile. Aplicações React, sistemas PHP, APIs Node.js e soluções completas para empresas.',
      image: '/images/card-preview.png',
      url: 'https://samueljunior.tech/projects'
    },
    '/testimonials': {
      title: 'Depoimentos - Samuel Junior | O que dizem sobre meu trabalho',
      description: 'Veja avaliações reais de clientes, colegas e gestores sobre meu trabalho como desenvolvedor. 100% de satisfação em projetos entregues.',
      image: '/images/card-preview.png',
      url: 'https://samueljunior.tech/testimonials'
    },
    '/contact': {
      title: 'Contato - Samuel Junior | Vamos trabalhar juntos',
      description: 'Entre em contato para discutir seu próximo projeto. Desenvolvedor full stack disponível para freelances e projetos corporativos.',
      image: '/images/card-preview.png',
      url: 'https://samueljunior.tech/contact'
    },
    '/curriculum': {
      title: 'Currículo - Samuel Junior | Experiência Profissional',
      description: 'Baixe meu currículo completo e veja minha experiência profissional, formação acadêmica e principais projetos desenvolvidos.',
      image: '/images/card-preview.png',
      url: 'https://samueljunior.tech/curriculum'
    }
  }

  useEffect(() => {
    const currentConfig = pageConfigs[location.pathname] || pageConfigs['/']
    
    // Atualizar title da página
    document.title = currentConfig.title

    // Atualizar meta description
    updateMetaTag('name', 'description', currentConfig.description)
    
    // Atualizar Open Graph tags
    updateMetaTag('property', 'og:title', currentConfig.title)
    updateMetaTag('property', 'og:description', currentConfig.description)
    updateMetaTag('property', 'og:image', `https://samueljunior.tech${currentConfig.image}`)
    updateMetaTag('property', 'og:url', currentConfig.url)
    
    // Atualizar Twitter Card tags
    updateMetaTag('name', 'twitter:title', currentConfig.title)
    updateMetaTag('name', 'twitter:description', currentConfig.description)
    updateMetaTag('name', 'twitter:image', `https://samueljunior.tech${currentConfig.image}`)
    updateMetaTag('name', 'twitter:url', currentConfig.url)
    
    // Atualizar canonical URL
    updateCanonicalUrl(currentConfig.url)
    
  }, [location.pathname])

  const updateMetaTag = (attribute, value, content) => {
    let element = document.querySelector(`meta[${attribute}="${value}"]`)
    if (element) {
      element.setAttribute('content', content)
    } else {
      element = document.createElement('meta')
      element.setAttribute(attribute, value)
      element.setAttribute('content', content)
      document.head.appendChild(element)
    }
  }

  const updateCanonicalUrl = (url) => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', url)
    } else {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      canonical.setAttribute('href', url)
      document.head.appendChild(canonical)
    }
  }

  return null // Este componente não renderiza nada
}

export default OpenGraphMeta
