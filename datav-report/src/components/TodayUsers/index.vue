<template>
  <CommonCard title="今日交易用户数" :value="orderUser">
    <template>
      <VueECharts :options="getOptions()"/>
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{ returnRate }}</span>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonDataMixin from '@/mixins/commonDataMixin'
export default {
  name: 'TodayUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions() {
      return {
        tooltip: {},
        xAxis: {
          type: 'category',
          data: this.orderUserTrend,
          show: false
        },
        yAxis: {
          show: false
        },
        series: [{
          name: '用户实时交易量',
          type: 'bar',
          data: this.orderUserTrendAxis,
          barWidth: '60%'
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        color: ['#3398DB']
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
