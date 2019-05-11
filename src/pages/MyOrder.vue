<template>
  <div id="myOrder">
    <van-nav-bar class="nav" :fixed="true" title="我的订单" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="全部">
          <ul>
            <li>
              <div class="left">
                <img src="../assets/images/img7.png" alt="">
              </div>
              <div class="right">
                <p class="title">黑谷有机干红</p>
                <p>
                  <span>价格:￥200</span>
                  <span>数量:×1</span>
                </p>
              </div>
              <div class="box">
                <p class="p1">
                  <span class="span1">待付款</span>
                  <span class="span2">共1件商品<i>需付款：￥200</i></span>
                </p>
                <p class="p2">
                  <a href="#">去付款</a>
                </p>
              </div>
            </li>
            <li class="wan">
              <div class="left">
                <span v-for="(item, index) in 6" v-if="index < 3" :key="index">
                  <img src="../assets/images/img7.png" alt="">
                </span>
              </div>
              <div class="box">
                <p class="p1">
                  <span class="span1 acc">已完成</span>
                  <span class="span2">共1件商品<i>需付款：￥200</i></span>
                </p>
                <p class="p2">
                  <a href="#">去付款</a>
                </p>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="待付款">内容 2</van-tab>
        <van-tab title="待收货">内容 3</van-tab>
        <van-tab title="已完成">内容 4</van-tab>
        <van-tab title="已取消">内容 4</van-tab>
      </van-tabs>
    </div>
    <van-popup v-model="boxShow"  position="bottom" class="boxShow">
      <a href="#">微信支付</a>
      <a href="#">支付宝支付</a>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'myOrder',
  data () {
    return {
      active: 0,
      boxShow: true
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
#myOrder{
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
    background: #f2f2f2;
    padding: 46px 0rem 0 0rem;
    box-sizing: border-box;
    text-align: left;
    font-size: 0.24rem;

    ul{
      overflow: hidden;
      li{
        margin-top: 0.2rem;
        background: #fff;
        padding-top: 0.15rem;
        overflow: hidden;
        .left{
          float: left;
          width: 2rem;
          margin-left: 0.15rem;
          height: 2rem;
          border: 1px dashed #ccc;
        }
        .right{
          padding-left: 0.2rem;
          float: left;
          width: 4.3rem;
          .title{
            margin-top: 0.1rem;
            margin-bottom: 0.2rem;
          }
        }
        .box{
          width: 100%;
          box-sizing: border-box;
          border-top: 0.1rem solid #f2f2f2;
          float: left;
          .p1{
            padding: 0 0.15rem;
            height: 0.6rem;
            line-height: 0.6rem;
            .span1{
              float: left;
              color: #f51a30;
            }
            .span2{
              float: right;
              i{
                font-style: normal;
                margin-left: 0.2rem;
              }
            }
            .acc{
              color: #c9c9c9;
            }
          }
          .p2{
            border-top: 1px solid #f2f2f2;
            padding: 0.1rem 0.15rem;
            overflow: hidden;
            a{
              display: block;
              width: 1.4rem;
              height: 0.4rem;
              line-height: 0.4rem;
              text-align: center;
              border: 1px solid #f51a30;
              float: right;
              color: #f51a30;
              border-radius: 0.2rem;
            }
          }
        }
      }
      .wan{
        .left{
          width: 100%;
          border: none;
          padding-bottom: 0.2rem;
          background: url("../assets/images/icon10.png") 95% center no-repeat;
          background-size: 0.18rem;
          span{
            width: 2rem;
            height: 2rem;
            float: left;
            border: 1px solid #ccc;
            margin-right: 0.15rem;
            display: block;
            img{
              width: 100%;
            }
          }

        }
      }
    }
  }
  .boxShow{
    width: 100%;
    height: 30%;
    a{
      display: block;
      width: 5rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 0.1rem;
      background: #f51a30;
      color: #fff;
      text-align: center;
      margin: 0 auto;
      font-size: 0.28rem;
      margin-top: 0.8rem;
    }
  }
}
</style>
