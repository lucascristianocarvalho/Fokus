const html = document.querySelector("html");
const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const startPauseBt = document.querySelector("#start-pause");
const musicaFocoImput = document.querySelector("#alternar-musica");
const iniciarOuPausarBt = document.querySelector("#start-pause span");
const icone = document.querySelector(".app__card-primary-button-icon");
const tempoNaTela = document.querySelector("#timer");
const musica = new Audio("./sons/sons_luna-rise-part-one.mp3");
const playSom = new Audio("./sons/sons_play.wav");
const pauseSom = new Audio("./sons/sons_pause.mp3");
const beepSom = new Audio("./sons/sons_beep.mp3");

let estaEmPlay = true;
let tempoDecorridoSegundos = 1500;
let intervaloID = null;
musica.loop = true;

musicaFocoImput.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

focoBt.addEventListener("click", () => {
  tempoDecorridoSegundos = 1500;
  alterarContexto("foco");
  focoBt.classList.add("active");
  /*  html.setAttribute("data-contexto", "foco");
  banner.setAttribute("src", "/imagens/foco.png"); */
});

curtoBt.addEventListener("click", () => {
  tempoDecorridoSegundos = 300;
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
  /*   html.setAttribute("data-contexto", "descanso-curto");
  banner.setAttribute("src", "/imagens/descanso-curto.png"); */
});

longoBt.addEventListener("click", () => {
  tempoDecorridoSegundos = 900;
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
  /*   html.setAttribute("data-contexto", "descanso-longo");
  banner.setAttribute("src", "/imagens/descanso-longo.png"); */
});

function alterarContexto(contexto) {
  mostrarTempo();
  botoes.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `./imagens/${contexto}.png`);
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,
          <strong class="app__title-strong">mergulhe no que importa.</strong>`;

      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?
          <strong class="app__title-strong">Faça uma pausa curta!</strong>`;

      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.
          <strong class="app__title-strong">Faça uma pausa longa.</strong>`;

    default:
      break;
  }
}

const contagemRegreciva = () => {
  if (tempoDecorridoSegundos <= 0) {
    beepSom.play();
    alert("tempo finalizado");
    zerar();
    return;
  }

  tempoDecorridoSegundos -= 1;
  mostrarTempo();
};

startPauseBt.addEventListener("click", iniciarOuPausar);
function iniciarOuPausar() {
  if (intervaloID) {
    pauseSom.currentTime = 0;
    pauseSom.play();

    icone.src = "/imagens/play_arrow.png";

    zerar();
    return;
  }

  playSom.play();

  icone.src = "/imagens/pause.png";

  intervaloID = setInterval(contagemRegreciva, 1000);
  iniciarOuPausarBt.textContent = "Pausar";
}

function zerar() {
  clearInterval(intervaloID);
  iniciarOuPausarBt.textContent = "Começar";
  intervaloID = null;
}

function mostrarTempo() {
  const tempo = new Date(tempoDecorridoSegundos * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();
