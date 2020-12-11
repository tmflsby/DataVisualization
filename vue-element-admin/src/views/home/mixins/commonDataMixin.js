import {
  format, wrapperObject, wrapperArray, wrapperMoney,
  wrapperOriginalNumber, wrapperNumber, wrapperPercentage
} from '../utils/fixData'

export default {
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
  filters: {
    format: (v) => format(v)
  },
  computed: {
    reportData() {
      return this.getReportData()
    },
    salesToday() {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate() {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday() {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay() {
      return wrapperNumber(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperNumber(this.reportData, 'userGrowthLastMonth')
    },
    orderFullYear() {
      return wrapperArray(this.reportData, 'orderFullYear')
    },
    orderFullYearAxis() {
      return wrapperArray(this.reportData, 'orderFullYearAxis')
    },
    orderRank() {
      return wrapperArray(this.reportData, 'orderRank')
    },
    userFullYear() {
      return wrapperArray(this.reportData, 'userFullYear')
    },
    userFullYearAxis() {
      return wrapperArray(this.reportData, 'userFullYearAxis')
    },
    userRank() {
      return wrapperArray(this.reportData, 'userRank')
    },
    wordCloud() {
      return this.getWordCloud()
    },
    category1() {
      return wrapperObject(this.reportData, 'category.data1')
    },
    category2() {
      return wrapperObject(this.reportData, 'category.data2')
    },
    mapData() {
      return this.getMapData()
    }
  }
}
