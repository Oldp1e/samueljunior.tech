# Design System - Portfolio Samuel Junior

> Documentação completa do sistema de design utilizado no portfolio, incluindo tecnologias, cores, efeitos e padrões de desenvolvimento.

## 📋 Índice

1. [Stack Tecnológica](#stack-tecnológica)
2. [Paleta de Cores](#paleta-de-cores)
3. [Tipografia](#tipografia)
4. [Componentes Base](#componentes-base)
5. [Efeitos Glassmorphism](#efeitos-glassmorphism)
6. [Animações e Transições](#animações-e-transições)
7. [Layout e Responsividade](#layout-e-responsividade)
8. [Padrões de UX](#padrões-de-ux)
9. [Arquitetura de Componentes](#arquitetura-de-componentes)
10. [Tokens de Design](#tokens-de-design)

---

## 🛠 Stack Tecnológica

### Frontend Core
- **React 18** - Biblioteca principal para UI
- **Vite** - Build tool e dev server
- **React Router** - Roteamento SPA
- **Framer Motion** - Animações e transições

### Styling & Design
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processamento CSS
- **Custom CSS** - Estilos personalizados e animações

### Icons & Assets
- **Lucide React** - Biblioteca de ícones
- **Custom SVGs** - Ícones e ilustrações personalizadas

### Funcionalidades Especiais
- **@react-pdf/renderer** - Geração de PDFs
- **file-saver** - Download de arquivos

---

## 🎨 Paleta de Cores

### Cores Principais

```css
/* Background Principal */
--bg-primary: #0f0f23;        /* Dark blue-purple */
--bg-secondary: #1a1a2e;      /* Slightly lighter dark */

/* Cores de Destaque */
--purple-primary: #8b5cf6;    /* Purple 500 */
--purple-secondary: #a855f7;  /* Purple 600 */
--pink-primary: #ec4899;      /* Pink 500 */
--pink-secondary: #db2777;    /* Pink 600 */

/* Gradientes Principais */
--gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
--gradient-text: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--gradient-hero: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores de Estado */
--success: #10b981;           /* Green 500 */
--warning: #f59e0b;           /* Amber 500 */
--error: #ef4444;             /* Red 500 */
--info: #3b82f6;              /* Blue 500 */
```

### Escala de Cinzas

```css
/* Textos */
--text-primary: #fafafa;      /* Texto principal */
--text-secondary: #d1d5db;    /* Texto secundário */
--text-muted: #9ca3af;        /* Texto discreto */
--text-disabled: #6b7280;     /* Texto desabilitado */

/* Bordas e Divisores */
--border-light: rgba(255, 255, 255, 0.1);
--border-medium: rgba(255, 255, 255, 0.2);
--border-strong: rgba(255, 255, 255, 0.3);
```

### Transparências para Glassmorphism

```css
/* Backgrounds Glass */
--glass-light: rgba(255, 255, 255, 0.1);
--glass-medium: rgba(255, 255, 255, 0.15);
--glass-strong: rgba(255, 255, 255, 0.08);
--glass-dark: rgba(0, 0, 0, 0.1);
```

---

## 📝 Tipografia

### Fonte Principal
- **Inter** - Fonte principal para todo o portfolio
- Fallbacks: `system-ui, Avenir, Helvetica, Arial, sans-serif`

### Escala Tipográfica

```css
/* Títulos Principais */
.text-9xl { font-size: 8rem; line-height: 1.1; }    /* Hero titles */
.text-8xl { font-size: 6rem; line-height: 1.1; }    /* Section titles */
.text-7xl { font-size: 4.5rem; line-height: 1.1; }  /* Page titles */

/* Títulos Secundários */
.text-5xl { font-size: 3rem; line-height: 1.1; }    /* Component titles */
.text-4xl { font-size: 2.25rem; line-height: 1.1; } /* Card titles */
.text-3xl { font-size: 1.875rem; line-height: 1.1; }/* Subtitle */

/* Corpo de Texto */
.text-xl { font-size: 1.25rem; }   /* Large body text */
.text-lg { font-size: 1.125rem; }  /* Medium body text */
.text-base { font-size: 1rem; }    /* Base body text */
.text-sm { font-size: 0.875rem; }  /* Small text */
.text-xs { font-size: 0.75rem; }   /* Caption/metadata */
```

### Pesos de Fonte

```css
.font-bold { font-weight: 700; }      /* Títulos principais */
.font-semibold { font-weight: 600; }  /* Subtítulos */
.font-medium { font-weight: 500; }    /* Botões e labels */
.font-normal { font-weight: 400; }    /* Texto corrido */
```

---

## 🧩 Componentes Base

### Button Component

```jsx
// Variantes
primary: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
secondary: 'glass text-white border border-white/20 hover:bg-white/20'
outline: 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
ghost: 'text-gray-300 hover:text-white hover:bg-white/10'

// Tamanhos
sm: 'px-4 py-2 text-sm'
md: 'px-6 py-3 text-base'  
lg: 'px-8 py-4 text-lg'

// Estados de Hover
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Card Component

```jsx
// Variantes
glass: 'glass'                    // Efeito glassmorphism padrão
glass-light: 'glass-light'        // Versão mais sutil
glass-strong: 'glass-strong'      // Versão mais intensa
solid: 'bg-white/5 border border-white/10 rounded-2xl'

// Animações
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Hover Effects
.card-hover:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}
```

---

## ✨ Efeitos Glassmorphism

### Configurações Base

```css
/* Glassmorphism Padrão */
.glass {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

/* Variações */
.glass-light {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.2);
}

.glass-strong {
  backdrop-filter: blur(24px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.5);
}

/* Navbar Específico */
.glass-navbar {
  backdrop-filter: blur(20px);
  background: rgba(15, 15, 15, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
}
```

### Aplicações do Glassmorphism

- **Navbar** - `glass-navbar` para navegação flutuante
- **Cards** - `glass` para componentes de conteúdo
- **Modals** - `glass-strong` para overlays
- **Buttons** - `glass-light` para botões secundários
- **Mobile Menu** - `glass-mobile-menu` para menu responsivo

---

## 🎬 Animações e Transições

### Animações Customizadas

```css
/* Avatar Breathing Effect */
@keyframes gradient-shift {
  0%, 100% {
    background: linear-gradient(45deg, #8b5cf6, #ec4899, #8b5cf6);
    transform: scale(1);
  }
  50% {
    background: linear-gradient(225deg, #ec4899, #8b5cf6, #f59e0b, #ec4899);
    transform: scale(1.05);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(236, 72, 153, 0.5), 0 0 40px rgba(139, 92, 246, 0.3);
  }
}

/* Float Animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

### Framer Motion Patterns

```jsx
// Container Animation (Stagger Children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

// Item Animation
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}

// Page Transitions
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}

// Hover Effects
whileHover={{ scale: 1.05, y: -2 }}
whileTap={{ scale: 0.95 }}

// Modal Transitions
initial={{ opacity: 0, scale: 0.9, y: 20 }}
animate={{ opacity: 1, scale: 1, y: 0 }}
exit={{ opacity: 0, scale: 0.9, y: 20 }}
transition={{ type: "spring", damping: 25, stiffness: 400 }}
```

### Timing e Duração

- **Micro Interactions**: 150-300ms
- **Component Transitions**: 300-600ms
- **Page Transitions**: 600-800ms
- **Background Animations**: 2-6s (infinite)

---

## 📱 Layout e Responsividade

### Breakpoints Customizados

```javascript
// tailwind.config.js
screens: {
  'sm': '640px',
  'md': '768px', 
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
  '3xl': '1920px',      // Ultrawide
  '4xl': '2560px',      // 4K
  'ultrawide': '2560px'
}
```

### Container Sizes

```css
/* Max Width Containers */
.max-w-7xl { max-width: 80rem; }    /* 1280px - Padrão */
.max-w-8xl { max-width: 88rem; }    /* 1408px - Large */
.max-w-9xl { max-width: 96rem; }    /* 1536px - XL */
.max-w-10xl { max-width: 120rem; }  /* 1920px - Ultrawide */

/* Responsive Spacing */
.px-4.lg:px-8.xl:px-16.2xl:px-24    /* Padding horizontal progressivo */
.py-20.2xl:py-32                    /* Padding vertical para grandes telas */
```

### Grid Systems

```jsx
// Projects Grid
grid-cols-1.lg:grid-cols-3          // Mobile: 1, Desktop: 3
grid-cols-1.md:grid-cols-2.xl:grid-cols-4  // Progressive grid

// Skills Grid  
grid-cols-1.md:grid-cols-2.xl:grid-cols-4  // Responsive skills layout

// Responsive Gaps
gap-6.xl:gap-8                      // Espaçamento progressivo
```

---

## 🎯 Padrões de UX

### Navegação

#### Estrutura de URLs
- `/` - Home page
- `/projects` - Portfolio de projetos
- `/projects?project=id` - Modal de projeto específico
- `/about` - Sobre
- `/curriculum` - Currículo
- `/contact` - Contato

#### Modal Navigation Pattern
- **Browser Back Button**: Fecha modal ao invés de navegar
- **History Management**: `pushState` quando abre modal
- **Scroll Restoration**: Retorna à posição do card após fechar
- **ESC Key**: Fecha modal
- **Backdrop Click**: Fecha modal

### Loading States & Feedback

```jsx
// Button Loading State
<Button disabled={isLoading}>
  {isLoading ? 'Gerando...' : 'Download PDF'}
</Button>

// Progressive Enhancement
{image ? <img src={image} /> : <GradientFallback />}
```

### Accessibility Patterns

```jsx
// Keyboard Navigation
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleAction()
  }
}}

// Focus Management
tabIndex={0}
role="button"
aria-label="Descriptive label"

// Screen Reader Support
<span className="sr-only">Hidden description</span>
```

---

## 🏗 Arquitetura de Componentes

### Component Hierarchy

```
src/
├── components/
│   ├── ui/                     # Base UI components
│   │   ├── Button.jsx
│   │   └── Card.jsx
│   ├── layout/                 # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── ProjectModal.jsx        # Feature components
│   ├── YouTubePlayer.jsx
│   └── CVDocument.jsx
├── hooks/                      # Custom hooks
│   ├── useProjectModal.js      # Modal state management
│   └── useHotjar.js           # Analytics
├── data/                       # Data layer
│   └── projects.js            # Centralized project data
└── pages/                     # Page components
    ├── Home.jsx
    ├── Projects.jsx
    ├── About.jsx
    ├── Curriculum.jsx
    └── Contact.jsx
```

### Design Patterns

#### Custom Hooks Pattern
```jsx
// Centralized modal logic
const useProjectModal = (projectsRef) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // Browser history management
  // Scroll restoration  
  // Event listeners cleanup
  
  return { selectedProject, isModalOpen, openProjectModal, closeProjectModal }
}
```

#### Data Centralization Pattern
```jsx
// Single source of truth for projects
export const projects = [...]
export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category) => projects.filter(p => p.category === category)
```

#### Compound Component Pattern
```jsx
<ProjectModal 
  project={selectedProject}
  isOpen={isModalOpen} 
  onClose={closeProjectModal}
/>
```

---

## 🎨 Tokens de Design

### Spacing Scale

```css
/* Tailwind Custom Spacing */
'18': '4.5rem',   /* 72px */
'22': '5.5rem',   /* 88px */
'26': '6.5rem',   /* 104px */
'30': '7.5rem',   /* 120px */
```

### Border Radius

```css
/* Consistent Rounding */
.rounded-lg { border-radius: 0.5rem; }   /* 8px - Small components */
.rounded-xl { border-radius: 0.75rem; }  /* 12px - Medium components */
.rounded-2xl { border-radius: 1rem; }    /* 16px - Large components */
```

### Shadow System

```css
/* Elevation Levels */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)
shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)
shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)
shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)
shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)

/* Custom Glass Shadows */
glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37)
glass-hover-shadow: 0 20px 60px rgba(0, 0, 0, 0.3)
```

### Z-Index Scale

```css
/* Layering System */
z-0: 0           /* Base layer */
z-10: 10         /* Dropdowns, tooltips */
z-20: 20         /* Sticky headers */
z-30: 30         /* Modals backdrop */
z-40: 40         /* Modals content */
z-50: 50         /* Notifications, alerts */
```

---

## 📐 Print Styles (Curriculum)

### Print-Specific Classes

```css
/* Print Utilities */
.print\:hidden { display: none !important; }
.print\:text-black { color: black !important; }
.print\:bg-gray-50 { background-color: #f9fafb !important; }
.print\:border-gray-300 { border-color: #d1d5db !important; }
.print\:shadow-none { box-shadow: none !important; }

/* Page Configuration */
@page {
  margin: 1cm;
  size: A4;
}
```

---

## 🚀 Performance & Optimization

### Code Splitting
- Route-based splitting with React Router
- Lazy loading for large components
- Dynamic imports for PDF generation

### Image Optimization
- WebP format with fallbacks
- Responsive images with srcset
- Lazy loading with Intersection Observer

### Animation Performance
- GPU-accelerated transforms
- will-change optimization
- RequestAnimationFrame for smooth animations

---

## 📱 Mobile Considerations

### Touch Interactions
- 44px minimum touch targets
- Hover states disabled on touch devices  
- Swipe gestures for modal dismissal

### Mobile-Specific Components
```css
.glass-mobile-menu {
  backdrop-filter: blur(32px);
  background: rgba(10, 10, 10, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.glass-mobile-button {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

---

## 🎯 Conclusão

Este Design System estabelece uma base sólida para projetos que buscam:

- **Estética Moderna**: Glassmorphism, gradientes e animações fluidas
- **Performance Otimizada**: Componentes reutilizáveis e código limpo  
- **Responsividade Total**: Suporte desde mobile até monitores 4K
- **Acessibilidade**: Padrões WCAG e navegação por teclado
- **Manutenibilidade**: Arquitetura escalável e bem documentada

### Para Novos Projetos

1. **Copie os tokens de design** (cores, tipografia, espaçamentos)
2. **Implemente os componentes base** (Button, Card, Modal)
3. **Configure o Tailwind** com as extensões customizadas
4. **Adicione as animações** do Framer Motion
5. **Aplique os padrões de UX** (navegação, loading states, accessibility)

Este sistema foi projetado para ser facilmente adaptável e extensível para diferentes tipos de projetos, mantendo consistência visual e qualidade de código.
