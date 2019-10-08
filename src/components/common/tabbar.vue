<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
#tab-bar{
  width: 100%;
  height: 49px;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #f0f0f0;
  display: flex;
}
</style>