<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scroll",
    data() {
      return {
        scroll: null
      }
    },
    // mounted() {
    //   this.$nextTick(() => {
    //     console.log(BScroll);
    //     this.scroll = new BScroll(this.$refs.wrapper, {})
    //   })
    // }
    mounted() {
      console.log(BScroll);
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        tap: true,
        click: true
      })
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    },
    methods: {
      pullUp() {
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
        console.log('refresh');
      }
    }
  }

</script>

<style scoped>

</style>