<template>
  <div id="seckillDetails">
    <div class="header-img">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="item in 5" :key="item">
          <img src="../assets/images/img3.png" alt="">
        </van-swipe-item>
      </van-swipe>
      <div class="back-icon" @click="onClickLeft"><img src="../assets/images/icon3.png" alt=""></div>
    </div>
    <div class="seckillDetails-info">
      <div class="left">
        <p class="money"><i>&yen;</i>599.00</p>
        <p class="money-item">
          <span>秒杀</span>
          原价
          <i>&yen;599.00</i>
        </p>
      </div>
      <div class="right">
        <p class="right-text">距结束还剩</p>
        <div class="right-stepper">
          <span>01</span> :
          <span>24</span> :
          <span>23</span>
        </div>
      </div>
    </div>
    <div class="product-info">
      <p class="title over">
        黑谷有机干红小银标
      </p>
      <div class="product-sum">
        <div class="left">销量：1999</div>
        <div class="right">
          <van-stepper />
        </div>
      </div>
    </div>
    <div class="address">
      <p class="select-address">
        <span class="item">送至</span>
        <span class="address-text" @click="addressShowList = true">{{addressValue}}</span>
      </p>
      <p class="text-tips">
        <span class="tips-day">不支持7天无理由退货</span>
        <span class="tips-day-yes">支持7天退货</span>
      </p>
    </div>
    <van-tabs>
      <van-tab class="tab-content" title="商品介绍">
        商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍商品介绍
      </van-tab>
      <van-tab class="tab-content" title="规格参数">
        <table>
          <tr>
            <td>产品名称</td>
            <td>黑谷有机干红·金标</td>
          </tr>
          <tr>
            <td>酒精度</td>
            <td>12%vol</td>
          </tr>
          <tr>
            <td>甜度</td>
            <td>全干型</td>
          </tr>
          <tr>
            <td>保质期</td>
            <td>5年</td>
          </tr>
          <tr>
            <td>口感</td>
            <td>饱满</td>
          </tr>
          <tr>
            <td>产地</td>
            <td>洋县</td>
          </tr>
          <tr>
            <td>容量</td>
            <td>740ml</td>
          </tr>
          <tr>
            <td>产品重量（kg）</td>
            <td>1.5</td>
          </tr>
        </table>
      </van-tab>
      <van-tab class="tab-content" title="包装售后">
        <div class="tab-content-title">
          包装清单
        </div>
        <p class="text">本产品全国联保，享受三包服务，质保期为：一年保修本产品全国联保，享受三
包服务，质保期为：一年保修本产品全国联保，享受三包服务，质保期为：一年
保修本产品全国联保，享受三包服务，质保期为：一年保修</p>
        <div class="tab-content-title">
          包装清单
        </div>
        <p class="text">1.本产品全国联保，享受三包服务，质保期为：一年保修本产品全国联保，享受
  三包服务，质保期为：一年保修本产品全国联保，享受三包服务，质保期为：一
  年保修本产品全国联保，享受三包服务，质保期为：一年保修</p>
        <p class="text">2.本产品全国联保，享受三包服务，质保期为：一年保修本产品全国联保，享受
三包服务，质保期为：一年保修本产品全国联保，享受三包服务，质保期为：一
年保修本产品全国联保，享受三包服务，质保期为：一年保修</p>
        <p class="text">3.本产品全国联保，享受三包服务，质保期为：一年保修本产品全国联保，享受
