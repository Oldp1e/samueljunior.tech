# Integração Hotjar

Este projeto inclui uma integração completa com o Hotjar para análise de comportamento do usuário.

## Configuração

### 1. Obter credenciais do Hotjar

1. Acesse [Hotjar.com](https://www.hotjar.com/)
2. Crie uma conta ou faça login
3. Crie um novo site/projeto
4. Obtenha o **Site ID** e a **versão** do script

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione suas credenciais:

```env
VITE_HOTJAR_SITE_ID=seu_site_id_aqui
VITE_HOTJAR_VERSION=6
VITE_HOTJAR_DEBUG=false
```

**⚠️ Importante:** Nunca commite o arquivo `.env` com credenciais reais!

### 3. Para produção

Para o ambiente de produção, configure as variáveis de ambiente no seu provedor de hospedagem (Vercel, Netlify, etc.):

- `VITE_HOTJAR_SITE_ID`
- `VITE_HOTJAR_VERSION`
- `VITE_HOTJAR_DEBUG`

## Funcionalidades Implementadas

### Rastreamento Automático

✅ **Navegação de páginas** - Rastrea automaticamente quando o usuário visita cada página
✅ **Tags por página** - Adiciona tags específicas baseadas na página atual
✅ **Eventos personalizados** - Rastrea interações importantes como cliques em botões

### Eventos Rastreados

#### Página de Depoimentos (`/testimonials`)
- `page_visit_testimonials` - Visita à página
- `testimonials_next_page` - Navegação para próxima página
- `testimonials_prev_page` - Navegação para página anterior
- `testimonials_page_X` - Navegação direta para página específica
- `testimonials_filter_X` - Filtro por categoria
- `testimonial_linkedin_click` - Click no LinkedIn de um depoimento
- `testimonials_cta_contact` - Click no botão "Iniciar Projeto"
- `testimonials_cta_linkedin` - Click no botão "Conectar no LinkedIn"

#### Tags por Página
- **Homepage (`/`)**: `['homepage', 'landing']`
- **Sobre (`/about`)**: `['about', 'profile']`
- **Projetos (`/projects`)**: `['portfolio', 'projects']`
- **Depoimentos (`/testimonials`)**: `['testimonials', 'social-proof']`
- **Contato (`/contact`)**: `['contact', 'lead-generation']`
- **Currículo (`/curriculum`)**: `['cv', 'resume']`

## Arquitetura

### Arquivos Principais

```
src/
├── hooks/
│   └── useHotjar.js          # Hook personalizado para Hotjar
├── config/
│   └── hotjar.js             # Configurações do Hotjar
├── components/
│   └── HotjarEvents.jsx      # Componente para rastreamento de páginas
└── pages/
    └── Testimonials.jsx      # Exemplo com eventos customizados
```

### Hook `useHotjar`

```javascript
const { triggerEvent, addTags, identifyUser } = useHotjar(siteId, version, debug)

// Disparar evento
triggerEvent('button_click')

// Adicionar tags
addTags(['lead', 'interested'])

// Identificar usuário
identifyUser('user123', { plan: 'premium' })
```

## Adicionando Novos Eventos

Para adicionar eventos em outros componentes:

```javascript
import useHotjar from '../hooks/useHotjar'
import { HOTJAR_CONFIG } from '../config/hotjar'

const MeuComponente = () => {
  const { triggerEvent } = useHotjar(
    HOTJAR_CONFIG.SITE_ID,
    HOTJAR_CONFIG.VERSION,
    HOTJAR_CONFIG.DEBUG
  )

  const handleClick = () => {
    triggerEvent('meu_evento_personalizado')
    // resto da lógica...
  }

  return (
    <button onClick={handleClick}>
      Clique aqui
    </button>
  )
}
```

## Modo Debug

Defina `VITE_HOTJAR_DEBUG=true` no arquivo `.env` para ver logs detalhados no console do navegador.

## Verificação

Para verificar se o Hotjar está funcionando:

1. Acesse seu site
2. Abra o console do navegador (F12)
3. Digite: `hjBootstrap?.loaded()` - deve retornar `true`
4. Ou procure por logs se o debug estiver ativado

## Recursos Disponíveis

Com esta implementação, você terá acesso a:

- 📊 **Heatmaps** - Veja onde os usuários clicam e scrollam
- 🎥 **Gravações de sessão** - Assista como os usuários navegam
- 📝 **Feedback** - Colete feedback direto dos usuários
- 📈 **Funnels** - Analise conversões e abandonos
- 🎯 **Eventos personalizados** - Rastrea interações específicas

## Suporte

Para mais informações sobre o Hotjar, consulte:
- [Documentação oficial](https://help.hotjar.com/)
- [Guia de implementação](https://help.hotjar.com/hc/en-us/articles/115011639927)
