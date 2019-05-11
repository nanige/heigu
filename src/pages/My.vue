<template>
  <div id="my">
    <van-nav-bar class="nav" :fixed="true" title="我的" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="header">
        <div class="left">
          <span>
            <img src="../assets/images/logo.png" alt="">
          </span>
        </div>
        <div class="right">
          <p class="name">张三</p>
          <p class="yue">
            账户余额：￥0.00
            <span>提现</span>
          </p>
        </div>
      </div>
      <div class="nav-icon">
        <ul>
          <li>
            <img src="../assets/images/Creditcard.png" alt="">
            <span>待付款</span>
          </li>
          <li>
            <img src="../assets/images/Wallet.png" alt="">
            <span>待收货</span>
          </li>
          <li>
            <img src="../assets/images/Cesta.png" alt="">
            <span>退货/售后</span>
          </li>
          <li>
            <img src="../assets/images/Summary.png" alt="">
            <span>我的订单</span>
          </li>
        </ul>
      </div>
      <div class="mytui">
        <p class="title">我的推荐</p>
        <div class="myitem">
          <div class="one">
            <div class="yuan">
              <p>累计奖励</p>
              <p>￥0.00</p>
            </div>
          </div>
          <div class="two">
            <p>昨天奖励：￥0.00</p>
            <p>今天奖励：￥0.00</p>
          </div>
          <div class="three">
            <a href="javascript:;">邀请好友</a>
          </div>
        </div>
      </div>
      <div class="management-center">
        <p class="title">管理中心</p>
        <ul>
          <li>
            <img src="../assets/images/1.png" alt="">
            <span>购物车</span>
          </li>
          <li>
            <img src="../assets/images/2.png" alt="">
            <span>优惠券</span>
          </li>
          <li>
            <img src="../assets/images/3.png" alt="">
            <span>地址管理</span>
          </li>
          <li>
            <img src="../assets/images/4.png" alt="">
            <span>帮助中心</span>
          </li>
          <li>
            <img src="../assets/images/5.png" alt="">
            <span>商品关注</span>
          </li>
          <li>
            <img src="../assets/images/6.png" alt="">
            <span>联系客服</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/login'})
    }
  }
}

</script>

<style lang="less">
#my{
  .nav{
    background: #f51a30;
    i{
      color: #fff!important;
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
    .header{
      height: 3.6rem;
      background: url('../assets/images/img11.png') center center no-repeat;
      background-size: 100%;
      overflow: hidden;
      .left{
        width: 2.6rem;
        height: 100%;
        float: left;
        position: relative;
        span{
          position: absolute;
          top: 1rem;
          left: 0.5rem;
          width: 1.8rem;
          height: 1.8rem;
          border-radius: 100%;
          overflow: hidden;
          img{

          }
        }
      }
      .right{
        margin-left: 2.6rem;
        height: 100%;
        color: #fff;
        text-align: left;
        .name{
          font-size: 0.3rem;
          margin-top: 1.2rem;
          border-bottom: 3px solid #fff;
          padding-bottom: 0.2rem;
        }
        .yue{
          font-size: 0.3rem;
          margin-top: 0.1rem;
          height: 0.51rem;
          line-height: 0.51rem;
          span{
            display: block;
            width: 1.58rem;
            height: 0.51rem;
            background: url('../assets/images/bg2.png') center center no-repeat;
            background-size: 100%;
            float: right;
            margin-right: 0.2rem;
            font-size: 0.24rem;
            text-align: center;
            padding-left: 0.2rem;
          }
        }
      }
    }
    .nav-icon{
      ul{
        display: flex;
        padding: 0.2rem 0;
        overflow: hidden;
        li{
          flex: 1;
          text-align: center;
          font-size: 0.24rem;
          img{
            width: 0.86rem;
            display: inline;
          }
          span{
            margin-top: 0.1rem;
            display: block;
          }
        }
      }
    }
    .mytui{
      font-size: 0.24rem;
      text-align: left;
      padding: 0 0.15rem;
      margin-top: 0.2rem;
      overflow: hidden;
      .title{
        font-size: 0.28rem;
        font-weight: bold;
        margin-bottom: 0.4rem;
      }
      .myitem{
        overflow: hidden;
        .one{
          width: 2.4rem;
          float: left;
          height: 1.6rem;
          border-right: 4px solid #000;
          .yuan{
            width: 1.6rem;
            height: 1.6rem;
            background: #ffb74c;
            color: #fff;
            border-radius: 100%;
            overflow: hidden;
            p{
              text-align: center;
              &:first-of-type{
                margin-top: 0.4rem;
                margin-bottom: 0.3rem;
              }
            }
          }
        }
        .two{
          width: 3.35rem;
          height: 100%;
          float: left;
          p{
            font-weight: bold;
            padding-left: 0.4rem;
            &:first-of-type{
              margin-top: 0.2rem;
              margin-bottom: 0.6rem;
            }
          }
        }
        .three{
          float: left;
          width: 1.3rem;
          height: 1.6rem;;
          display: flex;
          align-items: center;
          justify-content: center;
          a{
            width: 1.4rem;
            height: 0.4rem;
            border-radius: 5px;
            background: #f51a30;
            display: block;
            color: #fff;
            text-align: center;
            line-height: 0.4rem;
          }
        }
      }
    }
    .management-center{
      text-align: left;
      padding: 0 0.15rem;
      margin-top: 0.4rem;
      overflow: hidden;
      .title{
        font-size: 0.28rem;
        font-weight: bold;
        margin-bottom: 0.4rem;

      }
      ul{
        overflow: hidden;
        li{
          width: 33.33333%;
          font-size: 0.24rem;
          float: left;
          color: #666666;
          text-align: center;
          margin-bottom: 0.5rem;
          img{
            width: 0.66rem;
            display: inline;
          }
          span{
            display: block;
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
