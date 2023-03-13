//L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
//Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


//BONUS
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// creare una funzione per la creazione del grid
// creare una funzione per il controllo del numero del grid
// inserire tutto nel ciclo for con stilizzazione del grid a seconda del numero del grid

//variabile del contenitore della griglia
const gridEl = document.getElementById("__grid-container");
//variabile del bottone choose
const buttonEl = document.getElementById("button");

const inputSelect = document.getElementById("inputGroupSelect04");

let difficultyGrid;



buttonEl.addEventListener('click', function(){

    gridEl.innerHTML = "";

    difficultyGrid = gridOption(inputSelect);
    
    for( let i = 1; i <= difficultyGrid; i++){
        
        let newSquareEl = document.createElement('div');

        gridEl.append(newSquareEl);

        newSquareEl.innerText = i;

        newSquareEl.style.width = `calc( 100% / ${Math.sqrt(difficultyGrid)}`;
        newSquareEl.style.height = `calc( 100% / ${Math.sqrt(difficultyGrid)}`;

        newSquareEl.addEventListener('click', function(){
            
            newSquareEl.classList.add("blue");

            console.log(i);
        })
    }



})




function gridOption(input){

    if(input.value == "easy"){

       return 100;
    
    } else if(input.value == "medium"){

        return 81;

    }else{

        return 49;
    }

}