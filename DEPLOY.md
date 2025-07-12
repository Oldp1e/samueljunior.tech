# 🚀 Deploy Guide - Portfolio Samuel Junior

## 📋 Pré-requisitos

- ✅ Node.js 18+ instalado
- ✅ Git configurado
- ✅ Conta no [Vercel](https://vercel.com)
- ✅ Conta no [Hotjar](https://hotjar.com)

## 🛠️ Configuração Local

### 1. Clone e Setup
```bash
git clone https://github.com/Oldp1e/samueljunior.tech.git
cd samueljunior.tech
npm install
```

### 2. Variáveis de Ambiente
```bash
# Copie o arquivo de exemplo
cp .env.example .env.local

# Configure suas variáveis
VITE_HOTJAR_SITE_ID=6462053
VITE_SITE_URL=https://samueljunior.tech
```

### 3. Desenvolvimento
```bash
# Inicia o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy no Vercel

### 🚀 Método 1: Via GitHub (Recomendado)

1. **Fork o repositório** no GitHub
2. **Conecte ao Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Selecione seu fork
   - Configure as variáveis de ambiente:
     ```
     VITE_HOTJAR_SITE_ID=6462053
     VITE_HOTJAR_VERSION=6
     VITE_SITE_URL=https://seu-dominio.vercel.app
     ```

3. **Deploy automático**:
   - Cada push no `main` faz deploy automático
   - PRs geram preview deployments
   - Rollback instantâneo se necessário

### ⚡ Método 2: Via CLI

```bash
# Instala o Vercel CLI
npm i -g vercel

# Login no Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Configurações Avançadas

### 📊 Hotjar Setup

1. **Crie conta** no [Hotjar](https://hotjar.com)
2. **Adicione seu site**:
   - URL: `https://seu-dominio.com`
   - Categoria: Portfolio/Business
3. **Copie o Site ID** para `VITE_HOTJAR_SITE_ID`
4. **Configure Privacy**: GDPR compliance se necessário

### 🎯 Domínio Personalizado

No Vercel Dashboard:
1. **Settings** → **Domains**
2. **Add Domain**: `seudominio.com`
3. **Configure DNS**:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### 🔒 Headers de Segurança

O arquivo `vercel.json` já inclui:
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Cache-Control otimizado

## 📈 Monitoramento

### 🎯 Analytics Inclusos

- **Hotjar**: Heatmaps e Session Recordings
- **Vercel Analytics**: Core Web Vitals
- **Built-in SEO**: Open Graph + Schema.org

### 📊 Métricas para Acompanhar

- **Performance**: Lighthouse Score 95+
- **SEO**: Meta tags e estruturação
- **UX**: Taxa de conversão via Hotjar
- **Traffic**: Páginas mais visitadas

## 🔄 CI/CD Pipeline

### 🤖 GitHub Actions (Opcional)

```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🚨 Troubleshooting

### ❌ Build Errors

```bash
# Limpa cache e reinstala
rm -rf node_modules package-lock.json
npm install

# Verifica versões
node --version  # 18+
npm --version   # 8+
```

### ❌ Hotjar Não Carrega

1. **Verifique Site ID**: Correto em `.env`
2. **Teste em produção**: Hotjar não funciona em localhost
3. **Console errors**: Adblockers podem bloquear

### ❌ Open Graph Não Funciona

1. **Teste no debugger**: [Facebook Debugger](https://developers.facebook.com/tools/debug/)
2. **Cache**: Pode levar alguns minutos para atualizar
3. **Imagem card-preview.png**: Deve existir em `public/images/`

## 📋 Checklist Final

### 🎯 Antes do Deploy
- [ ] ✅ Todas as variáveis configuradas
- [ ] ✅ Build local funcionando (`npm run build`)
- [ ] ✅ Imagem card-preview.png criada (1200x630px)
- [ ] ✅ Meta tags testadas
- [ ] ✅ Links externos funcionando

### 🚀 Pós-Deploy
- [ ] ✅ Site carregando corretamente
- [ ] ✅ Hotjar tracking ativo
- [ ] ✅ Open Graph testado no Facebook/LinkedIn
- [ ] ✅ Mobile responsivo
- [ ] ✅ Performance Lighthouse 90+

## 🆘 Suporte

### 📞 Contatos
- **GitHub Issues**: Para bugs e features
- **Email**: contact@samueljunior.tech
- **LinkedIn**: [@samuel-junior](https://linkedin.com/in/samuel-junior)

### 📚 Recursos
- [Documentação Vite](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)
- [Hotjar Academy](https://academy.hotjar.com)
- [React Router](https://reactrouter.com)

---

**🎉 Parabéns!** Seu portfolio está online e funcionando perfeitamente!
