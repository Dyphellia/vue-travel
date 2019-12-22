<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="//img1.qunarzz.com/sight/p0/1912/70/7022f1d4ce9c62d8a3.water.jpg_600x330_dbe35df1.jpg"
           alt=""/>
      <div class="banner-info">
        <div class="banner-tittle">长隆野生动物世界(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6ac;</span>111</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="hanldeGallaryClose"></common-gallary>
  </div>
</template>

<script>

  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: "DetailBanner",
    data() {
      return {
        showGallary: false,
        imgs: ['http://img1.qunarzz.com/sight/p0/1912/70/7022f1d4ce9c62d8a3.water.jpg_600x330_dbe35df1.jpg', 'http://img1.qunarzz.com/sight/p0/1911/8f/8f15236a20623999a3.water.jpg_r_800x800_c2dcc927.jpg', 'http://img1.qunarzz.com/sight/p0/1905/3a/3acb509c88aebce1a3.img.jpg_r_800x800_3f1cd011.jpg'
        ],
      }
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      hanldeGallaryClose() {
        this.showGallary = false
      }
    },
    components: {
      CommonGallary,
    },
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%

    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))

      .banner-tittle
        flex 1
        font-size .32rem
        padding 0 .2rem

      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background-color rgba(0, 0, 0, 0)
        font-size .24rem

        .banner-icon
          font-size .24rem
</style>
