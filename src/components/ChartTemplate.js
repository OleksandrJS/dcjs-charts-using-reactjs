/** @format */

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ndxDataRequest } from '../redux/actions/ndxActions';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  chart: {
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    margin: '50px auto 20px auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '500px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const ChartTemplate = ({ chartFunction }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { ndxData: ndx, hasNDX, loading } = useSelector((state) => state.ndx);
  const { selectValue } = useSelector((state) => state.select);

  const div = useRef(null);

  useEffect(() => {
    if (hasNDX) {
      return;
    }
    dispatch(ndxDataRequest());
  }, [hasNDX, dispatch]);

  useEffect(() => {
    if (!ndx) {
      return;
    }
    const newChart = chartFunction(div.current, ndx, selectValue);
    newChart.render();
  }, [chartFunction, ndx, selectValue]);

  if (!hasNDX || loading) {
    return (
      <div className={classes.loader}>
        <CircularProgress disableShrink />
      </div>
    );
  }

  return <div ref={div} className={classes.chart}></div>;
};
