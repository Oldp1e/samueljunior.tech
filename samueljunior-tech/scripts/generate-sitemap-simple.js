import fs from 'fs'
import path from 'path'

// Configuração do sitemap
const SITE_URL = 'https://samueljunior.tech'
const CURRENT_DATE = new Date().toISOString()

// Rotas principais do site
const routes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly'
  },
  {
    path: '/about',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    path: '/projects',
    priority: 0.9,
    changefreq: 'weekly'
  },
  {
    path: '/testimonials',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    path: '/contact',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    path: '/curriculum',
    priority: 0.6,
    changefreq: 'monthly'
  }
]

// Dados dos projetos em destaque (hardcoded para simplicidade)
const featuredProjects = [
  { id: 1, title: 'Outdoors Adventures Malta API' },
  { id: 2, title: 'Easy Bid' },
  { id: 4, title: 'Entity Strike' }
]

const sandboxProjects = [
  { id: 'dino-encyclopedia', title: 'Dino Encyclopedia' },
  { id: 'holocron-databank', title: 'Holocron Databank' },
  { id: '3d-retro-library', title: '3D Retro Library' }
]

// Adicionar rotas de projetos
featuredProjects.forEach(project => {
  routes.push({
    path: `/projects?project=${project.id}`,
    priority: 0.7,
    changefreq: 'monthly'
  })
})

sandboxProjects.forEach(project => {
  routes.push({
    path: `/projects?sandbox=${project.id}`,
    priority: 0.6,
    changefreq: 'monthly'
  })
})

// Gerar XML do sitemap
const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`

// Salvar sitemap
try {
  const publicDir = path.join(process.cwd(), 'public')
  const sitemapPath = path.join(publicDir, 'sitemap.xml')
  
  fs.writeFileSync(sitemapPath, xmlContent)
  
  console.log('✅ Sitemap gerado com sucesso!')
  console.log(`📍 Localização: ${sitemapPath}`)
  console.log(`🔗 URLs incluídas: ${routes.length}`)
  console.log('\n📄 Preview do sitemap:')
  console.log(xmlContent.slice(0, 500) + '...')
} catch (error) {
  console.error('❌ Erro ao gerar sitemap:', error)
}
