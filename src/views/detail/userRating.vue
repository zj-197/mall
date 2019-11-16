<template>
  <div class="user-info">
   <div class="user-base">
     <span>用户评价</span>
     <span><a href="#">更多></a></span>
   </div>
    <div class="user-desc">
      <img :src="userRating.avatar">
      <span class="uname">{{userRating.uname}}</span>
      <div class="content">{{userRating.content}}</div>
      <div class="style">{{userRating.style}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "userRating",
    props: {
      userRating: {
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
.user-info {
  padding: 0px 6px;
}
  .user-base {
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #f2f5f8;
    margin-bottom: 15px;
  }
  .user-desc img {
    width:50px;
    height: 50px;
  }
.user-desc{
  position: relative;
  padding: 0px 10px 25px;
  border-bottom: 4px solid #f2f5f8;
}
  .user-desc .uname {
    margin-left: 10px;
    position: absolute;
    top:20px;
  }
  .content{
    margin: 15px 0px;
  }
  .style{
    font-size: 14px;
  }
</style>