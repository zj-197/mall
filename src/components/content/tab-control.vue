<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in tabitem"
         :class="{active: index === currentIndex}" @click="btnclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tab-control",
    data(){
      return{
        currentIndex: 0
      }
    },
    props: {
      tabitem:{
        type: Array,
        default(){
          return []
      }
      }
    },
    methods: {
      btnclick(index){
        this.currentIndex = index;
        this.$emit('btnclick',index)
      }
    }
  }
</script>

<style scoped>
 .tab-control {
   display: flex;
   background: white;
 }
  .tab-control-item {
    flex: 1;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 17px;
  }
 .tab-control-item>span {
   padding: 0 2px;
 }
  .active span{
    color: #ff7685;
    border-bottom: #ff7685 3px solid;
  }
</style>