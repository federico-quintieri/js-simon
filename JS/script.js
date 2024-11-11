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

// Array globale per salvare i numeri
let arrNumeri = null;

// Assegna numeri random agli elementi di arrayH1
assegnaRandomNumber(arrayH1);

// Timeout
let varTimeout = setTimeout(() => {
  // Salvo i numeri in un array
  arrNumeri = arrayNumeri(arrayH1);
  //   console.log(arrNumeri);

  resetNumbers(arrayH1);
  inserisciInput(arrayDiv);
  generaBtn.classList.add("d-none");
  convalidaBtn.classList.remove("d-none");
}, 5 * 1000);

// Al click del bottone rigenera i numeri random
generaBtn.addEventListener("click", () => {
  event.preventDefault();
  assegnaRandomNumber(arrayH1);
  // Libero variabile timeout iniziale
  clearTimeout(varTimeout);
  // Assegno nuovo timeout
  varTimeout = setTimeout(() => {
    arrNumeri = arrayNumeri(arrayH1);
    resetNumbers(arrayH1);
    inserisciInput(arrayDiv);
    generaBtn.classList.add("d-none");
    convalidaBtn.classList.remove("d-none");
  }, 5 * 1000);
});

// Al click di convalida devo inserire il risultato
convalidaBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Qui prendo un array di elementi input
  const arrInput = document.querySelectorAll("input");
  //   console.log(arrInput);

  const arrInputValues = arrayValoriInput(arrInput);

  inserisciRisultato(arrayDiv, arrNumeri, arrInputValues);
  convalidaBtn.classList.add("d-none");
});

/**
 * Ritorna un array con i valori inseriti negli input
 * @param {array} arrayElementi
 * @param {array} arraydaPopolare
 * @returns {array}
 */
function arrayValoriInput(arrayElementi) {
  const arraydaPopolare = [];
  for (let i = 0; i < arrayElementi.length; i++) {
    // Popolo array nuovo prendendo i valori dell'array elementi
    arraydaPopolare[i] = parseInt(arrayElementi[i].value);
    console.log(arraydaPopolare[i]);
  }
  return arraydaPopolare;
}

/**
 * Description
 * @param {array} arrayElementi
 * @param {array} arraydaPopolare
 * @returns {array}
 */
function arrayNumeri(arrayElementi) {
  const arraydaPopolare = [];
  for (let i = 0; i < arrayElementi.length; i++) {
    // Popolo array nuovo prendendo i valori dell'array elementi
    arraydaPopolare[i] = parseInt(arrayElementi[i].innerText);
    // console.log(arraydaPopolare[i]);
  }
  return arraydaPopolare;
}

/**
 * Inserisci risultato
 * @param {array} arrayElementi
 * @returns {none}
 */
function inserisciRisultato(arrayElementi, arrayRisultato, arrayNumeriDiInput) {
  for (let i = 0; i < arrayElementi.length; i++) {
    if (arrayRisultato[i] == arrayNumeriDiInput[i]) {
      arrayElementi[i].innerHTML = `<h1>${arrayRisultato[i]}</h1>`;
      arrayElementi[i].classList.add("bg-success", "m-3", "rounded");
    } else if (arrayRisultato[i] !== arrayNumeriDiInput[i]) {
      arrayElementi[i].innerHTML = `<h1>${arrayRisultato[i]}</h1>`;
      arrayElementi[i].classList.add("bg-danger", "m-3", "rounded");
    }
  }
}

/**
 * Inserisci input in ogni elemento dell'array passato come parametro
 * @param {array} arrayElementi
 * @returns {none}
 */
function inserisciInput(arrayElementi) {
  for (let i = 0; i < arrayElementi.length; i++) {
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
