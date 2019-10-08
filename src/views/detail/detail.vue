<template>
  <div class="detail">
    <detailtop/>
    <topimage :images = "topImages"></topimage>
  </div>
</template>

<script>
  import detailtop from './detailtop'
  import {detail} from "../../network/detail";
  import topimage from './topimage'
  export default {
    name: "detail",
    components:{
      detailtop,
      topimage
    },
    data(){
      return{
        iid:null,
        topImages:[]
      }
    },
    created() {
      this.iid = this.$route.params.iid
      detail(this.iid).then(res =>{
        console.log(res);
        this.topImages = res.data.result.itemInfo.topImages
      }).catch(err =>{
        console.log(err);
      })
    },


  }
</script>

<style scoped>

</style>