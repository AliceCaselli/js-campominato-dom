//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco 
// (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// creare numero random
// memorizzare le bombe in un array
// controllare i doppioni
// classe per la bomba
// al click sulla bomba finisce il gioco
// creare e comunicare il punteggio


//variabile del contenitore della griglia
const gridEl = document.getElementById("__grid-container");

const buttonEl = document.getElementById("button");

let outputEl = document.getElementById("output");

//variabile per il punteggio
let contatore = 0;


let maxNumber = 100;

buttonEl.addEventListener('click', function(){
    //pulizia dei campi per ricominciare la partita da zero
    gridEl.innerHTML = "";

    contatore = 0;

    outputEl.innerHTML = "";

    gridEl.classList.remove("game-over");


    let bombList = createBombs(16, maxNumber);

    for( let i = 1; i <= maxNumber; i++){

        let newSquareEl = document.createElement('div');

        gridEl.append(newSquareEl);

        newSquareEl.innerText = i;

        newSquareEl.addEventListener('click', function(){
            

            if(bombList.includes(i)){

                newSquareEl.classList.add("red-bomb");
                gridEl.classList.add("game-over");

                outputEl.innerHTML = `Punti totali: ${contatore} <br> Hai Perso!`;

            } else {

                if(!newSquareEl.classList.contains("blue")){
                    
                    newSquareEl.classList.add("blue");
                    contatore++;
                    outputEl.innerHTML = "Punti: " + contatore;
                }

                if(contatore == maxNumber - bombList.length){

                    gridEl.classList.add("game-over");

                    outputEl.innerHTML = `Punti totali: ${contatore} <br> Hai Vinto!`;
                }
                
            }


            console.log(i);

        })
    }
})


//funzione per le bombe

function createBombs (quantity, maxNumber){

    let bombs = [];

    while(bombs.length < quantity) {

        let randomBomb = randomNumberBetween(1, maxNumber);
        //controllo doppioni
        if(!bombs.includes(randomBomb)){
            
            bombs.push(randomBomb);
        }
        console.log(bombs);
    }
    
    return bombs;
}


// funzione numeri random
function randomNumberBetween(min, max) {

    let random = Math.floor(Math.random () * (max - min) + min);

    return random;
}
