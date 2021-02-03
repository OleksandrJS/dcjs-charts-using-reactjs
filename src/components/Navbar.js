/** @format */

import React, { useEffect, useState } from 'react';
import * as dc from 'dc';
import {
  Button,
  Typography,
  Toolbar,
  AppBar,
  makeStyles,
  Select,
  MenuItem,
  FormControl,
  withStyles,
  InputBase,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { selectChange } from '../redux/actions/selectActions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  button: {},
  select: {
    margin: '0px 30px 0px 0px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  white: {
    color: '#fff',
  },
}));

const Input = withStyles((theme) => ({
  input: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    color: '#757575',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: '500',
    padding: '8px 26px 9px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: 4,
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export const Navbar = () => {
  const classes = useStyles();

  const [selectValue, setSelectValue] = useState('revenues');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectChange(selectValue));
  }, [selectValue, dispatch]);

  const resetHandler = () => {
    dc.filterAll();
    dc.redrawAll();
  };

  const selectChangeHandler = (e) => {
    setSelectValue(e.target.value);
    resetHandler();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h5">
            <Link className={classes.link} to="/dcjs-charts-using-reactjs">
              Charts
            </Link>
          </Typography>

          <FormControl className={classes.formControl}>
            <Select
              value={selectValue}
              onChange={selectChangeHandler}
              input={<Input />}
              label="Category">
              <MenuItem value={'revenues'}>Revenues</MenuItem>
              <MenuItem value={'markdown'}>Markdown</MenuItem>
              <MenuItem value={'margin'}>Margin</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="secondary" onClick={resetHandler}>
            Reset
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
