//ESERCIZI SUGLI IF:

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let a, b;

a = prompt("Inserisci il primo numero");
b = prompt("Inserisci il secondo numero");

if (a > b) {
  console.log(`${a} è il più grande`);
} else if (a === b) {
  console.log("Il primo numero e il secondo sono uguali");
} else {
  console.log(`${b} è il più grande`);
}
*/
/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let num

num=prompt("Inserisci un numero")

if(num<5){
  console.log("Tiny")
}
else if(num<10){
  console.log("Small")
}else if(num<15){
  console.log("Medium")
}else if(num<20){
  console.log("Large")
}else if(num>=20){
  console.log("Huge")
}
*/
//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
for (let i = 0; i < 11; i++) {
  if (i === 3 || i === 8) {
    continue;
  } else {
    console.log(i);
  }
}
*/
/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/
/*
for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log(`${i} PARI`);
  } else {
    console.log(`${i} DISPARI`);
  }
}
*/
/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/*
let a, b;

a = parseInt(prompt("Inserisci il primo numero intero"));
b = parseInt(prompt("Inserisci il secondo numero intero"));

if (a === 8 || b === 8) {
  console.log("Il primo/secondo numero è uguale a 8");
} else if (a + b === 8) {
  console.log("La somma tra i due numeri è uguale a 8");
} else if (Math.abs(a - b) === 8) {
  console.log("La differenza tra i due numeri è uguale a 8");
} else {
  console.log("Uno dei due numeri non è 8 e neanche la loro somma/differenza");
}
*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 55;

if (totalShoppingCart > 50) {
  console.log(`Spedizione gratuita, totale ${totalShoppingCart}`);
} else {
  console.log(
    `Totale ${totalShoppingCart + 10} sono stati aggiunti 10 di spedizione`
  );
}
*/

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = 100;
let prezzoScontato;

prezzoScontato = totalShoppingCart - (totalShoppingCart * 20) / 100;

if (prezzoScontato > 50) {
  console.log(`Spedizione gratuita, totale ${prezzoScontato}`);
} else {
  console.log(
    `Totale ${prezzoScontato + 10} sono stati aggiunti 10 di spedizione`
  );
}
*/
/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let gender
let isMale=true //or false

isMale ? gender="male" : gender="Female"

console.log(gender)
*/
/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
/*
for(let i = 1; i<=100;i++){
  if(i%3===0 && i%5===0){
    console.log("FizzBuzz")
    continue
  }else if(i%3===0){
    console.log("Fizz")
    continue
  }else if(i%5===0){
    console.log("Buzz")
    continue
  }
  console.log(i)
}
*/