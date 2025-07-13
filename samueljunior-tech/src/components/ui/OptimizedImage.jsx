import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackClassName = '',
  loading = 'lazy',
  priority = false,
  onLoad,
  onError,
  ...props 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleLoad = useCallback((e) => {
    setImageLoaded(true)
    if (onLoad) onLoad(e)
  }, [onLoad])

  const handleError = useCallback((e) => {
    setImageError(true)
    setImageLoaded(true) // Para parar o loading
    if (onError) onError(e)
  }, [onError])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!imageLoaded && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center ${fallbackClassName}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: imageLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
        </motion.div>
      )}

      {/* Error fallback */}
      {imageError && (
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center ${fallbackClassName}`}>
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-xs">Imagem não disponível</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        onError={handleError}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          // Previne layout shift reservando espaço
          minHeight: 'inherit',
          aspectRatio: 'inherit'
        }}
        {...props}
      />
    </div>
  )
}

export default OptimizedImage
