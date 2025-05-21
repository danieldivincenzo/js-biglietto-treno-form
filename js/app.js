// 1. Leggo i km che inserisce l'utente
// 2. Leggo il tipo di sconto che devo applicare
// 3. Calcolo il prezzo del biglietto e applico lo sconto se necessario
// 4. Stampo il prezzo del biglietto

const inputChilometri = document.getElementById("chilometri")
const selectSconto = document.getElementById("sconto")
const buttonCalcola = document.getElementById("calcola")
const divPrezzoBiglietto = document.getElementById("prezzo-biglietto")
const divRecap = document.getElementById("recap")
console.log(inputChilometri, selectSconto, buttonCalcola, divPrezzoBiglietto)

buttonCalcola.addEventListener("click", function () {
    // 1. Leggo i km che inserisce l'utente
    const chilometri = parseFloat(inputChilometri.value)
    console.log(chilometri)
    // 2. Leggo il tipo di sconto che devo applicare
    const sconto = selectSconto.value
    console.log(sconto)

    const prezzoPerKm = 0.21

    let prezzoBiglietto

    // 3. Calcolo il prezzo del biglietto e applico lo sconto se necessario
    if (sconto === "studente") {
        prezzoBiglietto = (chilometri * prezzoPerKm) * 0.2
    } else if (sconto === "over-65") {
        prezzoBiglietto = (chilometri * prezzoPerKm) * 0.4
    } else {
        prezzoBiglietto = chilometri * prezzoPerKm
    }
    console.log(prezzoBiglietto)
    // 4. Stampo il prezzo del biglietto
    divPrezzoBiglietto.innerHTML = `${prezzoBiglietto.toFixed(2)} €`
    divRecap.innerHTML = `Chilometri: ${chilometri}, sconto: ${sconto}, prezzo del biglietto: ${prezzoBiglietto.toFixed(2)} €`
})
