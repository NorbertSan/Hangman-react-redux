import { combineReducers } from "redux";
import letterReducer from "./letterReducer";

export default combineReducers({
  // letters: letterReducer,
  hangman: letterReducer
  // letters: letterReducer
});
