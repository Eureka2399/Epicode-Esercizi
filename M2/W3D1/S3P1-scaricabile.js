/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let num1 = 23
let num2 = 99

let risultato = crazySum(num1,num2)
console.log(risultato)

function crazySum(numero1,numero2){
    let somma
    somma=numero1+numero2
    return somma
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let num = 150


console.log(boundary(num))

function boundary(numero){
    let flag
    if(numero>=20 && numero<=100){
        flag=true
    }
    else if(numero===400){
        flag=true
    }
    else{
        flag=false
    }
    return flag
    
}
*/
/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let frase = "Ciao a tutti"

console.log(reverseString(frase))

function reverseString(string){
    let reverse
    reverse = string.split("").reverse().join("")
    return reverse
}
*/
/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
/*
let frase="ciao a tutti mi chiamo simone"


console.log(upperFirst(frase))

function upperFirst(string){
    let correctString
    let stringManipolation=string.split(" ")//VERIFICARE SE SCRITTO GIUSTO IN INGLESE
    for(let i = 0; i<stringManipolation.length; i++){
        stringManipolation[i] = stringManipolation[i][0].toUpperCase() + stringManipolation[i].substring(1)
    }
    correctString = stringManipolation.join(" ")
    return correctString
}
*/
/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let n

n=prompt("Inserisci un numero intero")

console.log(giveMeRandom(n))

function giveMeRandom(num){
    let array = []
    for(let i=0;i<num;i++){
        array[i]=Math.floor(Math.random()*num);
    }
    return array
}
*/
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let l1,l2

l1 =prompt("Inserisci la base")
l2=prompt("Inserisci l'altezza")

console.log(area(l1,l2))

function area (base, altezza){
    let area
    area=base*altezza
    return area
}
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/*
let numeroFornito

numeroFornito=prompt("Inserisci numero")

console.log(crazyDiff(numeroFornito))


function crazyDiff(num){
    const numeroFisso=19
    let differenza
    let risultato
    differenza=Math.abs(num-numeroFisso)

    if(differenza>19){
        risultato=differenza*3
    }else{
        risultato=differenza
    }
    return risultato
}
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let frase

frase=prompt("Inserisci una frase")

console.log(codify(frase))

function codify(string){
    let frase = []
    let risultato
    frase=string.split(" ")
    if(frase[0]==="code"){
        risultato=string
    }else{
        risultato= "code " + string
    }

    return risultato
}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let num

num=parseInt(prompt("Inserisci un numero interno maggiore di 0 (compreso)"))

if(num>=0){
    console.log(check3and7(num))
}
else{
    console.log("INSERISCI UN NUMERO INTERO MAGGIORE DI 0")
}
function check3and7(numero){
    let flag
    if(numero%3===0 || numero%7===0){
        flag=true
    }else{
        flag=false
    }
    return flag
}
*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let frase

frase=prompt("Inserisci una frase")


console.log(cutString(frase))

function cutString(string){
    let frase=[]
    frase=string.split("")
    frase[0]=""
    frase[string.length-1]=""
    return frase.join("")
}
*/