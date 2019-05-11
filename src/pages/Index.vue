<template>
  <div id="index">
    <van-nav-bar class="nav" :fixed="true" title="首页" />
    <van-search placeholder="搜索" />
    <div class="content">
      <van-swipe :autoplay="3000">
        <van-swipe-item>
          <img src="../assets/images/banner1.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/banner1.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/images/banner1.png" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="content-main">
        <div class="notice">
            <div class="notice-title">系统公告</div>
            <div class="notice-text"><van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"/></div>
            <div class="notice-more" @click="goNoticeList">更多</div>
        </div>
        <div class="activity">
          <div class="activity-item" @click="goTopList">
            <img src="../assets/images/index-img1.png" alt="">
          </div>
          <div class="activity-item" @click="goSeckillList">
            <img src="../assets/images/index-img2.png" alt="">
          </div>
        </div>

        <div class="product-title">
          <span>黑谷有机干红</span>
          <span>
            查看更多
          </span>
        </div>
        <div class="product-list">
          <ul>
            <li v-for="(item, index) in 19" :key="index" @click="goProductDetails">
              <div class="product-img">
                <img src="../assets/images/img1.png" alt="">
              </div>
              <p class="product-title-info over">黑谷有机干红小银标美容养生黑谷有机干红小银标美容养生黑谷有机干红小银标美容养生黑谷有机干红小银标美容养生</p>
              <div class="product-money">
                <span>&yen;219.00</span>
                <span class="old-money">原价&yen;500.00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <van-tabbar>
      <van-tabbar-item>
        <span>首页</span>
        <img  slot="icon" slot-scope="props" src="../assets/images/nav-icon1.png">
      </van-tabbar-item>
      <van-tabbar-item to="/cartList">
        <span>购物车</span>
        <img  slot="icon" slot-scope="props" src="../assets/images/nav-icon2.png">
      </van-tabbar-item>
      <van-tabbar-item>
        <span>发现</span>
        <img  slot="icon" slot-scope="props" src="../assets/images/nav-icon3.png">
      </van-tabbar-item>
      <van-tabbar-item icon="gold-coin">
        <span>我</span>
        <img  slot="icon" slot-scope="props" src="../assets/images/nav-icon4.png">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {
    goSeckillList () {
      this.$router.push({path: '/seckillList'})
    },
    goTopList () {
      this.$router.push({path: '/topList'})
    },
    goNoticeList () {
      this.$router.push({path: '/noticeList'})
    },
    goProductDetails () {
      this.$router.push({path: '/productDetails'})
    }
  }
}

</script>

<style lang="less">
#index{
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
    margin-top: 90px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    .van-swipe{
      i{
        border-radius: 3px;
        width: 20px;
      }
      .van-swipe__indicator--active{
        background-color: #fff;
      }
    }
    .content-main{
      padding: 0.15rem;
      .notice{
        height: 40px;
        font-size: 0.24rem;
        background: #ffffff;
        .notice-title{
          width: 1rem;
          height: 100%;
          line-height: 40px;
          padding-left: 0.15rem;
          text-align: left;
          float: left;
        }
        .notice-text{
          float: left;
          width: 4.95rem;
          height: 100%;
          .van-notice-bar{
            background: #fff;
            padding: 11px 5px;
            color: #000;
          }
        }
        .notice-more{
          width: 1rem;
          height: 30px;
          border-left: 2px solid #000;
          float: left;
          line-height: 30px;
          margin: 5px 0;
        }
      }
      .activity{
        margin-top: 0.1rem;
        overflow: hidden;
        .activity-item{
          width: 3.55rem;
          &:nth-child(odd){
            float: left;
          }
          &:nth-child(even){
            float: right;
          }
        }
      }
      .product-title{
        height: 40px;
        line-height: 40px;
        font-size: 0.28rem;
        background: #fff;
        margin: 0.1rem 0;
        span{
          display: block;
          padding: 0 0.15rem;
          &:first-of-type{
            float: left;
          }
          &:last-of-type{
            float: right;
            background: url('../assets/images/icon1.png') no-repeat right center;
            background-size: 0.24rem;
            padding-right: 0.3rem;
            margin-right: 0.1rem;
          }
        }
      }

      .product-list{
        padding-bottom: 50px;
        overflow: hidden;
        ul{
          overflow: hidden;
          li{
            width: 3.55rem;
            background: #fff;
            float: left;
            margin-bottom: 0.1rem;
            &:nth-child(odd){
              float: left;
            }
            &:nth-child(even){
              float: right;
            }
            .product-title-info{
              font-size: .2rem;
              line-height: 1.5;
              padding: 0 .1rem;
              text-align: left;
              margin: .1rem 0;
            }
            .product-money{
              padding: 0 0.1rem;
              height: 0.5rem;
              text-align: left;
              font-size: 0.28rem;
              color: #f51a30;
              .old-money{
                color: #c9c9c9;
                font-size: 0.18rem;
                text-decoration: line-through;
              }
            }

          }
        }
      }

    }
  }
}
</style>
