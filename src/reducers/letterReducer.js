import { CLICK__LETTER, FETCH_WORD } from "actions/types";

const initialState = {
  missedLetters: [],
  hitLetters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLICK__LETTER:
      const addNewLetter = missedLetters => missedLetters.push(clickedLetter);
      const duplicateController = missedLetters =>
        missedLetters.filter(
          (letter, index, arr) => arr.indexOf(letter) === index
        );
      const onlyLetterController = missedLetters =>
        action.payload.letter.keyCode >= 65 &&
        action.payload.letter.keyCode <= 90;
      const isWordIncludeLetter = () => wordLetters.includes(clickedLetter);

      // FUNCTIONS INVOKED
      //1. check if word include letter
      const clickedLetter = action.payload.letter.key;
      let missedLetters = state.missedLetters;
      let wordLetters = state.word.split("");
      let hitLetters = state.hitLetters;
      if (isWordIncludeLetter()) {
        // hit letter
        hitLetters.push(clickedLetter);
        hitLetters = duplicateController(hitLetters);
      } else {
        // miss letter
        if (onlyLetterController()) {
          addNewLetter(missedLetters);
          missedLetters = duplicateController(missedLetters);
        }
      }

      return {
        ...state,
        missedLetters,
        hitLetters
      };

    case FETCH_WORD:
      return {
        ...state,
        word: action.payload.word
      };

    default:
      return state;
  }
};
