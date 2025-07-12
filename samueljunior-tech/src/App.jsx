import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/layout/Layout'
import ScrollToTop from './components/ScrollToTop'
import HotjarEvents from './components/HotjarEvents'
import OpenGraphMeta from './components/OpenGraphMeta'
import DynamicOGImage from './components/DynamicOGImage'
import StructuredData from './components/StructuredData'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Curriculum from './pages/Curriculum'
import useHotjar from './hooks/useHotjar'
import { HOTJAR_CONFIG, isHotjarConfigured } from './config/hotjar'
import './App.css'

function App() {
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
      <ScrollToTop />
      <HotjarEvents />
      <OpenGraphMeta />
      <DynamicOGImage />
      <StructuredData />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/curriculum" element={<Curriculum />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  )
}

export default App
