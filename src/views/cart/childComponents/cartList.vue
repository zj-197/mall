<template>
  <div class="shoplist">
    <div v-for="(item,index) in cartList" class="cartlist" :key="index">
      <div class="select" @click="item.checked=!item.checked">
        <img src="~assets/images/detail/tick.svg" :class="{active: item.checked}">
      </div>
      <img :src="item.image" class="img">
      <div class="desc">
        <span>{{item.title}}</span>
        <p>{{item.desc}}</p>
        <div class="pc">
          <i>￥{{item.price}}</i>
          <span>x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartList",
    props: {
      cartList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {},
  }
</script>

<style scoped>
  .shoplist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .cartlist {
    width: 100%;
    display: flex;
    justify-content: start;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
  }

  .select {
    display: flex;
    flex: 1;
    align-items: center; /*块元素垂直居中*/
  }

  .select > img {
    width: 20px;
    border-radius: 50%;
    border: 1px solid #000;
  }

  .img {
    padding: 3px;
    width: 90px;
    height: 110px;
  }

  .desc {
    padding: 4px 15px;
    flex: 7;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
  }

  .desc p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 0 30px;
    color: gray;
    font-size: 16px;
  }

  .desc i {
    color: red;
  }

  .pc > span {
    float: right;
  }

  .active {
    background: hotpink;
    border-color: hotpink;
  }

</style>