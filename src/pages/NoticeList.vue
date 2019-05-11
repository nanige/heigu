<template>
  <div id="noticeList">
    <van-nav-bar class="nav" :fixed="true" title="系统公告" left-arrow  @click-left="onClickLeft" />
    <div class="content">
      <ul>
        <li v-for="item in 9" :key="item">
          <div class="header-title">
            <span>黑谷有机干红获奖</span>
            <span>2018-07-09</span>
          </div>
          <p>洋县“朱鹮牌”黑米酒</p>
          <p>
            1984年由陕西省轻工研究所与朱鹮酒业前身（秦洋食品饮料有限公司），在我国著名酿酒专家们的
            努力下，在继承、发掘传统工艺的基础上，吸取了法、德、日等国先进的科学酿造技术，采取特殊
            的制曲、发酵、糖化、蒸馏、陈酿、勾兑等先进工艺，成功研制黑谷有机干红近亲产品，朱鹮牌黑
            米酒。
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noticeList',
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
#noticeList{
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
    padding-top: 46px;
    box-sizing: border-box;
    text-align: center;
    background: #f2f2f2;
    ul{
      overflow: hidden;
      li{
        padding: 0.15rem;
        background: #fff;
        margin-bottom: 0.1rem;
        overflow: hidden;
        .header-title{
          font-size: 0.24rem;
          margin-bottom: 0.1rem;
          overflow: hidden;
          span{
            display: block;
            &:nth-child(1){
              width: 5.7rem;
              overflow: hidden;
              float: left;
              text-align: left;
            }
            &:nth-child(2){
              float: right;
              color: #c9c9c9;
            }
          }
        }
        & > p{
          color: #c9c9c9;
          line-height: 1.5;
          font-size: 0.16rem;
          text-align: left;
        }
      }
    }
  }
}
</style>
