/** @format */

import crossfilter from 'crossfilter2';
import { csv } from 'd3';
import {
  NDX_DATA_REQUEST,
  NDX_DATA_REQUEST_FAIL,
  NDX_DATA_REQUEST_SUCCESS,
} from '../constants/ndxConstants';

const getDateOfTheWeek = (w, y) => {
  const date = new Date(Date.UTC(y, 0, 1 + (w - 1) * 7));
  const day = date.getUTCDay();
  const week = date;
  if (day <= 4) {
    week.setUTCDate(date.getUTCDate() - date.getUTCDay() + 1);
  } else {
    week.setUTCDate(date.getUTCDate() + 8 - date.getUTCDay());
  }
  return week;
};

export const ndxDataRequest = () => async (dispatch) => {
  dispatch({ type: NDX_DATA_REQUEST });
  try {
    const data = await csv('./data.csv');
    data.forEach((d) => {
      d.dateOfTheWeek = getDateOfTheWeek(d.week_ref, d.year_ref);
    });
    dispatch({ type: NDX_DATA_REQUEST_SUCCESS, payload: crossfilter(data) });
  } catch (error) {
    dispatch({ type: NDX_DATA_REQUEST_FAIL });
    throw new Error(error.message);
  }
};
