# Portfólio — Joanes Henrique Walker Cunha

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-222?logo=githubpages&logoColor=white)](https://henriquewalker31.github.io/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

Portfólio pessoal de Joanes Walker, Analista de TI em Boa Vista (RR). Página estática, sem build e sem dependências instaladas localmente, voltada a recrutadores e clientes de freelance.

**Online:** <https://henriquewalker31.github.io/>

## Seções

- Hero com foto, nome, título profissional, CTAs (projetos e currículo) e estatísticas com contador animado.
- Sobre, experiência profissional em linha do tempo (com bloco antes/depois do sistema modernizado) e projetos em cards com thumbnails e tags.
- Recomendação de gestor na Hemissul com depoimento completo, em PT e EN.
- Habilidades organizadas por categoria (infraestrutura, desenvolvimento, banco de dados e ferramentas).
- Formação e certificações em cards, além de idiomas e status de disponibilidade.
- Contato com canais diretos e formulário integrado ao Formspree.
- Rodapé com redes sociais e botão de voltar ao topo.

## Recursos

- Tema claro/escuro com persistência em `localStorage`.
- Idioma PT/EN com textos centralizados em um objeto JavaScript e persistência da escolha.
- Navbar fixa, menu hambúrguer e destaque do item ativo durante a rolagem.
- Animações de entrada com `IntersectionObserver`, respeitando `prefers-reduced-motion`.
- Validação de formulário com mensagens de sucesso/erro, proteção antispam (honeypot) e aviso de privacidade.
- Metadados de SEO/Open Graph, dados estruturados `Person` (JSON-LD), favicons, `robots.txt`, `sitemap.xml` e página `404.html`.
- Acessibilidade: HTML semântico, `alt`, `aria-label`, link de pular conteúdo, foco visível e contraste WCAG AA.
- Sem requisições externas de imagem: ícones de tecnologia são SVGs inline e as fotos/thumbnails são servidas localmente em tamanho adequado.

## Stack

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 |
| Estilo | CSS puro com variáveis e temas |
| Comportamento | JavaScript puro |
| Ícones | SVG inline (Simple Icons e Devicon) |
| Formulário | Formspree |
| Hospedagem | GitHub Pages |

## Como visualizar localmente

```bash
git clone https://github.com/Henriquewalker31/henriquewalker31.github.io.git
cd henriquewalker31.github.io
python -m http.server 8000
```

Depois acesse <http://localhost:8000>.

## Configuração

- **Formulário:** endpoint configurado (`https://formspree.io/f/maeoeryg`) em `FORMSPREE_ENDPOINT` (`script.js`) e no `action` (`index.html`). Para trocar, atualize os dois — ou apenas o `script.js`, que sobrescreve o `action`.
- **Projetos:** cada card usa uma thumbnail em `assets/*-thumb.jpg` (1200×675). Os links apontam apenas para os repositórios no GitHub, sem botões de demonstração.
- **Currículo:** mantenha o arquivo em `assets/curriculo.pdf` ou ajuste o link de download no hero.
- **Estatísticas:** os números e rótulos do hero ficam em `index.html` (atributos `data-count`, `data-suffix` e `data-suffix-en`). Atualmente: 30+ unidades, 4 mil+ chamados no sistema modernizado e 4 projetos.
- **Cores e tipografia:** variáveis em `:root` e no bloco `[data-theme="light"]`, no início de `style.css`.
- **Textos PT/EN:** objeto `translations` em `script.js`.
- **Foto:** substitua `assets/foto.jpg` mantendo o nome e gere novamente `foto-264.jpg` e `foto-528.jpg` (usadas no `srcset`).
- **Card social:** `assets/og-image.png` (1200×630) é a imagem exibida em compartilhamentos; `assets/favicon.svg`, `assets/favicon-32.png` e `assets/apple-touch-icon.png` completam os favicons.

## Estrutura

```
henriquewalker31.github.io/
├── index.html          # marcação e conteúdo
├── 404.html            # página de erro para o GitHub Pages
├── style.css           # tokens, temas, layout e responsividade
├── script.js           # tema, idioma, menu, animações e formulário
├── assets/
│   ├── foto.jpg
│   ├── foto-264.jpg
│   ├── foto-528.jpg
│   ├── og-image.png
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── curriculo.pdf
│   ├── salaescura-thumb.jpg
│   ├── pigz-thumb.jpg
│   ├── livraria-thumb.jpg
│   └── autoviagem-thumb.jpg
├── robots.txt
└── sitemap.xml
```

## Deploy

O site é publicado pelo GitHub Pages a partir da branch `main`, na raiz do repositório.

```bash
git add .
git commit -m "feat: descreva a mudança"
git push origin main
```

O Pages reconstrói automaticamente após o push.

## Autor

Feito por [Joanes Henrique Walker Cunha](https://github.com/Henriquewalker31).
