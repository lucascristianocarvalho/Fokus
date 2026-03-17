const botoes = document.querySelectorAll(".appCardButton");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    botao.classList.add("active");
  });
});

function AlterarContexto() {
  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });
}
botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    AlterarContexto(); // limpa todos
    botao.classList.add("active"); // ativa o clicado
  });
});