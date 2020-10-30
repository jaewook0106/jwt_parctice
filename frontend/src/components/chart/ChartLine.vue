
<script>

import { Line } from 'vue-chartjs'


export default {
  name:'ChartLine',
  extends: Line,
  data(){
    return {
      chartData: {
        labels: ['January','February','March', 'April', 'May'],
        datasets: [
          {
            label: 'DATA ONE',
            backgroundColor:'rgba(0,0,0, 0.2)',
            pointBackgroundColor:'#fff',
            borderWidth:1,
            borderColor: 'green',
            pointBorderColor:'green',
            shadowColor: 'red',
            shadowBlur: 10,
            data:[40, 85, 90, 20, 60],
            fill: true, // true 일 경우 색상이 채워진다.
            lineTension: 0.4, // 곡선 라인
          },
          {
            label: 'DATA two',
            backgroundColor:['#f87979', 'yellow', 'pink', 'skyblue','#fcc', 'green'],
            borderWidth:1,
            borderColor: 'skyblue',
            pointBorderColor:'skyblue',
            data:[20, 15, 20, 100, 70],
            pointBackgroundColor: '#fff',
            fill: false,

          }
        ]
      },
      chartOption: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // maxTicksLimit:11,
              max: 100,
              stepSize: 20
              
            },
            gridLines: {
              display: true
            },
            // stacked: true
          }],
          xAxes: [ {
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  
  // props:['chartdata', 'options'],
  mounted() {
    const ctx = document.querySelector('#line-chart').getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(56,192,8,1)');   
    gradient.addColorStop(1, 'rgba(97,236, 86,0)');

    this.chartData.datasets[0].backgroundColor = gradient;

    this.renderChart(this.chartData, this.chartOption)
    
  },
  methods: {

  },
}
</script>

<style>

</style>
