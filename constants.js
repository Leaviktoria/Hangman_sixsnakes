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
const WORDS_TO_GUESS_1 = [`Boa`,`Viper`,`Otter`,`Kobra`, `Mamba` ];
const WORDS_TO_GUESS_2 = [`Natter`, `Python`, `Aeskula`, `Anakonda`, `Kornnatter`];
const WORDS_TO_GUESS_3 = [`Warzenschlange`, `Blindschlange`, `Kupferkopf`, `Seeschlange`, `Klapperschlange`];

module.exports = {
  HANGMAN_PICS: HANGMAN_PICS,
  WORDS_TO_GUESS: WORDS_TO_GUESS_1,WORDS_TO_GUESS_2, WORDS_TO_GUESS_3,
};
