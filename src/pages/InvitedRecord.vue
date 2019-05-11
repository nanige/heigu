<template>
  <div id="invitedRecord">
    <van-nav-bar class="nav" :fixed="true" title="邀请记录" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <p class="title">你邀请的人数：<span>11</span></p>
      <ul class="list-ul">
        <li>
          <span>邀请人</span>
          <span>注册时间</span>
        </li>
        <li v-for="(item, index) in 10" :key="index">
          <span>j*******k</span>
          <span>2018-6-9</span>
        </li>
      </ul>
      <p class="load">点击加载更多</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invitedRecord',
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
#invitedRecord{
  background: #f2f2f2;
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
    text-align: left;
    font-size: 0.24rem;
    .title{
      font-size: 0.24rem;
      line-height: 0.6rem;
      height: 0.6rem;
      margin-bottom: 0.1rem;
      background: #fff;
      border-bottom: 0.1rem solid #f2f2f2;
      padding: 0 0.15rem;
      span{
        font-size: 0.28rem;
        color: #f51a30;
      }
    }
    .list-ul{
      padding: 0.1rem 0;
      li{
        margin: 0.3rem 0;
        overflow: hidden;
        span{
          width: 3rem;
          text-align: center;
          &:first-of-type{
            float: left;
          }
          &:last-of-type{
            float: right;
          }
        }
      }
    }
    .load{
      font-size: 0.24rem;
      text-align: center;
      padding: 0.2rem;
      margin-top: 0.2rem;
    }
  }
}
</style>
