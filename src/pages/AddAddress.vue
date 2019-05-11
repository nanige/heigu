<template>
  <div id="addAddress">
    <van-nav-bar class="nav" :fixed="true" title="新增收货地址" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="input-item">
        <span>收件人</span><input type="text" name="" value="" placeholder="请正确填写姓名">
      </div>
      <div class="input-item">
        <span>收件地区</span><input @click="addressShow = true" type="text" name="" value="" placeholder="请选择收货地区">
      </div>
      <div class="input-item">
        <span>详细地址</span><input type="text" name="" value="" placeholder="请正确填详细地址">
      </div>
      <div class="input-item">
        <span>手机号码</span><input type="text" name="" value="" placeholder="请正确填写手机号码">
      </div>
      <div class="input-item del-margin">
        <van-switch-cell v-model="defaultAddress" title="设为默认地址" />
      </div>
      <div class="input-warp input-warp-height">
        <button class="confirm-button">保存</button>
      </div>
    </div>
    <!-- 选择省市区 -->
    <van-popup class="select-address-box" v-model="addressShow" position="bottom" :overlay="true">
      <van-area :area-list="areaList" @cancel="cancelAddress" @confirm="confirmAddress" value="110000" />
    </van-popup>
  </div>
</template>

<script>
import Area from 'vant/packages/area/demo/area'
export default {
  name: 'addAddress',
  data () {
    return {
      defaultAddress: true,
      addressShow: false,
      addressValue: '',
      areaList: null
    }
  },
  mounted () {
    this.areaList = Area
  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/login'})
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
#addAddress{
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
    .input-item{
      width: 6.4rem;
      height: 0.8rem;
      margin: 0.4rem auto 0 auto;
      background: #f2f2f2;
      border-radius: 0.8rem;
      span{
        font-size: 0.24rem;
        float: left;
        height: 100%;
        line-height: 0.8rem;
        display: block;
        padding: 0 0.25rem;
      }
      .van-cell__title{
        span{
          padding: 0;
        }
      }
      .van-switch--on{
        background: #f51a30;
      }
      input{
        width: 4.6rem;
        height: 100%;
        padding: 0;
        float: left;
        border: none;
        background: none;
        box-sizing: border-box;
        font-size: 0.24rem;
      }
    }
    .del-margin{
      margin: 0 auto;
    }
    .input-warp{
      width: 6.4rem;
      height: 0.8rem;
      margin: 0.4rem auto 0 auto;
      .confirm-button{
        width: 6.4rem;
        height: 0.8rem;
        background: #f51a30;
        line-height: 0.8rem;
        color: #fff;
        text-align: center;
        border: none;
        margin: 0 auto;
        font-size: 0.32rem;
        display: block;
      }
    }
  }
  .van-popup{
    font-size: 0.24rem;
    li{
      color: #000;
    }
  }
}
</style>
