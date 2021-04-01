export default Chart => {
  Chart.LinearGauge = (context, config) => {
    config.type = 'linearGauge';

    return new Chart(context, config);
  };
};
