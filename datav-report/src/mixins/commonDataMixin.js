import {
  mockSalesToday, mockSalesGrowthLastDay, mockSalesGrowthLastMonth, mockSalesLastDay,
  mockOrderToday, mockOrderLastDay, mockOrderTrend,
  mockOrderUser, mockReturnRate, nockOrderUserTrend, mockOrderUserTrendAxis,
  mockUserToday, mockUserTodayNumber, mockUserLastMonth, mockUserGrowthLastDay, mockUserGrowthLastMonth,
  mockOrderFullYear, mockOrderFullYearAxis, mockOrderRank,
  mockUserFullYear, mockUserFullYearAxis, mockUserRank,
  mockWordCloud, mockCategory, mockCommodity,
  mockPointData, mockGeoCoordMap, mockWordCloudChartData
} from '@/api/mockData'

import {
  format, wrapperArray, wrapperMoney,
  wrapperOriginalNumber, wrapperNumber, wrapperPercentage
} from '@/utils/fixData'

/** API有效——API数据  API无效——Mock数据 */
export default {
  inject: ['getReportData', 'getWordCloud', 'getMapData'],
  computed: {
    reportData() {
      return this.getReportData()
    },
    salesToday() {
      const salesToday = wrapperMoney(this.reportData, 'salesToday')
      return salesToday === '¥ 0.00' ? `¥ ${format(mockSalesToday)}` : salesToday
    },
    salesGrowthLastDay() {
      const salesGrowthLastDay = wrapperPercentage(this.reportData, 'salesGrowthLastDay')
      return salesGrowthLastDay === '0%' ? `${mockSalesGrowthLastDay}%` : salesGrowthLastDay
    },
    salesGrowthLastMonth() {
      const salesGrowthLastMonth = wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
      return salesGrowthLastMonth === '0%' ? `${mockSalesGrowthLastMonth}%` : salesGrowthLastMonth
    },
    salesLastDay() {
      const salesLastDay = wrapperMoney(this.reportData, 'salesLastDay')
      return salesLastDay === '¥ 0.00' ? `¥ ${format(mockSalesLastDay)}` : salesLastDay
    },
    orderToday() {
      const orderToday = wrapperNumber(this.reportData, 'orderToday')
      return orderToday === 0 ? `${format(mockOrderToday)}` : orderToday
    },
    orderLastDay() {
      const orderLastDay = wrapperNumber(this.reportData, 'orderLastDay')
      return orderLastDay === 0 ? `${format(mockOrderLastDay)}` : orderLastDay
    },
    orderTrend() {
      const orderTrend = wrapperArray(this.reportData, 'orderTrend')
      return orderTrend.length === 0 ? mockOrderTrend : orderTrend
    },
    orderUser() {
      const orderUser = wrapperNumber(this.reportData, 'orderUser')
      return orderUser === 0 ? `${format(mockOrderUser)}` : orderUser
    },
    returnRate() {
      const returnRate = wrapperPercentage(this.reportData, 'returnRate')
      return returnRate === '0%' ? `${mockReturnRate}%` : returnRate
    },
    orderUserTrend() {
      const orderUserTrend = wrapperArray(this.reportData, 'orderUserTrend')
      return orderUserTrend.length === 0 ? nockOrderUserTrend : orderUserTrend
    },
    orderUserTrendAxis() {
      const orderUserTrendAxis = wrapperArray(this.reportData, 'orderUserTrendAxis')
      return orderUserTrendAxis.length === 0 ? mockOrderUserTrendAxis : orderUserTrendAxis
    },
    userToday() {
      const userToday = wrapperNumber(this.reportData, 'userToday')
      return userToday === 0 ? `${format(mockUserToday)}` : userToday
    },
    userTodayNumber() {
      const userTodayNumber = wrapperOriginalNumber(this.reportData, 'userToday')
      return userTodayNumber === 0 ? mockUserTodayNumber : userTodayNumber
    },
    userLastMonth() {
      const userLastMonth = wrapperOriginalNumber(this.reportData, 'userLastMonth')
      return userLastMonth === 0 ? mockUserLastMonth : userLastMonth
    },
    userGrowthLastDay() {
      const userGrowthLastDay = wrapperNumber(this.reportData, 'userGrowthLastDay')
      return userGrowthLastDay === 0 ? `${mockUserGrowthLastDay}%` : userGrowthLastDay
    },
    userGrowthLastMonth() {
      const userGrowthLastMonth = wrapperNumber(this.reportData, 'userGrowthLastMonth')
      return userGrowthLastMonth === 0 ? `${mockUserGrowthLastMonth}%` : userGrowthLastMonth
    },
    orderFullYear() {
      const orderFullYear = wrapperArray(this.reportData, 'orderFullYear')
      return orderFullYear.length === 0 ? mockOrderFullYear : orderFullYear
    },
    orderFullYearAxis() {
      const orderFullYearAxis = wrapperArray(this.reportData, 'orderFullYearAxis')
      return orderFullYearAxis.length === 0 ? mockOrderFullYearAxis : orderFullYearAxis
    },
    orderRank() {
      const orderRank = wrapperArray(this.reportData, 'orderRank')
      return orderRank.length === 0 ? mockOrderRank : orderRank
    },
    userFullYear() {
      const userFullYear = wrapperArray(this.reportData, 'userFullYear')
      return userFullYear.length === 0 ? mockUserFullYear : userFullYear
    },
    userFullYearAxis() {
      const userFullYearAxis = wrapperArray(this.reportData, 'userFullYearAxis')
      return userFullYearAxis.length === 0 ? mockUserFullYearAxis : userFullYearAxis
    },
    userRank() {
      const userRank = wrapperArray(this.reportData, 'userRank')
      return userRank.length === 0 ? mockUserRank : userRank
    },
    wordCloud() {
      const wordCloud = this.getWordCloud() && this.getWordCloud().data
      return wordCloud === null ? mockWordCloud : wordCloud
    },
    category() {
      // 接口失效，直接用mock数据
      // const category = wrapperObject(this.reportData, 'category.data1')
      return mockCategory
    },
    commodity() {
      // 接口失效，直接用mock数据
      // const commodity = wrapperObject(this.reportData, 'category.data2')
      return mockCommodity
    },
    mapData() {
      return this.getMapData()
    },
    pointData() {
      return mockPointData
    },
    geoCoordMap() {
      return mockGeoCoordMap
    },
    wordCloudChartData() {
      return mockWordCloudChartData
    }
  },
  filters: {
    format(v) {
      return format(v)
    }
  }
}
