import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// Obter __dirname para ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Importar dados dos projetos
async function importProjects() {
  try {
    const projectsPath = path.join(__dirname, '../src/data/projects.js')
    const { projects, sandboxProjects } = await import(`file://${projectsPath}`)
    return { projects, sandboxProjects }
  } catch (error) {
    console.error('Erro ao importar projetos:', error)
    return { projects: [], sandboxProjects: [] }
  }
}

// Configuração do sitemap
const SITE_URL = 'https://samueljunior.tech'
const CURRENT_DATE = new Date().toISOString()

// Rotas principais do site
const mainRoutes = [
  {
    path: '/',
    priority: 1.0,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/about',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/projects',
    priority: 0.9,
    changefreq: 'weekly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/testimonials',
    priority: 0.7,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/contact',
    priority: 0.8,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  },
  {
    path: '/curriculum',
    priority: 0.6,
    changefreq: 'monthly',
    lastmod: CURRENT_DATE
  }
]

// Função para gerar URLs de projetos
function generateProjectRoutes(projects, sandboxProjects) {
  const projectRoutes = []
  
  // Projetos principais com parâmetro de query
  projects.forEach(project => {
    if (project.featured) {
      projectRoutes.push({
        path: `/projects?project=${project.id}`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: CURRENT_DATE
      })
    }
  })
  
  // Projetos sandbox
  sandboxProjects.forEach(project => {
    projectRoutes.push({
      path: `/projects?sandbox=${project.id}`,
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: CURRENT_DATE
    })
  })
  
  return projectRoutes
}

// Função para gerar XML do sitemap
function generateSitemap(projects, sandboxProjects) {
  const allRoutes = [...mainRoutes, ...generateProjectRoutes(projects, sandboxProjects)]
  
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const xmlUrls = allRoutes.map(route => `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')

  const xmlFooter = `
</urlset>`

  return xmlHeader + xmlUrls + xmlFooter
}

// Função para salvar o sitemap
async function saveSitemap() {
  try {
    const { projects, sandboxProjects } = await importProjects()
    const sitemapContent = generateSitemap(projects, sandboxProjects)
    const publicDir = path.join(process.cwd(), 'public')
    
    // Garantir que o diretório public existe
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }
    
    const sitemapPath = path.join(publicDir, 'sitemap.xml')
    fs.writeFileSync(sitemapPath, sitemapContent)
    
    console.log('✅ Sitemap gerado com sucesso!')
    console.log(`📍 Localização: ${sitemapPath}`)
    console.log(`🔗 URLs incluídas: ${mainRoutes.length + generateProjectRoutes(projects, sandboxProjects).length}`)
    
    return sitemapPath
  } catch (error) {
    console.error('❌ Erro ao gerar sitemap:', error)
    throw error
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  saveSitemap()
}

export { generateSitemap, saveSitemap }
