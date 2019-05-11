<template>
  <div id="inviteFriends">
    <van-nav-bar class="nav" :fixed="true"  title="邀请好友拿奖励" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="content">
      <div class="header">
        <div class="left">
          <span>
            <img src="../assets/images/3.png" alt="">
          </span>
        </div>
        <div class="right">
          <p class="p1">我的推荐等级</p>
          <p class="p2">资深达人</p>
        </div>
      </div>
      <div class="box">
        <div class="one">
          <p class="p1">个人奖励</p>
          <p class="p2">￥0.00</p>
        </div>
        <div class="two">
          <p class="p1">昨天奖励：￥0.00</p>
          <p class="p2">今天奖励：￥0.00</p>
        </div>
        <div class="three">
          <a href="javascript:;">你的邀请记录</a>
          <a href="javascript:;">你的邀请奖励</a>
        </div>
      </div>
      <div class="sao">
        <p class="title">
          <span>活动规则</span>
        </p>
        <p class="erweima-title">
          面对面扫二维码邀请
        </p>
        <p class="erweima">
          <img src="../assets/images/erweima.png" alt="">
        </p>
        <p class="erweima-title">邀请码：13955996688</p>
        <a href="javascript:;" class="btn">分享邀请</a>
      </div>
    </div>
    <van-popup class="box-popup" v-model="shareModel">
      <div class="title">
        <span class="span1">信息提示</span>
        <van-icon class="span2" name="close" @click="shareModel = false" />
      </div>
      <div class="text">
        <p>请手动复制以下链接，向好友发送邀请：</p>
        <p>http://www.txj.com/?xxx=sfnsalfrikghi</p>
      </div>

    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'inviteFriends',
  data () {
    return {
      shareModel: true
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/login'})
    },
    onScreening () {
      this.screening = false
    }
  }
}

</script>

<style lang="less">
#inviteFriends{
  .nav{
    background: #f51a30;
    i{
      color: #fff!important;
    }
    .header-right-icon{
      position: relative;
      width: 0.5rem;
      height: 0.5rem;
      display: block;
      img{
        width: 0.5rem;
        position: absolute;
        top: -0.17rem;
        right: -0.1rem;
      }
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
    background: #f2f2f2;
    .header{
      padding: 0.15rem;
      background: #fff;
      margin-bottom: 0.1rem;
      overflow: hidden;
      .left{
        width: 1.4rem;
        float: left;
        margin-right: 0.2rem;
        span{
          width: 1.4rem;
          height: 1.4rem;
          display: block;
          overflow: hidden;
          border-radius: 100%;
        }
      }
      .right{
        float: left;
        font-size: 0.24rem;
        text-align: left;
        .p1{
          color: #ff9900;
          margin: 0.2rem 0;
        }
        .p2{
          font-size: 0.28rem;
          color: #f51a30;
        }
      }
    }
    .box{
      height: 1.6rem;
      padding: 0.1rem 0;
      font-size: 0.24rem;
      background: #fff;
      margin-bottom: 0.1rem;
      overflow: hidden;
      .one{
        height: 100%;
        float: left;
        width: 2.3rem;
        margin-bottom: 0.1rem;
        border-right: 1px solid #8d898b;
        .p1{
          margin: 0.35rem auto;
        }
        .p2{
          color: #f51a30;
        }
      }
      .two{
        height: 100%;
        float: left;
        width: 2.3rem;
        .p1{
          margin: 0.2rem auto;
        }
        .p2{
          margin-top: 0.6rem;
        }
      }
      .three{
        height: 100%;
        float: right;
        width: 2.3rem;
        a{
          width: 1.6rem;
          margin: 0.2rem auto;
          display: block;
          background: #f51a30;
          height: 0.5rem;
          line-height: 0.5rem;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
    .sao{
      font-size: .24rem;
      padding: 0.2rem 0;
      background: #fff;
      overflow: hidden;
      .title{
        overflow: hidden;
        margin-bottom: 0.5rem;
        span{
          float: right;
          color: #fff;
          background: #ff9900;
          height: 0.5rem;
          line-height: 0.5rem;
          width: 1.6rem;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
      .erweima-title{
        text-align: center;
      }
      .erweima{
        text-align: center;
        width: 3.6rem;
        margin: 0 auto;
      }
      .btn{
        width: 2.7rem;
        height: 0.5rem;
        line-height: 0.5rem;
        color: #fff;
        display: block;
        text-align: center;
        background: #ff9900;
        margin: 0 auto;
        margin-top: 0.2rem;
        border-radius: 0.25rem;
      }
    }

  }
  .box-popup{
    font-size: 0.24rem;
    width: 6rem;
    margin: 0 auto;
    .title{
      font-size: 0.24rem;
      height: 0.6rem;
      line-height: 0.6rem;
      padding: 0 0.15rem;
      background: #f51a30;
      color: #fff;
      .span1{
        float: left;
      }
      .span2{
        line-height: 0.6rem;
        float: right;
      }
    }
    .text{
      padding: 0.2rem;
      p{
        line-height: 1.5;
      }
    }
  }
}
</style>
