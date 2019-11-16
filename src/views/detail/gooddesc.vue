<template>
  <div class="desc" v-if="Object.keys(goods).length !== 0">
    <div class="topdesc">
     <span>{{goods.title}}</span>
      <div class="goodsinfo">
      <span class="price">{{goods.price}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discountDesc}}</span>
      </div>
      <div class="columns">
      <div v-for="item in goods.columns ">{{item}}</div>
      </div>
    </div>

    <div class="bottdesc">
      <div class="services">
        <div v-for="(item) in goods.services" class="seritem">
          <img :src="item.icon" class="icon">
          <span class="name"> {{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "backButton",
    props: {
      goods:{
        default(){
          return{}
        }
      }
    },

  }
</script>

<style scoped>
  .desc {
    margin-top: 10px;
  }
.topdesc{
  padding: 8px 8px;
  font-size: 16px;
  color: black;

}
  .goodsinfo {
    position: relative;
    margin-top: 8px;
  }
  .price {
    color: red;
    font-size: 25px;
  }
  .o-price {
    color: gray;
    margin-left: 15px;
    text-decoration:line-through;
    margin-right: 5px;
  }

  .discount {
    background: red;
    color: white;
    padding: 2px;
    position: absolute;
    top: -6px;
    border-radius: 5px;
  }
  .columns {
    font-size: 15px;
    color: gray;
    margin-top:15px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 1px solid gray;
  }
  .bottdesc {
    padding: 20px 5px;
    border-bottom: #f2f5f8 3px solid;

  }
  .services {
    color: black;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .icon{
    width: 12px;
    height: 12px;
  }

</style>