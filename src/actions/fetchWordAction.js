import { FETCH_WORD } from "./types";

export const fetchWord = () => async dispatch => {
  const data = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );
  const [word] = await data.json();
  dispatch({
    type: FETCH_WORD,
    payload: {
      word
    }
  });
};
