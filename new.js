const prompt = require("prompt-sync")();

let alpha = /a-z/
let wordBank =  ["Boa", "Viper", "Kobra","Otter","Mamba"];
let wordBank2 = ["Natter", "Python", "Aeskula", "Anakonda", "Kornnatter"];
let wordBank3 =["Warzenschlange", "Blindschlange", "Kupferkopf", "Seeschlange", "Klapperschlange"];


let userSelection;
// let takeGuess;
let playAgain = true;
let chances = 8;

let chosenWord = wordSelected(wordBank);

let wordArray = chosenWord.split('');
let hiddenWord = wordArray.map( x => '_');
let firstRun = true;
let didWin = false;
let wrongGuess;
let incorrectGuess = [];

//create a map with a function inside.
function printLine(){
  console.log('*'.repeat(50));
}

function wordSelected(wordBank){
  let wordBankIndex = Math.floor(Math.random() * wordBank.length);
  let word = wordBank[wordBankIndex];
  return word;
}


function incorrect(){
incorrectGuess =  wrongGuess.push(userSelection);
return incorrectGuess;
}



let insultLines = [
  `You're an idiot...`,
  `WOW? really? ${userSelection} is the letter you go with?`,
  `LOL this will be an easy hanging..`,
  `It's not considered an insult if it's describing you.`,
  `You are an oxygen thief...`,
  `Please just give up, you're not very good at this...`,
  `We're wasting time here.`,
]

function death(){
  console.log("You failed... just like your dad's condom.");
  let gameEndQuestion = prompt("Nochmal spielen?");

  if (gameEndQuestion === `j`){

    newGame();
  }
    else {
        process.exit(); 
    }
  }

function initiateGuess(){
      let correct = chosenWord.match(userSelection);
      if(hiddenWord.join("") === chosenWord){
        console.log("");
        console.log("YOU LIVE ANOTHER DAY...test your luck again?");
        console.log(``);
        newGame()
      } else if (correct === null) {
        let insults = insultLines[Math.floor(Math.random() * insultLines.length)];
        console.log("");
        console.log("");
        console.log(insults.toUpperCase());
        console.log("");
        console.log("");
        console.log("");
        console.log(hiddenWord);
        console.log("");
        console.log("");
        chances -= 1;
        console.log(`Du hast noch ${chances} Chancen`);
        if (chances === 0){
          death();
        }
        console.log(chances)
      } else if (userSelection === "") {
        console.log("the enter bar will not reveal the answer!");
        console.log(`You have ${chances} chances left`);
        if (chances === 0){
          death();
        }
      }
      else {
        console.log("RIGHT!!")
        let fillInBlank = correct.index
        hiddenWord[fillInBlank] = userSelection;
        console.log(hiddenWord);
      }
      if (didWin && !firstRun) {
      newGame()
      }
  }


  function newGame(){


    firstRun = false;
    // wordSelected(wordBank);

    console.log(`Welcome to Hangman. Das Ziel ist es, das gegebene Wort zu erraten. 
    Bei den Wörtern handelt es sich um Arten von Schlangen.`);

    let chooseLevel = prompt(`Welches Level von 1-3 willst du spielen?`);

    if (chooseLevel = `1`) {
        chosenWord = wordSelected(wordBank);
        wordArray = chosenWord.split('');
        hiddenWord = wordArray.map( x => '_');
        chances = 8;

    };
    
    if (chooseLevel = `2`) {
        chosenWord = wordSelected(wordBank2);
        wordArray = chosenWord.split('');
        hiddenWord = wordArray.map( x => '_');
        chances = 7;
      
    };
    
    if (chooseLevel = `3`) {
        chosenWord = wordSelected(wordBank3);
        wordArray = chosenWord.split('');
        hiddenWord = wordArray.map( x => '_');
        chances = 6;
    
    };




    


  let begin = prompt(`Are you ready to PLAY?`);

  if (begin === 'y' || begin === 'yes') {
    printLine();


      console.log(`${hiddenWord}`);
      while( playAgain === true ){
      userSelection = prompt("Choose a letter: ");

      initiateGuess();
    }
  }


  if (begin === 'n' || begin === 'no') {
    process.exit();

  }
}


newGame();