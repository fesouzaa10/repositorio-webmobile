1. Visão Geral
O ReciclaFácil é uma plataforma educativa desenvolvida para solucionar a falta de informação sobre o descarte correto de resíduos sólidos. O objetivo é levar conscientização e informação para a comunidade, ensinando de forma simples como realizar o descarte correto de diferentes materiais.

Nome: Felipe de Souza Cassemiro

RA: 10735839

2. Estrutura do Projeto
    HTML (Estrutura Semântica)
O site utiliza tags semânticas para organizar o conteúdo de forma lógica e acessível.
<section class="card azul" onclick="filtrarLixeira('papel')">
  <h3>Papel</h3>
  <p>Lixeira Azul</p>
  <ul>
    <li>Jornais</li>
    <li>Revistas</li>
  </ul>
</section>

CSS (Estilização e Layout)
O design foi focado em ser intuitivo e responsivo, adaptando-se a computadores e celulares.

.cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap; /* Garante a responsividade */
}
.card:hover {
  transform: scale(1.05);
  transition: 0.3s;
}

avaScript (Interatividade e Lógica)
O JavaScript é o "cérebro" do projeto, permitindo que o usuário interaja com os dados sem recarregar a página.

Feature 1: Banco de Dados Dinâmico
Em vez de múltiplos if/else, utilizamos um Array de Objetos para gerenciar os materiais de forma mais prática.

const materiaisDB = [
  { nome: "Jornal", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
  { nome: "Garrafa PET", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" }
];

Feature 2: Filtro por Categoria e Feedback Visual
Ao clicar em um card ou pesquisar, o sistema altera o DOM e o CSS em tempo real.

function exibirResultado(texto, cor) {
  resultado.textContent = texto;
  resultado.style.borderLeftColor = cor;
  resultado.style.display = "block";  
}

3. Funcionalidades de JavaScript Aplicadas
Busca por Nome: O usuário digita o material e o sistema localiza a lixeira correta.

Filtro por Clique: Ao clicar nos cards da home, o sistema exibe os itens daquela categoria.

Feedback Visual Adaptativo: O resultado da busca assume a cor da lixeira encontrada (Ex: borda azul para papel).

Atalho de Teclado: Suporte à tecla Enter no campo de busca para facilitar o uso.
