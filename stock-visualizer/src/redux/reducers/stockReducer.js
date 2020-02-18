import {
  STOCK_TIME_SERIES_DAILY,
  STOCK_TIME_SERIES_MONTHLY,
  STOCK_TIME_SERIES_WEEKLY,
  MULTIPLE_STOCKS_SERIES_MONTHLY,
} from '../actions/index';

const initialState = {
  dailyStocks: {},
  weeklyStocks: {},
  monthlyStocks: {},
  monthlyStocksSeries: [],
};

export const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case STOCK_TIME_SERIES_DAILY:
      return {
        ...state,
        dailyStocks: action.payload,
      };
    case STOCK_TIME_SERIES_WEEKLY:
      return {
        ...state,
        weeklyStocks: action.payload,
      };
    case STOCK_TIME_SERIES_MONTHLY:
      return {
        ...state,
        monthlyStocks: action.payload,
      };
    case MULTIPLE_STOCKS_SERIES_MONTHLY:
      return {
        ...state,
        monthlyStocksSeries: action.payload,
      };
    default:
      return state;
  }
};
