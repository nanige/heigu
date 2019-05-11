<template>
  <div id="cartList">
    <van-nav-bar class="nav" :fixed="true" title="系统错误" left-arrow />
    <div class="content">
      <img src="../assets/images/505.png" alt="">
      <p>当前页面请<a href="#">刷新重试</a>或<a class="#">返回上一级</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartList',
  data () {
    return {
      allchecked: false
    }
  },
  methods: {
  }
}

</script>

<style lang="less">
#cartList{
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
    padding: 46px 0.15rem 0 0.15rem;
    box-sizing: border-box;
    text-align: center;
    img{
      margin: 30% auto 0 auto;
      width: 3rem;

    }
    p{
      font-size: 0.26rem;
      color: #c9c9c9;
      margin-top: 0.1rem;
      padding-left: 0.3rem;
    }
    a{
      color: #f51a30;
    }
  }
}
</style>
