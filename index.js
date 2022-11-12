const { WORDS_TO_GUESS } = require('./constants');
const constants = require('./constants');
let alphaBet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")();


console.log(`Welcome to Hangman.
Das Ziel ist es, das gegebene Wort zu erraten. Bei den Wörtern handelt es sich um Arten von Schlangen.`)

//Level
let chooseLevel = prompt(`Welches Level von 1-3 willst du spielen?`);

if (chooseLevel = `1`) {
WORDS_TO_GUESS = WORDS_TO_GUESS_1;
};

if (chooseLevel = `2`) {
    WORDS_TO_GUESS = WORDS_TO_GUESS_2;
};

if (chooseLevel = `3`) {
    WORDS_TO_GUESS = WORDS_TO_GUESS_3;
};


for(let figure of constants.HANGMAN_PICS)
 {  console.log(figure);
 };