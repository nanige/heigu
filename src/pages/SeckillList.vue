<template>
  <div id="seckillList">
    <van-nav-bar class="nav" :fixed="true" title="限时秒杀" left-arrow  @click-left="onClickLeft" />
    <div class="content">
      <div class="seckill-header">
        <div class="seckill-header-left">正在秒杀</div>
        <div class="seckill-header-right-list">
          距结束
          <span>01</span> :
          <span>24</span> :
          <span>23</span>
        </div>
      </div>
      <ul class="seckill-list-ul">
        <li v-for="(item, index) in 19" :key="index" @click="goSeckillDetails">
          <div class="left-img">
            <img src="../assets/images/img2.png" alt="">
          </div>
          <div class="right-info">
            <p class="title over">黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
            <div class="seckill-header-right">
              距结束
              <span>01</span> :
              <span>24</span> :
              <span>23</span>
            </div>
            <div class="money-info">
              <div class="money-info-left">
                <p>
                  <span class="money-sum">&yen;555.00</span>
                  <span class="money-old">原价&yen;655.00</span>
                </p>
                <div class="sales-box">
                  <div class="sales-box-du">
                    <span style="width: 40%;"></span>
                  </div>
                  <div class="sales-box-text">已售40%</div>
                </div>
              </div>
              <div class="money-info-right">
                <a href="javascript:;">立即购买</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'seckillList',
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
#seckillList{
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
    .seckill-header{
      padding: 0 0.3rem;
      height: 50px;
      line-height: 50px;
      background: #fff;
      .seckill-header-left{
        font-size: 0.24rem;
        padding-left: 0.5rem;
        float: left;
        height: 100%;
        background: url('../assets/images/icon2.png') no-repeat center left;
        background-size: 0.33rem;
      }
    }
    .seckill-header-right{
      float: left;
      font-size: 0.24rem;
      margin-top: 0.15rem;
      span{
        color: #fff;
        background: #f51a30;
        width: 0.4rem;
        height: 0.4rem;
        line-height: 0.4rem;
        display: inline-block;
        border-radius: 5px;
        text-align: center;
      }
    }
    .seckill-header-right-list{
      float: right;
      font-size: 0.24rem;
      span{
        color: #fff;
        background: #000;
        width: 0.4rem;
        height: 0.4rem;
        line-height: 0.4rem;
        display: inline-block;
        border-radius: 5px;
        text-align: center;
      }
    }
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
          img{
            height: 100%;
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
              .money-sum{
                font-size: 0.3rem;
                color: #ff0000;
              }
              .money-old{
                color: #c9c9c9;
                text-decoration: line-through;
              }
              .sales-box{
                margin-top: 0.24rem;
                display: flex;
                align-items: center;
                overflow: hidden;
                .sales-box-du{
                  width: 1.6rem;
                  height: 0.14rem;
                  border-radius: 0.07rem;
                  float: left;
                  background: #e1e1e1;
                  margin-right: 0.1rem;
                  overflow: hidden;
                  span{
                    display: block;
                    height: 100%;
                    border-radius: 0.06rem;
                    background: #f51a30;
                  }
                }
                .sales-box-text{
                  float: left;
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
          }
        }
      }
    }
  }
}
</style>
