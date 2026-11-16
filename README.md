<h1 align="center">Desenvolvimento Front-End para Web</h1>

<p align="center">
  Trabalho de entrega das atividades práticas da disciplina <strong>Desenvolvimento Front-End para Web</strong><br />
  Professor: <strong>Pedro Henrique Nogueira Pizzutti</strong> · Aluno: <strong>Caio Rodrigues</strong>
</p>

<p align="center">
  <a href="#sobre-a-entrega">Sobre a entrega</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#atividades-por-aula">Atividades por aula</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#direcao-visual">Direção visual</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#como-executar">Como executar</a>
</p>

<p align="center">
  <img alt="Disciplina" src="https://img.shields.io/static/v1?label=disciplina&message=Front-End%20para%20Web&color=181715&labelColor=555555">
  <img alt="Professor" src="https://img.shields.io/static/v1?label=professor&message=Pedro%20Pizzutti&color=0d7480&labelColor=555555">
  <img alt="Stack" src="https://img.shields.io/static/v1?label=stack&message=HTML5%20%C2%B7%20CSS3%20%C2%B7%20JS&color=2456d6&labelColor=555555">
  <img alt="Aulas" src="https://img.shields.io/static/v1?label=aulas&message=aula-1%20a%20aula-9&color=14532d&labelColor=555555">
</p>

---

## Sobre a entrega

Este repositório reúne todas as atividades práticas desenvolvidas para a disciplina de **Desenvolvimento Front-End para Web**, ministrada pelo professor **Pedro Henrique Nogueira Pizzutti**.

Cada exercício está isolado na pasta correspondente à sua aula (`aula-1` até `aula-9`), mantendo separação clara entre marcação HTML, folhas de estilo CSS, scripts JavaScript e retornos JSON exigidos nas avaliações.

---

## Atividades por aula

| Pasta | Atividade | Requisitos atendidos | Arquivos |
| :--- | :--- | :--- | :--- |
| [`aula-1/`](./aula-1/) | **Nosso primeiro HTML (sem tag semântica)** | Estrutura inicial usando apenas `<div>`, `<span>`, títulos, parágrafos, listas e links, sem tags semânticas | [`index.html`](./aula-1/index.html) |
| [`aula-2/`](./aula-2/) | **Nosso primeiro HTML (semântico)** | Conversão da página da Aula 1 para HTML5 semântico (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `time`, `address`) | [`index.html`](./aula-2/index.html) |
| [`aula-3/`](./aula-3/) | **Nosso primeiro form** | Formulário estruturado com `fieldset`, `legend`, rótulos associados, inputs variados, `select` e `textarea` | [`index.html`](./aula-3/index.html) |
| [`aula-4/`](./aula-4/) | **Seu primeiro form** | Envio via `POST` para `https://postman-echo.com/post`, 13 campos nomeados, `required`, `placeholder`, `pattern`, `select`, `radio`, `checkbox` e JSON de resposta | [`index.html`](./aula-4/index.html), [`resposta.json`](./aula-4/resposta.json) |
| [`aula-5/`](./aula-5/) | **Estilizando nosso currículo** | Estilização editorial do currículo HTML disponibilizado em aula (`Currículo Spider-Man`), preservando a estrutura e os caminhos relativos originais | [`index.html`](./aula-5/index.html), [`styles/style.css`](./aula-5/styles/style.css), [`images/miranha.jpg`](./aula-5/images/miranha.jpg) |
| [`aula-6/exemplos/`](./aula-6/exemplos/) | **Exemplificando os grids (Atividade 1)** | Demonstração prática de `display`: `block`, `inline`, `inline-block`, `none`, `visibility: hidden`, `flex` e `grid` | [`index.html`](./aula-6/exemplos/index.html), [`style.css`](./aula-6/exemplos/style.css) |
| [`aula-6/atividade/`](./aula-6/atividade/) | **Exemplificando os grids (Atividade 2)** | Página temática (*Oficina Araucária*) construída combinando `display: flex` e `display: grid` assimétricos | [`index.html`](./aula-6/atividade/index.html), [`style.css`](./aula-6/atividade/style.css) |
| [`aula-7/`](./aula-7/) | **Nosso primeiro JavaScript** | Manipulação de DOM, eventos, saudação dinâmica, contador com feedback visual, lista interativa e alternância de tema | [`index.html`](./aula-7/index.html), [`style.css`](./aula-7/style.css), [`script.js`](./aula-7/script.js) |
| [`aula-8/`](./aula-8/) | **Formulário validado** | Cadastro com 14 campos, máscaras em tempo real (CPF, telefone e CEP), validação na submissão, envio via `fetch` para `https://postman-echo.com/post` e exibição do retorno em `alert()` | [`index.html`](./aula-8/index.html), [`style.css`](./aula-8/style.css), [`script.js`](./aula-8/script.js) |
| [`aula-9/`](./aula-9/) | **Exemplificando o `@media` e o `localStorage`** | Breakpoints responsivos (`@media`), `@media print`, `prefers-reduced-motion` e persistência de preferências e notas em `localStorage` com inspetor ao vivo | [`index.html`](./aula-9/index.html), [`style.css`](./aula-9/style.css), [`script.js`](./aula-9/script.js) |

---

## Direção visual

As páginas estilizadas a partir da Aula 3 seguem uma direção visual autoral inspirada nas boas práticas de [design-without-ai-look](https://github.com/scillapinheiro/design-without-ai-look) e [taste-skill](https://github.com/Leonxlnx/taste-skill):

- **Identidade específica por atividade:** cada entrega utiliza paleta própria, tema realista e composição adequada ao conteúdo, evitando gradientes genéricos, pílulas decorativas em excesso e layouts repetidos.
- **Tipografia com intenção:** combinação de famílias como *Source Serif 4*, *Hanken Grotesk*, *Schibsted Grotesk*, *IBM Plex Sans*, *Instrument Sans*, *Manrope*, *Onest* e *JetBrains Mono*, com contraste verificado.
- **Código limpo e acessível:** HTML5 semântico, variáveis CSS declaradas no `:root`, respeito a `prefers-reduced-motion` e foco visível para navegação por teclado.

---

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/ca10r0dr1gu3s/desenvolvimento-web.git
   ```
2. Entre na pasta do projeto e inicie um servidor estático local (ou abra com a extensão **Live Server**):
   ```bash
   cd desenvolvimento-web
   python -m http.server 8080
   ```
3. Acesse `http://localhost:8080/aula-1/` até `http://localhost:8080/aula-9/` no navegador.

> **Observação sobre a Aula 8:** O envio em `aula-8/script.js` realiza `POST` diretamente para `https://postman-echo.com/post`. Caso o navegador bloqueie a leitura da resposta via `fetch` por ausência de cabeçalho CORS no servidor externo durante testes locais, uma extensão de CORS liberada no navegador permite exibir o JSON completo no `alert()`.
