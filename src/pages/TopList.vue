<template>
  <div id="topList">
    <van-nav-bar class="nav" :fixed="true" title="人气商品" left-arrow  @click-left="onClickLeft" />
    <div class="content">
      <van-tabs class="tab-list">
        <van-tab class="tab-content" title="人气爆款">
          <ul class="seckill-list-ul">
            <li v-for="(item, index) in 19" :key="index" @click="goSeckillDetails">
              <div class="left-img">
                <img src="../assets/images/img2.png" alt="">
                <span v-if="index<5">{{index + 1}}</span>
              </div>
              <div class="right-info">
                <p class="title over"><span>热销</span>黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
                <div class="money-info">
                  <div class="money-info-left">
                    <p>
                      <span class="money-sum">&yen;555.00</span>
                      <span class="money-old">原价&yen;655.00</span>
                    </p>
                    <p class="shou">已售200</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab class="tab-content" title="本月最TOP">
          <ul class="seckill-list-ul">
            <li v-for="(item, index) in 19" :key="index" @click="goSeckillDetails">
              <div class="left-img">
                <img src="../assets/images/img2.png" alt="">
                <span v-if="index<5">{{index + 1}}</span>
              </div>
              <div class="right-info">
                <p class="title over"><span>热销</span>黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
                <div class="money-info">
                  <div class="money-info-left">
                    <p>
                      <span class="money-sum">&yen;555.00</span>
                      <span class="money-old">原价&yen;655.00</span>
                    </p>
                    <p class="shou">已售200</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>

    </div>
  </div>
</template>

<script>
export default {
  name: 'topList',
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/'})
    },
    goSeckillDetails () {
      this.$router.push({path: '/seckillDetails'})
    }
  }
}

</script>

<style lang="less">
#topList{
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
    padding-top: 46px;
    box-sizing: border-box;
    text-align: center;
    background: #f2f2f2;
    .seckill-list-ul{
      margin-top: 0.1rem;
      overflow: hidden;
      li{
        padding: 0.1rem;
        background: #fff;
        margin-bottom: 0.1rem;
        overflow: hidden;
        .left-img{
          width: 2.6rem;
          height: 2.6rem;
          box-sizing: border-box;
          border: 1px dashed #cdcdcd;
          float: left;
          position: relative;
          img{
            height: 100%;
          }
          span{
            position: absolute;
            top: 0;
            left: 0.2rem;
            width: 0.26rem;
            height: 0.31rem;
            font-size: 0.2rem;
            color: #fff;
            background: url('../assets/images/icon7.png') no-repeat top center;
            background-size: 100%;
          }
        }
        .right-info{
          float: left;
          height: 2.6rem;
          width: 4.5rem;
          margin-left: 0.1rem;
          position: relative;
          .title{
            font-size: 0.24rem;
            text-align: left;
            line-height: 1.5;
            span{
              background: #f51a30;
              color: #fff;
              padding: 1px 3px;
            }
          }
          .money-info{
            position: absolute;
            bottom: 0.20rem;
            font-size: 0.24rem;
            width: 100%;
            .money-info-left{
              float: left;
              width: 3rem;
              p{
                text-align: left;
              }
              .shou{
                margin-top: 0.1rem;
              }
              .money-sum{
                font-size: 0.3rem;
                color: #ff0000;
              }
              .money-old{
                color: #c9c9c9;
                text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
  .money-info-right{
    float: right;
    a{
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      width: 1.4rem;
      height: 0.4rem;
      color: #fff;
      background: #f51a30;
      text-align: center;
      line-height: 0.4rem;
    }
  }
  .tab-list{
    .van-ellipsis{
      color: #000;
    }
    .van-tab--active{
      .van-ellipsis{
        color: #ff9900;
      }
    }
    .van-tabs__line{
      background: #ff9900;
    }
  }
}
</style>
