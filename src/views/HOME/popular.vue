<template>
  <div>
    <a href="https://www.bilibili.com/video/av59594689/?p=157">
      <img src="~assets/images/home/recommend_bg.jpg" @load="startfixed">
    </a>
  </div>
</template>

<script>
  export default {
    name: "popular",
    methods: {
      startfixed() {
        this.$emit('gettabcontraloffset')
      }
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>