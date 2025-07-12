import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const StructuredData = () => {
  const location = useLocation()

  useEffect(() => {
    // Dados estruturados base para o site
    const baseStructuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Samuel Junior",
      "jobTitle": "Desenvolvedor Full Stack",
      "description": "Desenvolvedor Full Stack especializado em React, Node.js e PHP",
      "url": "https://samueljunior.tech",
      "sameAs": [
        "https://linkedin.com/in/samuel-lima-analista-ti/",
        "https://github.com/samuel-junior"
      ],
      "knowsAbout": [
        "React",
        "Node.js", 
        "PHP",
        "JavaScript",
        "TypeScript",
        "Full Stack Development",
        "Web Development"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Freelancer"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "professional",
        "url": "https://samueljunior.tech/contact"
      }
    }

    // Dados específicos por página
    const pageStructuredData = {
      '/': {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Samuel Junior - Desenvolvedor Full Stack",
        "url": "https://samueljunior.tech",
        "description": "Portfólio oficial de Samuel Junior, desenvolvedor full stack especializado em React, Node.js e PHP",
        "author": baseStructuredData,
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://samueljunior.tech/projects?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      '/projects': {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Projetos - Samuel Junior",
        "description": "Portfólio de projetos desenvolvidos por Samuel Junior",
        "url": "https://samueljunior.tech/projects",
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": "10+",
          "itemListElement": [
            {
              "@type": "SoftwareApplication",
              "name": "Aplicações React",
              "applicationCategory": "Web Application"
            },
            {
              "@type": "SoftwareApplication", 
              "name": "APIs Node.js",
              "applicationCategory": "API"
            },
            {
              "@type": "SoftwareApplication",
              "name": "Sistemas PHP",
              "applicationCategory": "Web Application"
            }
          ]
        }
      },
      '/testimonials': {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Depoimentos - Samuel Junior", 
        "description": "Avaliações e depoimentos reais de clientes sobre o trabalho de Samuel Junior",
        "url": "https://samueljunior.tech/testimonials",
        "mainEntity": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "ratingCount": "6",
          "itemReviewed": baseStructuredData
        }
      },
      '/contact': {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contato - Samuel Junior",
        "description": "Entre em contato com Samuel Junior para projetos de desenvolvimento",
        "url": "https://samueljunior.tech/contact",
        "mainEntity": baseStructuredData
      }
    }

    // Selecionar dados para a página atual
    const currentData = pageStructuredData[location.pathname] || baseStructuredData

    // Remover script anterior se existir
    const existingScript = document.getElementById('structured-data')
    if (existingScript) {
      existingScript.remove()
    }

    // Criar novo script com dados estruturados
    const script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(currentData, null, 2)
    document.head.appendChild(script)

    console.log('📊 Dados estruturados atualizados para:', location.pathname)

  }, [location.pathname])

  return null
}

export default StructuredData
