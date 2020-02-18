export const REQUEST_STOCK_TIME_SERIES_DAILY =
  'REQUEST_STOCK_TIME_SERIES_DAILY';
export const RECIEVE_STOCK_TIME_SERIES_DAILY =
  'RECIEVE_STOCK_TIME_SERIES_DAILY';

export const requestDailyStockTimeSeries = symbol => ({
  type: REQUEST_STOCK_TIME_SERIES_DAILY,
  symbol,
});
export const recieveDailyStockTimeSeries = data => ({
  type: RECIEVE_STOCK_TIME_SERIES_DAILY,
  data,
});
