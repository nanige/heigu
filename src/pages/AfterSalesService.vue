<template>
  <div id="afterSalesService">
    <van-nav-bar class="nav" :fixed="true" title="售后服务" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="box-item">
        <span class="span1">订单号：5646465</span>
      </div>
      <div class="box-item">
        <span class="span1">购买日期：2018-6-12</span>
      </div>
      <div class="box-bao">
        <p>申请原因</p>
        <span class="span-btn">退货</span>
        <span class="span-btn">其他</span>
      </div>
      <div class="box-img">
        <div class="left-img">
          <img src="../assets/images/img2.png" alt="">
        </div>
        <div class="right-info">
          <p class="title over">黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红黑谷有机干红</p>
          <div class="money-info">
            <p>
              <span>价格:￥200</span>
              <span>数量×1</span>
            </p>
          </div>
        </div>
      </div>
      <div class="box-item2">
        <span class="span1">问题描述</span>
      </div>
      <div class="item-field">
        <van-field
          type="textarea"
          placeholder="请您在此描述问题"
          rows="3"
          :autosize="autosize"
        />
      </div>
      <div class="item-img">
        <ul>
          <li>
            <img src="../assets/images/img12.png" alt="">
          </li>
        </ul>
      </div>
      <div class="box-item3">
        <van-uploader :after-read="onRead">
          <van-icon name="photograph" />
        </van-uploader>
      </div>
      <div class="item-btn">
        <a href="javascript:;">提交</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'afterSalesService',
  data () {
    return {
      autosize: {
        minHeight: 50
      }
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/'})
    },
    onRead (file) {
      console.log(file)
    }
  }
}

</script>

<style lang="less">
#afterSalesService{
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

    .box-item{
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0 0.15rem;
      border-bottom: 0.05rem solid #f2f2f2;
      span{
        display: block;
        font-size: 0.24rem;

      }
      .span1{
        float: left;
      }
      .span2{
        float: right;
      }
    }
    .box-item2{
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0 0.15rem;
      border-top: 0.05rem solid #f2f2f2;
      span{
        display: block;
        font-size: 0.24rem;

      }
      .span1{
        float: left;
      }
      .span2{
        float: right;
      }
    }
    .box-item3{
      height: 0.8rem;
      line-height: 0.8rem;
      padding: 0.15rem;
      border-top: 0.05rem solid #f2f2f2;
      text-align: left;
      overflow: hidden;
      .van-icon{
        font-size: 0.5rem;
      }
    }
    .box-bao{
      padding: 0.15rem;
      text-align: left;
      border-bottom: 0.05rem solid #f2f2f2;
      overflow: hidden;
      p{
        font-size: 0.24rem;
        margin-bottom: 0.15rem;
      }
      .span-btn{
        border: 1px solid #f51a30;
        height: 0.4rem;
        width: 1rem;
        line-height: 0.4rem;
        text-align: center;
        display: block;
        border-radius: 0.2rem;
        float: left;
        color: #f51a30;
        font-size: 0.24rem;
        margin-right: 0.15rem;
      }
    }
    .box-img{
      width: 100%;
      overflow: hidden;
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
          margin-top: 0.2rem;
          text-align: left;
          font-size: 0.24rem;
          width: 100%;
          p{
            text-align: left;
            span{
              margin-right: 0.2rem;
            }
          }
        }
      }

    }
    .item-img{
      padding: 0.15rem;
      ul{
        overflow: hidden;
        li{
          float: left;
          width: 1.27rem;
          margin-left: 0.1rem;
        }
      }
    }
    .item-btn{
      background: #f2f2f2;
      height: 2rem;
      overflow: hidden;
      a{
        width: 6rem;
        display: block;
        text-align: center;
        height: 0.6rem;
        line-height: 0.6rem;
        color: #fff;
        background: #f51a30;
        font-size: 0.26rem;
        margin: 0.5rem auto;
        overflow: hidden;
      }
    }
  }
}
</style>
