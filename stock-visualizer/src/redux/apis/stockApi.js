import axios from 'axios';

export const fetchDailyStocks = async symbol => {
  try {
    console.log(symbol);
    const res = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=P3A56G4UTD9OQJNH&datatype=json`,
    );
    return res;
  } catch (err) {
    console.log(err);
  }
};
