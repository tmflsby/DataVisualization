<template>
  <CommonCard title="累计用户数" :value="userToday">
    <template>
      <VueECharts :options="getOptions()" />
    </template>
    <template v-slot:footer>
      <div class="total-user-footer">
        <span>日同比 </span>
        <span class="emphasis">{{ userGrowthLastDay }}</span>
        <div class="increase" />
        <span class="month">月同比 </span>
        <span class="emphasis">{{ userGrowthLastMonth }}</span>
        <div class="decrease" />
      </div>
    </template>
  </CommonCard>
</template>

<script>
import commonCardMixin from '../../mixins/commonCardMixin'
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'TotalUsers',
  mixins: [commonCardMixin, commonDataMixin],
  methods: {
    getOptions() {
      return {
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        series: [
          {
            name: '上月平台用户数',
            type: 'bar',
            data: [this.userLastMonth],
            stack: '总量',
            barWidth: 10,
            itemStyle: {
              color: '#45C946'
            }
          },
          {
            name: '今日平台用户数',
            type: 'bar',
            data: [this.userTodayNumber],
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            data: [this.userLastMonth],
            stack: '总量',
            renderItem: (params, api) => {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M86.3 755.4c-26.2-26.2-26.2-68.6 0-94.7l379-379c26.2-26.2 68.6-26.2 94.7 0l379 379c26.2 26.2 26.2 68.6 0 94.7l-852.7 0z',
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45C946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M937.7 268.6c26.2 26.2 26.2 68.6 0 94.7l-379 379c-26.2 26.2-68.6 26.2-94.7 0l-379-379c-26.2-26.2-26.2-68.6 0-94.7h852.7z',
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45C946'
                    }
                  }
                ]
              }
            }
          }
        ],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.total-user-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
