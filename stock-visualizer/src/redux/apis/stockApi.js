import axios from 'axios';

export const fetchDailyStocks = async symbol => {
  try {
    console.log(symbol);
    const res = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
