O **ReciclaFácil** é uma plataforma educativa desenvolvida para conscientizar a comunidade sobre o descarte correto de resíduos sólidos. O projeto utiliza tecnologias web para ensinar, de forma simples e interativa, como separar diferentes tipos de materiais recicláveis.

**Nome:** Felipe de Souza Cassemiro  
**RA:** 10735839

---

## 1. Estrutura do Projeto (HTML)

O site foi construído com **HTML5 semântico** para garantir organização e acessibilidade. Abaixo, um exemplo de como os cards de materiais foram estruturados para permitir a interação via JavaScript:

```html
<section class="card azul" onclick="filtrarLixeira('papel')">
  <h3>Papel</h3>
  <p>Lixeira Azul</p>
  <ul>
    <li>Jornais</li>
    <li>Revistas</li>
    <li>Caixas de papelão</li>
  </ul>
</section>
```
* **Tags utilizadas:** `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`.
* **Destaque:** O atributo `onclick` permite que o card funcione como um botão de filtro.

---

## 2. Estilização e Layout (CSS)

O design foca na experiência do usuário e na **responsividade** (adaptação para celulares).

```css
/* Layout Flexbox para organizar os cards lado a lado */
.cards {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap; /* Ajuste automático para telas menores */
}

/* Efeito Hover para indicar interatividade */
.card:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
```
* **Identificação:** Cada categoria usa cores específicas (Ex: azul para papel, vermelho para plástico) para reforçar o aprendizado visual.

---

## 3. Lógica Interativa (JavaScript)

O JavaScript foi implementado para transformar o site em uma aplicação dinâmica. Foram aplicadas duas features principais:

### Feature 1: Banco de Dados de Materiais
Utilizamos um **Array de Objetos** para centralizar as informações, facilitando a busca e a manutenção do código.

```javascript
const materiaisDB = [
  { nome: "Jornal", categoria: "papel", cor: "#2196f3", msg: "AZUL" },
  { nome: "Garrafa PET", categoria: "plastico", cor: "#f44336", msg: "VERMELHA" }
];
```

### Feature 2: Filtro por Categoria e Feedback Visual
Esta função altera o **DOM** (conteúdo da página) e o **CSS** dinamicamente quando o usuário interage com o site.

```javascript
function exibirResultado(texto, cor) {
  const resultado = document.querySelector("#resultado");
  resultado.textContent = texto;
  resultado.style.borderLeftColor = cor; // Muda a cor da borda via JS
  resultado.style.display = "block";    // Exibe o card de resultado
}
```

---

## 4. Funcionalidades Aplicadas
* **Busca Inteligente:** Localiza a lixeira correta através do nome do material.
* **Lixeira Dinâmica:** Ao clicar em um card da Home, o sistema lista o que pode ser descartado ali.
* **Resposta Visual:** O resultado da busca assume a cor da lixeira correspondente.
* **UX (Experiência):** Suporte à tecla `Enter` para realizar pesquisas de forma rápida.
