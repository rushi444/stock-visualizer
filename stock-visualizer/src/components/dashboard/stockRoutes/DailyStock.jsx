import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestDailyStockTimeSeries } from '../../../redux/actions/';

export const DailyStock = () => {
  const dispatch = useDispatch();

  const { dailyStocks } = useSelector(state => ({
    dailyStocks: state.stockReducer.dailyStocks,
  }));

  useEffect(() => {
    dispatch(requestDailyStockTimeSeries('APPL'));
  }, []);

  console.log('redux', dailyStocks);
  return (
    <div>
      <h1>DailyChart</h1>
    </div>
  );
};
