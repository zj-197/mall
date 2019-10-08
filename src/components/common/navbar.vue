<template>
  <div class="nav-bar">
    <div class="left"><slot  class="left" name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"> <slot  name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;

}
.left,.right{
  height:44px;
  width: 40px;
}
  .center{
    flex: 1;
  }
</style>