<template>
  <div id="orderDetails">
    <van-nav-bar class="nav" :fixed="true" title="订单详情" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="header">
        <p class="p1">等待付款</p>
        <p class="p2">
          您的订单还没支付，请及时支付。
        </p>
      </div>
      <ul class="cp-ul">
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
        </li>
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
        </li>
      </ul>
      <div class="item">
        订单编号：76688766579
      </div>
      <div class="item">
        下单时间：2018-9-9
      </div>
      <div class="item">
        <span class="span1">商品总额</span>
        <span class="span2">￥200.00</span>
      </div>
      <div class="item">
        <span class="span1">运费</span>
        <span class="span2">￥200.00</span>
      </div>
      <div class="item">
        <span class="span1">余额支付</span>
        <span class="span2 red">-￥200.00</span>
      </div>
      <div class="item">
        <span class="span1">优惠券</span>
        <span class="span2 red">-￥200.00</span>
      </div>
      <div class="item">
        <span class="span1">需付款</span>
        <span class="span2 red">-￥200.00</span>
      </div>
      <div class="address">
        <p class="address-name">
          <span>收货人：张三</span>
          <span>13459727358</span>
        </p>
        <p class="address-address">
          收货地址：广州市海珠区石溪镇幸福街188号东方大厦工业园区888号
        </p>
      </div>
      <div class="bottom-btn">
        <a class="pay" href="#">去支付</a>
        <a class="qu" href="#">取消订单</a>
      </div>

    </div>
    <van-popup v-model="boxShow"  position="bottom" class="boxShow">
      <a href="#">微信支付</a>
      <a href="#">支付宝支付</a>
    </van-popup>
    <van-popup v-model="quShow"  position="bottom" class="quxiao">
      <p class="title">取消订单
        <van-icon @click="quShow = false" class="icon" name="close" />
      </p>
      <textarea class="textarea" placeholder="温馨提示：优惠券不予返还，支付优惠一并取消。">

      </textarea>
      <van-radio-group v-model="radio" class="redio">
        <van-radio name="1">操作有误（商品、地址等选错）</van-radio>
        <van-radio name="2">重复下单/误下单</van-radio>
        <van-radio name="3">其他渠道价格更低</van-radio>
        <van-radio name="4">不想买了</van-radio>
        <van-radio name="5">其他原因</van-radio>
      </van-radio-group>
      <a class="btn" href="#">提交</a>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'orderDetails',
  data () {
    return {
      boxShow: false,
      quShow: true,
      radio: ''
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
#orderDetails{
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
    height: auto;
    padding-top: 46px;
    background: #f2f2f2;
    box-sizing: border-box;
    text-align: left;
    font-size: 0.24rem;
    overflow: hidden;
    .header{
      width: 100%;
      height: 1.6rem;
      background: -moz-linear-gradient(270deg, #f51a30 0%, #ff5800 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f51a30), color-stop(100%, #ff5800)); /* safari4+,chrome */
      background: -webkit-linear-gradient(270deg, #f51a30 0%, #ff5800 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(270deg, #f51a30 0%, #ff5800 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(270deg, #f51a30 0%, #ff5800 100%); /* ie10+ */
      background: linear-gradient(180deg, #f51a30 0%, #ff5800 100%); /* w3c */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f51a30', endColorstr='#ff5800',GradientType=0 ); /* ie6-9 */
      .p1{
        color: #fff;
        font-size: 0.28rem;
        padding: 0.2rem 0 0 0.3rem;
        text-align: left;
      }
      .p2{
        width: 6.4rem;
        height: 1rem;
        line-height: 1rem;
        margin: 0 auto;
        margin-top: 0.6rem;
        border-radius: 0.2rem;
        text-align: center;
        font-size: 0.28rem;
        background: #fff;
        text-align: left;
        padding-left: 0.3rem;
        box-sizing: border-box;
      }
    }
    .cp-ul{
      font-size: 0.24rem;
      margin-top: 0.5rem;
      margin-bottom: 0.2rem;
      overflow: hidden;
      li{
        margin-top: 0.2rem;
        background: #fff;
        padding: 0.15rem 0;
        overflow: hidden;
        .left{
          float: left;
          width: 2rem;
          margin-left: 0.15rem;
          height: 2rem;
          border: 1px dashed #ccc;
        }
        .right{
          text-align: left;
          padding-left: 0.2rem;
          float: left;
          width: 4.3rem;
          .title{
            margin-top: 0.1rem;
            margin-bottom: 0.2rem;
          }
        }
      }
    }
    .item{
      height: 0.6rem;
      line-height: 0.6rem;
      padding: 0 0.15rem;
      margin-bottom: 0.1rem;
      background: #fff;
      .span1{
        float: left;
      }
      .span2{
        float: right;
      }
      .red{
        color: red;
      }
    }
  }
  .address{
    font-size: 0.24rem;
    padding: 0.1rem 0.15rem;
    height: 1.5rem;
    text-align: left;
    background: #fff;
    background-size: 100%;

    .address-name{
      background: url('../assets/images/icon4.png') no-repeat left center;
      background-size: 0.34rem;
      height: 0.5rem;
      line-height: 0.5rem;
      span{
        margin: 0 0.4rem;
      }
    }
    .address-address{
      margin-left: 0.4rem;
      line-height: 1.5;
      background-size: 0.18rem;
      padding-right: 0.2rem;
      span{
        text-align: center;
        padding: 0 0.1rem;
        background: #f51a30;
        color: #fff;
        border-radius: 0.2rem;
        font-size: 0.2rem;
        margin-right: 0.1rem;
      }
    }
  }
  .bottom-btn{
    margin-top: 0.1rem;
    height: 0.8rem;
    background: #fff;
    a{
      margin-top: 0.2rem;
      display: block;
      float: right;
      width: 1.4rem;
      height: 0.4rem;
      text-align: center;
      line-height: 0.4rem;
      border-radius: 0.2rem;
      margin-right: 0.15rem;
    }
    .qu{
      border: 1px solid #000;
      color: #000;
    }
    .pay{
      background: #f51a30;
      border: 1px solid #f51a30;
      color: #fff;
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
  .quxiao{
    width: 100%;
    height: 60%;
    font-size: 0.24rem;
    .title{
      text-align: center;
      font-size: 0.24rem;
      padding: 0.2rem;
      .icon{
        float: right;
      }
    }
    .textarea{
      height: 2rem;
      width: 7.2rem;
      margin: 0.2rem 0.15rem;
      background: #f2f2f2;
      border-radius: 0.1rem;
      padding: 0.1rem;
      border: none;
      box-sizing: border-box;
    }
    .redio{
      padding: 0.15rem;
      .van-radio{
        margin: 0.1rem 0;
        .van-icon-checked{
          color: #ff0000;
        }
      }
    }
    .btn{
      position: absolute;
      bottom: 0;
      width: 100%;
      display: block;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      color: #fff;
      font-size: 0.26rem;
      background: #ff0000;
    }
  }
}
</style>
