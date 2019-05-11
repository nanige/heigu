<template>
  <div id="setUpThe">
    <van-nav-bar class="nav" :fixed="true" title="设置"  left-arrow @click-left="onClickLeft" />
    <div class="content">
      <van-cell-group>
        <van-cell title="关于我们" is-link />
        <van-cell title="修改登录密码" is-link />
        <van-cell title="实名认证" is-link />
        <van-cell title="设置交易密码" is-link />
        <van-cell title="退出账号" is-link />
      </van-cell-group>

    </div>
  </div>
</template>

<script>
export default {
  name: 'setUpThe',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/'})
    }
  }
}

</script>

<style lang="less">
#setUpThe{
  background: #f2f2f2;
  .nav{
    background: #f51a30;
    z-index: 99;
    i{
      color: #fff!important;
    }
  }
  .van-ellipsis{
    color: #fff;
  }
  .van-search{
    width: 100%;
    position: absolute;
    top: 46px;
    left: 0;
    .van-cell{
      border-radius: 22px;
      border: 1px solid #000;
      i{
        color: #000;
      }
    }
  }
  .content{
    margin-top: 46px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    .van-cell__title{
      text-align: left;
    }
  }
}
</style>
