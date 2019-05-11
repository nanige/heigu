<template>
  <div id="orderDetails">
    <van-nav-bar class="nav" :fixed="true" title="订单详情" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="item">
        订单编号：76688766579
      </div>
      <div class="item">
        快递号：999889779988（中通）
      </div>
      <van-steps direction="vertical" :active="0" active-color="#f60">
        <van-step>
          <h3>【城市】物流状态1</h3>
          <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
          <h3>【城市】物流状态2</h3>
          <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
          <h3>快件已发货</h3>
          <p>2016-07-10 09:30</p>
        </van-step>
      </van-steps>
    </div>
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
