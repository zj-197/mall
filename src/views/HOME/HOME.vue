<template>
  <div id="home">
    <navbar class="navbar">
      <div class="center" slot="center">购物街</div>
    </navbar>

    <tabcontrol :tabitem="['流行','新款','精选']" class="tabcontrol2"
                @btnclick="btntype" ref="tabcontrol2" v-show="isShow"></tabcontrol>

    <scroll class="content" ref="scroll" @scroll="contentscroll" @pullingUp="loadmore">
      <div>
      <homeswiper  ref="hSwiper" :banners="res.banners" @finishimage="finishimage"></homeswiper>
      <recommends :recommends="res.recommends"></recommends>
      <popular></popular>
      <tabcontrol :tabitem="['流行','新款','精选']" class="tabcontrol"
                  @btnclick="btntype" ref="tabcontrol"></tabcontrol>
      <goodslist :goodslist="goods[currentType].list"></goodslist>
      </div>
    </scroll>

    <backtop @click.native="btntop" v-show="isScrollShow"></backtop>

  </div>
</template>

<script>
  import navbar from '../../components/common/navbar'
  import tabcontrol from 'components/content/tab-control'
  import goodslist from 'components/content/goodslist'

  import homeswiper from 'views/HOME/homeswiper'
  import recommends from 'views/HOME/recommends'
  import popular from 'views/HOME/popular'
  import scroll from 'components/common/scroll'
  import backtop from 'components/common/backtop'

  import {gethomedata, gethomegoods} from "../../network/home"
  import {debounce} from "../../common/utils";




  export default {
    name: "HOME",
    components: {
      navbar,
      recommends,
      popular,
      tabcontrol,
      goodslist,
      scroll,
      backtop,
      homeswiper
    },
    data() {
      return {
        res: {
          recommends: [],
          banners: []
        },
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        scroll: null,
        isScrollShow: false,
        offsetTop: 0,
        isShow: false
      }
    },
    created() {
      this.gethomedata();
      this.gethomegoods('pop')
      this.gethomegoods('sell')
      this.gethomegoods('new')
    },
    activated: function () {
      this.$refs.hSwiper.startTimer()
    },
    deactivated: function () {
      this.$refs.hSwiper.stopTimer()
    },
    updated() {
      // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      // console.log(this.tabOffsetTop);
    },
    mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('finishimg',() =>{
        refresh();
      })
    },
    methods: {
      btntype(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;
        }
        this.$refs.tabcontrol.currentIndex = index;
        this.$refs.tabcontrol2.currentIndex = index;
      },

      gethomedata() {
        gethomedata().then(res => {
          // console.log(res);
          this.res.banners = res.data.data.banner.list
          this.res.recommends = res.data.data.recommend
        }).catch(err => {
          console.log(err);
        })
      },
      loadmore() {
        this.gethomegoods(this.currentType)
      },
      gethomegoods(type) {
        const page = this.goods[type].page + 1;
        gethomegoods(type, page)
            .then(res => {
              // console.log(res);
              this.goods[type].list.push(...res.data.data.list)
              this.goods[type].page += 1
              this.$refs.scroll.pullUp()
            })
            .catch(err => {
              console.log(err);
            })
      },
      btntop() {
        this.$refs.scroll.scroll.scrollTo(0, 0, 500)
      },
      contentscroll(position) {
        this.isScrollShow = (-position.y) > 1000
        this.isShow = (-position.y) > this.offsetTop
      },
      finishimage() {
        this.offsetTop =  this.$refs.tabcontrol.$el.offsetTop
      }
    }
  }
</script>

<style scoped>
  #home {
    position: relative;
  }

  .center {
    flex: 1;
    text-align: center;
    line-height: 44px;
    color: white;
  }

  .navbar {
    /*position: fixed;*/
    /*right: 0px;*/
    /*left: 0;*/
    /*top: 0;*/
    position: relative;
    background: hotpink;
    z-index: 9;
  }

  .tabcontrol2 {
    position: relative;
    z-index: 9;

    /*position: sticky; !*这个属性PC端有些浏览器不支持 但大多数移动端支持 需要设置背景颜色 该属性是透明的*!*/
    /*top: 44px; !*距离顶部多少距离开始停留*!*/
  }
  /* 滚动区域*/
  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    top: 44px;
  }
</style>