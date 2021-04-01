import Chart from 'chart.js';
 // eslint-disable-next-line no-unused-vars
import LinearGaugeScale from './scales/chart.scale.lineargauge';
import Gaugerect from './elements/chart.element.gaugerect';
import LinearGaugeController from './controllers/controller.linearGauge';
import LinearGaugeChart from './charts/Chart.LinearGauge';

LinearGaugeController(Chart);
LinearGaugeChart(Chart);

export default LinearGaugeChart;
