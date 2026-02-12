// ATIVAR LINK DO MENU

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("active");
  }
}

links.forEach(ativarLink);

// LINKS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);

  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTES

const questions = document.querySelectorAll(".questions button");

function active__question(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("active");
  const ativa = resposta.classList.contains("active");

  pergunta.setAttribute("aria-expanded", ativa);
}

function event__question(pergunta) {
  pergunta.addEventListener("click", active__question);
}

questions.forEach(event__question);
