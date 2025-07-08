//prendo h2 timer
const h2 = document.querySelector("h2");

//inizializzo timer
let timer = 10;

//setInterval per far diminuire il timer di 1s
const anx = setInterval(() => {
  h2.innerText = timer;

  if (timer <= 0) {
    clearInterval(anx);
  }

  timer--;
}, 1000);
