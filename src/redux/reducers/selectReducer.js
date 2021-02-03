/** @format */

import { SELECT_VALUE_CHANGE } from '../constants/selectConstants';

export const selectReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_VALUE_CHANGE:
      return { selectValue: action.payload };
    default:
      return state;
  }
};
