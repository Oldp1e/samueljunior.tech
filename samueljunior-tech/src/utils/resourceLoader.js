import { lazy } from 'react'

// Lazy loading do CSS não crítico
const loadNonCriticalCSS = () => {
  return import('../App.css')
}

// Hook para carregar estilos de forma assíncrona
export const useAsyncStyles = () => {
  const loadStyles = async () => {
    try {
      await loadNonCriticalCSS()
    } catch (error) {
      console.warn('Erro ao carregar estilos não críticos:', error)
    }
  }

  return { loadStyles }
}

// Preload de recursos críticos
export const preloadCriticalResources = () => {
  // Preload de fontes
  const linkFont = document.createElement('link')
  linkFont.rel = 'preload'
  linkFont.as = 'font'
  linkFont.type = 'font/woff2'
  linkFont.crossOrigin = 'anonymous'
  linkFont.href = '/fonts/inter-var.woff2'
  document.head.appendChild(linkFont)

  // Preload de imagens críticas
  const linkImage = document.createElement('link')
  linkImage.rel = 'preload'
  linkImage.as = 'image'
  linkImage.href = '/images/samuel-avatar.jpeg'
  document.head.appendChild(linkImage)
}

export default { useAsyncStyles, preloadCriticalResources }
