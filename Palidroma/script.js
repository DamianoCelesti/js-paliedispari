

// Funzione per vedere se una parola è palindroma

function palindroma(parola) {
    let parolaContrario = "";
    for (let i = parola.length -1; i >= 0; i--) {
        parolaContrario = parolaContrario + parola[i];
    }

// Confronto parola

    return parola === parolaContrario;
}


// Chiede all'utente di inserire una parola

const parolaUser = prompt ("Inserisci parola");

if (palindroma(parolaUser)) {
    console.log(`La parola "${parolaUser}" è palindroma!`);
} else {
    console.log(`La parola "${parolaUser}" NON è palindroma!`);
}