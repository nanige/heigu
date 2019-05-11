<template>
  <div id="serviceDetails">
    <van-nav-bar class="nav" :fixed="true" title="服务单详情" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="header">
        <p class="p1">正在处理...</p>
        <p class="p2">服务正在处理，如有需要请联系客服</p>
      </div>
      <div class="box-item">
        <span class="span1">服务单号：559684350683567</span>
        <span class="span2">申请时间:2018-6-12</span>
      </div>
      <div class="box-item">
        <span class="span1">服务类型：退货</span>
      </div>
      <div class="box-tui">
        <span class="span1">
          已退款
        </span>
        <span class="span2">
          ￥200
        </span>
      </div>
      <div class="box-item">
        <span class="span1">售后进度</span>
      </div>
      <div class="jindu">
        <ul>
          <li>
            <img src="../assets/images/icon13.png" alt="">
            <span>提交申请</span>
            <i></i>
          </li>
          <li>
            <img src="../assets/images/icon13.png" alt="">
            <span>商家审核</span>
            <i></i>
          </li>
          <li>
            <img src="../assets/images/icon13.png" alt="">
            <span>沟通处理中</span>
            <i></i>
          </li>
          <li>
            <img src="../assets/images/icon13.png" alt="">
            <span>完成</span>
            <i></i>
          </li>
          <li>
            <img src="../assets/images/icon13.png" alt="">
            <span>完成</span>
            <i></i>
          </li>
        </ul>
      </div>
      <div class="box-item">
        <span class="span1">你的服务订单号商家正在处理。</span>
      </div>
      <div class="box-item">
        <span class="span1">审核留言</span>
      </div>
      <div class="item-field">
        <van-field
          type="textarea"
          placeholder="造成你的不便，我们比表示万分歉意。"
          rows="3"
          :autosize="autosize"
        />
      </div>
      <div class="box-item">
        <span class="span1"><div class="box-item">
          <span class="span1">审核留言</span>
        </div></span>
      </div>
      <div class="item-field">
        <van-field
          type="textarea"
          placeholder="造成你的不便，我们比表示万分歉意。"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceDetails',
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
    }
  }
}

</script>

<style lang="less">
#serviceDetails{
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
    .header{
      height: 2rem;
      font-size: 0.24rem;
      text-align: left;
      padding-left: 0.4rem;
      color: #fff;
      background: -moz-linear-gradient(270deg, #f62b29 0%, #ff9801 100%); /* ff3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f62b29), color-stop(100%, #ff9801)); /* safari4+,chrome */
background: -webkit-linear-gradient(270deg, #f62b29 0%, #ff9801 100%); /* safari5.1+,chrome10+ */
background: -o-linear-gradient(270deg, #f62b29 0%, #ff9801 100%); /* opera 11.10+ */
background: -ms-linear-gradient(270deg, #f62b29 0%, #ff9801 100%); /* ie10+ */
background: linear-gradient(180deg, #f62b29 0%, #ff9801 100%); /* w3c */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f62b29', endColorstr='#ff9801',GradientType=0 ); /* ie6-9 */
      p{
        line-height: 3;
      }
      .p1{
        font-size: 0.28rem;
      }
    }
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
    .jindu{
      border-bottom: 0.05rem solid #f2f2f2;
      ul{
        padding: 0.5rem 0.15rem;
        overflow: hidden;
      }
      li{
        display: inline-block;
        width: 1.2rem;
        font-size: 0.24rem;
        color: #66cc00;
        text-align: center;
        position: relative;
        span{
          display: block;
          margin-top: 0.1rem;
        }
        img{
          margin: 0 auto;
          width: 0.72rem;
        }
        i{
          position: absolute;
          right: -0.45rem;
          top: 0.35rem;
          display: block;
          width: 0.6rem;
          height: 0.05rem;
          background: #66cc00;
        }
        &:last-of-type i{
          display: none;
        }
      }
    }
    .item-field{
      border-bottom: 0.05rem solid #f2f2f2;
      overflow: hidden;
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
    .box-tui{
      height: 1rem;
      border-bottom: 0.05rem solid #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      .span1{
        width: 2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.32rem;
        color: #66cc00;
        display: block;
        background: url("../assets/images/icon14.png") no-repeat center left;
        background-size: 0.6rem;
        padding-left: 0.25rem;
      }
      .span2{
        width: 2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.32rem;
        color: #f51d2e;
        display: block;
      }
    }
  }
}
</style>
