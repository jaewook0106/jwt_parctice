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
            backgroundColor:'#f87979',
            pointBackgroundColor:'#fff',
            borderWidth:1,
            pointBorderColor:'#249ebf',
            data:[40, 85, 90, 20, 60],
            fill: false, // true 일 경우 색상이 채워진다.
            lineTension: 0.4, // 곡선 라인
          },
          {
            label: 'DATA two',
            // backgroundColor:['#f87979', 'yellow', 'pink', 'skyblue','#fcc', 'green'],
            borderWidth:1,
            pointBorderColor:'#fff',
            data:[40, 15, 20, 100, 60, 70],
            pointBackgroundColor: 'rgba(5, 92, 153, 0.6)',
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
    this.renderChart(this.chartData, this.chartOption)
  },
}
</script>

<style>

</style>
