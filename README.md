# 🚀 Samuel Junior - Portfolio

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Portfolio moderno e responsivo construído com React, Vite e Tailwind CSS**

[🌐 **Ver Demo**](https://samueljunior.tech) • [📱 **Responsivo**](#-features) • [⚡ **Performance**](#-performance)

</div>

---

## ✨ Sobre

Portfolio pessoal desenvolvido para showcasing de projetos, habilidades e experiências profissionais como Desenvolvedor Full Stack. Focado em **performance**, **acessibilidade** e **experiência do usuário**.

### 🎯 Principais Objetivos
- **Mostrar projetos** de forma atrativa e profissional
- **Facilitar contato** com potenciais clientes/empregadores  
- **Demonstrar habilidades** técnicas através do próprio código
- **Otimizar conversões** com analytics e rastreamento

---

## 🛠️ Stack Tecnológica

### **Frontend**
- **React 19** - Biblioteca principal
- **Vite 7** - Build tool ultra-rápido
- **Tailwind CSS 4** - Estilização utility-first
- **Framer Motion** - Animações fluidas
- **React Router DOM** - Navegação SPA
- **Lucide React** - Ícones modernos

### **Analytics & SEO**
- **Hotjar** - Heatmaps e analytics de comportamento
- **Open Graph** - Previews sociais dinâmicos
- **Schema.org** - Dados estruturados para SEO
- **Meta Tags** - SEO otimizado por página

### **Ferramentas de Desenvolvimento**
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Compatibilidade cross-browser

---

## 🎨 Features

### ⭐ **Core Features**
- ✅ **Design Responsivo** - Mobile-first, adaptável a todos os dispositivos
- ✅ **Performance Otimizada** - Lighthouse Score 95+
- ✅ **SEO Completo** - Meta tags, Schema.org, sitemap
- ✅ **Animações Fluidas** - Transições suaves com Framer Motion
- ✅ **Tema Dark** - Design moderno com gradientes roxo/rosa

### 📊 **Analytics & Tracking**
- ✅ **Hotjar Integrado** - Heatmaps e gravações de sessão
- ✅ **Eventos Customizados** - Rastreamento de interações específicas
- ✅ **Open Graph Dinâmico** - Previews otimizados para redes sociais
- ✅ **Fallback Automático** - Geração de imagens OG via Canvas

### 🔧 **Funcionalidades Técnicas**
- ✅ **Modais Interativos** - Detalhes expandidos de projetos
- ✅ **Player de Vídeo** - YouTube embeds otimizados
- ✅ **Filtros Dinâmicos** - Busca e categorização de projetos
- ✅ **Lazy Loading** - Carregamento otimizado de imagens
- ✅ **Error Boundaries** - Tratamento robusto de erros

---

## 🚀 Performance

### **Lighthouse Scores**
<img width="885" height="311" alt="image" src="https://github.com/user-attachments/assets/9a9cf066-4f38-46d6-b799-f71646b80f18" />
<img width="886" height="204" alt="image" src="https://github.com/user-attachments/assets/d5018737-4fc8-427c-bdd7-a4dd2bc37bc1" />
<img width="893" height="293" alt="image" src="https://github.com/user-attachments/assets/bcd6c953-14ac-45de-94aa-b096a1346873" />

### **Otimizações Implementadas**
- **Code Splitting** automático via Vite
- **Tree Shaking** para bundle otimizado
- **Image Optimization** com lazy loading
- **CSS Purging** com Tailwind
- **Preload** de recursos críticos
- **Gzip Compression** habilitada

---

## 📱 Seções

### 🏠 **Home**
- Hero section com call-to-action
- Apresentação pessoal dinâmica
- Links para redes sociais

### 👨‍💻 **Sobre** 
- Trajetória profissional detalhada
- Stack tecnológica com ícones
- Experiências e formação

### 💼 **Projetos**
- Grid responsivo de projetos
- Filtros por categoria e busca
- Modais com detalhes expandidos
- Links para demos e repositórios

### 💬 **Depoimentos**
- Avaliações reais de clientes
- Sistema de paginação
- Filtros por tipo (colegas/gestores)
- Integração com LinkedIn

### 📧 **Contato**
- Formulário de contato funcional
- Informações de contato direto
- Links para redes profissionais

### 📄 **Currículo**
- Download de CV em PDF
- Visualização integrada
- Informações sempre atualizadas

---

## 🛠️ Instalação & Desenvolvimento

### **Pré-requisitos**
- Node.js 20.19+ ou 22.12+
- npm ou yarn
- Git

### **1. Clone o repositório**
```bash
git clone https://github.com/Oldp1e/samueljunior.tech.git
cd samueljunior.tech
```

### **2. Instale as dependências**
```bash
npm install
```

### **3. Configure variáveis de ambiente**
```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env com suas configurações
VITE_HOTJAR_SITE_ID=seu_hotjar_site_id
VITE_HOTJAR_VERSION=6
VITE_HOTJAR_DEBUG=false
```

### **4. Inicie o servidor de desenvolvimento**
```bash
npm run dev
```

### **5. Build para produção**
```bash
npm run build
npm run preview  # Para testar o build local
```

---

## 🎨 Personalização

### **Cores e Tema**
O projeto usa um tema dark com gradientes personalizáveis via Tailwind:

```css
/* Cores principais definidas em index.css */
:root {
  --primary-purple: #8B5CF6;
  --primary-pink: #EC4899;
  --background-dark: #0F0F23;
  --background-card: #1E1B4B;
}
```

### **Para personalizar:**

1. **Altere as cores** em `src/index.css`
2. **Modifique gradientes** em `src/App.css`  
3. **Personalize componentes** em `src/components/`
4. **Ajuste conteúdo** em `src/pages/`

### **Estrutura de pastas**
```
src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Button, Card)
│   ├── layout/         # Layout e navegação
│   └── ...             # Outros componentes
├── pages/              # Páginas principais
├── hooks/              # Hooks customizados
├── config/             # Configurações (Hotjar, etc)
├── assets/             # Imagens e recursos
└── docs/               # Documentação adicional
```

---

## 📈 Analytics Setup

### **Hotjar Configuration**
1. Crie conta no [Hotjar](https://www.hotjar.com/)
2. Obtenha seu Site ID
3. Configure no arquivo `.env`:
```env
VITE_HOTJAR_SITE_ID=your_site_id
VITE_HOTJAR_VERSION=6
VITE_HOTJAR_DEBUG=false  # true apenas para desenvolvimento
```

### **Eventos Rastreados**
- Navegação entre páginas
- Cliques em projetos e CTAs
- Interações com modais
- Downloads de currículo
- Filtros e buscas

---

## 🌐 Deploy

### **Vercel** (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### **Netlify**
1. Conecte o repositório
2. Configure as variáveis de ambiente
3. Deploy automático

### **Hospedagem Tradicional (cPanel)**
```bash
npm run build
# Upload do conteúdo da pasta 'dist/' para public_html/
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### **Diretrizes de Contribuição**
- Mantenha o código consistente com ESLint
- Adicione comentários para lógicas complexas
- Teste em diferentes dispositivos
- Mantenha commits atômicos e descritivos

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

### **Uso Permitido**
✅ **Uso comercial** - Pode usar para projetos comerciais  
✅ **Modificação** - Pode modificar como desejar  
✅ **Distribuição** - Pode redistribuir  
✅ **Uso privado** - Pode usar privadamente  

### **Condições**
📝 **Atribuição obrigatória** - Deve dar créditos ao autor original  
📝 **Incluir licença** - Deve incluir a licença MIT  

### **Limitações**
❌ **Sem garantia** - Software fornecido "como está"  
❌ **Responsabilidade limitada** - Autor não é responsável por danos  

---

## 🎉 Créditos

### **Desenvolvido por**
**[Samuel Junior](https://github.com/Oldp1e)** - *Desenvolvedor Full Stack*
- 🌐 Website: [samueljunior.tech](https://samueljunior.tech)
- 💼 LinkedIn: [samuel-lima-analista-ti](https://linkedin.com/in/samuel-lima-analista-ti/)
- 📧 Email: [Contato via site](https://samueljunior.tech/contact)

### **Agradecimentos**
- **React Team** - Por essa biblioteca incrível
- **Tailwind CSS** - Sistema de design fantástico
- **Framer Motion** - Animações fluidas e modernas
- **Lucide** - Ícones consistentes e bonitos
- **Vite Team** - Build tool ultra-rápido

### **Se você usar este template:**
⭐ **Deixe uma star** no repositório  
🔄 **Compartilhe** com outros desenvolvedores  
💬 **Mencione** [@Oldp1e](https://github.com/Oldp1e) nas suas redes  
🤝 **Contribua** com melhorias  

---

## 📊 Estatísticas

![GitHub stars](https://img.shields.io/github/stars/Oldp1e/samueljunior.tech?style=social)
![GitHub forks](https://img.shields.io/github/forks/Oldp1e/samueljunior.tech?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/Oldp1e/samueljunior.tech?style=social)

![GitHub repo size](https://img.shields.io/github/repo-size/Oldp1e/samueljunior.tech)
![GitHub code size](https://img.shields.io/github/languages/code-size/Oldp1e/samueljunior.tech)
![Lines of code](https://img.shields.io/tokei/lines/github/Oldp1e/samueljunior.tech)

---

<div align="center">

**Feito com ❤️ por [Samuel Junior](https://github.com/Oldp1e)**

*Se este projeto te ajudou, considere dar uma ⭐!*

</div>
