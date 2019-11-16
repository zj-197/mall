<template>
    <div class="goodsitem" ref="content" @click="skipdetail">
      <img :src="showimage" alt="why" @load="finishload">
      <div class="goodsinfo">
        <p>{{goodsitem.title}}</p>
        <span class="price">{{goodsitem.price}}</span>
        <span class="collect">
        {{goodsitem.cfav}}</span>
      </div>
    </div>
</template>

<script>

  export default {
    name: "goodslistitem",
    props: {
      goodsitem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        scroll: null,
      }
    },
    computed: {
      showimage() {
        return this.goodsitem.image || this.goodsitem.showLarge.img
        // if(this.$router.path = this.path)
        //   return this.goodsitem.showLarge.img
        // else return this.goodsitem.image;
        // return this.goodsitem.image
      }

    },
    methods: {
      finishload() {
        this.$bus.$emit('finishimg')
      },
      skipdetail() {

        // let iid = this.goodsitem.iid;
        //
        // // 2.跳转到详情页面
        // this.$router.push({path: '/detail', query: {iid}})
        // path.indexOf(home) !== -1;
        this.$router.push('/detail/' + this.goodsitem.iid)

      }
    }
  }
</script>

<style scoped>
  .goodsitem {
    padding: 20px 2px 38px;
    position: relative;
    width: 50%;
  }

  .goodsitem img {
    width: 100%;
    border-radius: 5px;
  }

  .goodsinfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsinfo p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsinfo .price {
    color: red;
    margin-right: 20px;
  }


  /*.goodsinfo .collect {*/
  /*  position: relative;*/
  /*}*/
  /*.collect::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  left: -15px;*/
  /*  top:-1px;*/
  /*  width: 14px;*/
  /*  !*background-image:url() 0 0/14px 14px ;*!*/
  /*}*/
</style>