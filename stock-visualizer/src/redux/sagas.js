import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  REQUEST_STOCK_TIME_SERIES_DAILY,
  recieveDailyStockTimeSeries,
} from './actions';
import { fetchDailyStocks } from './apis/stockApi';

function* getStockDaily(action) {
  try {
    const data = yield call(fetchDailyStocks, action.symbol);
    yield put(recieveDailyStockTimeSeries(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_STOCK_TIME_SERIES_DAILY, getStockDaily);
}
