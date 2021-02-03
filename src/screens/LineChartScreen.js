/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryLinksChart } from '../components/CategoryLinksChart';
import { LineChart } from '../components/LineChart';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  btnWrap: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const LineChartScreen = () => {
  const classes = useStyles();
  return (
    <>
      <LineChart />
      <CategoryLinksChart />
      <div className={classes.btnWrap}>
        <Button variant="contained" color="primary">
          <Link className={classes.link} to="/">
            Pie Chart
          </Link>
        </Button>
      </div>
    </>
  );
};
