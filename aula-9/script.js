// Aula 9 — Exemplos práticos de @media (viewport) e localStorage

const CHAVES = {
  tema: "aula9_tema",
  nome: "aula9_usuario",
  fonte: "aula9_fonte",
  notas: "aula9_notas",
};

document.addEventListener("DOMContentLoaded", () => {
  const btnTema = document.getElementById("btn-tema");
  const btnImprimir = document.getElementById("btn-imprimir");
  const resolucaoAtual = document.getElementById("resolucao-atual");
  const boasVindas = document.getElementById("boas-vindas");

  const inputNome = document.getElementById("nome-usuario");
  const btnSalvarNome = document.getElementById("btn-salvar-nome");
  const selectFonte = document.getElementById("tamanho-fonte");
  const inputNota = document.getElementById("nova-nota");
  const btnAddNota = document.getElementById("btn-add-nota");
  const listaNotas = document.getElementById("lista-notas");
  const inspetorStorage = document.getElementById("inspetor-storage");
  const btnLimparStorage = document.getElementById("btn-limpar-storage");

  // Atualiza indicador de largura da janela para acompanhar os breakpoints @media
  function atualizarResolucao() {
    const largura = window.innerWidth;
    const faixa = largura >= 1024 ? "Desktop" : largura >= 641 ? "Tablet" : "Mobile";
    resolucaoAtual.textContent = `Largura: ${largura}px (${faixa})`;
  }

  // Atualiza o inspetor visual com todas as chaves salvas no localStorage
  function renderizarInspetor() {
    if (localStorage.length === 0) {
      inspetorStorage.textContent = "// localStorage vazio no momento.";
      return;
    }

    const conteudo = {};
    for (let i = 0; i < localStorage.length; i += 1) {
      const chave = localStorage.key(i);
      const valorBruto = localStorage.getItem(chave);
      try {
        conteudo[chave] = JSON.parse(valorBruto);
      } catch {
        conteudo[chave] = valorBruto;
      }
    }
    inspetorStorage.textContent = JSON.stringify(conteudo, null, 2);
  }

  function aplicarTema(tema) {
    const escuro = tema === "escuro";
    document.body.classList.toggle("tema-escuro", escuro);
    btnTema.textContent = escuro ? "Modo Claro" : "Modo Escuro";
  }

  function aplicarFonte(tamanho) {
    document.body.classList.remove("fonte-pequena", "fonte-normal", "fonte-grande");
    document.body.classList.add(`fonte-${tamanho}`);
    selectFonte.value = tamanho;
  }

  function atualizarSaudacao(nome) {
    boasVindas.textContent = nome
      ? `Olá, ${nome}! Suas preferências estão salvas no localStorage.`
      : "Aula 9 — Responsividade com Media Queries e persistência local no navegador.";
  }

  function obterNotas() {
    const salvo = localStorage.getItem(CHAVES.notas);
    if (!salvo) return [];
    try {
      const parsed = JSON.parse(salvo);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function salvarNotas(notas) {
    if (notas.length === 0) {
      localStorage.removeItem(CHAVES.notas);
    } else {
      localStorage.setItem(CHAVES.notas, JSON.stringify(notas));
    }
  }

  function renderizarNotas() {
    const notas = obterNotas();
    listaNotas.innerHTML = "";

    notas.forEach((texto, indice) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = texto;

      const btnRemover = document.createElement("button");
      btnRemover.type = "button";
      btnRemover.className = "btn-remover-nota no-print";
      btnRemover.textContent = "Excluir";
      btnRemover.addEventListener("click", () => {
        const atualizadas = obterNotas().filter((_, i) => i !== indice);
        salvarNotas(atualizadas);
        renderizarNotas();
        renderizarInspetor();
      });

      li.append(span, btnRemover);
      listaNotas.appendChild(li);
    });
  }

  // Eventos de UI
  btnTema.addEventListener("click", () => {
    const proximoTema = document.body.classList.contains("tema-escuro") ? "claro" : "escuro";
    localStorage.setItem(CHAVES.tema, proximoTema);
    aplicarTema(proximoTema);
    renderizarInspetor();
  });

  btnImprimir.addEventListener("click", () => window.print());

  btnSalvarNome.addEventListener("click", () => {
    const nome = inputNome.value.trim();
    if (nome) {
      localStorage.setItem(CHAVES.nome, nome);
    } else {
      localStorage.removeItem(CHAVES.nome);
    }
    atualizarSaudacao(nome);
    renderizarInspetor();
  });

  selectFonte.addEventListener("change", () => {
    const tamanho = selectFonte.value;
    localStorage.setItem(CHAVES.fonte, tamanho);
    aplicarFonte(tamanho);
    renderizarInspetor();
  });

  function adicionarNota() {
    const texto = inputNota.value.trim();
    if (!texto) return;

    const notas = obterNotas();
    notas.push(texto);
    salvarNotas(notas);
    inputNota.value = "";
    renderizarNotas();
    renderizarInspetor();
  }

  btnAddNota.addEventListener("click", adicionarNota);
  inputNota.addEventListener("keydown", (event) => {
    if (event.key === "Enter") adicionarNota();
  });

  btnLimparStorage.addEventListener("click", () => {
    localStorage.clear();
    inputNome.value = "";
    aplicarTema("claro");
    aplicarFonte("normal");
    atualizarSaudacao("");
    renderizarNotas();
    renderizarInspetor();
  });

  // Inicialização restaurando dados salvos do localStorage
  aplicarTema(localStorage.getItem(CHAVES.tema) || "claro");
  aplicarFonte(localStorage.getItem(CHAVES.fonte) || "normal");

  const nomeSalvo = localStorage.getItem(CHAVES.nome) || "";
  inputNome.value = nomeSalvo;
  atualizarSaudacao(nomeSalvo);

  renderizarNotas();
  renderizarInspetor();
  atualizarResolucao();
  window.addEventListener("resize", atualizarResolucao);
});
