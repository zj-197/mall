<template>
  <div class="detail">
    <detailtop class="navbar" @skipposition="skipposition" ref="topbar"/>
    <scroll class="scroll" ref="scroll" @scroll="scrollLink">
      <topimage :images="topImages"></topimage>
      <gooddesc :goods="Goods"></gooddesc>
      <shop-desc :shopinfo="shopInfo"/>
      <detail-info :detail-info="detailInfo" @finishLoad="finishLoad"></detail-info>
      <item-params :item-params="itemParams" ref="itemparams"/>
      <user-rating :user-rating="userRating" ref="userRating"/>
      <hot-recommend :hot-rc="recommendList" ref="hotRecommend"/>
      <div class="goods">
        <goodslistitem v-for="item in recommendList" :goodsitem="item"/>
      </div>
    </scroll>
    <detail-bar @addToCart="addToCart"/>
    <!--    <h2>{{$store.state.cart}}</h2>-->
  </div>

</template>

<script>
  import detailtop from './detailtop'
  import topimage from './topimage'
  import gooddesc from './gooddesc'
  import shopDesc from './shopDesc'
  import detailInfo from './detailInfo'
  import itemParams from './itemParams'
  import userRating from './userRating'
  import hotRecommend from './hotRecommend'
  import goodslistitem from 'components/content/goodslistitem'
  import detailBar from 'components/content/detailBar'

  import scroll from 'components/common/scroll'
  import {detail, goods, shopInfo, userRate, getRecommend} from "../../network/detail";
  import {debounce} from "../../common/utils";

  export default {
    name: "detail",
    components: {
      detailtop,
      topimage,
      gooddesc,
      shopDesc,
      scroll,
      detailInfo,
      itemParams,
      userRating,
      hotRecommend,
      goodslistitem,
      detailBar
    },
    data() {
      return {
        iid: null,
        topImages: [],
        Goods: {},
        shopInfo: {},
        detailInfo: {},
        itemParams: {},
        userRating: {},
        recommendList: [],
        themeYs: [],

      }
    },
    created() {
      this.iid = this.$route.params.iid
      detail(this.iid).then(res => {
        console.log(res);
        const data = res.data.result
        this.topImages = data.itemInfo.topImages;
        this.Goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shopInfo = new shopInfo(data.shopInfo)
        this.detailInfo = data.detailInfo
        this.itemParams = data.itemParams
        this.userRating = new userRate(data.rate.list[0])
      }).catch(err => {
        console.log(err);
      })
      getRecommend().then((res, error) => {
        if (error) return
        this.recommendList = res.data.data.list
      })

    },
    updated() {
      // this.getoffsetTop()
      //  console.log(this.themeYs);
    },
    methods: {
      finishLoad() {
        const loadDebounce = debounce(this.$refs.scroll.refresh)
        loadDebounce()
        // this.$refs.scroll.refresh()
        this.themeYs = []
        this.themeYs.push(0)
        this.themeYs.push(this.$refs.itemparams.$el.offsetTop)
        this.themeYs.push(this.$refs.userRating.$el.offsetTop)
        this.themeYs.push(this.$refs.hotRecommend.$el.offsetTop)
        // console.log(this.themeYs);
        // console.log(this.currentIndex);

      },
      skipposition(index) {
        this.$refs.scroll.scroll.scrollTo(0, -(this.themeYs[index]), 500)

      },
      scrollLink(position) {
        let length = this.themeYs.length
        const positionY = -(position.y)
        // console.log(position.y);
        // console.log(this.positionY);
        // for(let j of this.themeYs){
        //   console.log(j);
        // }通过这种方式拿到的的i是一个字符串
        for (let i = 0; i < length; i++) {
          if ((i < length - 1 && positionY > this.themeYs[i] && positionY < this.themeYs[i + 1]) ||
              (i === length - 1 && positionY > this.themeYs[i])) {
            this.$refs.topbar.currentIndex = i;
          }
        }
      },
      addToCart() {
        const cartGoods = {}
        cartGoods.image = this.topImages[0]
        cartGoods.price = this.Goods.realPrice
        cartGoods.desc = this.Goods.desc
        cartGoods.title = this.Goods.title
        cartGoods.iid = this.iid
        this.$store.dispatch('addCart', cartGoods).then(res => {
          this.$toast.methods.show(res,2000)
        })

      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 9;
    background: white;
    height: 100vh;
  }

  .scroll {
    height: calc(100% - 44px);
  }

  .navbar {
    position: relative;
    z-index: 9;
    background: white;
  }

  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>