import { INIT_STATE } from "./types";

export const initState = () => dispatch => {
  dispatch({
    type: INIT_STATE
  });
};
