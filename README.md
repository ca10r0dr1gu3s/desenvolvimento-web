# Desenvolvimento Web — Atividades da Disciplina

Repositório público contendo todas as entregas práticas da disciplina de Desenvolvimento Web, organizadas por pasta correspondente a cada aula.

## Estrutura do Repositório

| Pasta | Atividade | Arquivos Principais |
| :--- | :--- | :--- |
| [`aula-1/`](./aula-1/) | **Nosso primeiro HTML (sem tag semântica)** — Estrutura inicial construída com `<div>` e `<span>` | `index.html` |
| [`aula-2/`](./aula-2/) | **Nosso primeiro HTML (semântico)** — Refatoração da Aula 1 para HTML5 semântico (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) | `index.html` |
| [`aula-3/`](./aula-3/) | **Nosso primeiro form** — Estrutura básica de formulário HTML com diversos tipos de campos | `index.html` |
| [`aula-4/`](./aula-4/) | **Seu primeiro form** — Formulário de inscrição (13 campos, `POST` para `https://postman-echo.com/post`, `required`, `placeholder`, `pattern`, `select`, `radio`, `checkbox`) + JSON de resposta | `index.html`, `resposta.json` |
| [`aula-5/`](./aula-5/) | **Estilizando nosso currículo** — Estilização completa do currículo HTML disponibilizado em aula | `index.html`, `styles/style.css`, `images/miranha.jpg` |
| [`aula-6/exemplos/`](./aula-6/exemplos/) | **Exemplificando os grids (Atividade 1)** — Demonstração visual de `display: block`, `inline`, `inline-block`, `none`, `flex` e `grid` | `index.html`, `style.css` |
| [`aula-6/atividade/`](./aula-6/atividade/) | **Exemplificando os grids (Atividade 2)** — Página temática utilizando `display: grid` e `display: flex` | `index.html`, `style.css` |
| [`aula-7/`](./aula-7/) | **Nosso primeiro JavaScript** — Manipulação do DOM, eventos, saudação dinâmica, contador, alternância de tema e lista dinâmica | `index.html`, `style.css`, `script.js` |
| [`aula-8/`](./aula-8/) | **Formulário validado** — Formulário de cadastro (14 campos), máscaras JS (CPF, telefone e CEP), validação na submissão e envio via `fetch` para `https://postman-echo.com/post` com exibição do retorno em `alert()` | `index.html`, `style.css`, `script.js` |
| [`aula-9/`](./aula-9/) | **Exemplificando o `@media` e o `localStorage`** — Breakpoints responsivos (`@media`), modo de impressão (`@media print`) e persistência de preferências e notas em `localStorage` | `index.html`, `style.css`, `script.js` |

## Como Visualizar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/ca10r0dr1gu3s/desenvolvimento-web.git
   ```
2. Abra qualquer arquivo `index.html` diretamente no navegador ou utilize uma extensão como **Live Server** (VS Code) ou servidor HTTP local:
   ```bash
   python -m http.server 8080
   ```
   > **Observação sobre a Aula 8:** Ao testar `aula-8` diretamente no navegador, o envio via `fetch` aponta para `https://postman-echo.com/post`. Caso o navegador bloqueie a leitura da resposta por política de CORS desse domínio externo, uma extensão de CORS ou cliente de API permite visualizar o JSON completo no `alert()`.
