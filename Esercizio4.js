// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const alessandro = {
  name: "Alessandro",
  lastName: "Basile",
  isAmbassador: true,
}

const prices = [34, 5, 2, 60]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!


let clienti = [];
clienti.push(marco,paul,amy,alessandro)
clienti[0].totaleCarrello=prices[0];
clienti[1].totaleCarrello=prices[1] + prices[2];
clienti[2].totaleCarrello=prices[2] + prices[0];
clienti[3].totaleCarrello=prices[0] + prices[3];
let spedizioneGratuita=101;
//console.log(clienti);
for(let i=0; i<clienti.length; i++) {
let utente=clienti[i]
if (utente.isAmbassador===true && utente.totaleCarrello<=100){
console.log("Complimenti " + utente.name+" "+utente.lastName + " Hai diritto allo sconto! " + "Totale dovuto con sconto € " + (prices[i]*0.7) + " Più costi di spedizione:",shippingCost ,"€", "Per avere la spedizione gratuita mancano", spedizioneGratuita - (prices[i]*0.7) , "€")
} 
else {
  console.log("Siamo spiacenti " + utente.name+" "+utente.lastName + " Non hai diritto allo sconto! Il totale dovuto è di € ", prices[i],"Più costi di spedizione: ", shippingCost, "Per la spedizione gratuita mancano ", spedizioneGratuita-prices[i], "€" );
}
}

let utentiAmbassador= [];
utentiAmbassador.push(marco,paul,amy,alessandro)

for (let i=0; i<clienti.length; i++) {
let ambassador=utentiAmbassador[i]
if (ambassador.isAmbassador===true)
console.log(utentiAmbassador[i].name + " " + utentiAmbassador[i].lastName, "è un cliente Ambassador.");
} 
