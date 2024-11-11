// Prendo i 5 h1 dentro
const arrayH1 = document.querySelectorAll(".col-auto h1");

const arrayDiv = document.querySelectorAll(".col-auto");
// console.log(arrayDiv[2].innerHTML =`<input type="number">` );

// Prendo il bottone genera
const generaBtn = document.getElementById("btnGenera");

// Prendo il bottone convalida
const convalidaBtn = document.getElementById("btnConvalida");

// Prendo il form
const form = document.querySelector("form");
// console.log(form);

// Assegna numeri random agli elementi di arrayH1
assegnaRandomNumber(arrayH1);
let varTimeout = setTimeout(() => {
  resetNumbers(arrayH1);
  inserisciInput(arrayDiv);
  generaBtn.classList.add("d-none");
  convalidaBtn.classList.remove("d-none");
}, 5 * 1000);

// Al click del bottone rigenera i numeri random
generaBtn.addEventListener("click", () => {
  assegnaRandomNumber(arrayH1);
  // Libero variabile timeout iniziale
  clearTimeout(varTimeout);
  // Assegno nuovo timeout
  varTimeout = setTimeout(() => {
    resetNumbers(arrayH1);
    inserisciInput(arrayDiv);
    generaBtn.classList.add("d-none");
    convalidaBtn.classList.remove("d-none");
  }, 5 * 1000);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Ho inviato il form");
});

/**
 * Inserisci input in ogni elemento dell'array passato come parametro
 * @param {array} arrayElementi
 * @returns {none}
 */
function inserisciInput(arrayElementi) {
  console.log("Sono dentro alla funzione per inserire gli input");
  for (let i = 0; i < arrayElementi.length; i++) {
    const currElem = arrayElementi[i];

    arrayElementi[i].innerHTML = `<input type="number">`;
  }
}

/**
 * Resetta inner text elementi array passato
 * @param {array} arrayElementi
 * @returns {none}
 */
function resetNumbers(arrayElementi) {
  for (let i = 0; i < arrayElementi.length; i++) {
    const currElem = arrayElementi[i];
    arrayElementi[i].innerText = "";
  }
}

/**
 * Assegna numeri random ad array elementi
 * @param {array} arrayElementi
 * @returns {none}
 */
function assegnaRandomNumber(arrayElementi) {
  for (let i = 0; i < arrayElementi.length; i++) {
    const currElem = arrayElementi[i];
    arrayElementi[i].innerText = getRndInteger(1, 10);
  }
}

/**
 * Ritorna numero random
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
