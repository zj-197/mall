<template>
  <div class="recommends">
    <div v-for="item in recommends.list" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        flag: true
      }
    },
    props: {
      recommends: {
        default() {
          return []
        }
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .recommends {
    width: 100%;
    display: flex;
    text-align: center;
    padding: 5px 0 35px;
    border-bottom: 8px solid #eee;
    font-size: 14px;

  }

  .recommends-item {
    flex: 1;
  }

  .recommends-item img {
    width: 80px;
    height: 80px;
  }
</style>