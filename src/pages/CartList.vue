<template>
  <div id="cartList">
    <van-nav-bar class="nav" :fixed="true" title="购物车" left-arrow @click-left="onClickLeft" />
    <div class="content">
      <div class="cartList-sum">购物车（9）
        <van-icon @click="delCartList" class="delete-icon" name="delete" />
      </div>
      <ul>
        <li v-for="(item, index) in cartList" :key="index">
          <div class="one">
            <van-checkbox v-model="item.checked"></van-checkbox>
          </div>
          <div class="two">
            <img src="../assets/images/img7.png" alt="">
          </div>
          <div class="three">
            <p class="title over">黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
            <div class="money-sum">
              <span class="money">&yen;500.00</span>
              <van-stepper v-model="item.sl" />
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        <div class="one">
          <van-checkbox v-model="allchecked" @change="selectAll">全选</van-checkbox>
        </div>
        <div class="two">
          合计：<span>&yen;500.00</span>
        </div>
        <div class="three">
          <a href="javascript:;">结算</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartList',
  data () {
    return {
      allchecked: false,
      cartList: [
        {
          checked: false,
          name: '黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红',
          sl: 0
        },
        {
          checked: false,
          name: '黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红',
          sl: 0
        },
        {
          checked: false,
          name: '黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红',
          sl: 0
        },
        {
          checked: false,
          name: '黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红',
          sl: 0
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
    selectAll () {
      let _this = this
      this.cartList.forEach(item => {
        item.checked = _this.allchecked
      })
    },
    delCartList () {
      this.$dialog.confirm({
        title: '确定要删除选中商品吗？'
        // message: '弹窗内容'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      })
    }
  }
}

</script>

<style lang="less">
#cartList{
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
    .cartList-sum{
      font-size: 0.24rem;
      padding: 0.2rem;
      margin-bottom: 4px;
      background: #fff;
      .delete-icon{
        float: right;
      }
    }
    ul{
      margin-bottom: 50px;
      overflow: hidden;
      li{
        height: 3.2rem;
        font-size: 0.24rem;
        background: #fff;
        padding: 0.1rem 0;
        margin-bottom: 0.1rem;
        overflow: hidden;
        .one{
          width: 0.8rem;
          height: 100%;
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
          width: 3rem;
          height: 3rem;
          float: left;
        }
        .three{
          float: left;
          width: 3.4rem;
          margin-left: 0.1rem;
          text-align: left;
          position: relative;
          height: 100%;
          .title{
            line-height: 1.5;
          }
          .money-sum{
            position: absolute;
            bottom: 0.2rem;
            .money{
              display: block;
              color: #f51a30;
              font-size: 0.28rem;
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
    .total{
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 50px;
      border-top: 1px solid #ccc;
      text-align: left;
      background: #fff;
      font-size: 0.24rem;
      .one{
        width: 1.3rem;
        height: 100%;
        padding-left: 0.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
      }
      .two{
        float: left;
        height: 100%;
        line-height: 50px;
        text-align: right;
        width: 3.9rem;
        padding-right: 0.2rem;
        span{
          color: #ff0000;
          font-size: 0.28rem;
        }
      }
      .three{
        width: 1.9rem;
        height: 100%;
        float: right;
        a{
          display: block;
          background: #f83030;
          color: #fff;
          font-size: 0.3rem;
          text-align: center;
          line-height: 50px;
        }
      }
    }
    .van-checkbox__icon--checked{
      i{
        background: #f83030;
        border: #f83030;
      }
    }
  }
}
</style>
