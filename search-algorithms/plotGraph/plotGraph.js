import {collectData} from './collectData.js';

const {dataLinear, dataBinary} = collectData();

const ctx = document.getElementById('algorithmChart').getContext('2d');

new window.Chart(ctx, {
  type: 'line',
  data: {
    labels: dataLinear.map(item => item.length),
    datasets: [{
      label: 'Linear Search',
      data: dataLinear.map(item => item.time),
      borderColor: 'red',
      fill: false
    }, {
      label: 'Binary Search',
      data: dataBinary.map(item => item.time),
      borderColor: 'blue',
      fill: false
    }]
  },
  options: {
    scales: {
        x: {
            type: 'logarithmic',
            title: {
                display: true,
                text: 'Array Size (n)'
            },
            beginAtZero: true
        },
        y: {
            type: 'logarithmic',
            title: {
                display: true,
                text: 'Time (ms)'
            },
            beginAtZero: true
        }
      }
    }
});
