import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestDailyStockTimeSeries } from '../../../redux/actions/';
import { dataFormatter } from '../../../utils/dataFormatter';
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { Chart } from 'highcharts/highstock';
import styled from 'styled-components';

const DailyStock = () => {
  const dispatch = useDispatch();

  const { dailyStocks } = useSelector(state => ({
    dailyStocks: state.stockReducer.dailyStocks.data,
  }));

  useEffect(() => {
    dispatch(requestDailyStockTimeSeries('APPL'));
  }, []);

  if (dailyStocks) {
    let stockData = dataFormatter(dailyStocks['Time Series (Daily)']);
    let options = {
      title: { text: 'AAPL Daily' },
      chart: { height: (9 / 16) * 80 + '%' },
      rangeSelector: { selected: 6 },
      series: [{ name: 'AAPL', data: stockData, type: 'candlestick' }],
    };
    return (
      <ChartContainer>
        <h1>DailyChart</h1>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
        />
      </ChartContainer>
    );
  } else {
    return <h1></h1>;
  }
};

const ChartContainer = styled.div`
padding: 3% 
padding-top: none
`;

export default DailyStock;
