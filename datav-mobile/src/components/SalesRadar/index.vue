<template>
  <div class="sales-radar">
    <div class="sales-radar-inner">
      <VueECharts :options="options"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalesRadar',
  props: {
    data: Object
  },
  data () {
    return {
      options: {}
    }
  },
  watch: {
    data() {
      this.update()
    }
  },
  methods: {
    update() {
      if (this.data) {
        const { data, indicator } = this.data.salesRadar
        // 渲染echarts雷达图
        this.options = {
          radar: {
            name: {},
            indicator: indicator
          },
          series: [
            {
              name: '运营指标',
              type: 'radar',
              data
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-radar {
  position: absolute;
  top: 3250px;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 800px;
  padding: 25px 25px 0;
  box-sizing: border-box;
  .sales-radar-inner {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, .05);
  }
}
</style>
