// Prendo i 5 h1 dentro
const arrayH1 = document.querySelectorAll(".col-auto h1");

// Prendo il bottone genera
const generaBtn = document.getElementById("btnGenera");

// Assegna numeri random agli elementi di arrayH1
assegnaRandomNumber(arrayH1);
let varTimeout = setTimeout(() => {
  console.log("Sono passati 30 secondi");
}, 30 * 1000);

// Al click del bottone rigenera i numeri random
generaBtn.addEventListener("click", () => {
  assegnaRandomNumber(arrayH1);
  // Libero variabile timeout iniziale
  clearTimeout(varTimeout);
  // Assegno nuovo timeout
  varTimeout = setTimeout(() => {
    console.log("Sono passati 30 secondi");
  }, 5 * 1000);
});

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
