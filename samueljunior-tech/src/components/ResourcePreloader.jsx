import { memo } from 'react'

// Componente para preload de recursos críticos
const ResourcePreloader = memo(() => {
  return (
    <>
      {/* Preload de imagens críticas */}
      <link rel="preload" as="image" href="/images/samuel-avatar.jpeg" />
      <link rel="preload" as="image" href="/images/card-preview.png" />
      
      {/* Preload de fontes */}
      <link 
        rel="preload" 
        as="font" 
        type="font/woff2" 
        href="/fonts/inter-var.woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Preconnect para recursos externos */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://api.github.com" />
      
      {/* DNS Prefetch para melhor performance */}
      <link rel="dns-prefetch" href="//www.youtube.com" />
      <link rel="dns-prefetch" href="//github.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
    </>
  )
})

ResourcePreloader.displayName = 'ResourcePreloader'

export default ResourcePreloader
