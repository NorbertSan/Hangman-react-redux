import { CLICK__LETTER } from "./types";

export const addLetter = letter => dispatch => {
  dispatch({
    type: CLICK__LETTER,
    payload: {
      letter
    }
  });
};
