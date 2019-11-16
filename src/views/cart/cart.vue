<template>
  <div class="cart">
    <navbar class="nav-bar">
      <div slot="center">购物车({{$store.state.cart.length}})</div>
    </navbar>
    <scroll class="content" ref="scroll">
      <cart-list :cart-list="getCart"/>
    </scroll>
    <bottom/>
  </div>
</template>
<script>
  import navbar from 'components/common/navbar'
  import cartList from 'views/cart/childComponents/cartList'
  import scroll from 'components/common/scroll'
  import bottom from 'views/cart/childComponents/bottom'

  import {mapGetters} from 'vuex'

  export default {
    name: "cart",
    components: {
      navbar,
      cartList,
      scroll,
      bottom,
    },
    computed: {
      ...mapGetters(['getCart'])
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    methods: {}

  }
</script>

<style scoped>
  .cart {
    width: 100%;
  }

  .nav-bar {
    line-height: 44px;
    text-align: center;
    background: hotpink;
    color: white;
    font-size: 18px;
    position: relative;
    z-index: 10;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 98px;
    top: 44px;
  }
</style>