<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeWeekend",
    data: function () {
      return {
        recommendList: [{
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
          title: '清远周边逛',
          desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？',
        }, {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
          title: '浮在海上的绿洲',
          desc: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊'
        }, {
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg',
          title: '粤西温泉',
          desc: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作',
        }, {
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1812/fe/208e0360d686b8.jpg_r_640x214_7b9e6607.jpg',
          title: '广州泡汤圣地',
          desc: '解压之地，放松自己，来一段轻松的旅程。',
        }],
      }
    },
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"

  .weekend-title
    height .8rem
    line-height .8rem
    margin-top .2rem
    background-color #eeeeee
    text-indent .2rem

  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 33.9%
    .item-img
      width 100%

  .item-info
    padding .1rem

    .item-title
      line-height .6rem
      font-size .32rem
      ellipsis()

    .item-desc
      line-height .6rem
      color #cccccc
      ellipsis()



</style>
