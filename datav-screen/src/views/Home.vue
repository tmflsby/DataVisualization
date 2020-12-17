<template>
  <div class="home">
    <imooc-loading v-if="loading">
      <div class="loading-text">
        数据大屏加载中...
      </div>
    </imooc-loading>
    <imooc-container :options="{width:3840,height:2160}" v-else>
      <div class="header">
        <top-header/>
      </div>
      <div class="separator"></div>
      <div class="center">
        <div class="left">
          <div class="left1">
            <total-user :today-user="todayUser" :growth-last-day="growthLastDay" :growth-last-month="growthLastMonth"/>
          </div>
          <div class="left2">
            <average-age :data="ageData" :avg-age="averageAge"/>
          </div>
          <div class="left3">
            <total-device :data="deviceData"/>
          </div>
          <div class="left4">
            <total-gender :data="genderData"/>
          </div>
          <div class="left5">
            <total-rider :data="riderData"/>
          </div>
          <div class="left6">
            <hot-category :data="hotCategoryData"/>
          </div>
        </div>
        <div class="right">
          <div class="right-top1">
            <center-header :data="headerData"/>
          </div>
          <div class="right-top2">
            <transform-category :data="['ALL','北京','上海','深圳','杭州','南京','武汉']"/>
          </div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1">
<!--                 <jiangsu-map-warning/>-->
<!--                 <rotating-earth/>-->
<!--                 <flight-earth/>-->
                <order-map/>
              </div>
              <div class="right-left2">
                <transform-category :data="['订单量','销售额','用户数','退单量']" :color="['rgb(178,209,126)','rgb(116,166,49)']"/>
              </div>
              <div class="right-left3">
                <imooc-fly-box starColor="rgb(251,253,142)">
                  <real-time-order :data="realTimeOrderData"/>
                </imooc-fly-box>
              </div>
              <div class="right-left4">
                <schedule-view :data="scheduleViewData"/>
              </div>
            </div>
            <div class="right-right">
              <div class="right-right1">
                <sales-list :data="salesListData"/>
              </div>
              <div class="right-right2">
                <sales-rank :data="salesRankData"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </imooc-container>
  </div>
</template>

<script>
import 'echarts/lib/chart/bar'
import { ref, onMounted } from 'vue'
import useScreenData from '@/hooks/useScreenData.js'
import TopHeader from '@/components/TopHeader'
import TotalUser from '@/components/TotalUser'
import AverageAge from '@/components/AverageAge'
import TotalDevice from '@/components/TotalDevice'
import TotalGender from '@/components/TotalGender'
import TotalRider from '@/components/TotalRider'
import HotCategory from '@/components/HotCategory'
import CenterHeader from '@/components/CenterHeader'
import TransformCategory from '@/components/TransformCategory'
import SalesList from '@/components/SalesList'
// import JiangsuMapWarning from '@/components/JiangsuMapWarning'
// import RotatingEarth from '@/components/RotatingEarth'
// import FlightEarth from '@/components/FlightEarth'
import OrderMap from '@/components/OrderMap'
import RealTimeOrder from '@/components/RealTimeOrder'
import ScheduleView from '@/components/ScheduleView'
import SalesRank from '@/components/SalesRank'

export default {
  name: 'Home',
  components: {
    TopHeader,
    TotalUser,
    AverageAge,
    TotalDevice,
    TotalGender,
    TotalRider,
    HotCategory,
    CenterHeader,
    SalesList,
    // JiangsuMapWarning,
    // RotatingEarth,
    // FlightEarth,
    OrderMap,
    RealTimeOrder,
    ScheduleView,
    SalesRank,
    TransformCategory
  },
  setup() {
    const loading = ref(true)

    const screenData = useScreenData()

    onMounted(() => {
      setTimeout(() => {
        loading.value = false
      }, 2000)
    })

    return {
      loading,
      ...screenData
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
  background: rgb(29, 29, 29);
  color: #fff;
  font-size: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  #imooc-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .header {
    height: 167px;
    width: 100%;
  }
  .separator {
    height: 10px;
    background: rgb(92, 88, 89);
    width: 100%;
  }
  .center {
    flex: 1;
    width: 100%;
    display: flex;
    .left {
      flex: 0 0 860px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;
      box-sizing: border-box;
      .left1 {
        height: 300px;
      }
      .left2 {
        height: 320px;
      }
      .left3 {
        height: 280px;
      }
      .left4 {
        height: 300px;
      }
      .left5 {
        height: 360px;
      }
      .left6 {
        height: 360px;
      }
    }
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .right-top1 {
        height: 206px;
      }
      .right-top2 {
        height: 48px;
        margin: 10px 0;
      }
      .right-bottom {
        flex: 1;
        display: flex;
        padding-bottom: 20px;
        .right-left {
          display: flex;
          flex-direction: column;
          flex: 0 0 1917px;
          justify-content: space-between;
          .right-left1 {
            height: 999px;
          }
          .right-left2 {
            height: 80px;
          }
          .right-left3 {
            height: 350px;
          }
          .right-left4 {
            height: 220px;
            background: orangered;
          }
        }
        .right-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          justify-content: space-between;
          margin-right: 20px;
          .right-right1 {
            width: 100%;
            height: 999px;
          }
          .right-right2 {
            flex: 1;
            background: darkred;
            margin-top: 20px;
          }
        }
      }
    }
  }
}

.loading-text {
  font-size: 20px;
  margin-top: 10px;
}
</style>
