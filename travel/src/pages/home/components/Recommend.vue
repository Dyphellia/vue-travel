<template>
  <div>
    <div class="weekend-title">热销推荐</div>
    <ul>
      <li class="weekend-item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data: function () {
      return {
        recommendList: [{
          id: '001',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1912/70/7022f1d4ce9c62d8a3.water.jpg_200x200_0721432c.jpg',
          title: '长隆野生动物世界',
          desc: '野生动物世界考拉园：“欢欢”和“乐乐”，还有“四代同堂”的考拉大家族，将给游客带来更多欢乐！长隆大熊猫中心：长隆野生动物世界的心脏位置。在2013年7月31日出生的，广东首只大熊猫宝宝以及2014年7月29，都在这里生活。金蛇秘境：全世界知名的20多个蛇精英种族，全都聚会于此，“金蛇秘境”结合原生态蛇生活环境，为游客创造与蛇近距离接触的条件，体验蛇界的缤纷斑斓和灵气，发现它们亲和、美丽、祥瑞的一面！'
        }, {
          id: '002',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1912/15/151834b2b546d398a3.water.jpg_200x200_051ba581.jpg',
          title: '广州长隆旅游度假区',
          desc: '长隆国际大马戏拥有全球首创实景式马戏舞台，为你打造令人惊叹的视听盛宴。这里有全球过山车之王--垂直过山车，敢挑战吗？'
        },{
          id: '003',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/201403/10/304b115ac96857308547caf29b96158c.jpg_200x200_af9b3589.jpg',
          title: '广州星期8小镇',
          desc: '小朋友扮演中医药剂师，可认识中药的名称及功效，通过一系列抓药、称重、包装等步骤，培养小朋友的动手能力和简单的记忆识别能力。',
        },{
          id: '004',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/72/72d087ebb95580c2.img.jpg_200x200_4f9d01ca.jpg',
          title: '南沙湿地公园',
          desc: '南沙湿地种有千亩荷花，随风摇曳的荷花在一望无际的田田荷叶间起舞，秀美绝伦，构成夏日里醉人的风景。荷韵悠悠，飘香万里，让人心旷神怡，流连忘返。',
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
