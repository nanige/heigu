<template>
  <div id="searchList">
    <div class="search-header">
      <span>取消</span>
      <van-search placeholder="" />
      <span>搜索</span>
    </div>
    <div class="content">
      <div class="content-main">
        <div class="product-list">
          <ul>
            <li v-for="(item, index) in 19" :key="index">
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
      <van-tabbar-item>
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
  name: 'searchList',
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
    }
  }
}

</script>

<style lang="less">
#searchList{
  background: #f2f2f2;
  .search-header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 46px;
    background: #f51a30;
    color: #fff;
    span{
      width: 1rem;
      line-height: 46px;
      text-align: center;
      font-size: 0.24rem;
      display: block;
      float: left;
    }
  }
  .van-search{
    float: left;
    width: 5.5rem;
    background: none!important;
    .van-cell{
      border-radius: 22px;
      border: 1px solid #fff;
      background: none;
      i{
        color: #fff;
      }
    }
  }
  .content{
    margin-top: 46px;
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
