<template>
  <div>
    <div class="weekend-title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="weekend-item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      list: Array
    },
    data: function () {
      return {}
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

  .weekend-item
    display flex
    height 2.2rem
    overflow hidden

    .item-img
      width 2rem
      height 2rem
      padding .1rem

    .item-info
      flex 1
      padding .1rem
      min-width 0

      .item-title
        line-height .6rem
        font-size .32rem
        ellipsis()

      .item-desc
        line-height .6rem
        color #cccccc
        ellipsis()

      .item-button
        line-height .44rem
        background-color #ff9300
        margin-top .16rem
        padding 0 .2rem
        border-radius .06rem
        color #ffffff


</style>
