const {
  WORDS_TO_GUESS_1,
  WORDS_TO_GUESS_2,
  WORDS_TO_GUESS_3,
  HANGMAN_PICS,
} = require("./constants");

const prompt = require("prompt-sync")();

// TODO: multiple wrong guesses are not counted as one

console.log(
  `
  ******************Willkommen bei Hangman. ******************

  Das Ziel ist es, das gegebene Wort zu erraten. 
  Bei den Wörtern handelt es sich um Arten von Schlangen.\n`
);

let userName = prompt(`Wie heisst du? `);
console.log(`
Lets goo
`);

let word = "";

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
} else if (chooseLevel.toLowerCase() === "quit") {
  console.log(`Tschüssii ${userName}`);
  process.exit();
} else {
  console.log("Bitte wähle Level 1, 2 or 3 aus!");
}

let wrongLetters = [];

function main() {
  let hiddenWordArray = [""];

  if (word.length >= 3 && word.length <= 15) {
    hiddenWordArray = new Array(word.length).fill("_");
  }

  let wordLowerCase = word.toLowerCase();
  //console.log(wordLowerCase, typeof word);
  let answerArray = wordLowerCase.split("");

  console.log(hiddenWordArray.join(" "));

  function arraysAreEqual(ary1, ary2) {
    return ary1.join("") == ary2.join("");
  }

  function guess(letter) {
    let letterLowerCase = letter.toLowerCase();
    let index = answerArray.indexOf(letterLowerCase);

    if (answerArray.indexOf(letterLowerCase) > -1) {
      hiddenWordArray.splice(index, 1, letterLowerCase);
      hiddenWordArray.splice(
        answerArray.lastIndexOf(letterLowerCase),
        1,
        letterLowerCase
      );

      return console.log(hiddenWordArray.join(" "));
    } else {
      guesses = guesses - 1;
      if (guesses > 0) {
        console.log(
          "Falsch! Du hast noch " +
            guesses +
            " Möglichkeiten, richtig zu raten."
        );
        //return console.log(hide_array.join(" "));
      }

      wrongLetters.push(letterLowerCase);
      console.log(`

              Die falschen Buchstaben sind: ${wrongLetters}
              
              `);
      if (guesses < 7) {
        console.log(HANGMAN_PICS[6 - guesses]);
      } else if (letterLowerCase === `quit` || letterLowerCase === `Quit`) {
        console.log();
      }
    }
    if (letterLowerCase === `quit` || letterLowerCase === `Quit`) {
      console.log(`Tschüssiii ${userName}`);
      process.exit();
    }

    if (letterLowerCase.length > 1) {
      console.log(`
            Bitte gib nur 1 Buchstaben an!`);
    }
  }
  word;

  while (guesses > -1 && !arraysAreEqual(hiddenWordArray, answerArray)) {
    let input = prompt("Bitte gib 1 Buchstaben an: ");

    guess(input);
    if (guesses === 0) {
      console.log(
        `Sorry, du hast verloren, ${userName}! Das gesuchte Word war ${wordLowerCase}`
      );
      process.exit();
    }
  }

  if (
    !answerArray.includes(hiddenWordArray) &&
    [1, 2, 3].includes(chooseLevel)
  ) {
    console.log(
      `Gratuliere! Du hast gewonnen, ${userName}! Winner winner chicken dinner`
    );
  }
}

main();
