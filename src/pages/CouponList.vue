<template>
  <div id="couponList">
    <van-nav-bar class="nav" :fixed="true" title="优惠券" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <van-tabs class="tab-box" v-model="tabActive">
        <van-tab title="可用优惠券">
          <ul>
            <li v-for="(item, index) in 9" :key="index">
              <div class="one">
                <span><i>&yen;</i>120</span>
                <p>满199可用</p>
              </div>
              <div class="two">
                <p class="p1">120元代金券</p>
                <p class="p2">有效期：2018.8.9-2018.10.1</p>
                <p class="p3">**活动发行</p>
                <p>
                  <a href="javascript:;">立即使用</a>
                </p>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="已使用">
          <ul>
            <li v-for="(item, index) in 9" :key="index">
              <div class="one">
                <span><i>&yen;</i>120</span>
                <p>满199可用</p>
              </div>
              <div class="two">
                <p class="p1">120元代金券</p>
                <p class="p2">有效期：2018.8.9-2018.10.1</p>
                <p class="p3">**活动发行</p>
                <p>
                  <a href="javascript:;">立即使用</a>
                </p>
                <div class="img"><img src="../assets/images/icon8.png" alt=""></div>
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="已过期">
          <ul>
            <li v-for="(item, index) in 9" :key="index">
              <div class="one">
                <span><i>&yen;</i>120</span>
                <p>满199可用</p>
              </div>
              <div class="two">
                <p class="p1">120元代金券</p>
                <p class="p2">有效期：2018.8.9-2018.10.1</p>
                <p class="p3">**活动发行</p>
                <p>
                  <a href="javascript:;">立即使用</a>
                </p>
                <div class="img"><img src="../assets/images/icon9.png" alt=""></div>
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
  name: 'couponList',
  data () {
    return {
      tabActive: 0
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/'})
    }
  }
}

</script>

<style lang="less">
#couponList{
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
    padding-top: 46px;
    box-sizing: border-box;
    text-align: center;
    .van-tab{
      span{
        color: #000;
      }
    }
    .van-tab--active{
      span{
        color: #f44;
      }
    }
    .tab-box{
      ul{
        margin-top: 0.1rem;
        overflow: hidden;
        li{
          font-size: 0.24rem;
          color: #fff;
          height: 2.24rem;
          background: #fff;
          margin-bottom: 0.1rem;
          overflow: hidden;
          .one{
            width: 2.8rem;
            height: 2.24rem;
            background: url('../assets/images/img6.png') no-repeat center center;
            background-size: 100%;
            float: left;
            span{
              display: block;
              font-size: 0.8rem;
              width: 100%;
              margin-top: 0.4rem;
              margin-bottom: 0.2rem;
              i{
                font-style: normal;
                font-size: 0.5rem;
              }
            }
          }
          .two{
            margin-left: 2.8rem;
            padding-left: 0.1rem;
            color: #000;
            text-align: left;
            position: relative;
            .p1{
              font-size: 0.4rem;
              margin-top: 0.2rem;
            }
            .p2{
              margin: 0.2rem 0;
            }
            .p3{
              font-size: 0.28rem;
            }
            a{
              width: 1.8rem;
              display: block;
              padding: 3px 0;
              border: 1px solid #f62c40;
              color: #f62c40;
              text-align: center;
              border-radius: 0.3rem;
              float: right;
              margin-right: 0.5rem;
            }
            .img{
              position: absolute;
              top: -0.1rem;
              right: 0.1rem;
              width: 2rem;
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
