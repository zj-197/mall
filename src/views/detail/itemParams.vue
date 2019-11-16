<template>
  <div class="table-info" v-if="Object.keys(itemParams).length !== 0">
    <table class="table-rule">
      <tr v-for="(tr,indey) in itemParams.rule.tables[0]" :key="indey">
        <td v-for="(td,index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in itemParams.info.set" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value" style="color: red">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "itemParams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .table-info {
    padding: 20px 15px;
    border-bottom: 4px solid rgba(100,100,100,.1);
  }
  .table-rule {
    font-size:14px;
    width: 100%;
    border-collapse: collapse;
  }
  .table-rule tr{
    height: 42px;
  }
  .table-rule td  {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .info-param {
    font-size:14px;
    width: 100%;
    border-collapse: collapse;
  }
  .info-param tr {
    height: 42px;
  }
  .info-param td {
    border-bottom: 1px solid rgba(100,100,100,.1);
    width: 15px;
  }

</style>