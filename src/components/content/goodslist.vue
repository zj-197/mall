<template>
  <div class="goods">
    <goodslistitem v-for="item in goodslist" :goodsitem="item"></goodslistitem>
  </div>
</template>

<script>
  import goodslistitem from 'components/content/goodslistitem'

  export default {
    name: "goodslist",
    props: {
      goodslist: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      goodslistitem
    }
  }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    
  }
</style>