const { WORDS_TO_GUESS_1 } = require('./constants');
const { WORDS_TO_GUESS_2 } = require('./constants');
const { WORDS_TO_GUESS_3 } = require('./constants');
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
};WORDS_TO_GUESS

if (chooseLevel = `2`) {
    WORDS_TO_GUESS = WORDS_TO_GUESS_2;
};

if (chooseLevel = `3`) {
    WORDS_TO_GUESS = WORDS_TO_GUESS_3;
randomWord = WORDS_TO_GUESS_1[Math.floor(Math.random()*WORDS_TO_GUESS_1.length)];

};

if (chooseLevel = `2`) {
    randomWord = WORDS_TO_GUESS_2[Math.floor(Math.random()*WORDS_TO_GUESS_2.length)];
    console.log(HANGMAN_PICS[1]);
};

if (chooseLevel = `3`) {
    randomWord = WORDS_TO_GUESS_3[Math.floor(Math.random()*WORDS_TO_GUESS_3.length)];
    console.log(HANGMAN_PICS[3]);
};

//Figure 
for(let figure of constants.HANGMAN_PICS)
 {  console.log(figure);
 };

 
let positiveAttrs = [];
let negativeAttrs = [];

while (true) {          // main loop
    let matches = [];
    for (let obj of WORDS_TO_GUESS) {
        let add = true;

        // only match objects that have the positive attribute
        for (let posAttr of positiveAttrs) {
            if (!obj.attrs.includes(posAttr)) {
                add = false;
                break;
            }
        }

        // only match objects that don't have the negative attribute
        for (let negAttr of negativeAttrs) {
            if (obj.attrs.includes(negAttr)) {
                add = false;
                break;
            }
        }

        if (add) {
            matches.push(obj);
        }
    }
    //console.log(matches); 

    // handle matches
    if (matches.length === 0) {
        console.log("I'm sorry, I've no idea what you're thinking about!")
        break;
    } else if (matches.length === 1) {
        console.log(`I think you're thinking of a ${matches[0].name}`);
        break;
    }

    // ask another question
    // first: compile a list of available attributes
    let availableAttrs = [];
    for (let match of matches) {
        for (let attr of match.attrs) {
            if (!positiveAttrs.includes(attr) &&
                !negativeAttrs.includes(attr) &&
                !availableAttrs.includes(attr)) {
                    availableAttrs.push(attr);
                }
        }
    }
    //console.log(`availableAttrs: ${availableAttrs}`);

    if (availableAttrs.length === 0) {
        console.error("This should never happen: no available attribute.")
    }

    // ask question
    let attr = availableAttrs[0];   // TODO choose randomly
    let answer = prompt(`Is what you're thinking of ${attr} [y/n/q-uit]: `)
    if (answer === 'y') {
        positiveAttrs.push(attr);
    } else if (answer === 'n') {
        negativeAttrs.push(attr);
    } else  if (answer === 'q') {
        process.exit(0);
    }
}
 if (answer == `q`) {
     ProcessingInstruction.exit(0)
 } 
