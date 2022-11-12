const HANGMAN_PICS = [
  "+---+\n" +
    "|   |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "    |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "      |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    "  |   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|   |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    "      |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " /    |\n" +
    "      |\n" +
    "=========",
  "  +---+\n" +
    "  |   |\n" +
    "  O   |\n" +
    " /|\\  |\n" +
    " / \\  |\n" +
    "      |\n" +
    "=========",
];

// TODO: Fill this list with values about a certain topic
// you are passionate about: e.g. famous scientists, chess players, ...
const WORDS_TO_GUESS_1 = [{attrs: `Boa`},{attrs: `Viper`},{attrs: `Otter`},{attrs: `Kobra`},{attrs: `Mamba`} ];
const WORDS_TO_GUESS_2 = [{attrs: `Natter`},{attrs:`Python`},{attrs: `Aeskula`},{attrs: `Anakonda`}, {attrs: `Kornnatter`}];
const WORDS_TO_GUESS_3 = [{attrs: `Warzenschlange`}, {attrs: `Blindschlange`},{attrs: `Kupferkopf`}, {attrs: `Seeschlange`}, {attrs: `Klapperschlange`}];

module.exports = {
  HANGMAN_PICS: HANGMAN_PICS,
  WORDS_TO_GUESS_1: WORDS_TO_GUESS_1,
  WORDS_TO_GUESS_2:WORDS_TO_GUESS_2, 
  WORDS_TO_GUESS_3: WORDS_TO_GUESS_3,
};
