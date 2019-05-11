<template>
  <div id="applyRecord">
    <van-nav-bar class="nav" :fixed="true" title="申请记录" left-arrow  @click-left="onClickLeft" />
    <div class="content">
      <van-tabs class="tab-list">
        <van-tab class="tab-content" title="售后申请">
          <ul class="seckill-list-ul">
            <li v-for="(item, index) in 9" :key="index" @click="goSeckillDetails">
              <p class="header-li">
                <span class="span1">服务单号：55968435068</span>
                <span class="span2">退货</span>
              </p>
              <div class="left-img">
                <img src="../assets/images/img2.png" alt="">
              </div>
              <div class="right-info">
                <p class="title over">黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
                <div class="money-info">
                  <div class="money-info-left">
                    <a href="javascript:;">申请售后</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <p class="header-li">
                <span class="span1">服务单号：55968435068</span>
                <span class="span2">退货</span>
              </p>
              <div class="left-img">
                <img src="../assets/images/img2.png" alt="">
              </div>
              <div class="right-info">
                <p class="title over">黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
                <div class="money-info">
                  <div class="money-info-left">
                    <a class="ban" href="javascript:;">申请售后</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab class="tab-content" title="申请记录">
          <ul class="seckill-list-ul">
            <li v-for="(item, index) in 19" :key="index" @click="goSeckillDetails">
              <p class="header-li">
                <span class="span1">服务单号：55968435068</span>
                <span class="span2">退货</span>
              </p>
              <div class="left-img">
                <img src="../assets/images/img2.png" alt="">
              </div>
              <div class="right-info">
                <p class="title over">黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
              </div>
              <p class="bottom-item">
                <span class="span1">
                  已完成
                </span>
                <span class="span2">您的服务单商家正在审核中</span>
              </p>
            </li>
          </ul>
        </van-tab>
      </van-tabs>

    </div>
  </div>
</template>

<script>
export default {
  name: 'applyRecord',
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
#applyRecord{
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
        padding-bottom: 0;
        background: #fff;
        overflow: hidden;
        margin-bottom: 0.1rem;
        .header-li{
          width: 100%;
          font-size: 0.24rem;
          height: 0.4rem;
          line-height: 0.4rem;
          border-bottom: 1px solid #f2f2f2;
          margin-bottom: 0.05rem;
          .span1{
            float: left;
          }
          .span2{
            float: right;
          }
        }
        .bottom-item{
          width: 100%;
          font-size: 0.24rem;
          height: 0.4rem;
          line-height: 0.4rem;
          border-top: 1px solid #f2f2f2;
          margin-top: 0.15rem;
          padding: 0.1rem 0;
          overflow: hidden;
          .span1{
            float: left;
            background: url("../assets/images/icon15.png") no-repeat center left;
            background-size: 0.3rem;
            padding-left: 0.35rem;
            border-right: 1px solid #f2f2f2;
            margin-right: 0.1rem;
            padding-right: 0.1rem;
          }
          .span2{
            float: left;
          }
        }
        .left-img{
          width: 2.6rem;
          height: 2.6rem;
          box-sizing: border-box;
          border: 1px dashed #cdcdcd;
          float: left;
          position: relative;
          overflow: hidden;
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
              width: 4rem;
              a{
                display: block;
                width: 2rem;
                height: 0.4rem;
                line-height: 0.4rem;
                text-align: center;
                border-radius: 0.2rem;
                color: #fff;
                margin-top: 0.2rem;
                border: 1px solid #f51a30;
                color: #f51a30;
                float: right;
              }
              .ban{
                border: 1px solid #c9c9c9;
                color: #c9c9c9;
              }
              p{
                text-align: left;
              }
              .shou{
                margin-top: 0.1rem;
                color: #c9c9c9;
                text-align: right;
              }
              .money-sum{
                font-size: 0.3rem;
                color: #ff0000;
              }
              .money-old{
                color: #c9c9c9;
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
