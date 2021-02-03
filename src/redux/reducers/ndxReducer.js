/** @format */

import {
  NDX_DATA_REQUEST,
  NDX_DATA_REQUEST_FAIL,
  NDX_DATA_REQUEST_SUCCESS,
} from '../constants/ndxConstants';

export const ndxReducer = (state = {}, action) => {
  switch (action.type) {
    case NDX_DATA_REQUEST:
      return { loading: true, hasNDX: false };
    case NDX_DATA_REQUEST_SUCCESS:
      return { loading: false, hasNDX: true, ndxData: action.payload };
    case NDX_DATA_REQUEST_FAIL:
      return { loading: false, hasNDX: false };
    default:
      return state;
  }
};
