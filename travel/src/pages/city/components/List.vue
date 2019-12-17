<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">广州</div>
          </div>
          <div class="button-wrapper">
            <div class="button">上海</div>
          </div>
          <div class="button-wrapper">
            <div class="button">深圳</div>
          </div>
          <div class="button-wrapper">
            <div class="button">武汉</div>
          </div>
          <div class="button-wrapper">
            <div class="button">重庆</div>
          </div>
          <div class="button-wrapper">
            <div class="button">长沙</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import BScroll from  "better-scroll"

  export default {
    name: "CityList",
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    }
  }
</script>

<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #cccccc

    &:after
      border-color #cccccc

  .border-bottom
    &:before
      border-color #cccccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

    .title
      height .54rem
      line-height .54rem
      background-color #eeeeee
      padding-left .2rem
      color #666
      font-size .26rem

    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem

      .button-wrapper
        float left
        width 33.33%

        .button
          text-align center
          margin .1rem
          padding .1rem 0
          border .02rem solid #cccccc
          border-radius .06rem

    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
