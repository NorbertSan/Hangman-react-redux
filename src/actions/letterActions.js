import { CLICK__LETTER } from "./types";

export const addLetter = letter => dispatch => {
  console.log("add missed letter fired");
  dispatch({
    type: CLICK__LETTER,
    payload: {
      letter
    }
  });
};
