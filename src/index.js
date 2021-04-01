import Chart from 'chart.js';
// eslint-disable-next-line no-unused-vars
import Gaugerect from './elements/elements.Gaugerect';
import LinearGaugeScale from './scales/sacles.LinearGaugeScale';
import LinearGaugeController from './controllers/controller.linearGuage';
import LinearGaugeChart from './charts/Chart.LinearGauge';

LinearGaugeController(Chart);
LinearGaugeChart(Chart);

export default LinearGaugeChart;
