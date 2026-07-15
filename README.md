# Portfólio QA – Samuel Henrique da Silva

Site pessoal de portfólio para profissional de Quality Assurance, pronto para hospedagem no GitHub Pages.

## 📁 Estrutura de Pastas

```
portfolio-qa/
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   └── profile.jpg (coloque sua foto aqui)
└── favicon.ico (opcional)
```

## 🚀 Como Executar Localmente

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique).  
   Funciona sem servidor local, por ser estático.

Para melhor experiência (principalmente com as fontes e ícones carregados via CDN), use uma extensão como **Live Server** (VS Code) ou sirva com Python:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## ✏️ Como Personalizar

### Trocar nome, cargo e textos

Edite o `index.html`:

- **Nome**: `<h1 class="hero-title">Samuel Henrique da Silva</h1>`
- **Cargo**: `<p class="hero-subtitle">QA Engineer &bull; Especialista em Automação de Testes</p>`
- **Sobre**: seção `<section id="sobre">` – parágrafos dentro de `.sobre-text`
- **Experiência**: itens dentro da `.timeline` – ajuste empresas, períodos e descrições
- **Projeto destaque**: seção `<section id="projeto">` – altere nome, stack, links, etc.
- **Skills**: lista em `<section id="skills">`
- **Contato**: links no footer, e-mail, LinkedIn, GitHub

### Trocar foto de perfil

Substitua o arquivo `assets/profile.jpg` por sua foto. Recomenda-se quadrado, mínimo 300x300px.

### Trocar links de redes sociais

Procure por `href` com seus links reais:

- LinkedIn: `https://www.linkedin.com/in/samuel-henrique-da-silva/`
- GitHub: `https://github.com/samuelhsilva965`
- E-mail: `mailto:samuelhenrique.qa@gmail.com`
- Currículo PDF: troque `href="#"` pelo caminho do seu PDF.

### Alterar cores

Edite as variáveis CSS no início do `style.css`:

```css
:root {
    --bg-primary: #121212;
    --bg-secondary: #1e1e1e;
    --bg-card: #2a2a2a;
    --text-primary: #e0e0e0;
    --text-secondary: #b0b0b0;
    --accent: #d4af37; /* dourado */
    --accent-hover: #e0c75e;
    --border-color: #3a3a3a;
}
```

### Adicionar imagens ao projeto destaque

Substitua as imagens placeholder (`https://via.placeholder.com/...`) por prints reais do seu dashboard Allure e pipeline. Coloque os arquivos na pasta `assets/` e atualize os `src`.

## 🌐 Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex: `portfolio-qa`).
2. Faça upload de todos os arquivos para a branch `main` (ou `master`).
3. No repositório, vá em **Settings > Pages**.
4. Em **Source**, selecione:
   - **Branch**: `main` (ou `master`)
   - **Pasta**: `/` (raiz) ou `/docs` (se preferir)
5. Clique em **Save**.
6. Aguarde alguns minutos e seu site estará disponível em `https://seu-usuario.github.io/portfolio-qa/`.

> **Dica**: Se você colocar os arquivos em uma pasta chamada `docs` na raiz do repositório, use a opção `/docs` nas configurações do Pages.

## ✅ Requisitos Atendidos

- ✅ Static site, pronto para GitHub Pages (sem build)
- ✅ Dark mode com detalhes dourados
- ✅ Responsivo (mobile-first, testado mentalmente)
- ✅ Acessível (HTML semântico, alt, contraste WCAG AA)
- ✅ Performance (CSS e JS separados, CDNs leves)
- ✅ SEO básico (meta tags, favicon)
- ✅ Animação sutil de entrada (fade-in-up com Intersection Observer)
- ✅ Navegação fixa com destaque do link ativo
- ✅ Seção "Projeto em Destaque" com detalhes técnicos
- ✅ Dados reais inseridos (nome, experiências, links)

## 📄 Licença

Sinta-se livre para usar e modificar para seu próprio portfólio!