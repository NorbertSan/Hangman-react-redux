import { CLICK__LETTER, FETCH_WORD, INIT_STATE } from "actions/types";

const initialState = {
  missedLetters: [],
  hitLetters: [],
  isGameLose: false,
  isGameWon: false,
  word: ""
};
const chances = 7;

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK__LETTER:
      const addNewLetter = missedLetters => missedLetters.push(clickedLetter);
      const removeDuplicate = missedLetters =>
        missedLetters.filter(
          (letter, index, arr) => arr.indexOf(letter) === index
        );
      const onlyLetterController = missedLetters =>
        action.payload.letter.keyCode >= 65 &&
        action.payload.letter.keyCode <= 90;
      const isWordIncludeLetter = () => wordLetters.includes(clickedLetter);
      const getAmountOfHitLetter = () =>
        wordLetters.filter(letter => letter === clickedLetter).length;

      const endGameController = () => state.isGameLose || state.isGameWon;
      const duplicateController = () => hitLetters.includes(clickedLetter);

      // FUNCTIONS INVOKED
      //1. check if word include letter
      const clickedLetter = action.payload.letter.key;
      let missedLetters = [...state.missedLetters];
      let wordLetters = state.word.split("");
      let hitLetters = [...state.hitLetters];

      if (endGameController()) {
        return {
          ...state
        };
      }

      if (isWordIncludeLetter()) {
        // hit letter
        if (!duplicateController()) {
          const amount = getAmountOfHitLetter();
          for (let i = 0; i < amount; i++) {
            addNewLetter(hitLetters);
          }
        }
      } else {
        // miss letter
        if (onlyLetterController()) {
          addNewLetter(missedLetters);
          missedLetters = removeDuplicate(missedLetters);
        }
      }

      return {
        ...state,
        missedLetters,
        hitLetters,
        isGameLose: missedLetters.length >= chances,
        isGameWon: hitLetters.length >= state.word.length
      };

    case FETCH_WORD:
      console.log("fetch word fired");
      return {
        ...state,
        word: action.payload.word
      };

    case INIT_STATE:
      console.log("init recuder fired");
      return initialState;

    default:
      return state;
  }
};
