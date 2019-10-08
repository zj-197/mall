<template>
  <div>
    <navbar>
      <div slot="center" class="title">
        <div v-for="(item,index) in title"
             class="titleitem"
             @click="btnitem(index)"
             :class="{active: index === currentIndex}">
          {{item}}
        </div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from 'components/common/navbar'

  export default {
    name: "detailtop",
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      navbar
    },
    methods: {
      btnitem(index) {
       this.currentIndex = index
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    margin-top: 20px;
  }

  .titleitem {
    flex: 1;
    text-align: center;
    font-size: 18px;
  }
  .active{
   color: red;
  }
</style>