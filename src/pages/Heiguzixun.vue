<template>
  <div id="cartList">
    <van-nav-bar class="nav" :fixed="true" title="黑谷资讯" left-arrow />
    <div class="content">
      <p class="title">黑谷有机干红获奖</p>
      <p class="p1">黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖
        <img src="../assets/images/img23.png" alt="">
        黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖黑谷有机干红获奖
      </p>
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
    .title{
      font-size: 0.3rem;
      text-align: center;
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
    .p1{
      font-size: 0.24rem;
      text-indent: 2em;
      line-height: 1.5;
      img{
        margin: 0.1rem 0
      }
    }
  }
}
</style>
