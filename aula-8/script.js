// Aula 8 — Formulário de Cadastro Validado + Máscaras + POST em https://postman-echo.com/post

const API_URL = "https://postman-echo.com/post";

function apenasDigitos(valor) {
  return valor.replace(/\D/g, "");
}

// Máscara de CPF: 000.000.000-00
function mascararCPF(valor) {
  const digitos = apenasDigitos(valor).slice(0, 11);
  return digitos
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

// Máscara de Telefone: (00) 0000-0000 ou (00) 00000-0000
function mascararTelefone(valor) {
  const digitos = apenasDigitos(valor).slice(0, 11);
  if (digitos.length <= 10) {
    return digitos
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }
  return digitos
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

// Máscara de CEP: 00000-000
function mascararCEP(valor) {
  const digitos = apenasDigitos(valor).slice(0, 8);
  return digitos.replace(/(\d{5})(\d)/, "$1-$2");
}

// Validação algorítmica completa de CPF
function validarCPF(cpfFormatado) {
  const cpf = apenasDigitos(cpfFormatado);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  const calcularDigito = (base, pesoInicial) => {
    let soma = 0;
    for (let i = 0; i < base.length; i += 1) {
      soma += Number(base[i]) * (pesoInicial - i);
    }
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  const d1 = calcularDigito(cpf.slice(0, 9), 10);
  const d2 = calcularDigito(cpf.slice(0, 10), 11);
  return d1 === Number(cpf[9]) && d2 === Number(cpf[10]);
}

function validarIdadeMinima(dataISO, idadeMinima = 16) {
  if (!dataISO) return false;
  const nascimento = new Date(`${dataISO}T00:00:00`);
  if (Number.isNaN(nascimento.getTime())) return false;

  const hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const diferencaMes = hoje.getMonth() - nascimento.getMonth();
  if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade -= 1;
  }
  return idade >= idadeMinima && idade <= 120;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  const btnEnviar = document.getElementById("btn-enviar");
  const btnLimpar = document.getElementById("btn-limpar");
  const statusEnvio = document.getElementById("status-envio");

  // Vincula máscaras em tempo real aos campos configurados
  const mascaras = {
    cpf: mascararCPF,
    telefone: mascararTelefone,
    cep: mascararCEP,
  };

  Object.entries(mascaras).forEach(([id, fnMascara]) => {
    const input = document.getElementById(id);
    input.addEventListener("input", (event) => {
      event.target.value = fnMascara(event.target.value);
    });
  });

  // Regras declarativas de validação para todos os 14 campos
  const regrasValidacao = [
    {
      id: "nome",
      validar: (v) => v.trim().split(/\s+/).length >= 2 && v.trim().length >= 5,
      mensagem: "Informe seu nome completo (nome e sobrenome).",
    },
    {
      id: "cpf",
      validar: (v) => validarCPF(v),
      mensagem: "Informe um CPF válido no formato 000.000.000-00.",
    },
    {
      id: "dataNascimento",
      validar: (v) => validarIdadeMinima(v, 16),
      mensagem: "Informe uma data válida (idade mínima de 16 anos).",
    },
    {
      id: "email",
      validar: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
      mensagem: "Informe um endereço de e-mail válido.",
    },
    {
      id: "telefone",
      validar: (v) => {
        const len = apenasDigitos(v).length;
        return len === 10 || len === 11;
      },
      mensagem: "Informe um telefone válido com DDD (10 ou 11 dígitos).",
    },
    {
      id: "cep",
      validar: (v) => apenasDigitos(v).length === 8,
      mensagem: "Informe um CEP válido com 8 dígitos.",
    },
    {
      id: "logradouro",
      validar: (v) => v.trim().length >= 3,
      mensagem: "Informe o logradouro.",
    },
    {
      id: "numero",
      validar: (v) => v.trim().length >= 1,
      mensagem: "Informe o número (ou S/N).",
    },
    {
      id: "cidade",
      validar: (v) => v.trim().length >= 2,
      mensagem: "Informe a cidade.",
    },
    {
      id: "estado",
      validar: (v) => v !== "",
      mensagem: "Selecione um estado.",
    },
    {
      id: "perfil",
      validar: (v) => v !== "",
      mensagem: "Selecione o perfil da conta.",
    },
    {
      id: "senha",
      validar: (v) => /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(v),
      mensagem: "A senha deve ter no mínimo 8 caracteres, com letras e números.",
    },
    {
      id: "confirmarSenha",
      validar: (v) => v.length > 0 && v === document.getElementById("senha").value,
      mensagem: "As senhas informadas não conferem.",
    },
    {
      id: "termos",
      tipo: "checkbox",
      validar: (_, el) => el.checked,
      mensagem: "Você deve aceitar os termos para concluir o cadastro.",
    },
  ];

  function aplicarEstadoCampo(regra) {
    const el = document.getElementById(regra.id);
    const erroEl = document.getElementById(`erro-${regra.id}`);
    const valido = regra.validar(el.value, el);

    if (regra.tipo !== "checkbox") {
      el.classList.toggle("is-invalid", !valido);
      el.classList.toggle("is-valid", valido);
    }
    el.setAttribute("aria-invalid", String(!valido));
    erroEl.textContent = valido ? "" : regra.mensagem;

    return { el, valido };
  }

  function limparStatus() {
    statusEnvio.className = "status-envio";
    statusEnvio.textContent = "";
  }

  function mostrarStatus(tipo, texto) {
    statusEnvio.className = `status-envio visivel ${tipo}`;
    statusEnvio.textContent = texto;
  }

  btnLimpar.addEventListener("click", () => {
    regrasValidacao.forEach(({ id }) => {
      const el = document.getElementById(id);
      const erroEl = document.getElementById(`erro-${id}`);
      el.classList.remove("is-invalid", "is-valid");
      el.removeAttribute("aria-invalid");
      erroEl.textContent = "";
    });
    limparStatus();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    limparStatus();

    let primeiroInvalido = null;
    let todosValidos = true;

    regrasValidacao.forEach((regra) => {
      const { el, valido } = aplicarEstadoCampo(regra);
      if (!valido) {
        todosValidos = false;
        if (!primeiroInvalido) {
          primeiroInvalido = el;
        }
      }
    });

    if (!todosValidos) {
      mostrarStatus("erro", "Existem campos inválidos. Corrija os itens destacados antes de enviar.");
      primeiroInvalido.focus();
      return;
    }

    const dados = new URLSearchParams();
    regrasValidacao.forEach(({ id, tipo }) => {
      if (id === "confirmarSenha") return;
      const el = document.getElementById(id);
      dados.append(id, tipo === "checkbox" ? String(el.checked) : el.value.trim());
    });

    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando...";

    try {
      const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: dados.toString(),
      });

      if (!resposta.ok) {
        throw new Error(`HTTP ${resposta.status} - ${resposta.statusText}`);
      }

      const jsonRetorno = await resposta.json();
      mostrarStatus("sucesso", "Cadastro validado e enviado com sucesso para https://postman-echo.com/post.");
      alert(`Retorno da API (https://postman-echo.com/post):\n\n${JSON.stringify(jsonRetorno, null, 2)}`);
    } catch (erro) {
      const msgErro = `Não foi possível ler a resposta de ${API_URL} diretamente pelo navegador (${erro.message}). Se estiver testando localmente sem extensão de CORS, o servidor postman-echo.com bloqueia a leitura da resposta via fetch.`;
      mostrarStatus("erro", msgErro);
      alert(msgErro);
    } finally {
      btnEnviar.disabled = false;
      btnEnviar.textContent = "Validar e Enviar Cadastro";
    }
  });
});
