//trovo i bottoni
const bSave = document.getElementById("btn-save");
const bCanc = document.getElementById("btn-canc");
//trovo l'input
const input = document.querySelector("input");
//creo key per LS
const key = "user";

//mostro user se presente
const getValue = () => localStorage.getItem(key);
let user = getValue();
const form = document.querySelector("form");
const h4 = document.createElement("h4");
h4.classList.add("my-3");
form.appendChild(h4);
if (user !== null) {
  h4.innerText = `User logged: ${user}`;
} else {
  h4.innerText = `No logged user`;
}

//salvo la value dell input nel local storage con bottone save
bSave.addEventListener("click", () => {
  localStorage.setItem(key, input.value);
  user = getValue();
  h4.innerText = `User logged: ${user}`;
  form.reset();
});

//elimino value da ls con bottone canc
bCanc.addEventListener("click", () => {
  //prendo value da LS
  user = getValue();
  user ? localStorage.removeItem(key) : alert(`Empty user`);
  h4.innerText = `No logged user`;
});
