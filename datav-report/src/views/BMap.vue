<template>
  <VueECharts :options="options"/>
</template>

<script>
import 'echarts/extension/bmap/bmap'
import { styleJson, pointData, geoCoordMap } from '@/style/bmapData'
export default {
  name: 'BMap',
  data() {
    return {
      options: {}
    }
  },
  mounted() {
    const convertData = (pointData) => {
      const res = []
      pointData.forEach(item => {
        const { name, value } = item
        const coord = geoCoordMap[name]
        res.push({
          name,
          value: [...coord, value]
        })
      })
      return res
    }

    console.log(convertData(pointData))

    this.options = {
      bmap: {
        key: 'vi4PmkD9VTUozB20xAEzbTeplG2UBDOR',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: true,
        mapStyleV2: {
          styleJson
        }
      },
      title: {
        text: '慕课外卖销售数据大盘',
        subtext: '销售趋势统计',
        textLink: 'https://www.imooc.com',
        left: 'center'
      },
      series: [
        {
          name: 'pm2.5',
          type: 'scatter',
          coordinateSystem: 'bmap',
          data: convertData(pointData),
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
          data: convertData(pointData.sort((a, b) => b.value - a.value).slice(0, 5)),
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
      ],
      tooltip: {}
    }
  }
}
</script>

<style scoped>

</style>
