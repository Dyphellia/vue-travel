<template>
  <div>
    <ul class="list">
      <li class="item"
          v-for="item of letters"
          :key="item"
          :ref="item"
          @touchstart.prevent="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
          @click="handleLetterClick">{{item}}
      </li>
    </ul>
  </div>
</template>
<!--          prevent阻止默认行为-->

<script>
  export default {
    name: "CityAlphabet",
    props: {
      cities: Object
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        // 函数节流
        timer: null,
      }
    },
    //当页面填充数据的时候进行计算，优化性能
    updated() {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText);
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          //检测是否在操作，如果在操作则延迟16ms操作，如果在16ms中继续滚动则清除重新操作
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.title = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79
            const index = Math.floor((touchY - this.startY) / 20)
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      handleTouchEnd() {
        this.touchStatus = false
      },

    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"

  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem

    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
