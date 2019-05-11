<template>
  <div id="helpCenter">
    <van-nav-bar class="nav" :fixed="true" title="帮助中心"  left-arrow @click-left="onClickLeft" />
    <van-search placeholder="搜索" />
    <div class="content">
      <van-cell-group>
        <van-cell v-for="(item,index) in 30" :key="index" title="开酒注意事项" is-link />
      </van-cell-group>

    </div>
  </div>
</template>

<script>
export default {
  name: 'helpCenter',
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
#helpCenter{
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
    margin-top: 90px;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    .van-cell__title{
      text-align: left;
    }
  }
}
</style>
