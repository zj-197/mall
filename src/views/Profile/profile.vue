<template>
  <div>
    <navbar class="nav">
      <div class="navbar" slot="center">我的信息</div>
    </navbar>
    <div class="perInfo">
      <img src="~assets/images/common/head.jpg"/>
      <span>登录/注册<br>暂无手机号码</span>
    </div>
  </div>
</template>
<script>
  
  import  navbar from 'components/common/navbar'
  export default {
    name: "profile",
    components:{
      navbar
    }
  }
</script>

<style scoped>
  .nav{
    background: hotpink;
  }
  .navbar{
    text-align: center;
    line-height: 44px;
  }
  .perInfo{
    height: 150px;
    padding: 0 15px;
    background: chocolate;
  }
  .perInfo img {
    width: 120px;
    height: 120px;
    vertical-align: middle;
  }
  .perInfo span {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
  }
</style>