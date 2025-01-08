// chiedere all'utente pari o dispari
const sceltaUser = prompt("Scegli: 'pari' o 'dispari'").toLowerCase();


// chiedere all'utente un numero da 1 a 5

const numeroUser = parseInt(prompt("Inserisci un numero da 1 a 5"));



// Verifica se l'utente ha scritto pari o dispari e se ha scelto un numero tra 1 e 5

if (!Number.isInteger(parseInt(numeroUser))|| numeroUser < 1 || numeroUser > 5 || (sceltaUser !== "pari" && sceltaUser !== "dispari" )){
    console.log("Inserisci una scelta valida");
} else {
    const sceltaPc = generaNumeroRandom();







// Sommo i numeri scelti

    const somma = numeroUser + sceltaPc;


// Verifica se la somma è pari o dispari

    const sommaPari = pari(somma);




// Vedere i log

    console.log(`Il tuo numero: ${numeroUser}`);
    console.log(`Numero del computer: ${sceltaPc}`);
    console.log(`Somma: ${somma}, che è ${sommaPari}.`);

    if (sommaPari === sceltaUser) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso! Ha vinto il computer.");
    }
}






// Generare un numero random tra 1 e 5
function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}



// Funzione per vedere se è pari o dispari

function pari(numero) {
    if (numero % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}
