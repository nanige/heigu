<template>
  <div id="withdrawal">
    <van-nav-bar class="nav" :fixed="true" title="现金提现" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="header">
        <div class="cart">
          <p class="one">
            <span>我的账户余额</span>
            <a href="#">提现记录</a>
          </p>
          <p class="two">&yen;4000.00</p>
          <div class="three">
            <span class="span1">提现金额</span>
            <span class="span2">
              &yen;
              <input type="text" name="" value="200.00">
            </span>
          </div>
          <div class="three">
            <span class="span1">手续费</span>
            <span class="span3">
              &yen;2.00
            </span>
          </div>
          <div class="three">
            <span class="span1">交易密码</span>
            <span class="span2">
              <input type="password" name="" >
            </span>
          </div>
          <p class="text">忘记密码？</p>
        </div>
      </div>
      <a class="queding" href="#">确认</a>
      <div class="tips-text">
        <p>1.提现1-5个工作日到账。</p>
        <p>2.提现1-5个工作日到账。</p>
        <p>3.提现1-5个工作日到账。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'withdrawal',
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
#withdrawal{
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
    background: #f2f2f2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 46px;
    box-sizing: border-box;
    text-align: center;
    .header{
      width: 100%;
      height: 3.6rem;
      background: url('../assets/images/bg3.png') center center no-repeat;
      background-size: 100%;
      position: relative;
      float: left;
      .cart{
        font-size: 0.24rem;
        text-align: left;
        width: 6.4rem;
        height: 4rem;
        background: url('../assets/images/bg4.png') center center no-repeat;
        background-size: 100%;
        margin: 1rem auto 0 auto;
        overflow: hidden;
        p{
          overflow: hidden;
          padding: 0 0.2rem;
        }
        .one{
          margin-top: 0.2rem;
          span{
            float: left;
          }
          a{
            float: right;
            color: #f51a30;
            border: 1px solid #f51a30;
            border-radius: 10px;
            padding: 3px;
          }
        }
        .two{
          font-size: 0.36rem;
          color: #f51a30;
          margin-top: 0.2rem;
          margin-bottom: 0.4rem;
        }
        .three{
          padding: 0 0.2rem;
          height: 0.6rem;
          line-height: 0.6rem;
          overflow: hidden;
          border-top: 0.05rem solid #f2f2f2;
          background: #fff;
          .span1{
            float: left;
          }
          .span2{
            float: right;
            input{
              height: 0.4rem;
              margin: 0.05rem 0;
              background: none;
              border: 1px solid #000;
            }
          }
          .span3{
            float: right;
            color: #f51a30;
          }
          &:last-of-type{
            border-bottom: 0.05rem solid #f2f2f2;
          }
        }
        .text{
          font-size: 0.18rem;
          text-align: right;
          color: #c9c9c9;
          margin-top: 0.1rem;
        }
      }
    }
    .queding{
      width: 6.4rem;
      height: 0.8rem;
      background: #f51a30;
      line-height: 0.8rem;
      color: #fff;
      text-align: center;
      border: none;
      margin: 0 auto;
      font-size: 0.32rem;
      display: block;
      overflow: hidden;
      margin-top: 6rem;
    }
    .tips-text{
      width: 6.4rem;
      margin: 0 auto;
      padding-top: 0.2rem;
      font-size: 0.24rem;
      text-align: left;
      overflow: hidden;
      p{
        color: #c9c9c9;
        margin-bottom: 0.2rem;
      }
    }
  }
}
</style>
