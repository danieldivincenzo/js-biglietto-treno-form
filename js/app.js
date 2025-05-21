// 1. Leggo i km che inserisce l'utente
// 2. Leggo il tipo di sconto che devo applicare
// 3. Calcolo il prezzo del biglietto e applico lo sconto se necessario
// 4. Stampo il prezzo del biglietto

const inputChilometri = document.getElementById("chilometri")
const selectSconto = document.getElementById("sconto")
const buttonCalcola = document.getElementById("calcola")
const divPrezzoBiglietto = document.getElementById("prezzo-biglietto")
console.log(inputChilometri, selectSconto, buttonCalcola, divPrezzoBiglietto)

document.addEventListener("click", function () {
    const chilometri = inputChilometri.value
    const sconto = selectSconto.value
    const prezzoPerKm = 0.21

})