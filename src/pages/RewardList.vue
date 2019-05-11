<template>
  <div id="rewardList">
    <van-nav-bar class="nav" :fixed="true" title="邀请记录" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="header">
        <p class="p2" @click="stateModel = true">
          <span>状态</span>
          <span>{{state}}</span>
        </p>
        <p class="p1" @click="dateModel = true">
          <span>时间</span>
          <span>{{dateValue}}</span>
        </p>
      </div>
      <table class="list-table">
        <thead>
          <tr>
            <th>邀请好友</th>
            <th>时间</th>
            <th>购买金额（元）</th>
            <th>奖励（元）</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in 10" :key="index">
            <td>j*****k</td>
            <td>2018-6-9</td>
            <td>909.8</td>
            <td>100</td>
            <td class="td-red">已结算</td>
          </tr>
        </tbody>
      </table>
    </div>
    <van-popup class="dateModel" position="bottom" v-model="dateModel">
      <van-datetime-picker @confirm="confirmOk" @cancel="dateModel = false" v-model="currentDate" type="date" />
    </van-popup>
    <van-popup class="stateModel" position="bottom" v-model="stateModel">
      <p class="header">
        <!-- <span class="span1" @click="stateModel = false">取消</span> -->
        <span class="span2" @click="stateModel = false">确定</span>
      </p>
      <van-picker :columns="stateArr" @change="onChangeState" />
    </van-popup>
  </div>
</template>

<script>
import { formatDate } from '../assets/js/utils'
export default {
  name: 'rewardList',
  data () {
    return {
      dateModel: false,
      minHour: 10,
      maxHour: 20,
      currentDate: new Date(),
      dateValue: '2018-9-8',
      stateModel: false,
      state: '全部',
      stateArr: ['全部', '未结算', '已结算']
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/login'})
    },
    confirmOk (value) {
      console.log(formatDate(value))
      this.dateValue = formatDate(value)
      this.dateModel = false
    },
    onChangeState (picker, value, index) {
      console.log(value)
      this.state = value
    }
  }
}

</script>

<style lang="less">
#rewardList{
  background: #f2f2f2;
  .nav{
    background: #f51a30;
    i{
      color: #fff!important;
    }
  }
  .nav .van-ellipsis{
    color: #fff;
  }
  .content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 46px;
    box-sizing: border-box;
    text-align: left;
    font-size: 0.24rem;
    .header{
      height: 0.8rem;
      line-height: 0.8rem;
      overflow: hidden;
      border-bottom: 0.1rem solid #f2f2f2;
      text-align: center;
      .p1{
        float: right;
        width: 2.3rem;
        span{
          display: block;
          float: left;
          &:last-of-type{
            border: 1px solid #ccc;
            padding: 0.05rem 0.1rem;
            width: 1.5rem;
            height: 0.4rem;
            line-height: 0.4rem;
            margin: 0.13rem 0;
            margin-left: 0.05rem;
          }
        }
      }
      .p2{
        float: right;
        width: 2rem;
        span{
          &:last-of-type{
            border: 1px solid #ccc;
            padding: 0.05rem 0.1rem;
          }
        }
      }
    }
    .list-table{

      width: 100%;
      text-align: center;
      thead{
        border-bottom: 0.1rem solid #f2f2f2;
      }
      th{
        padding: 0.2rem 0;
      }
      td{
        padding: 0.2rem 0;
      }
      .td-red{
        color: red;
      }
    }
  }
  .dateModel{
    width: 100%;
    height: 40%;
    font-size: 0.24rem;

  }
  .stateModel{
    .header{
      width: 100%;
      font-size: 0.24rem;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #e5e5e5;
      span{
        height: 100%;
        display: block;
        color: #38f;
        padding: 0 15px;
      }
      .span1{
        float: left;
      }
      .span2{
        float: right;
      }
    }
  }
}
</style>
