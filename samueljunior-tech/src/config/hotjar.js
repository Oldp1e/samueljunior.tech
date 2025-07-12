// Configurações do Hotjar
// Para hospedagem tradicional (cPanel) - Configuração fixa em produção
const isProduction = import.meta.env.PROD

export const HOTJAR_CONFIG = {
  // Em produção usa valores fixos, em desenvolvimento usa .env
  SITE_ID: isProduction 
    ? '6462053'  // Seu ID real para produção (fixo)
    : (import.meta.env.VITE_HOTJAR_SITE_ID || '6462053'),
  VERSION: 6,  // Versão fixa
  DEBUG: !isProduction  // Debug apenas em desenvolvimento
}

// Verificar se as configurações estão definidas
export const isHotjarConfigured = () => {
  return HOTJAR_CONFIG.SITE_ID && 
         HOTJAR_CONFIG.SITE_ID !== 'YOUR_HOTJAR_SITE_ID' &&
         HOTJAR_CONFIG.VERSION
}

// Log para verificar a configuração atual
if (HOTJAR_CONFIG.DEBUG) {
  console.log('🔧 Hotjar Config (Development):', HOTJAR_CONFIG)
} else {
  console.log('🚀 Hotjar Config (Production):', {
    siteId: HOTJAR_CONFIG.SITE_ID,
    version: HOTJAR_CONFIG.VERSION,
    environment: 'production'
  })
}
