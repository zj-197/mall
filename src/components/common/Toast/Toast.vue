<template>
  <div class="toast" v-show="isShow" v-model="show">
 <div>
   {{message}}
 </div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message:'',
        isShow:false
      }
    },
    methods: {
      show(message,timer=2000){
        const _this = this
        console.log(this);
        this.isShow = false
        this.message = message
        setTimeout(()=>{
          this.message = ''
          this.isShow = false
        },timer)
      }


    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    top:50%;
    left: 50%;
    background-color: rgba(0,0,0,.7);
    padding: 8px 15px;
    color: white;
    transform: translate(-50%,-50%);
    z-index: 999;
  }
</style>