三包服务，质保期为：一年保修本产品全国联保，享受三包服务，质保期为：一
年保修本产品全国联保，享受三包服务，质保期为：一年保修</p>
      </van-tab>
    </van-tabs>

    <van-goods-action>
      <van-goods-action-mini-btn icon="wap-home" text="首页" to="/" />
      <van-goods-action-mini-btn icon="like-o" text="关注" />
      <van-goods-action-mini-btn icon="cart" text="购物车" info="5" />
      <van-goods-action-big-btn text="加入购物车" />
      <van-goods-action-big-btn text="立即购买" primary />
    </van-goods-action>

    <!-- 选择省市区 -->
    <van-popup v-model="addressShowList" position="bottom" :overlay="true" :lock-scroll="false">
      <p class="peisong-text">配送至<van-icon name="close" @click="addressShowList = false" /></p>
      <ul class="address-list-ul">
        <li :class="item.default ? 'li-active' : '' " v-for="(item, index) in addressListArr" :key="index" @click="getAddressItem(item, index)">
          <van-icon name="location" />
          <span>{{item.name}}</span>
          <van-icon v-if="item.default" class="select-true" name="success" />
        </li>
      </ul>
      <van-button type="danger" size="large" @click="addressShow = true, addressShowList = false">选择其它地址</van-button>
    </van-popup>

    <van-popup v-model="addressShow" position="bottom" :overlay="true">
      <van-area :area-list="areaList" @cancel="cancelAddress" @confirm="confirmAddress" value="110000" />
    </van-popup>
  </div>
</template>

<script>
import Area from 'vant/packages/area/demo/area'
export default {
  name: 'seckillDetails',
  data () {
    return {
      addressShowList: false,
      addressShow: false,
      areaList: null,
      addressValue: '广东广州市番禺区',
      addressListArr: [
        {
          id: 1,
          name: '广州市白云区黄石街道陈田村北约中街1号',
          default: true
        },
        {
          id: 2,
          name: '广州市白云区黄石街道陈田村北约中街2号',
          default: false
        },
        {
          id: 3,
          name: '广州市白云区黄石街道陈田村北约中街3号',
          default: false
        },
        {
          id: 4,
          name: '广州市白云区黄石街道陈田村北约中街4号',
          default: false
        },
        {
          id: 5,
          name: '广州市白云区黄石街道陈田村北约中街18号',
          default: false
        },
        {
          id: 6,
          name: '广州市白云区黄石街道陈田村北约中街18号',
          default: false
        },
        {
          id: 7,
          name: '广州市白云区黄石街道陈田村北约中街18号',
          default: false
        },
        {
          id: 8,
          name: '广州市白云区黄石街道陈田村北约中街18号',
          default: false
        },
        {
          id: 9,
          name: '广州市白云区黄石街道陈田村北约中街18号',
          default: false
        },
        {
          id: 10,
          name: '广州市白云区黄石街道陈田村北约中街18号',
          default: false
        }
      ]
    }
  },
  mounted () {
    this.areaList = Area
  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/seckillList'})
    },
    getAddressItem (item, index) {
      // let _this = this
      this.addressListArr.forEach(item => {
        item.default = false
      })
      this.addressListArr[index].default = true
      this.addressValue = item.name
    },
    confirmAddress (value) {
      let _this = this
      _this.addressValue = ''
      value.forEach(item => {
        _this.addressValue += item.name
      })
      _this.addressShow = false
    },
    cancelAddress () {
      this.addressShow = false
    }
  }
}

</script>

