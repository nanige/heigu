<template>
  <div id="activityRules">
    <van-nav-bar class="nav" :fixed="true" title="活动细则" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <p class="title">推荐好友活动细则>></p>
      <ul>
        <li>1.推荐好友即可获得奖金。</li>
        <li>2.推荐好友购买产品即可获得奖金。</li>
        <li>3.你的好友再推荐好友即可获得奖金。</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activityRules',
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
#activityRules{
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
    padding: 46px 0.2rem 0 0.2rem;
    box-sizing: border-box;
    text-align: left;
    font-size: 0.24rem;
    .title{
      line-height: 2;
      margin-top: 0.2rem;
    }
    ul{
      li{
        margin: 0.2rem 0;
      }
    }
  }
}
</style>
