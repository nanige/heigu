<template>
  <div id="companyProfile">
    <van-nav-bar class="nav" :fixed="true" title="公司简介"  left-arrow @click-left="onClickLeft" />
    <div class="content">
      <p class="content-text">
        谈笑间（广州）信息科技有限公司是一间谈笑间（
        广州）信息科技有限公司是一间谈笑间（广州）信
        息科技有限公司是一间谈笑间（广州）信息科技有限
        公司是一间,谈笑间（广州）信息科技有限公司是一间,
        谈笑间（广州）信息科技有限公司是一间谈笑间（广
        州）信息科技有限公司是一间
      </p>
      <div class="contact-us">
        <p>
          <span>客服热线</span>
          <span>400-888-999</span>
        </p>
        <p>
          <span>联系地址</span>
          <span>山东我减肥法搜积分</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companyProfile',
  data () {
    return {
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
#companyProfile{
  background: #f2f2f2;
  .nav{
    background: #f51a30;
    z-index: 99;
    i{
      color: #fff!important;
    }
  }
  .van-ellipsis{
    color: #fff;
  }
  .van-search{
    width: 100%;
    position: absolute;
    top: 46px;
    left: 0;
    .van-cell{
      border-radius: 22px;
      border: 1px solid #000;
      i{
        color: #000;
      }
    }
  }
  .content{
    position: absolute;
    margin-top: 46px;
    width: 100%;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    text-align: center;
    overflow: hidden;
    .content-text{
      font-size: 0.24rem;
      text-indent: 2em;
      line-height: 1.5;
      text-align: left;
      margin-top: 0.2rem;
      padding: 0 0.15rem;
    }
    .contact-us{
      font-size: 0.24rem;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 1rem;
      text-align: left;
      P{
        background: #fff;
        padding: 0.2rem 0.15rem;
        border-bottom: 1px solid #ccc;
        &:last-of-type{
          border: none;
        }
      }
    }
  }
}
</style>
