A minha escolha foi feita a partir do pensamento de que as pessoas não sabem reciclar ou não reciclam corretamente. O meu pensamento foi em desenvolver esse site para ajudar as pessoas a reciclarem corretamente e parar de descartar os lixos de forma incorreta. O carater extensionista desse projeto é levar a concientização e a informação para a comunidade, ensinando de forma simples como realizar o descarte correto de diferentes tipos de materiais recicláveis.
A página conterá os tipos de reciclagem, pesquisa de materiais, para saber onde ele é reciclado e a tela de início, que conterá informações sobre o site.

Nome: Felipe de Souza Cassemiro
RA: 10735839

![alt text](wireframe_desktop.pdf)
![alt text](wireframe_mobile.pdf)

ReciclaFácil
Aprenda a reciclar corretamente

Menu de navegação: o `<nav>` permite navegar entre as páginas.
Início | Pesquisar

Conteúdo principal: o `<main>` contém as seções do site.

Sobre o ReciclaFácil:
Explicação sobre o projeto e a importância da reciclagem.

Tipos de reciclagem: Cada tipo de material está dentro de um `<section>` (card).

Papel
Lixeira Azul;
Exemplos: jornais, revistas, papelão

Plástico
Lixeira Vermelha;
Exemplos: garrafas PET, sacolas

Vidro
Lixeira Verde;
Exemplos: garrafas, potes

Metal
Lixeira Amarela;
Exemplos: latas, tampas

CSS:

Flexbox: usado para organizar os cards lado a lado.

Cores: cada card tem uma cor que representa a lixeira.

Hover: efeito ao passar o mouse nos botões e cards.

Responsividade: com `@media`, o site se adapta ao celular.

Footer: fica no final da página usando Flexbox.

O JavaScript foi usado para deixar o site interativo, permitindo que o usuário pesquise um material e veja onde descartá-lo.
Como funciona:

O JavaScript pega o texto digitado pelo usuário e verifica qual material foi informado.

1 - Selecionar elementos do HTML
const input = document.querySelector("input");
const button = document.querySelector("button");
const resultado = document.querySelector("#resultado");

Explicação:
input → campo onde o usuário digita
button → botão de pesquisar
resultado → onde o texto será exibido na página

2 - Evento de clique
button.addEventListener("click", () => {

Explicação:
Executa uma ação quando o botão é clicado

3 - Pegar o valor digitado
const valor = input.value.toLowerCase().trim();

Explicação:
value → pega o texto digitado
toLowerCase() → transforma em minúsculo
trim() → remove espaços

4 - Verificação com if
if (valor.includes("papel")) {
  resultado.textContent = "Lixeira Azul";
}

Explicação:
Verifica se o texto contém determinada palavra
Mostra o resultado na tela


5 - Exibir resultado na página
resultado.textContent = "Descarte na lixeira correta";

Explicação:
Substitui o texto dentro do elemento HTML
Não usa alert → aparece direto na página

6 - Caso não encontre
else {
  resultado.textContent = "Material não encontrado";
}



