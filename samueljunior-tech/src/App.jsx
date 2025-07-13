import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect } from 'react'
import Layout from './components/layout/Layout'
import PageLoader from './components/PageLoader'
import ResourcePreloader from './components/ResourcePreloader'
import ScrollToTop from './components/ScrollToTop'
import HotjarEvents from './components/HotjarEvents'
import OpenGraphMeta from './components/OpenGraphMeta'
import DynamicOGImage from './components/DynamicOGImage'
import StructuredData from './components/StructuredData'
import { useAsyncStyles, preloadCriticalResources } from './utils/resourceLoader'
import './styles/critical.css'

// Lazy Loading das páginas para melhor performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const Curriculum = lazy(() => import('./pages/Curriculum'))
const NotFound = lazy(() => import('./pages/NotFound'))

import useHotjar from './hooks/useHotjar'
import { HOTJAR_CONFIG, isHotjarConfigured } from './config/hotjar'

function App() {
  const { loadStyles } = useAsyncStyles()

  // Carregar recursos de forma assíncrona
  useEffect(() => {
    // Preload recursos críticos
    preloadCriticalResources()
    
    // Carregar estilos não críticos após o primeiro render
    const timer = setTimeout(() => {
      loadStyles()
    }, 100)

    return () => clearTimeout(timer)
  }, [loadStyles])

  // Inicializar Hotjar
  const { triggerEvent, addTags } = useHotjar(
    HOTJAR_CONFIG.SITE_ID,
    HOTJAR_CONFIG.VERSION,
    HOTJAR_CONFIG.DEBUG
  )

  // Log para desenvolvimento
  if (HOTJAR_CONFIG.DEBUG && isHotjarConfigured()) {
    console.log('Hotjar está configurado e ativo')
  } else if (!isHotjarConfigured()) {
    console.warn('Hotjar não está configurado. Verifique as variáveis de ambiente.')
  }
  return (
    <Router>
      <ResourcePreloader />
      <ScrollToTop />
      <HotjarEvents />
      <OpenGraphMeta />
      <DynamicOGImage />
      <StructuredData />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App
