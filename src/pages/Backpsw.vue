<template>
  <div id="backpsw">
    <van-nav-bar class="nav" :fixed="true" title="找回密码" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="input-item">
        <input class="yzm" type="text" name="" value="" placeholder="请输入手机号">
        <button class="yzm-button">获取验证码</button>
      </div>
      <div class="input-warp">
        <div class="input-item input-item-width">
          <input class="yzm" type="text" name="" value="" placeholder="输入图片验证码">
        </div>
        <div class="yzm-img">
          <img src="../assets/images/yzm.png" alt="">
        </div>
      </div>
      <div class="input-item">
        <input type="text" name="" value="" placeholder="请输入短信验证码">
      </div>
      <div class="input-item">
        <input type="text" name="" value="" placeholder="新登录密码">
      </div>
      <div class="input-item">
        <input type="text" name="" value="" placeholder="确认新登录密码">
      </div>
      <div class="input-warp">
        <button class="confirm-button">立即登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backpsw',
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
#backpsw{
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
    .input-item{
      width: 6.4rem;
      height: 0.8rem;
      margin: 0.4rem auto 0 auto;
      background: #f2f2f2;
      border-radius: 0.8rem;
      input{
        width: 100%;
        height: 100%;
        padding: 0;
        float: left;
        border: none;
        background: none;
        box-sizing: border-box;
        font-size: 0.24rem;
        padding-left: 0.3rem;
      }
      .yzm-button{
        height: 0.5rem;
        margin: 0.15rem;
        background: #f51a30;
        border: none;
        text-align: center;
        line-height: 0.5rem;
        color: #fff;
        width: 2rem;
        font-size: 0.24rem;
        float: right;
        border-radius: 0.2rem;
      }
      .yzm{
        width: 3rem;
        padding-left: 0.3rem;
      }

    }
    .input-warp{
      width: 6.4rem;
      height: 0.8rem;
      margin: 0.4rem auto 0 auto;
      .yzm-img{
        width: 2.4rem;
        height: 0.8rem;
        float: right;
        img{
          width: 100%;
        }
      }
      .confirm-button{
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
      }
    }
    .input-item-width{
      width: 3.2rem;
      margin: 0;
      float: left;
    }
  }
}
</style>
