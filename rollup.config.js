// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const plugins = [resolve(), commonjs(), babel()];
export default [
  {
    output: {
      file: 'build/Chart.LinearGauge.umd.js',
      name: 'ChartjsLinearGauge',
      format: 'umd',
      globals: {
        'chart.js': 'Chart',
      },
    },
    external: ['chart.js'],
    plugins,
  },
  {
    output: {
      file: 'build/Chart.LinearGauge.cjs.js',
      name: 'ChartjsLinearGauge',
      format: 'cjs',
    },
    external: ['chart.js'],
    plugins,
  },
];
