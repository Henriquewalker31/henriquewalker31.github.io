# Portfólio — Joanes Henrique Walker Cunha

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-222?logo=githubpages&logoColor=white)](https://henriquewalker31.github.io/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

Portfólio pessoal de Joanes Walker, Analista de TI em Boa Vista (RR). Página estática, sem build e sem dependências instaladas localmente, voltada a recrutadores e clientes de freelance.

**Online:** <https://henriquewalker31.github.io/>

## Seções

- Hero com foto, nome, título profissional, CTAs (projetos e currículo) e estatísticas com contador animado.
- Sobre, experiência profissional em linha do tempo e projetos em cards com thumbnails e tags.
- Habilidades organizadas por categoria (infraestrutura, desenvolvimento, banco de dados e ferramentas).
- Formação e certificações em cards, além de idiomas e status de disponibilidade.
- Contato com canais diretos e formulário integrado ao Formspree.
- Rodapé com redes sociais e botão de voltar ao topo.

## Recursos

- Tema claro/escuro com persistência em `localStorage`.
- Idioma PT/EN com textos centralizados em um objeto JavaScript e persistência da escolha.
- Navbar fixa com `backdrop-filter`, menu hambúrguer e destaque do item ativo durante a rolagem.
- Animações de entrada com `IntersectionObserver`, respeitando `prefers-reduced-motion`.
- Validação de formulário com mensagens de sucesso/erro e proteção antispam (honeypot).
- Metadados de SEO/Open Graph, favicon, `robots.txt` e `sitemap.xml`.
- Acessibilidade: HTML semântico, `alt`, `aria-label`, link de pular conteúdo, foco visível e contraste WCAG AA.

## Stack

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 |
| Estilo | CSS puro com variáveis e temas |
| Comportamento | JavaScript puro |
| Ícones | Simple Icons e Devicon (CDN) |
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

- **Formulário:** troque o endpoint em `FORMSPREE_ENDPOINT`, no início de `script.js`, ou diretamente no `action` do formulário em `index.html` (o `script.js` aceita qualquer um dos dois).
- **Projetos:** substitua os placeholders `SE`, `PZ`, `SL` e `AV` pelas imagens reais (há um comentário com o exemplo de `<img>` em cada card) e troque os links `data-demo` pelas URLs de demonstração.
- **Currículo:** mantenha o arquivo em `assets/curriculo.pdf` ou ajuste o link de download no hero.
- **Estatísticas:** os números e rótulos do hero ficam em `index.html` (atributos `data-count`, `data-suffix` e `data-suffix-en`). Confirme o valor do card "6".
- **Cores e tipografia:** variáveis em `:root` e no bloco `[data-theme="light"]`, no início de `style.css`.
- **Textos PT/EN:** objeto `translations` em `script.js`.
- **Foto:** substitua `assets/foto.jpg` mantendo o nome.

## Estrutura

```
henriquewalker31.github.io/
├── index.html          # marcação e conteúdo
├── style.css           # tokens, temas, layout e responsividade
├── script.js           # tema, idioma, menu, animações e formulário
├── assets/
│   ├── foto.jpg
│   └── curriculo.pdf
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
