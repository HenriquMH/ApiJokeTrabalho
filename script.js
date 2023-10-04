const botao1 = document.getElementById("esquerdo");
const botao2 = document.getElementById("direito");
const escondido = document.getElementById("mostrar");

botao1.addEventListener("click", () => {
  escondido.style.display = "block";
});
botao2.addEventListener("click", () => {
  escondido.style.display = "block";
});

/* ^ Escondidinho ^ */

function resizeImages1() {
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const escolha = document.getElementById("botoes");
  const mud1 = document.getElementById("mudar1");
  const mud2 = document.getElementById("mudar2");
  const btP = document.getElementById("botaoPiada");
  const btPS = document.getElementById("botaoPiadaSafe");

  if (image1.style.width === "92%") {
    image1.style.width = "50%";
    image2.style.width = "50%";
  } else {
    image1.style.width = "92%";
    image2.style.width = "8%";
    escolha.style.display = "none";
    mud1.style.display = "none";
    mud2.style.display = "block";
    btP.style.display = "block";
    btPS.style.display = "none";
  }
}

function resizeImages2() {
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");
  const escolha = document.getElementById("botoes");
  const mud1 = document.getElementById("mudar1");
  const mud2 = document.getElementById("mudar2");
  const btP = document.getElementById("botaoPiada");
  const btPS = document.getElementById("botaoPiadaSafe");

  if (image1.style.width === "8%") {
    image1.style.width = "50%";
    image2.style.width = "50%";
  } else {
    image1.style.width = "8%";
    image2.style.width = "92%";
    escolha.style.display = "none";
    mud1.style.display = "block";
    mud2.style.display = "none";
    btP.style.display = "none";
    btPS.style.display = "block";
  }
}

/* ^ Fundo ^ */

function getJoke() {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => response.json())
    .then((data) => {
      if (data.type === "single") {
        document.getElementById("joke").textContent = data.joke;
      } else if (data.type === "twopart") {
        document.getElementById(
          "joke"
        ).textContent = `${data.setup} ${data.delivery}`;
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao buscar a piada:", error);
    });
}

/* 👆 Any 👆 */

/* 👇 Safe 👇 */

function getSafeJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?lang=en&type=single&safe-mode')
      .then(response => response.json())
      .then(data => {
          document.getElementById('joke').textContent = data.joke;
      })
      .catch(error => {
          console.error('Ocorreu um erro ao buscar a piada:', error);
      });
}