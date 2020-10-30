<template>
  <div>
    <strong>차트 테스트</strong>
    <div>
      <strong>라인차트</strong>
      <div class="chart_cont">
        <div class="box_chart">
          <span class="line" style="bottom:77%;">
            <span class="txt_value">평균값</span>
          </span>
        </div>
        
      <ChartLine class="chart_wrap chart_line">
      </ChartLine>
      </div>
    </div>
    <hr>
    <div>
      <strong>막대차트</strong>
      
      <ChartBar class="chart_wrap"></ChartBar>
      
    </div>
    <hr>
    <div>
      <strong>파이차트</strong>
      <ChartDoughnut class="chart_wrap"></ChartDoughnut>
    </div>
    <hr>
    <div>
      <strong>극차트</strong>
      <ChartPolar class="chart_wrap"></ChartPolar>
    </div>
    <hr>
    <div>
      <strong>라달차트</strong>
      <ChartRadar class="chart_wrap"></ChartRadar>
    </div>
    <hr>
  </div>
</template>

<script>

import ChartLine from '@/components/chart/ChartLine'
import ChartBar from '@/components/chart/ChartBar'
import ChartDoughnut from '@/components/chart/ChartDoughnut'
import ChartPolar from '@/components/chart/ChartPolar'
import ChartRadar from '@/components/chart/ChartRadar'

export default {
  name:'Chart',
  components: {
    ChartLine,
    ChartBar,
    ChartDoughnut,
    ChartPolar,
    ChartRadar
  },
}
</script>

<style lang="scss" scoped>
  .chart_cont{
    position:relative;
    .box_chart{
      position:absolute;
      top:32px;
      bottom:29px;
      left:36px;
      right:14px;
    }
    .line{
      position:absolute;
      left:0;
      z-index:19;
      width:100%;
      height:2px;
      background-color:green;
      .txt_value{
        position:absolute;
        right:-40px;
        top:-8px;
        font-size:13px;
      }
    }
  }
  .chart_wrap{
    position:relative;
    z-index:9;
    width:100%;
  }
  hr{
    margin:30px 0
  }
</style>
