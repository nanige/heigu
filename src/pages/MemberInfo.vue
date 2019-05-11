<template>
  <div id="memberInfo">
    <van-nav-bar class="nav" :fixed="true" title="会员信息" left-arrow  @click-left="onClickLeft"  />
    <div class="content">
      <div class="header">
        <span>头像</span>
        <span class="span-icon">
          <van-icon name="arrow" />
        </span>
        <span class="span-img">
          <img src="../assets/images/logo.png" alt="">
        </span>
      </div>
      <div class="member-item">
        <span class="span">手机号码</span>
        <span class="span">
          <input class="text-input" type="text" name="" value="13800001375">
        </span>
      </div>
      <div class="member-item">
        <span class="span">昵称</span>
        <span class="span">
          <input class="text-input" type="text" name="" value="13800001375">
        </span>
      </div>
      <div class="member-item">
        <span class="span">性别</span>
        <span class="span">
          <label for="sex1">
            <input type="radio" id="sex1" name="sex" value="">
            <i></i>
            <span>男</span>
          </label>
          <label for="sex2">
            <input type="radio" id="sex2" name="sex" value="">
            <i></i>
            <span>女</span>
          </label>

        </span>
      </div>
      <div class="input-warp">
        <button class="confirm-button">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'memberInfo',
  data () {
    return {
      sex: 1
    }
  },
  mounted () {

  },
  methods: {
    onClickLeft () {
      this.$router.push({path: '/login'})
    }
  }
}

</script>

<style lang="less">
#memberInfo{
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
      height: 1.6rem;
      padding: 0 0.15rem;
      font-size: 0.24rem;
      border-bottom: 0.1rem solid #f2f2f2;
      background: #fff;
      span{
        display: block;
        height: 100%;
        &:first-of-type{
          float: left;
          line-height: 1.6rem;
        }

      }
      .span-img{
        width: 1.4rem;
        height: 1.4rem;
        margin: 0.1rem 0.5rem 0.1rem 0;
        border-radius: 100%;
        float: right;
        overflow: hidden;
      }
      .span-icon{
        height: 100%;
        float: right;
        line-height: 1.6rem;
      }
    }
    .member-item{
      text-align: left;
      padding: 0 0.15rem;
      font-size: 0.24rem;
      height: 0.6rem;
      line-height: 0.6rem;
      background: #fff;
      border-bottom: 0.1rem solid #f2f2f2;
      .span{
        display: block;
        float: left;
        &:first-of-type{
          width: 1.3rem;
        }
        label{
          display: block;
          float: left;
          margin-right: 0.6rem;
          input{
            display: none;
          }
          input:checked + i{
            border: 1px solid #f51a30;
          }
          input:checked + i::after{
            display: block;
          }
          i{
            width: 0.3rem;
            height: 0.3rem;
            border: 1px solid #ccc;
            display: block;
            border-radius: 100%;
            float: left;
            margin-top: 0.14rem;
            margin-right: 0.2rem;
            position: relative;
            &::after{
              width: 0.2rem;
              height: 0.2rem;
              background: #f51a30;
              border-radius: 100%;
              position: absolute;
              left: 0.05rem;
              top: 0.04rem;
              display: none;
              content: '';
            }
          }
          span{
            float: none!important;
            width: 1rem!important;
          }
        }
      }
      .text-input{
        border: none;
        height: 100%;
        background: none;
      }
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
    .input-item-width{
      width: 3.2rem;
      margin: 0;
      float: left;
    }
  }
}
</style>
