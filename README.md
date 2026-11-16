# Portfólio — Joanes Henrique Walker Cunha

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-online-222?logo=githubpages&logoColor=white)](https://henriquewalker31.github.io/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

Página pessoal de portfólio com apresentação profissional, experiência, projetos, habilidades, formação, idiomas e formulário de contato. Todo o site vive em um único `index.html`, sem build e sem dependências instaladas localmente.

**Online:** <https://henriquewalker31.github.io/>

## Seções

- Hero com resumo profissional, localização e link para o currículo.
- Experiência profissional e projetos pessoais com links para os repositórios.
- Habilidades técnicas, formação acadêmica, capacitações e idiomas.
- Contato com e-mail, telefone, LinkedIn e GitHub.
- Formulário de contato integrado ao EmailJS.
- Tema claro/escuro automático via `prefers-color-scheme`.
- Animações de entrada e contadores com `IntersectionObserver`.

## Stack

| Camada | Tecnologia |
|---|---|
| Marcação | HTML5 |
| Estilo | CSS puro com variáveis e media query de tema |
| Comportamento | JavaScript puro |
| Ícones | Tabler Icons (CDN) |
| Formulário | EmailJS (client-side) |
| Hospedagem | GitHub Pages |

## Como visualizar localmente

Abra `index.html` diretamente no navegador ou sirva a pasta com Python:

```bash
git clone https://github.com/Henriquewalker31/henriquewalker31.github.io.git
cd henriquewalker31.github.io
python -m http.server 8000
```

Depois acesse <http://localhost:8000>.

## Deploy

O site é publicado pelo GitHub Pages a partir da branch `main`, na raiz do repositório.

```bash
git add .
git commit -m "docs: atualiza conteudo"
git push origin main
```

O Pages reconstrói automaticamente após o push.

## Estrutura

```
henriquewalker31.github.io/
└── index.html    # HTML, CSS e JavaScript do site
```

## Personalização

- Cores e tipografia: variáveis CSS em `:root`, no início do `<style>`.
- Contato: links de e-mail, telefone, LinkedIn e GitHub na seção de contato.
- Formulário: `emailjs.init(...)` e os IDs de serviço/template no final do arquivo.
- Projetos: cards com nome, descrição, stack e link para o repositório.

A chave pública do EmailJS é usada no navegador por design. Não coloque ali chaves privadas, tokens de API ou dados sensíveis.

## Autor

Feito por [Joanes Henrique Walker Cunha](https://github.com/Henriquewalker31).
