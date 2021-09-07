<template>
  <view class="param-info" v-if=" Object.keys(paramInfo).length !== 0">
    <view v-for="(table,index) in paramInfo.sizes"
        class="info-size" :key="index">
      <view v-for="(tr) in table" class="info-size-tr" :key="index">
        <view v-for="(td) in tr" class="info-size-td">{{td}}</view>
      </view>
    </view>

    <view class="info-param">
      <view v-for="(info,index) in paramInfo.infos" class="info-param-tr">
        <view class="info-param-key info-param-td">{{info.key}}</view>
        <view class="param-value info-param-td">{{info.value}}</view>
      </view>
    </view>

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
	display: flex;
  height: 50px;

}
.info-size .info-size-td {
	flex:1;
  order-bottom: 1px solid rgba(100,100,100,.1);
}
  .info-param{
		
    width: 100%;
  }
  .info-param .info-param-tr{
		display:flex;
    height: 40px;
  }
  .info-param .info-param-td{
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		color: #f55777;
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .param-value{
    color: var(--color-tint);
  }
  .info-param-key{
    width: 100px;
  }
</style>