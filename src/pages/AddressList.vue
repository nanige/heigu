<template>
  <div id="addressList">
    <van-nav-bar class="nav" :fixed="true" title="收货地址" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <ul>
        <li v-for="(item, index) in addressList" :key="index">
          <div class="one">
            <van-checkbox v-model="item.checked" ></van-checkbox>
          </div>
          <div class="two">
            <p class="p1">
              <span>{{item.name}}</span>
              <span>{{item.tel}}</span>
              <i>默认</i>
            </p>
            <p class="p2">{{item.address}}</p>
          </div>
          <div class="three">
            <van-icon name="edit" />
          </div>
        </li>
      </ul>
      <div class="add-button">
        <a href="javascript:;" @click="goAddAddress">+新建收货地址</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addressList',
  data () {
    return {
      chosenAddressId: '1',
      addressList: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          checked: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
          checked: false
        }
      ]
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/'})
    },
    goAddAddress () {
      this.$router.push({path: '/addAddress'})
    }
  }
}

</script>

<style lang="less">
#addressList{
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
    ul{
      overflow: hidden;
      li{
        height: 1.7rem;
        background: #fff;
        margin-bottom: 0.1rem;
        overflow: hidden;
        .one{
          width: 0.8rem;
          float: left;
          display: flex;
          align-items: center;
          justify-content: center;
          .van-checkbox__icon--checked{
            i{
              background: #f83030;
              border: #f83030;
            }
          }
        }
        .two{
          width: 5.5rem;
          text-align: left;
          float: left;
          font-size: 0.24rem;
          .p1{
            margin-top: 0.3rem;
            margin-bottom: 0.2rem;
            span{
              margin-right: 0.3rem;
              color: #f51a30;
            }
            i{
              background: #f51a30;
              color: #fff;
              font-style: normal;
              padding: 1px 5px;
              text-align: center;
              font-size: 0.2rem;
              border-radius: 0.3rem;
            }
          }
          .p2{
            line-height: 1.5;
          }
        }
        .three{
          float: right;
          font-size: 0.3rem;
          text-align: center;
          width: 1rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .add-button{
      position: fixed;
      bottom: 0;
      width: 100%;
      height: 50px;
      line-height: 50px;
      left: 0;
      a{
        height: 100%;
        background: #f51a30;
        color: #fff;
        text-align: center;
        font-size: 0.24rem;
        display: block;
      }
    }
  }
}
</style>
