<template>
  <div id="cartList">
    <van-nav-bar class="nav" :fixed="true" title="404" left-arrow />
    <div class="content">
      <img src="../assets/images/404.png" alt="">
      <p>抱歉，你访问的页面不存在！</p>
      <a href="#">返回</a>
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
      display: block;
      width: 0.5rem;
      margin-left: 4.5rem;
      margin-top: 0.1rem;
      border: 1px solid #f51a30;
      font-size: 0.24rem;
      padding: 0.05rem 0.1rem;
      border-radius: 0.3rem;
    }
  }
}
</style>
