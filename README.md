Hangman by SixSnakes

  Thema: Reptilien
    ~50 verschiedene Reptilien hinzufügen
    
Arrays > array.length für Level bzw. Stärke auswählen

Level 1 < 5 Charactern
5 < Level 2 < 10
Level 3 > 10

Anzahl lives = 7
      Wir können der Design von constants.js benutzen oder generell, nur der Anzahl angeben und nach jeder Fehler -1 abrechnen

Anleitung am Anfang
      Spielanleitung beschreiben
      
Herausforderungen (siehe README file in TW_Hangman)

1. The game requires the user to guess all the letters belonging to a word.
2. The initial game state is displayed as `_ _ _ _ _ _ _ _` (one underscore for each letter in word).
3. The game state is displayed as `_ o d _ _ o o _` if letters 'd' and 'o' are revealed.
4. It is possible to make guesses, and letters that occur in the word are revealed.
5. When a guessed letter does not occur in `word`, the player loses one life.
6. When a guess is repeated (regardless of its occurrences), the player is notified, and nothing happens.
7. When a guess is wrong (either a new or a repeated letter), the previous wrong letters are shown to the user.
8. The player wins when all letters in `word` are revealed.
9. The player loses when the number of wrong guesses is higher than the initial value of `lives` parameter (not counting repeated guesses).
10. When the player types `'quit'` as input, the program says good-bye and terminates.
