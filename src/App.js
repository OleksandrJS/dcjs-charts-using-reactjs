/** @format */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { PieChartScreen } from './screens/PieChartScreen';
import { LineChartScreen } from './screens/LineChartScreen';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PieChartScreen} />
          <Route path="/linechart" component={LineChartScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
