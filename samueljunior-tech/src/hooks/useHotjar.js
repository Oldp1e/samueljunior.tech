import { useEffect } from 'react'

const useHotjar = (siteId, hotjarVersion, debug = false) => {
  useEffect(() => {
    // Verifica se o Hotjar já foi inicializado
    if (window.hj) return
    
    // Verifica se o usuário está em localhost/desenvolvimento para evitar tracking desnecessário
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname.includes('dev')
    
    // Só inicializa o Hotjar em produção, a menos que DEBUG esteja ativo
    if (!debug && isLocalhost) {
      console.log('Hotjar desabilitado em ambiente de desenvolvimento')
      return
    }
    
    // Inicializa o Hotjar apenas uma vez
    if (siteId && hotjarVersion && siteId !== 'YOUR_HOTJAR_SITE_ID') {
      try {
        // Carrega o script do Hotjar manualmente com configurações de privacidade
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={
            hjid:siteId,
            hjsv:hotjarVersion,
            // Configurações de privacidade
            hjCookieSameSite: 'Strict',
            hjSecureCookies: true
          };
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          // Adiciona atributos de privacidade ao script
          r.setAttribute('data-privacy', 'analytics');
          r.setAttribute('crossorigin', 'anonymous');
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        
        if (debug) {
          console.log('Hotjar initialized with Site ID:', siteId)
        }
      } catch (error) {
        console.warn('Erro ao inicializar Hotjar:', error)
      }
    }
  }, [siteId, hotjarVersion, debug])

  // Funções auxiliares para usar o Hotjar
  const identifyUser = (userId, userAttributes = {}) => {
    try {
      if (window.hj) {
        window.hj('identify', userId, userAttributes)
      }
    } catch (error) {
      if (debug) console.warn('Erro ao identificar usuário no Hotjar:', error)
    }
  }

  const triggerEvent = (eventName) => {
    try {
      if (window.hj) {
        window.hj('event', eventName)
      }
    } catch (error) {
      if (debug) console.warn('Erro ao disparar evento no Hotjar:', error)
    }
  }

  const addTags = (tags) => {
    try {
      if (window.hj) {
        if (Array.isArray(tags)) {
          tags.forEach(tag => window.hj('tag', tag))
        } else {
          window.hj('tag', tags)
        }
      }
    } catch (error) {
      if (debug) console.warn('Erro ao adicionar tags no Hotjar:', error)
    }
  }

  return {
    identifyUser,
    triggerEvent,
    addTags
  }
}

export default useHotjar
