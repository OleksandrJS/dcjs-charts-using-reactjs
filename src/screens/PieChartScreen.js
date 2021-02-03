/** @format */

import { makeStyles, Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { PieChart } from '../components/PieChart';

const useStyles = makeStyles((theme) => ({
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const PieChartScreen = () => {
  const classes = useStyles();

  return (
    <>
      <PieChart />
      <div className={classes.btnWrap}>
        <Button variant="contained" color="primary">
          <Link className={classes.link} to="/linechart">
            Line Chart
          </Link>
        </Button>
      </div>
    </>
  );
};
