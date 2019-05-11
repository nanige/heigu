<template>
  <div id="submitOrder">
    <van-nav-bar class="nav" :fixed="true" title="提交订单" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="header">
        <p class="header-name">
          <span>收货人：张三</span>
          <span>13459727358</span>
        </p>
        <p class="header-address">
          <span>默认</span>收货地址：广州市海珠区石溪镇幸福街188号东方大厦工业园区888号
        </p>
      </div>
      <div class="product-list">
        <ul>
          <li>
            <img src="../assets/images/img10.png" alt="">
          </li>
          <li>
            <img src="../assets/images/img10.png" alt="">
          </li>
          <li>
            <img src="../assets/images/img10.png" alt="">
          </li>
          <li>
            <img src="../assets/images/img10.png" alt="">
          </li>
        </ul>
        <div class="more">
          共4件
        </div>
      </div>
      <div class="content-main">
        <p class="distribution" @click="distributionShow = true">
          <span class="span1" >配送方式</span>
          <span class="span2">{{distributionValue}}</span>
        </p>
        <div class="message">
          <van-field
            type="textarea"
            placeholder="给商家留言（选填，30个字以内）"
            rows="3"
            :autosize="autosize"
          />
        </div>
        <div class="content-item" @click="couponShow = true">
          <span class="span1">使用优惠券</span>
          <span class="span2">&yen;-0.00</span>
        </div>
        <div class="content-item">
          <span class="span1">使用账户余额</span>
          <span class="span3">&yen;-0.00<van-checkbox class="span-checkbox" v-model="checked"></van-checkbox></span>
        </div>
        <div class="content-item">
          <span class="span1">商品金额</span>
          <span class="span4">&yen;-0.00</span>
        </div>
        <div class="content-item content-item-border">
          <span class="span1">运费</span>
          <span class="span4">&yen;-0.00</span>
        </div>
        <div class="content-item content-item-border">
          <span class="span1">优惠券</span>
          <span class="span4">&yen;-0.00</span>
        </div>
        <div class="content-item content-item-border">
          <span class="span1">账户余额</span>
          <span class="span4">&yen;-0.00</span>
        </div>

      </div>
      <div class="content-item-total">
        一共<span>1</span>个商品，合计需支付：<span>￥599.00</span>
      </div>
      <a href="javascript:;" class="submit-order">提交订单</a>
    </div>
    <van-popup class="distribution-box" v-model="distributionShow" position="bottom" :overlay="true">
      <div class="header">
        <span class="span1">配送</span>
        <van-icon class="span2" name="close" @click="distributionShow = false" />
      </div>
      <ul>
        <li v-for="(item, index) in 9" :key="index">中通 - {{index}}</li>
      </ul>
    </van-popup>
    <!-- 优惠券 -->
    <van-popup class="coupon-box" v-model="couponShow" position="bottom" :overlay="true">
      <p class="header-p" @click="selectCoupon">不使用优惠券</p>
      <van-radio-group v-model="couponRadio" @change="selectCoupon">
      <ul>
        <li v-for="(item, index) in 9" :key="index">
          <div class="one">
            <span><i>&yen;</i>120</span>
            <p>满199可用</p>
          </div>
          <div class="two">
            <p class="p1">120元代金券</p>
            <p class="p2">有效期：2018.8.9-2018.10.1</p>
            <p class="p3">**活动发行</p>
          </div>
          <div class="three">
            <van-radio :name="index">单选框 2</van-radio>
          </div>
        </li>
      </ul>
    </van-radio-group>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'submitOrder',
  data () {
    return {
      couponRadio: 0,
      tabActive: 0,
      autosize: {
        minHeight: 50
      },
      distributionShow: false,
      distributionValue: '中通',
      checked: true,
      couponShow: false
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/'})
    },
    selectCoupon () {
      this.couponShow = false
      console.log(this.radio)
    }
  }
}

</script>

