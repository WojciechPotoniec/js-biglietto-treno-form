/*
Descrizione:
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/
let eluserName = document.getElementById('userName');
let eluserKm = document.getElementById('userKm');
let elRebate = document.getElementById('rebate');
let elgenerate = document.querySelector('.generate');
let elreset = document.querySelector('.reset');
let elticket = document.querySelector('.ticket');

// console.log(eluserName, eluserKm, elage, elgenerate); (work'ok')

// console.log(elticket); (work'ok')
 
elgenerate.addEventListener('click', function(){
    let userName = eluserName.value;
    let userKm = eluserKm.value;
    let rebate = elRebate.value;
    let price = (0.21 * userKm);
    elticket.classList.remove('d-none');
    document.querySelector('h4').innerHTML = userName;
    document.querySelector('.ticketTitle').innerHTML = 'Biglietto ' + rebate;

    if(rebate === 'Junior'){
        price -= price * 20 / 100;
        document.querySelector('.price').innerHTML = price.toFixed(2) + '€';
    }
    else if(rebate === 'Senior'){
        price -= price * 40 / 100;
        document.querySelector('.price').innerHTML = price.toFixed(2) + '€';
    }
    else
        document.querySelector('.price').innerHTML = price.toFixed(2) + '€';
})

elreset.addEventListener('click', function(){
    elticket.classList.add('d-none');
    document.getElementById('userName').value = '';
    document.getElementById('userKm').value = '';
})

/*
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: 
usando esclusivamente due input e un bottone (non stilizzati), 
realizziamo le specifiche scritte sopra. 
La risposta finale (o output) sarà anch’essa da scrivere in console.
*/

/*
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora 
realizzeremo un form in pagina in cui l’utente potrà inserire i dati e 
visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/