import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { DailyStock } from './DailyStock';
import styled from 'styled-components';

const DailyStock = lazy(() => import('./DailyStock'));

export const StockChart = () => {
  return (
    <Router>
      <Title>StockChart</Title>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/stocks/daily' component={DailyStock} />
        </Switch>
      </Suspense>
    </Router>
  );
};

const Title = styled.h1`
  font-size: 50px;
`;
