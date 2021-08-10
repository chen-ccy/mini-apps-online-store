<template>
  <view class="param-info" v-if=" Object.keys(paramInfo).length !== 0">
    <uni-table v-for="(table,index) in paramInfo.sizes"
        class="info-size" :key="index">
      <uni-tr v-for="(tr) in table" class="info-size-tr" :key="index">
        <uni-td v-for="(td) in tr" class="info-size-td">{{td}}</uni-td>
      </uni-tr>
    </uni-table>

    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos" class="info-param-tr">
        <td class="info-param-key info-param-td">{{info.key}}</td>
        <td class="param-value info-param-td">{{info.value}}</td>
      </tr>
    </table>

    </view>


</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
          }
      }
    }
  }
</script>

<style scoped>
  .param-info{
    padding: 20px 15px;
    border-top: 4px solid lightgrey;
    border-bottom: 5px solid #f2f5f8;
  }
.info-size {
  padding-left: 5px;

  border-collapse: collapse;
  width: 100%;
}
.info-size .info-size-tr{
  height: 50px;

}
.info-size .info-size-td {
  order-bottom: 1px solid rgba(100,100,100,.1);
}
  .info-param{

    width: 100%;
  }
  .info-param .info-param-tr{
    height: 40px;
  }
  .info-param .info-param-td{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .param-value{
    color: var(--color-tint);
  }
  .info-param-key{
    width: 100px;
  }
</style>