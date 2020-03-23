import { FETCH_WORD } from "actions/types";

const initialState = {
  letters: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD:
      return {
        ...state,
        word: action.payload.word
      };

    default:
      return state;
  }
};
