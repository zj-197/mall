<template>
  <div>
    <navbar>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" :key="index"
             class="titleitem"
             :class="{'active': index===currentIndex}" @click="skipPosition(index)">
         <span>{{item}}</span>
        </div>
      </div>
      <img slot="left" class="backButton" src="~assets/images/common/back.svg" @click="backHome">
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
      skipPosition(index) {
        // console.log(index);
        this.$emit('skipposition',index)
        console.log(this.currentIndex)
      },
      backHome(){
        this.$router.back()
      },

    }
  }
</script>

<style scoped>
  .title {
    display: flex;
    margin-top: 11px;
  }

  .titleitem {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
  .active{
   color: red;
  }
  .backButton {
    width: 28px;
    height: 28px;
    position: fixed;
    left: 5px;
    top:8px;
  }
</style>