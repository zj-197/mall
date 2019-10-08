<template>
  <div>
    <tabbar>
      <maintabbar path="/HOME">
        <img slot="tab-bar-img" src="~assets/images/tabbar/home.png">
        <img slot="active-tabbar-img" src="~assets/images/tabbar/home_active.png">
        <div slot="tab-bar-text">首页</div>
      </maintabbar>
      <maintabbar path="/category">
        <img slot="tab-bar-img" src="~assets/images/tabbar/category.png">
        <img slot="active-tabbar-img" src="~assets/images/tabbar/category_active.png">
        <div slot="tab-bar-text">分类</div>
      </maintabbar>
      <maintabbar path="/cart">
        <img slot="tab-bar-img" src="~assets/images/tabbar/cart.png">
        <img slot="active-tabbar-img" src="~assets/images/tabbar/cart_active.png">
        <div slot="tab-bar-text">购物车</div>
      </maintabbar>
      <maintabbar path="/profile">
        <img  slot="tab-bar-img" src="~assets/images/tabbar/profile.png">
        <img  slot="active-tabbar-img" src="~assets/images/tabbar/profile_active.png">
        <div slot="tab-bar-text">我的</div>
      </maintabbar>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from '../common/tabbar'
  import maintabbar from '../common/maintabbar'
  export default {
    name: "tabbaritem",
    components: {
      tabbar,
      maintabbar
    }
  }
</script>

<style scoped>

</style>