// Aula 7: Manipulação do DOM, eventos, contador e lista dinâmica

document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.getElementById("btn-tema");
  btnTema.addEventListener("click", () => {
    const escuroAtivo = document.body.classList.toggle("dark");
    btnTema.textContent = escuroAtivo ? "Ativar Modo Claro" : "Ativar Modo Escuro";
  });

  const inputNome = document.getElementById("input-nome");
  const btnSaudar = document.getElementById("btn-saudar");
  const msgSaudacao = document.getElementById("mensagem-saudacao");

  function atualizarSaudacao() {
    const nome = inputNome.value.trim();
    const hora = new Date().getHours();
    const periodo = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";

    if (!nome) {
      msgSaudacao.textContent = `${periodo}. Digite seu nome acima para personalizar a saudação.`;
      return;
    }

    msgSaudacao.textContent = `${periodo}, ${nome}! Você acabou de manipular o DOM com JavaScript.`;
  }

  btnSaudar.addEventListener("click", atualizarSaudacao);
  inputNome.addEventListener("keydown", (event) => {
    if (event.key === "Enter") atualizarSaudacao();
  });

  let contador = 0;
  const visorContador = document.getElementById("valor-contador");
  const btnAumentar = document.getElementById("btn-aumentar");
  const btnDiminuir = document.getElementById("btn-diminuir");
  const btnZerar = document.getElementById("btn-zerar");

  function renderizarContador() {
    visorContador.textContent = contador;
    visorContador.classList.remove("positivo", "negativo");
    if (contador > 0) visorContador.classList.add("positivo");
    if (contador < 0) visorContador.classList.add("negativo");
  }

  btnAumentar.addEventListener("click", () => {
    contador += 1;
    renderizarContador();
  });

  btnDiminuir.addEventListener("click", () => {
    contador -= 1;
    renderizarContador();
  });

  btnZerar.addEventListener("click", () => {
    contador = 0;
    renderizarContador();
  });

  const inputItem = document.getElementById("input-item");
  const btnAdicionar = document.getElementById("btn-adicionar");
  const listaItens = document.getElementById("lista-itens");

  function adicionarItem(textoInicial) {
    const texto = (textoInicial ?? inputItem.value).trim();
    if (!texto) return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = texto;

    const btnRemover = document.createElement("button");
    btnRemover.type = "button";
    btnRemover.className = "btn-remover";
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", () => li.remove());

    li.append(span, btnRemover);
    listaItens.appendChild(li);

    if (textoInicial === undefined) {
      inputItem.value = "";
      inputItem.focus();
    }
  }

  btnAdicionar.addEventListener("click", () => adicionarItem());
  inputItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") adicionarItem();
  });

  adicionarItem("Praticar eventos addEventListener");
  adicionarItem("Entender querySelector e getElementById");
});
