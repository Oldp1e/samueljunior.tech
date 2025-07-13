import { memo, useEffect } from 'react'

// Componente para preload de recursos críticos
const ResourcePreloader = memo(() => {
  useEffect(() => {
    // Preload crítico de imagens LCP (Largest Contentful Paint)
    const criticalImages = [
      '/images/samuel-avatar.jpeg',
      '/images/card-preview.png'
    ]
    
    criticalImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = 'high'
      document.head.appendChild(link)
    })

    // Preload de recursos importantes com prioridade
    const importantResources = [
      { href: 'https://static.hotjar.com', rel: 'preconnect' },
      { href: 'https://www.google-analytics.com', rel: 'preconnect' }
    ]

    importantResources.forEach(({ href, rel }) => {
      const link = document.createElement('link')
      link.rel = rel
      link.href = href
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Hint de resource para melhorar cache
    if ('serviceWorker' in navigator) {
      // Preparar service worker para cache em futuras versões
      console.log('Service Worker support detected')
    }
  }, [])

  return (
    <>
      {/* Preload de imagens críticas */}
      <link rel="preload" as="image" href="/images/samuel-avatar.jpeg" fetchPriority="high" />
      <link rel="preload" as="image" href="/images/card-preview.png" fetchPriority="high" />
      
      {/* Preconnect para recursos externos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://api.github.com" />
      
      {/* DNS Prefetch para melhor performance */}
      <link rel="dns-prefetch" href="//www.youtube.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
      
      {/* Preload de recursos críticos do Hotjar apenas se necessário */}
      {process.env.NODE_ENV === 'production' && (
        <link rel="dns-prefetch" href="//static.hotjar.com" />
      )}
    </>
  )
})

ResourcePreloader.displayName = 'ResourcePreloader'

export default ResourcePreloader
