import axios from 'axios';

export const STOCK_TIME_SERIES_DAILY = 'STOCK_TIME_SERIES_DAILY';
export const getDailyStockTimeSeries = symbol => async dispatch => {
  try {
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=P3A56G4UTD9OQJNH&datatype=json`,
    );
    dispatch({ type: STOCK_TIME_SERIES_DAILY, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const STOCK_TIME_SERIES_WEEKLY = 'STOCK_TIME_SERIES_WEEKLY';
export const getWeeklyStockTimeSeries = symbol => async dispatch => {
  try {
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${symbol}&apikey=P3A56G4UTD9OQJNH&datatype=json`,
    );
    dispatch({ type: STOCK_TIME_SERIES_WEEKLY, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const STOCK_TIME_SERIES_MONTHLY = 'STOCK_TIME_SERIES_MONTHLY';
export const getMonthlyStockTimeSeries = symbol => async dispatch => {
  try {
    let res = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=P3A56G4UTD9OQJNH&datatype=json`,
    );
    dispatch({ type: STOCK_TIME_SERIES_MONTHLY, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const MULTIPLE_STOCKS_SERIES_MONTHLY = 'MULTIPLE_STOCKS_SERIES_MONTHLY';
export const getMonthlyStocksForComparison = (...symbols) => async dispatch => {
  try {
    let res = await Promise.all(
      symbols.map(symbol => {
        axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=P3A56G4UTD9OQJNH&datatype=json`,
        );
      }),
    );
    dispatch({ type: MULTIPLE_STOCKS_SERIES_MONTHLY, payload: res });
  } catch (err) {
    console.log(err);
  }
};
