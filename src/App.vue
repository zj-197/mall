<template>
  <div>
    <keep-alive exclude="detail"><router-view/></keep-alive>
   <tabbaritem></tabbaritem>
  </div>
</template>
<script>
  import tabbaritem from './components/content/tabbaritem'
  export default {
    name:'App',
    components: {
      tabbaritem
    }
  }
</script>
<style>
@import "assets/css/base.css";
</style>