<style lang="less">
#seckillDetails{
  background: #f2f2f2;
  height: 100%;
  .nav{
    background: #f51a30;
    i{
      color: #fff!important;
    }
  }
  .header-img{
    position: relative;
    .back-icon{
      position: absolute;
      top: 0.3rem;
      left: 0.3rem;
      width: 0.5rem;
      height: 0.5rem;
      z-index: 9;
    }
  }

  .seckillDetails-info{
    height: 1rem;
    .left,.right{
      height: 100%;
      float: left;
    }
    .left{
      color: #fff;
      padding-left: 0.2rem;
      box-sizing: border-box;
      width: 68%;
      background: -moz-linear-gradient(45deg, #f32d8d 0%, #f2315c 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, #f32d8d), color-stop(100%, #f2315c)); /* safari4+,chrome */
      background: -webkit-linear-gradient(45deg, #f32d8d 0%, #f2315c 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(45deg, #f32d8d 0%, #f2315c 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(45deg, #f32d8d 0%, #f2315c 100%); /* ie10+ */
      background: linear-gradient(45deg, #f32d8d 0%, #f2315c 100%); /* w3c */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2315c', endColorstr='#f32d8d',GradientType=1 ); /* ie6-9 */
      .money{
        font-size: 0.4rem;
        margin-top: 0.08rem;
        margin-bottom: 0.08rem;
        i{
          font-size: 0.36rem;
          font-style: normal;
        }
      }
      .money-item{
        font-size: 0.28rem;
        span{
          border: 1px solid #fff;
          padding: 0 0.1rem;
          font-size: 0.22rem;
        }
        i{
          font-style: normal;
          text-decoration: line-through;
        }
      }
    }
    .right{
      width: 32%;
      background: #ffeae9;
      .right-text{
        text-align: center;
        font-size: 0.28rem;
        color: #f83030;
        margin: 0.1rem;
      }
      .right-stepper{
        text-align: center;
        font-size: 0.24rem;
        span{
          color: #fff;
          background: #f83030;
          width: 0.4rem;
          height: 0.4rem;
          line-height: 0.4rem;
          display: inline-block;
          border-radius: 5px;
          text-align: center;
        }
      }
    }

  }
  .product-info{
    padding: 0.1rem 0.15rem;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title{
      font-size: 0.32rem;
      line-height: 1.5;
      height: 1rem;

    }
    .product-sum{
      font-size: 0.24rem;
      .left{
        height: 30px;
        line-height: 30px;
        float: left;
      }
      .right{
        float: right;
      }
    }
  }
  .address{
    background: #fff;
    padding:  0.15rem;
    margin-bottom: 0.1rem;
    .select-address{
      font-size: 0.24rem;
      height: 0.6rem;
      .item{
        color: #c9c9c9;
        line-height: 1.5;
        float: left;
      }
      .address-text{
        display: block;
        float: left;
        width: 6.3rem;
        color: #000;
        background: url('../assets/images/icon4.png') no-repeat left center;
        background-size: 0.34rem;
        padding-left: 0.35rem;
        overflow: hidden;
        text-overflow:ellipsis;
        line-height: 1.5;
        white-space: nowrap;
      }
    }
    .text-tips{
      font-size: 0.24rem;
      span{
        margin-left: 0.6rem;
      }
      .tips-day{
        background: url('../assets/images/icon5.png') no-repeat left center;
        background-size: 0.28rem;
        padding-left: 0.32rem;
      }
      .tips-day-yes{
        background: url('../assets/images/icon6.png') no-repeat left center;
        background-size: 0.28rem;
        padding-left: 0.32rem;
      }
    }
  }
  .peisong-text{
    font-size: 0.24rem;
    color: #c9c9c9;
    text-align: center;
    padding: 0.2rem;
    i{
      float: right;
      font-size: 0.36rem;
      color: #000;
    }
  }
  .address-list-ul{
    height: 5rem;
    overflow-y: auto;
    li{
      margin: 0 0.2rem;
      padding: 0.2rem 0;
      font-size: 0.28rem;
      border-bottom: 1px solid #efefef;
      overflow: hidden;
      i{
        float: left;
        line-height: 1.5;
      }
      span{
        padding-left: 0.1rem;
        width: 6rem;
        float: left;
        line-height: 1.5;
      }
      .select-true{
        text-align: right;
        width: 0.7rem;
      }
    }
    .li-active{
      color: #f1250d;
    }
  }
  .van-popup{
    font-size: 0.24rem;
  }
  .tab-content{
    font-size: 0.24rem;
    line-height: 1.5;
    background: #fff;
    padding-bottom: 60px;
    table{
      width: 97%;
      margin: 0 auto;
      tr,td{
        border: 1px solid #e6e6e6;
      }
      td{
        padding: 0.1rem 0 0.1rem 0.2rem;
      }
    }
    .tab-content-title{
      height: 30px;
      line-height: 30px;
      position: relative;
      font-size: 0.2rem;
      text-align: center;
      &::after{
        content: '';
        height: 1px;
        background: #000;
        position: absolute;
        width: 3rem;
        right: 0;
        top: 14px;
      }
      &::before{
        content: '';
        height: 1px;
        background: #000;
        position: absolute;
        width: 3rem;
        left: 0;
        top: 19px;
      }
    }
    .text{
      font-size: 0.2rem;
      padding: 0.15rem;
    }
  }
  .van-tabs__line{
    display: none;
  }
  .van-button--bottom-action{
    background: #ff9900;
  }
  .van-button--bottom-action.van-button--primary{
    background: #f51a30;
  }
}
</style>
