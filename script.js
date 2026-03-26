const input = document.querySelector("input");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");

button.addEventListener("click", () => {

  const valor = input.value.toLowerCase().trim();

  if (valor === "") {
    resultado.textContent = "Digite um material!";
    return;
  }

  if (
    valor.includes("papel") ||
    valor.includes("jornal") ||
    valor.includes("revista") ||
    valor.includes("papelão")
  ) {
    resultado.textContent = "Descarte na lixeira AZUL (Papel)";
  }

  else if (
    valor.includes("plastico") ||
    valor.includes("plástico") ||
    valor.includes("garrafa") ||
    valor.includes("pet") ||
    valor.includes("sacola")
  ) {
    resultado.textContent = "Descarte na lixeira VERMELHA (Plástico)";
  }

  else if (
    valor.includes("vidro") ||
    valor.includes("garrafa de vidro") ||
    valor.includes("pote de vidro")
  ) {
    resultado.textContent = "Descarte na lixeira VERDE (Vidro)";
  }

  else if (
    valor.includes("metal") ||
    valor.includes("lata") ||
    valor.includes("aluminio") ||
    valor.includes("alumínio")
  ) {
    resultado.textContent = "Descarte na lixeira AMARELA (Metal)";
  }

  else {
    resultado.textContent = "Material não encontrado.";
  }

});