<style lang="less">
#submitOrder{
  background: #f2f2f2;
  height: 100%;
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
      font-size: 0.24rem;
      float: left;
      padding: 0.1rem 0.15rem;
      height: 1.5rem;
      text-align: left;
      background: #fff url('../assets/images/bg1.png') no-repeat bottom center;
      background-size: 100%;

      .header-name{
        background: url('../assets/images/icon4.png') no-repeat left center;
        background-size: 0.34rem;
        height: 0.5rem;
        line-height: 0.5rem;
        span{
          margin: 0 0.4rem;
        }
      }
      .header-address{
        margin-left: 0.4rem;
        line-height: 1.5;
        background: url('../assets/images/icon10.png') no-repeat right center;
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
    .product-list{
      width: 100%;
      background: #fff;
      padding: 0.2rem 0;
      overflow: hidden;
      ul{
        float: left;
        padding-left: 0.2rem;
        li{
          width: 1.3rem;
          height: 1.3rem;
          float: left;
          border: 1px solid #f2f2f2;
          margin-right: 0.1rem;
        }
      }
      .more{
        width: 1.3rem;
        float: right;
        height: 1.3rem;
        line-height: 1.3rem;
        font-size: 0.24rem;
        background: url('../assets/images/icon10.png') no-repeat right center;
        background-size: 0.18rem;
        margin-right: 0.15rem;
        text-align: center;
      }
    }
    .content-main{
      font-size: 0.24rem;
      margin-top: 0.1rem;
      background: #fff;
      overflow: auto;
      .distribution{
        font-size: 0.28rem;
        padding: 0 0.15rem;
        height: 0.6rem;
        line-height: 0.6rem;
        .span1{
          float: left;
        }
        .span2{
          color: #c9c9c9;
          float: right;
          background: url('../assets/images/icon11.png') no-repeat right center;
          background-size: 0.27rem;
          padding-right: 0.3rem;
        }
      }
    }

    .content-item{
      font-size: 0.26rem;
      border-top: 1px solid #ccc;
      padding: 0rem 0.15rem;
      height: 0.7rem;
      line-height: 0.7rem;
      overflow: hidden;
      span{
        display: inline-block;
      }
      .span1{
        float: left;
      }
      .span2{
        float: right;
        background: url('../assets/images/icon10.png') no-repeat right center;
        background-size: 0.18rem;
        padding-right: 0.3rem;
      }
      .span3{
        float: right;
        .span-checkbox{
          width: 0.4rem;
          float: right;
          margin-left: 0.1rem;
          .van-checkbox__icon--checked{
            i{
              background: #f51a30;
              border: #f51a30;
            }
          }
        }
      }
      .span4{
        color: #f51a30;
        float: right;
      }
    }
    .content-item-border{
      border: none;
    }
    .content-item-total{
      padding: 0 0.15rem;
      height: 0.7rem;
      line-height: 0.7rem;
      margin-top: 0.1rem;
      font-size: 0.24rem;
      text-align: right;
      background: #fff;
      span{
        color: #f51a30;
      }
    }
    .submit-order{
      display: block;
      margin: 0.2rem 0.15rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      background: #f51a30;
      font-size: 0.28rem;
      color: #fff;
    }
  }

  .distribution-box{
    font-size: 0.24rem;

    .header{
      padding: 0.15rem;
      font-size: 0.3rem;
      border-bottom: 1px solid #ccc;
      height: 0.5rem;
      line-height: 0.5rem;

      .span1{
        float: left;
      }
      .span2{
        float: right;
        margin-top: 0.12rem;
      }
    }
    ul{
      height: 5rem;
      overflow-y: scroll;
      li{
        text-align: left;
        padding: 0.2rem 0.5rem;
        border-bottom: 1px solid #e9e9e9;
      }
    }
  }
  .coupon-box{
    .header-p{
      font-size: 0.24rem;
      padding: 0.2rem;
      text-align: center;
      border-bottom: 1px solid #ccc;
    }
    ul{
      margin-top: 0.1rem;
      overflow: hidden;
      li{
        font-size: 0.24rem;
        color: #fff;
        height: 2.24rem;
        background: #fff;
        border-bottom: 1px solid #ccc;
        overflow: hidden;
        .one{
          text-align: center;
          width: 2.8rem;
          height: 2.24rem;
          background: url('../assets/images/img6.png') no-repeat center center;
          background-size: 100%;
          float: left;
          span{
            display: block;
            font-size: 0.8rem;
            width: 100%;
            margin-top: 0.4rem;
            margin-bottom: 0.2rem;
            i{
              font-style: normal;
              font-size: 0.5rem;
            }
          }
        }
        .two{
          padding-left: 0.1rem;
          color: #000;
          text-align: left;
          position: relative;
          float: left;
          height: 100%;
          width: 4rem;
          .p1{
            font-size: 0.4rem;
            margin-top: 0.2rem;
          }
          .p2{
            margin: 0.2rem 0;
          }
          .p3{
            font-size: 0.28rem;
          }
          a{
            width: 1.8rem;
            display: block;
            padding: 3px 0;
            border: 1px solid #f62c40;
            color: #f62c40;
            text-align: center;
            border-radius: 0.3rem;
            float: right;
            margin-right: 0.5rem;
          }
          .img{
            position: absolute;
            top: -0.1rem;
            right: 0.1rem;
            width: 2rem;
            background: #fff;
          }
        }
        .three{
          width: 0.5rem;
          float: left;
          .van-radio{
            margin-top: 0.8rem;
          }
        }
      }
    }
  }
}
</style>
