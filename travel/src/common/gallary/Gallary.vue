<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img"
               :src="item" alt=""/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommonGallary",
    props: {
      imgs: {
        type: Array,
        default() {
          return [
            // 'http://img1.qunarzz.com/sight/p0/1912/70/7022f1d4ce9c62d8a3.water.jpg_600x330_dbe35df1.jpg','http://img1.qunarzz.com/sight/p0/1911/8f/8f15236a20623999a3.water.jpg_r_800x800_c2dcc927.jpg','http://img1.qunarzz.com/sight/p0/1905/3a/3acb509c88aebce1a3.img.jpg_r_800x800_3f1cd011.jpg'
          ]
        }
      },
    },
    data() {
      return {
        swiperOptions: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          loop: true,
          observer: true,
          observeParents: true,

        }
      }
    },
    methods: {
      handleGallaryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit

  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    right 0
    top: 0
    bottom 0
    background #000
    z-index 99

    .wrapper
      /*overflow: hidden*/
      height 0
      width 100%
      padding-bottom 100%

      .gallary-img
        width 100%

      .swiper-pagination
        bottom -3rem
        color #ffffff
</style>
