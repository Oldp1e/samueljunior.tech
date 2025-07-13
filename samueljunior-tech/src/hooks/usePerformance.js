import { useEffect, useState } from 'react'

// Hook para reduzir Cumulative Layout Shift (CLS)
export const useLayoutStability = () => {
  const [isImageLoaded, setIsImageLoaded] = useState({})
  const [fontLoaded, setFontLoaded] = useState(false)

  // Preload de imagens críticas para evitar layout shift
  const preloadImage = (src, priority = 'low') => {
    return new Promise((resolve, reject) => {
      if (isImageLoaded[src]) {
        resolve(src)
        return
      }

      const img = new Image()
      img.fetchPriority = priority
      img.onload = () => {
        setIsImageLoaded(prev => ({ ...prev, [src]: true }))
        resolve(src)
      }
      img.onerror = reject
      img.src = src
    })
  }

  // Verificar se as fontes estão carregadas
  useEffect(() => {
    const checkFonts = async () => {
      if ('fonts' in document) {
        try {
          await document.fonts.ready
          setFontLoaded(true)
        } catch (error) {
          console.warn('Font loading error:', error)
          // Fallback: considerar fonte carregada após timeout
          setTimeout(() => setFontLoaded(true), 1000)
        }
      } else {
        // Fallback para navegadores sem suporte
        setTimeout(() => setFontLoaded(true), 500)
      }
    }

    checkFonts()
  }, [])

  // Preload em lote de imagens críticas
  const preloadCriticalImages = async () => {
    const criticalImages = [
      '/images/samuel-avatar.jpeg',
      '/images/card-preview.png'
    ]

    try {
      await Promise.all(
        criticalImages.map(src => preloadImage(src, 'high'))
      )
    } catch (error) {
      console.warn('Error preloading critical images:', error)
    }
  }

  return {
    isImageLoaded,
    fontLoaded,
    preloadImage,
    preloadCriticalImages
  }
}

// Hook para observar Web Vitals
export const useWebVitals = () => {
  useEffect(() => {
    // Lazy load da biblioteca web-vitals apenas se necessário
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log, { reportAllChanges: true })
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      }).catch(() => {
        // Falha silenciosa se não conseguir carregar web-vitals
      })
    }
  }, [])
}

// Hook para reduzir execução de JavaScript
export const usePerformanceOptimization = () => {
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    // Usar requestIdleCallback para tarefas não críticas
    const scheduleIdleWork = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          setIsIdle(true)
        }, { timeout: 2000 })
      } else {
        // Fallback para navegadores sem suporte
        setTimeout(() => setIsIdle(true), 1000)
      }
    }

    scheduleIdleWork()
  }, [])

  return { isIdle }
}
