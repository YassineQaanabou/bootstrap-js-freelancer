/*Continuiamo l’esercizio Bootstrap Freelancer e aggiungiamo la componente js di interazione con l’utente.
Quando l’utente fa click sul bottone “send” del form, il sito deve calcolare l’ammontare del preventivo per le ore di lavoro richieste.
Il prezzo orario per una commissione varia in questo modo:
- se la commissione riguarda lo sviluppo backend il prezzo orario è di 20.5€ l’ora
- se la commissione riguarda lo sviluppo frontend il prezzo orario è di 15.3€ l’ora
- se la commissione riguarda l’analisi progettuale di un progetto il prezzo orario è di 33.6€
L’utente potrebbe decidere di utilizzare un codice promozionale tra i seguenti:
- YHDNU32
- JANJC63
- PWKCN25
- SJDPO96
- POCIE24
Se l’utente inserisce un codice promozionale valido, ha diritto ad uno sconto del 25% sul prezzo finale. Se il codice inserito non è valido,
 il sito deve informare l’utente che il codice non è valido e il prezzo finale viene calcolato senza applicare sconti.
Il risultato del calcolo del prezzo finale deve essere visualizzato in “forma umana” (con 2 decimali e il simbolo dell’euro) in un apposito 
tag HTML appena sotto il bottone send.
Alcuni consigli
- Ricordatevi che se non state bene attenti, Javascript vi fa le magie con i tipi :faccia_leggermente_sorridente:
- Ricordatevi che il form ha un comportamento “strano” quando fate click sul bottone Send che è di tipo submit (type=submit).
Bonus:
Quando l’utente clicca sul pulsante “Send”, se il codice promozionale inserito non è valido, facciamo diventare quest’ultimo di colore 
rosso.
Se il codice inserito è valido, dopo aver calcolato il prezzo scontato, eliminare quel codice dall’elenco dei codici sconto disponibili,
 in modo che non sia più utilizzabile.
*/
let discountCodes= ["YHDNU32" , "JANJC63" , "PWKCN25" , "SJDPO96" , "POCIE24"];


function submitForm( event , discountCodes) {
  event.preventDefault();

  let workType = document.getElementById("typeOfWork").value;

  let hours = parseInt(document.getElementById("hoursRequested").value);

  let discountCode =  document.getElementById("discount_code").value;

  let price=0;

  console.log("il form funziona");
  console.log(workType);
  console.log(hours);


  if (workType == BD) {

    price = price + (hours*20.5);

  } else if (workType == FD) {

    price = price + (hours*15.3);

  } else if (workType == PA){

    price = price + (hours*33.6);

  }

  for (let i=0; i<discountCodes.length; i++) {

    if (discountCode == discountCodes[i]) {
      price=price*75;
    } 
  }

  return price;






}