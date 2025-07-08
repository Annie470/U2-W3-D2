//prendo h2 timer
const h2 = document.querySelector("h2");

//inizializzo timer
let timer = 60;

//tempo trascorso
let trascorso = sessionStorage.getItem("trascorso");
trascorso = trascorso ? parseInt(trascorso) : 0;

//rimanente
let rimasto = timer - trascorso;

//setInterval per far diminuire il timer di 1s
const anx = setInterval(() => {
  h2.innerText = rimasto;

  if (rimasto <= 0) {
    clearInterval(anx);
    sessionStorage.removeItem("trascorso");
  } else {
    trascorso++;
    sessionStorage.setItem("trascorso", trascorso);
    rimasto--;
  }
}, 1000);
