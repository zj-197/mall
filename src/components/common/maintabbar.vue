<template>
  <div class="tab-bar-item" @click="btnRouter">
    <div v-if="!isactive"><slot name="tab-bar-img"></slot></div>
    <div v-else><slot name="active-tabbar-img"></slot></div>
    <div :style="active"><slot name="tab-bar-text"></slot></div>
  </div>
</template>
<script>
  export default {
    name: "maintabbar",
    props: {
      path: String,
      color: {
        type: String,
        default: 'red', //不传默认为红色
      }
    },

    computed: {
      isactive() {
        return this.$route.path.indexOf(this.path) !== -1;
        //上面这个函数的在于判断活跃的路由路径是否等于当前所在的路由路径进行比较，
        //如果找到了且两者相等则为其添加样式
      },
      active() {
        return this.isactive ? {color: this.color,} : {};
      }
    },
    methods: {
      btnRouter() {
        this.$router.replace(this.path)
      }
    },
  }



</script>




<style scoped>
  .tab-bar-item img{
    margin-top: 2px;
    width: 28px;
    height: 28px;
    vertical-align: center;
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    font-size: 14px;

  }
</style>