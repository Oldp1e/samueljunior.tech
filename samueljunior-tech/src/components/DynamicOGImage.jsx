import { useEffect } from 'react'

const DynamicOGImage = ({ 
  title = "Samuel Junior", 
  subtitle = "Desenvolvedor Full Stack",
  technologies = "React • Node.js • PHP"
}) => {
  
  useEffect(() => {
    // Função para gerar uma imagem OG dinamicamente via Canvas
    const generateOGImage = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      // Configurar dimensões Open Graph
      canvas.width = 1200
      canvas.height = 630
      
      // Criar gradiente de fundo
      const gradient = ctx.createLinearGradient(0, 0, 1200, 630)
      gradient.addColorStop(0, '#0F0F23')
      gradient.addColorStop(0.5, '#1E1B4B')
      gradient.addColorStop(1, '#312E81')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 1200, 630)
      
      // Adicionar padrão de fundo sutil
      ctx.fillStyle = 'rgba(139, 92, 246, 0.1)'
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * 1200
        const y = Math.random() * 630
        const size = Math.random() * 3
        ctx.fillRect(x, y, size, size)
      }
      
      // Configurar texto
      ctx.textAlign = 'center'
      ctx.fillStyle = '#FFFFFF'
      
      // Título principal
      ctx.font = 'bold 72px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      ctx.fillText(title, 600, 200)
      
      // Subtítulo
      ctx.font = '48px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      ctx.fillStyle = '#C084FC'
      ctx.fillText(subtitle, 600, 280)
      
      // Tecnologias
      ctx.font = '36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      ctx.fillStyle = '#A855F7'
      ctx.fillText(technologies, 600, 380)
      
      // URL do site
      ctx.font = '32px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      ctx.fillStyle = '#9CA3AF'
      ctx.fillText('samueljunior.tech', 600, 480)
      
      // Ícone de código (simulado)
      ctx.fillStyle = '#8B5CF6'
      ctx.fillRect(100, 100, 60, 60)
      ctx.fillStyle = '#FFFFFF'
      ctx.font = '40px monospace'
      ctx.fillText('</>', 130, 140)
      
      // Converter para blob e criar URL
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        
        // Atualizar meta tags com a imagem gerada
        const ogImage = document.querySelector('meta[property="og:image"]')
        const twitterImage = document.querySelector('meta[name="twitter:image"]')
        
        if (ogImage) ogImage.setAttribute('content', url)
        if (twitterImage) twitterImage.setAttribute('content', url)
        
        console.log('🎨 Imagem Open Graph gerada dinamicamente')
      }, 'image/png', 0.9)
    }
    
    // Só gerar se não existir a imagem estática
    const img = new Image()
    img.onload = () => {
      console.log('✅ Imagem Open Graph estática encontrada')
    }
    img.onerror = () => {
      console.log('⚠️ Imagem estática não encontrada, gerando dinamicamente...')
      generateOGImage()
    }
    img.src = '/images/card-preview.png'
    
  }, [title, subtitle, technologies])

  return null // Componente não visual
}

export default DynamicOGImage
