<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt=""/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
  export default {
    name: "HomeSwiper",
    data: function () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true
        },
        swiperList: [{
          id: '001',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/201901206_dujia_homepage_5.jpg'
        }, {
          id: '002',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20191209_qunar_dujia_750x192_1.jpg'
        },{
          id: '003',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20191210_qunar_dujia_banner750x192_4.jpg'
        },{
          id: '004',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20191212_qunar_dujia_750x192_3.jpg'
        },{
          id: '005',
          imgUrl: 'https://source.qunarzz.com/site/images/wns/20191213_qunar_dujia_750x192_2.jpg'
        },{
          id:'006',
          imgUrl:'https://source.qunarzz.com/site/images/wns/20191213_qunar_dujia_homepage_750x192_6.jpg'
        }]
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff !important

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%


    .swiper-img
      width 100%

</style>
