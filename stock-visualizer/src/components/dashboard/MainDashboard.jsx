import React from 'react';
import { StockChart } from './stockRoutes/StockChart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const MainDashboard = () => {
  return (
    <Router>
      <Switch>
        <Route path='/stocks' component={StockChart} />
        {/* <Route path='/forex' component={ForexChart} /> */}
      </Switch>
    </Router>
  );
};
