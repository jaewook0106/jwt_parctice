<template>
  <div>
    <strong>차트 테스트</strong>
    <div>
      <strong>라인차트</strong>
      <ChartLine class="chart_wrap"></ChartLine>
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
  }
}
</script>

<style lang="scss" scoped>
  .chart_wrap{
    width:500px
  }
  hr{
    margin:30px 0
  }
</style>
