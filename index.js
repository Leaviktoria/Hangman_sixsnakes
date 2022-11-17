const { WORDS_TO_GUESS_1 } = require('./constants');
const { WORDS_TO_GUESS_2 } = require('./constants');
const { WORDS_TO_GUESS_3 } = require('./constants');
const { HANGMAN_PICS } = require('./constants');
const constants = require('./constants');

const prompt = require("prompt-sync")();


console.log("Willkommen bei Hangman. Das Ziel ist es, das gegebene Wort zu erraten. Bei den Wörtern handelt es sich um Arten von Schlangen.")

let word = ""

//Level

let chooseLevel = prompt("Welches Level von 1-3 willst du spielen? ");
let guesses = 8;

if (chooseLevel === "1") {
    word = WORDS_TO_GUESS_1[Math.floor(Math.random() * WORDS_TO_GUESS_1.length)];
} else if (chooseLevel === "2") {
    word = WORDS_TO_GUESS_2[Math.floor(Math.random() * WORDS_TO_GUESS_2.length)];
    guesses = 5;
   console.log(HANGMAN_PICS[1]);
} else if (chooseLevel === "3") {
    word = WORDS_TO_GUESS_3[Math.floor(Math.random() * WORDS_TO_GUESS_3.length)];
    guesses = 3;
    console.log(HANGMAN_PICS[3]);
} else if (chooseLevel === `quit` || chooseLevel === `Quit`) {
    console.log("Goodbye");
    process.exit();
} else {
    console.log("Bitte wähle Level 1, 2 or 3 aus!");
}
    


//Figure 
//for(let figure of constants.HANGMAN_PICS)
 //{  console.log(figure);
 //};

 
let negativeAttrs = [];

function main(){

let hide_array = [""]

    if (word.length == 3) {  
        hide_array = ["_", "_", "_"]
    } else if (word.length == 4) {
        hide_array = ["_", "_", "_", "_"]
    } else if (word.length == 5) {
        hide_array = ["_", "_", "_", "_", "_"]
    } else if (word.length == 6) {
        hide_array = ["_", "_", "_", "_", "_", "_"]
    } else if (word.length == 7) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 8) {
        hide_arrayl = ["_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 9) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 10) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 11) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 12) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 13) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 14) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } else if (word.length == 15) {
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
    } 
         
    console.log(word, typeof word)
    let answer_arr = (word.split(''));
    console.log(word.toLowerCase());  
    console.log(hide_array);
  
      function arraysAreEqual(ary1,ary2){
        return (ary1.join('') == ary2.join(''));
        
      }
      

      function guess(letter){
          let index = answer_arr.indexOf(letter);
          console.log(letter.toLowerCase());
          if(answer_arr.indexOf(letter) > -1){
              hide_array.splice(index, 1, letter);
              hide_array.splice(answer_arr.lastIndexOf(letter), 1, letter);
              
        
        
              //letter.toLowerCase();
              return console.log(hide_array);
        } 
          else {
              console.log("Falsch! Du hast noch " + guesses + " Möglichkeiten, richtig zu raten.")
              //console.log(HANGMAN_PICS[+1]);
              guesses = guesses - 1; 
              negativeAttrs.push(letter);
              console.log(`

              Die falschen Buchstaben sind: ${negativeAttrs}
              
              `);
              if (guesses === 6){
                console.log(HANGMAN_PICS[0]);
              }

              if (guesses === 5){
                console.log(HANGMAN_PICS[1]);
              }

              if (guesses === 4){

                console.log(HANGMAN_PICS[2]);
              }
             
              if (guesses === 3){

                console.log(HANGMAN_PICS[3]);
              }


              if (guesses === 2){

                console.log(HANGMAN_PICS[4]);
              }  
             
             if (guesses === 1){
                console.log(HANGMAN_PICS[5]);
              }

            if (guesses === 0){

                console.log(HANGMAN_PICS[6]);
            }

              
             
        } if (letter === `quit` || letter === `Quit`) {
            console.log("Goodbye");
            process.exit();
        } if (letter.length > 1) {
            console.log(`
            Bitte gib nur 1 Buchstaben an!`);
        } /*WINNER: if (answer_arr == word) {
            console.log("Gratuliere! Du hast gewonnen!");
        }*/
      }
      word
     
   
  
      while(guesses > -1 && arraysAreEqual(hide_array, answer_arr) == false){
          var input = prompt("Bitte gib 1 Buchstaben an: ");
         
          guess(input);
            if (guesses < 0) {
                console.log(`Sorry, du hast verloren!`);
                process.exit();
         } 
              }
            
  }
  main();
