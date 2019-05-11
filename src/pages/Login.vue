<template>
  <div id="login">
    <van-nav-bar class="nav" :fixed="true" title="会员登录" left-arrow />
    <div class="content">
      <img class="logo" src="../assets/images/logo.png" alt="">
      <div class="login-input">
        <input type="text" name="" value="" placeholder="请输入手机号/昵称">
        <input type="password" name="" value="" placeholder="请输入密码">
        <button>立即登陆</button>
        <p>
          <span @click="goBackpsw">忘记密码</span>
          <span @click="goRegiste" class="item">快速注册</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    goBackpsw () {
      this.$router.push({path: '/backpsw'})
    },
    goRegiste () {
      this.$router.push({path: '/registe'})
    }
  }
}

</script>

<style lang="less">
#login{
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
    .logo{
      width: 3rem;
      margin: 0.3rem auto 0 auto;
    }
    .login-input{
      input{
        font-size: 0.24rem;
        width: 6.2rem;
        border: none;
        padding-left: 0.2rem;
        padding-bottom: 0.1rem;
        border-bottom: 2px solid #000;
        margin-top: 0.6rem;
        box-sizing: border-box;
      }
      button{
        width: 6.2rem;
        height: 0.8rem;
        background: #f51a30;
        line-height: 0.8rem;
        color: #fff;
        text-align: center;
        border: none;
        margin: 0 auto;
        font-size: 0.32rem;
      }
      p{
        width: 6.2rem;
        margin: 0 auto;
        font-size: .24rem;
        text-align: right;
        margin-top: 0.2rem;
        span{
          margin-left: 0.2rem;

        }
        .item{
          color: #f51a30;
        }
      }
    }
  }
}
</style>
