<template>
  <div id="withdrawalRecord">
    <van-nav-bar class="nav" :fixed="true" title="提现记录" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <ul>
        <li>
          <div class="left">
            <p>提现已经受理</p>
            <span>2018-09-09</span>
          </div>
          <div class="right">
            <span>￥100</span>
          </div>
        </li>
        <li>
          <div class="left">
            <p>提现已经受理</p>
            <span>2018-09-09</span>
          </div>
          <div class="right">
            <span class="span-red">￥100</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'withdrawalRecord',
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
#withdrawalRecord{
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
    background: #f2f2f2;
    ul{
      font-size: .24rem;
      text-align: left;
      overflow: hidden;
      li{
        padding: 0.15rem ;
        height: 0.6rem;
        background: #fff;
        margin-bottom: 0.1rem;
        .left{
          float: left;
          p{
            font-size: .28rem;
            margin-bottom: 0.1rem;
          }
          span{
            color: #c9c9c9;
          }
        }
        .right{
          display: flex;
          height: 0.6rem;
          align-items: center;
          float: right;
          .span-red{
            color: #f51a30;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
