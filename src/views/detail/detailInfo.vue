<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="base-info">
      <div class="start"></div>
    <div class="desc">
      {{detailInfo.desc}}
    </div>
      <div class="end"></div>
    </div>
    <div class="image-show">
      <span>{{detailInfo.detailImage[0].key}}</span>
      <div class="image-list" v-for="list in detailInfo.detailImage[0].list">
        <img :src="list" @load="finishLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "detailInfo",
    props: {
      detailInfo: {
        type:Object,
        default(){
          return{}
        }
      }
    },
    methods :{
      finishLoad(){
        this.$emit('finishLoad')
      }
    }
  }
</script>

<style scoped>
 .base-info {
   padding: 15px 15px;
 }
 .desc {
   padding:0px 6px;
 }
  .start,  .end {
   width: 90px;
   height: 1px;
   background-color: #a3a3a5;
   position: relative;
 }
 .start {
   float: left;
 }

 .end {
   float: right;
 }
  .start::before,  .end::after {
   content: '';
   position: absolute;
   width: 5px;
   height: 5px;
   background-color: #333;
   bottom: 0;
 }

  .end::after {
   right: 0;
 }
  .image-show {
    padding: 30px 2px;
    border-bottom: 4px solid #f2f5f8;
  }
  .image-list {
    margin-top: 8px;
  }
  .image-list >img {
    width: 100%;
  }

</style>