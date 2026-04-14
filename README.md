# PromptBR 🇧🇷

A maior biblioteca de prompts em português. Ferramentas de IA, tutoriais e newsletter semanal.

---

## 📁 Estrutura do Projeto

```
promptbr/
├── index.html                ← Home principal
├── css/
│   └── global.css            ← Estilos de todas as páginas
├── js/
│   └── global.js             ← Scripts compartilhados
├── pages/
│   ├── prompts.html          ← Biblioteca de prompts (busca + filtro + copiar)
│   ├── noticias.html         ← Notícias sobre IA
│   ├── newsletter.html       ← Landing page da newsletter
│   ├── blog.html             ← (próxima etapa)
│   ├── sobre.html            ← (próxima etapa)
│   └── privacidade.html      ← (próxima etapa — obrigatório para AdSense)
└── assets/                   ← Coloque imagens aqui
```

---

## 🚀 PASSO A PASSO: Subir no GitHub Pages

### PASSO 1 — Criar conta no GitHub
1. Acesse **https://github.com**
2. Clique em **Sign up**
3. Preencha: nome de usuário, email, senha
4. Confirme o email que chegar

---

### PASSO 2 — Criar o repositório
1. Depois de logado, clique no **+** no canto superior direito
2. Clique em **New repository**
3. Preencha:
   - **Repository name:** `promptbr`
   - **Description:** A maior biblioteca de prompts em português
   - Marque **Public** (obrigatório para GitHub Pages grátis)
4. Clique no botão verde **Create repository**

---

### PASSO 3 — Fazer upload dos arquivos
1. Na tela do repositório recém criado, clique em:
   **"uploading an existing file"**
2. Abra o explorador de arquivos no seu computador
3. **Selecione TODOS os arquivos e pastas** do projeto PromptBR
4. **Arraste** para a área de upload do GitHub
5. Role a página para baixo
6. Escreva uma mensagem: `primeiro commit`
7. Clique no botão verde **Commit changes**
8. Aguarde o upload terminar (pode demorar 1-2 minutos)

---

### PASSO 4 — Ativar o GitHub Pages
1. No repositório, clique em **Settings** (engrenagem, no menu superior)
2. Na barra lateral esquerda, clique em **Pages**
3. Em **Source**, selecione **Deploy from a branch**
4. Em **Branch**, selecione **main** e a pasta **/ (root)**
5. Clique em **Save**
6. Aguarde 2-3 minutos
7. Aparecerá o link do seu site:
   **https://SEU-USUARIO.github.io/promptbr**

✅ **Pronto! Seu site está no ar.**

---

### PASSO 5 — Atualizar o site no futuro
Sempre que quiser atualizar o site:
1. No repositório, clique no arquivo que quer editar
2. Clique no lápis ✏️ (Edit this file)
3. Faça as alterações
4. Clique em **Commit changes**
5. O site atualiza automaticamente em ~1 minuto

---

## 💰 MONETIZAÇÃO — Google AdSense

### Antes de solicitar aprovação, você precisa:
- [ ] Site publicado com URL própria (GitHub Pages funciona)
- [ ] Mínimo 10-15 artigos/páginas com conteúdo original
- [ ] Página "Sobre" criada
- [ ] Página "Política de Privacidade" criada (obrigatório)
- [ ] Página "Contato" criada

### Como cadastrar no AdSense:
1. Acesse **https://adsense.google.com**
2. Clique em **Começar**
3. Entre com sua conta Google
4. Informe a URL do seu site GitHub Pages
5. Aguarde aprovação (7 a 14 dias úteis)

### Como inserir os anúncios:
Após aprovação, o AdSense te dá um código assim:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous"></script>
```

Cole no `<head>` de cada página HTML. Depois substitua os blocos:
```html
<!-- <div class="ad-box">📢 Espaço publicitário...</div> -->
```
Por:
```html
<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXX" data-ad-slot="XXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
```

### Posições de anúncio no projeto:
| Posição | Formato | Localização no código |
|---|---|---|
| Leaderboard topo | 728×90 | Logo após o nav/hero |
| In-feed | 728×90 | Entre cards de artigos |
| Retângulo mid | 336×280 | Meio do conteúdo |
| Sidebar half | 300×600 | Topo da sidebar |
| Sidebar rect | 300×250 | Meio da sidebar |
| Footer | 728×90 | Antes do rodapé |

---

## 📬 NEWSLETTER — Beehiiv

1. Acesse **https://beehiiv.com** e crie conta gratuita
2. Crie sua publicação chamada "PromptBR"
3. Copie o link de inscrição gerado pelo Beehiiv
4. Substitua o formulário em `newsletter.html` pelo embed do Beehiiv
   (eles fornecem o código HTML na plataforma)

---

## 📊 ANALYTICS — Google Analytics

Cole antes do `</head>` em todas as páginas:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ➕ Como adicionar novo prompt

1. Abra `pages/prompts.html`
2. Copie um bloco `<div class="pcard">...</div>`
3. Altere:
   - `data-category="categoria"` — para o filtro funcionar
   - `id="pXX"` — número único (p21, p22, etc.)
   - O conteúdo dentro do `<pre class="prompt-txt">`
   - O título em `.pc-title`
   - Os badges de categoria e nível
4. Salve e faça commit no GitHub

---

## ➕ Como adicionar nova notícia

1. Abra `pages/noticias.html`
2. Copie um bloco `<div class="nr">...</div>`
3. Altere o conteúdo
4. Salve e faça commit

---

## 🎯 Próximas páginas a criar

- `pages/blog.html` — listagem de artigos
- `pages/artigo-chatgpt.html` — primeiro artigo completo
- `pages/sobre.html` — quem somos
- `pages/privacidade.html` — obrigatório para AdSense

---

Feito com IA no Brasil 🇧🇷
