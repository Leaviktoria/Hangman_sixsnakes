const { WORDS_TO_GUESS_1, HANGMAN_PICS } = require('./constants');
const { WORDS_TO_GUESS_2 } = require('./constants');
const { WORDS_TO_GUESS_3 } = require('./constants');
const constants = require('./constants');

const prompt = require("prompt-sync")();

console.log(`Welcome to Hangman.
Das Ziel ist es, das gegebene Wort zu erraten. Bei den Wörtern handelt es sich um Arten von Schlangen.`)

let word = ""

//Level
let chooseLevel = prompt(`Welches Level von 1-3 willst du spielen?`);

if (chooseLevel = `1`) {
    word = WORDS_TO_GUESS_1[Math.floor(Math.random() * WORDS_TO_GUESS_1.length)];
    console.log(HANGMAN_PICS[0]);
    var guesses = 8;
};

if (chooseLevel = `2`) {
    word = WORDS_TO_GUESS_2[Math.floor(Math.random() * WORDS_TO_GUESS_2.length)];
    console.log(HANGMAN_PICS[1]);
    var guesses = 7;
};

if (chooseLevel = `3`) {
    word = WORDS_TO_GUESS_3[Math.floor(Math.random() * WORDS_TO_GUESS_3.length)]
    console.log(HANGMAN_PICS[3]);
    var guesses = 6; 
}; 


 
let positiveAttrs = [];
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
        hide_array = ["_", "_", "_", "_", "_", "_", "_", "_"]
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
      
console.log(hide_array);
  
      function arraysAreEqual(ary1,ary2){
        return (ary1.join('') == ary2.join(''));
        
      }
      
     //print the pictures :)
     if (guesses === 3)  {
        console.log(HANGMAN_PICS[6]);
         }

      function guess(letter){
          let index = answer_arr.indexOf(letter);
          if(answer_arr.indexOf(letter) > -1){
              hide_array.splice(index, 1, letter);
              hide_array.splice(answer_arr.lastIndexOf(letter), 1, letter);
              console.log("Richtig :)");
              positiveAttrs.push(letter);
        
              return console.log(hide_array);
              
          } else {
              console.log("Falsch!! Du hast noch " + guesses + " Chancen.");
              negativeAttrs.push(letter);
              console.log(`Das sind die falschen Buchstaben: ${negativeAttrs}`);
              guesses = guesses - 1;
              
          }  
            
    }
        

      while(guesses > -1 && arraysAreEqual(hide_array, answer_arr) == false){
          var input = prompt("Tippe einen Buchstaben ein!");
         
          guess(input);
          
          

              }
  }
  main();
