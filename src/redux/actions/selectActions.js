/** @format */

import { SELECT_VALUE_CHANGE } from '../constants/selectConstants';

export const selectChange = (value) => (dispatch) => {
  dispatch({ type: SELECT_VALUE_CHANGE, payload: value });
};
