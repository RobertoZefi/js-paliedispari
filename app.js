console.log ('daje')

let nomeUtente = prompt('Inserisci un nome')

parolaPalindromeFunction(nomeUtente)

function parolaPalindromeFunction (nome) {
    let parolaPalindrome = true
    let nomeLettere = nomeUtente.split('')
    
    for (let i = 0; i < nomeLettere.length/2; i++){
        let lettera = nomeLettere[i]
        let ultimaLettera = nomeLettere.length - 1
        //console.log (lettera, nomeLettere[ultimaLettera - i])
        if (lettera != nomeLettere[ultimaLettera - i]){
            //console.log (lettera, nomeLettere)
            parolaPalindrome = false
        }
    }
    
    if (parolaPalindrome === true){
        console.log ('La parola',nomeUtente,'è palindrome')
    } else{
        console.log ('La parola',nomeUtente,'non è palindrome')
    }
}




