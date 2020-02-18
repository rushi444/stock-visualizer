import { RECIEVE_STOCK_TIME_SERIES_DAILY } from '../actions/index';

const initialState = {
  dailyStocks: {},
  weeklyStocks: {},
  monthlyStocks: {},
  monthlyStocksSeries: [],
};

export const stockReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case RECIEVE_STOCK_TIME_SERIES_DAILY:
      console.log(data);
      return {
        ...state,
        dailyStocks: data,
      };
    default:
      return state;
  }
};
