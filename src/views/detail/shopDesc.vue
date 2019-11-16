<template>
  <div v-if="Object.keys(shopinfo).length !== 0" class="shop">
    <div class="shopdes">
      <img :src="shopinfo.logo"/>
      <span>{{shopinfo.name}}</span>
    </div>
    <div class="content">
      <div class="shop-detail">
      <span class="csell">{{(shopinfo.cSells/10000).toFixed(1)}}万
      <div>总销量</div></span>
        <span class="cgoods">{{shopinfo.cGoods}}
      <div>全部宝贝</div>
      </span>
      </div>
      <div class="shop-desc">
        <div v-for="item in shopinfo.score" class="shop-scrore">
          <div>{{item.name}}</div>
          <div class="score">{{item.score}}
          </div>
          <div v-if="item.isBetter" class="high">高</div>
          <div v-else class="low">低</div>
        </div>
      </div>
    </div>
    <div class="visit-shop">
      <a :href="shopinfo.shopUrl">
        进店逛逛
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shopDesc",
    props: {
      shopinfo: {
        type: Object
      }
    },

  }
</script>

<style scoped>
  .shop {
    margin-top: 10px;
    width: 100%;
    height: 220px;
    border-bottom: 3px solid #f2f5f8;
  }

  .shopdes {
    position: relative;
  }

  .shopdes img {
    width: 55px;
    height: 55px;
    margin-left: 8px;
  }

  .shopdes span {
    position: absolute;
    margin-left: 20px;
    top: 20px;
  }

  .content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .shop-detail {
    padding-top: 20px;
    padding-right: 30px;
    border-right: 1px solid gray;
  }

  .cgoods {
    text-align: center;
    float: left;
    margin-left: 30px;
  }

  .csell {
    text-align: center;
    float: left;
  }

  .cgoods div {
    padding-top: 10px;
    font-size: 14px;
  }

  .csell div {
    padding-top: 10px;
    font-size: 14px;
  }

  .shop-desc {
    font-size: 14px;
  }

  .shop-scrore {
    display: flex;
    justify-content: space-between;
  }

  .shop-scrore div {
    margin-top: 10px;
    margin-right: 20px;
  }

  .low {

    background: red;
    color: white;
  }

  .high {
    background: green;
    color: white;
  }
  .visit-shop {
    width: 130px;
    padding: 8px 10px;
    margin:20px auto;
    background: #f2f5f8;
    border-radius: 5px;
    text-align: center;
  }

</style>