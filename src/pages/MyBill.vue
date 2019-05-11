<template>
  <div id="myBill">
    <van-nav-bar class="nav" :fixed="true"  title="我的账单" left-arrow @click-left="onClickLeft">
      <span class="header-right-icon" slot="right" @click="screening = true">
        <img src="../assets/images/icon12.png" alt="">
      </span>
    </van-nav-bar>
    <div class="content">
      <ul>
        <li>
          <p class="bill-date">2018-09-09</p>
          <div class="left">
            <div class="list-img">
              <img src="../assets/images/micon1.png" alt="">
            </div>
            <div class="list-info">
              <p>平台奖励</p>
              <span>备注</span>
            </div>
          </div>
          <div class="right">
            <span>￥100</span>
            <span>余额：￥1000</span>
          </div>
        </li>
        <li>
          <p class="bill-date">2018-09-09</p>
          <div class="left">
            <div class="list-img">
              <img src="../assets/images/micon2.png" alt="">
            </div>
            <div class="list-info">
              <p class="text-red">提现</p>
              <span>备注</span>
            </div>
          </div>
          <div class="right">
            <span class="text-red">￥100</span>
            <span>余额：￥1000</span>
          </div>
        </li>
        <li>
          <p class="bill-date">2018-09-09</p>
          <div class="left">
            <div class="list-img">
              <img src="../assets/images/micon3.png" alt="">
            </div>
            <div class="list-info">
              <p class="text-red">支付成功</p>
              <span>备注</span>
            </div>
          </div>
          <div class="right">
            <span class="text-red">￥100</span>
            <span>余额：￥1000</span>
          </div>
        </li>
        <li>
          <p class="bill-date">2018-09-09</p>
          <div class="left">
            <div class="list-img">
              <img src="../assets/images/micon4.png" alt="">
            </div>
            <div class="list-info">
              <p>支付失败</p>
              <span>备注</span>
            </div>
          </div>
          <div class="right">
            <span>￥100</span>
            <span>余额：￥1000</span>
          </div>
        </li>
        <li>
          <p class="bill-date">2018-09-09</p>
          <div class="left">
            <div class="list-img">
              <img src="../assets/images/micon5.png" alt="">
            </div>
            <div class="list-info">
              <p>支付撤销</p>
              <span>备注</span>
            </div>
          </div>
          <div class="right">
            <span>￥100</span>
            <span>余额：￥1000</span>
          </div>
        </li>
        <li>
          <p class="bill-date">2018-09-09</p>
          <div class="left">
            <div class="list-img">
              <img src="../assets/images/micon6.png" alt="">
            </div>
            <div class="list-info">
              <p>提现撤销</p>
              <span>备注</span>
            </div>
          </div>
          <div class="right">
            <span>￥100</span>
            <span>余额：￥1000</span>
          </div>
        </li>
      </ul>
    </div>
    <van-popup class="screening" v-model="screening" position="right">
      <van-nav-bar class="nav" :fixed="true"  title="筛选" left-arrow @click-left="onScreening"></van-nav-bar>
      <ul>
        <li>全部</li>
        <li>平台奖励</li>
        <li>支付</li>
        <li>提现</li>
      </ul>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'myBill',
  data () {
    return {
      screening: false
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/login'})
    },
    onScreening () {
      this.screening = false
    }
  }
}

</script>

<style lang="less">
#myBill{
  .nav{
    background: #f51a30;
    i{
      color: #fff!important;
    }
    .header-right-icon{
      position: relative;
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      img{
        width: 0.5rem;
        position: absolute;
        top: -0.17rem;
        right: -0.1rem;
      }
    }
  }
  .van-ellipsis{
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
    text-align: center;
    background: #f2f2f2;
    ul{
      font-size: .24rem;
      text-align: left;
      overflow: hidden;
      li{
        background: #fff;
        margin-bottom: 0.1rem;
        overflow: hidden;
        .bill-date{
          font-size: 0.28rem;
          padding: 0.1rem 0.15rem;
          border-bottom: 1px solid #f2f2f2;
        }
        .text-red{
          color: #ff0000;
        }
        .left{
          float: left;
          padding: 0.15rem;
          p{
            font-size: .28rem;
            margin-bottom: 0.1rem;
          }
          span{
            color: #c9c9c9;
          }
          .list-img{
            width: 0.7rem;
            float: left;
          }
          .list-info{
            float: left;
            width: 4rem;
            margin-left: 0.1rem;
            margin-top: 0.1rem;
          }
        }
        .right{
          float: right;
          padding: 0.15rem;
          span{
            text-align: center;
            display: block;
            &:last-of-type{
              margin-top: 0.1rem;
              color: #c9c9c9;
            }
          }
        }
      }
    }
  }
  .screening{
    height: 100%;
    width: 100%;
    ul{
      margin-top: 46px;
      padding-top: 0.2rem;
      overflow: hidden;
      li{
        border: 1px solid #000;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        border-radius: 0.3rem;
        width: 20%;
        font-size: 0.24rem;
        float: left;
        margin: 0.18rem;
        box-sizing: border-box;
      }
    }
  }
}
</style>
