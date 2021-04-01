# Chart.js Linear Gauge Chart

Chart.js linear gauge chart implementation

 

## Install

```bash
npm install --save chart.js chartjs-chart-linear-gauge
```

## Chart Type

The code will register one new chart type with chartjs: `linearGauge`

## Usage

Using node:

```javascript
require('chart.js');
require('chartjs-chart-linearGauge-gauge');
```

Or with a script tag

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>

<script src="node_modules/chartjs-chart-radial-gauge/build/Chart.LinearGauge.umd.min.js"></script>
```

and then use the `linearGauge` chartType when create a Chart:

```javascript

var ctx = document.getElementById('chart-area').getContext('2d');
var config = {
    type: 'linearGauge',
    options: {
      ...
    },
    ...
};
new Chart(ctx, config);
```

## Options

Here are the configurable options for the radial gauge and their defaults:

```javascript
options: {
        responsive: true,
        scale: {
        	horizontal: false,
            range: {
                startValue: -100,
        		endValue: 200
            },
            responsive: true,
            font: {
                fontName: 'Arial',
                fontSize: 12
            },
            axisWidth: 5,
            axisColor: '#c5c7cf',
            ticks: {
                majorTicks: {
	                interval: 0,
	                height: 2
	            },
	            minorTicks: {
	                interval: 25,
	                width: 2,
	                offset: -2
	            },
            },
            scaleLabel: {
                display: true,
                interval: 100,
                units: '',
                offset: -22,
                color: '#3fd91e'
            },
            scaleColorRanges: [{
                start: -50,
                end: 30,
                color: '#fe5066'
            }, {
                start: 30,
                end: 130,
                color: '#82e668'
            }, {
                start: 130,
                end: 180,
                color: '#1224fc'
            }],
        },
    	legend: {
            display: false
        }
```

## Documentation


## Building

