console.log ('daje')

// chiedere un nome all'utente
let nomeUtente = prompt('Inserisci un nome')
// prendere il nome dell'utente e dividerlo lettera per lettera 
let nomeLettere = nomeUtente.split('')
console.log(nomeLettere, nomeLettere.length)
// creare una funzione che va a ciclare le lettere del nome

// stampare risulato   



for (let i = 0; i < nomeLettere.length; i++){
    let lettera = nomeLettere[i]
    let ultimaLettera = nomeLettere.length - 1
    console.log (lettera, nomeLettere[ultimaLettera - i])
    if (lettera === nomeLettere[ultimaLettera - i]){
        //console.log (lettera, nomeLettere)
        console.log ('ok')
    }
}

//nomeLettere[ultimaLettera - i]