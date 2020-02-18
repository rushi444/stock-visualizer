import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DailyStock } from './DailyStock';

export const StockChart = () => {
  return (
    <Router>
      <h1>StockChart</h1>
      <Switch>
        <Route exact path='/stocks/daily' component={DailyStock} />
      </Switch>
    </Router>
  );
};
