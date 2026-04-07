//Banco de dados dos materiais

const materiaisDB = [
  { nome: "Jornal", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
  { nome: "Revista", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
  { nome: "Papelão", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
  { nome: "Garrafa PET", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" },
  { nome: "Sacola", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" },
  { nome: "Pote", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" },
  { nome: "Garrafa de Vidro", categoria: "vidro", cor: "#4caf50", msg: "VERDE" },
  { nome: "Pote de Vidro", categoria: "vidro", cor: "#4caf50", msg: "VERDE" },
  { nome: "Lata de Alumínio", categoria: "metal", cor: "#fbc02d", msg: "AMARELA" },
  { nome: "Lata de Aço", categoria: "metal", cor: "#fbc02d", msg: "AMARELA" }
];

const input = document.querySelector("input");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");

//Filtro por clique

function filtrarLixeira(categoria) {
  const itens = materiaisDB.filter(m => m.categoria === categoria);
  const nomes = itens.map(m => m.nome).join(", ");
  const corBase = itens[0].cor;

  exibirResultado(`Itens comuns: ${nomes}`, corBase);
}

// Função de Pesquisa

button.addEventListener("click", () => {
  const valor = input.value.toLowerCase().trim();

  if (valor === "") {
    exibirResultado("Digite um material!", "#333");
    return;
  }

  // Busca no banco de dados
  
  const achado = materiaisDB.find(m => 
    m.nome.toLowerCase().includes(valor) || 
    m.categoria.includes(valor)
  );

  if (achado) {
    exibirResultado(`Descarte na lixeira ${achado.msg} (${achado.categoria})`, achado.cor);
  } else {
    exibirResultado("Material não encontrado.", "#777");
  }
});

//Feedback dinâmico
function exibirResultado(texto, cor) {
  resultado.textContent = texto;
  resultado.style.borderLeftColor = cor;
  resultado.style.color = cor;
  resultado.style.backgroundColor = cor + "11"; 
  resultado.style.display = "block"; // Faz o card aparecer apenas agora
}
// Pesquisa com o enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") button.click();
});
