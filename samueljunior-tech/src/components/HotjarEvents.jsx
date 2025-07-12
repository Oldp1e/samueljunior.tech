import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useHotjar from '../hooks/useHotjar'
import { HOTJAR_CONFIG, isHotjarConfigured } from '../config/hotjar'

const HotjarEvents = () => {
  const location = useLocation()
  const { triggerEvent, addTags } = useHotjar(
    HOTJAR_CONFIG.SITE_ID,
    HOTJAR_CONFIG.VERSION,
    HOTJAR_CONFIG.DEBUG
  )

  useEffect(() => {
    if (!isHotjarConfigured()) return

    // Rastrear navegação de páginas
    const pageName = location.pathname.replace('/', '') || 'home'
    triggerEvent(`page_visit_${pageName}`)

    // Adicionar tags baseadas na página atual
    const pageTags = {
      '/': ['homepage', 'landing'],
      '/about': ['about', 'profile'],
      '/projects': ['portfolio', 'projects'],
      '/testimonials': ['testimonials', 'social-proof'],
      '/contact': ['contact', 'lead-generation'],
      '/curriculum': ['cv', 'resume']
    }

    const currentPageTags = pageTags[location.pathname] || ['page']
    addTags(currentPageTags)

    if (HOTJAR_CONFIG.DEBUG) {
      console.log(`Hotjar: Página visitada - ${pageName}`, currentPageTags)
    }
  }, [location.pathname, triggerEvent, addTags])

  return null // Este componente não renderiza nada
}

export default HotjarEvents
