<template>
  <div class="bottom">
    <div><img src="~assets/images/detail/tick.svg" class="checkall"
              @click="checkall"
              :class="{active:isCheckedall}"></div>
    <span class="totalprice">合计:￥{{totalprice}}</span>
    <span class="gobuy" @click="goPay">去结算</span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "bottom",
    computed: {
      ...mapGetters(['getCart']),
      totalprice() {
        return this.getCart.filter((item) => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0).toFixed(2)
      },
      isCheckedall() {
        if (this.getCart.length !== 0) {
          return !this.getCart.find(item => !item.checked)
        } else
          return false
      }
    },
    methods: {
      checkall() {
        if (this.isCheckedall) {
          this.getCart.forEach(item => item.checked = false)
        } else
          this.getCart.forEach(item => item.checked = true)
      },
      goPay(){
        console.log(this.$toast);
      }
    }
  }
</script>

<style scoped>
  .bottom {
    width: 100%;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 49px;
    background: #f2f2f2;
  }

  .bottom > div {
    float: left;
    margin-right: 30px;
    line-height: 49px;
  }

  .totalprice {
    float: left;
    line-height: 49px;
  }

  .gobuy {
    float: right;
    width: 100px;
    line-height: 49px;
    background: red;
    text-align: center;
  }

  .active {
    background: hotpink;
    border-color: hotpink;
  }

  .checkall {
    border: 1px solid #000;
    border-radius: 50%;
  }
</style>