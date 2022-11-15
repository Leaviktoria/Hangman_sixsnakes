const { WORDS_TO_GUESS_1, HANGMAN_PICS } = require('./constants');
const { WORDS_TO_GUESS_2 } = require('./constants');
const { WORDS_TO_GUESS_3 } = require('./constants');
const constants = require('./constants');

// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();


console.log("Welcome to Hangman. Das Ziel ist es, das gegebene Wort zu erraten. Bei den Wörtern handelt es sich um Arten von Schlangen.")

let word = ""

//Level

let chooseLevel = prompt("Welches Level von 1-3 willst du spielen?");


if (chooseLevel === "1") {
    word = WORDS_TO_GUESS_1[Math.floor(Math.random() * WORDS_TO_GUESS_1.length)];
} else if (chooseLevel === "2") {
    word = WORDS_TO_GUESS_2[Math.floor(Math.random() * WORDS_TO_GUESS_2.length)];
    console.log(HANGMAN_PICS[1]);
} else if (chooseLevel === "3") {
    word = WORDS_TO_GUESS_3[Math.floor(Math.random() * WORDS_TO_GUESS_3.length)]
    console.log(HANGMAN_PICS[3]);
} else if (chooseLevel === "q" && chooseLevel === "Q")
    process.exit()
//Figure 
for(let figure of constants.HANGMAN_PICS)
 {  console.log(figure);
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
      
        let guesses = 8;
        console.log(word, typeof word)
        let answer_arr = (word.split(''));
      
console.log(hide_array);
  
      function arraysAreEqual(ary1,ary2){
        return (ary1.join('') == ary2.join(''));
      }
      
      function guess(letter){
          let index = answer_arr.indexOf(letter);
          if(answer_arr.indexOf(letter) > -1){
              hide_array.splice(index, 1, letter);
              hide_array.splice(answer_arr.lastIndexOf(letter), 1, letter);
              return console.log(hide_array);
          } else {
              console.log("Wrong! You have " + guesses + " guesses remaining.");
              guesses = guesses - 1;    
          }    
      }
  
      while(guesses > -1 && arraysAreEqual(hide_array, answer_arr) == false){
          var input = prompt("Please enter a letter");
          guess(input);
              }
  }
  main();