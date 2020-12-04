<template>
  <VeBMap
    :settings="chartSettings"
    :title="chartTitle"
    :series="chartSeries"
    :tooltip="chartTooltip"
    height="100%"
  />
</template>

<script>
import 'echarts/extension/bmap/bmap'
import commonDataMixin from '@/mixins/commonDataMixin'
import styleJson from '@/style/mapStyle'
export default {
  name: 'BMapScatter',
  mixins: [commonDataMixin],
  data() {
    return {
      chartSettings: {
        key: 'vi4PmkD9VTUozB20xAEzbTeplG2UBDOR',
        v: '3.0',
        bmap: {
          center: [104.114129, 37.550339],
          zoom: 5,
          roam: true,
          mapStyleV2: {
            styleJson
          }
        }
      },
      chartTitle: {
        text: 'PM2.5数据大盘',
        subtext: '环境指数统计',
        textLink: 'https://www.imooc.com',
        left: 'center'
      },
      chartSeries: [],
      chartTooltip: {}
    }
  },
  mounted() {
    this.chartSeries = [
      {
        name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'bmap',
        data: this.convertData(this.pointData),
        encode: {
          value: 2
        },
        symbolSize: (val) => val[2] / 10,
        itemStyle: {
          color: 'purple'
        },
        label: {
          show: false,
          position: 'right',
          formatter: (v) => `${v.data.name} - ${v.data.value[2]}`
        },
        emphasis: {
          label: {
            show: true
          }
        }
      },
      {
        name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'bmap',
        data: this.convertData(this.pointData.sort((a, b) => b.value - a.value).slice(0, 5)),
        encode: {
          value: 2
        },
        symbolSize: (val) => val[2] / 10,
        itemStyle: {
          color: 'purple',
          shadowBlur: 10,
          shadowColor: '#333'
        },
        label: {
          show: true,
          position: 'right',
          formatter: (v) => `${v.data.name} - ${v.data.value[2]}`
        },
        hoverAnimation: true,
        rippleEffect: {
          brushType: 'stroke'
        }
      }
    ]
  },
  methods: {
    convertData(pointData) {
      const res = []
      pointData.forEach(item => {
        const { name, value } = item
        const coord = this.geoCoordMap[name]
        res.push({
          name,
          value: [...coord, value]
        })
      })
      return res
    }
  }
}
</script>

<style scoped>

</style>
