<template>
  <view v-if="Object.keys(goods).length !== 0" class="base-info" >
    <view class="info-title">{{goods.title}}</view>
    <view class="info-price">
      <text class="n-price">{{goods.newPrice}}</text>
      <text class="o-price">{{goods.oldPrice}}</text>
      <text class="discount" v-if="goods.discount">{{goods.discount}}</text>
    </view>
    <view class="info-other" v-if="goods.columns">
      <text>{{goods.columns[0]}}</text>
      <text>{{goods.columns[1]}}</text>
      <text>{{goods.services[goods.services.length-1].name}}</text>
    </view>
    <view class="info-service">
      <text class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <image :src="goods.services[index-1].icon" alt="">
        <text>{{goods.services[index-1].name}}</text>
      </text>
    </view>
  </view>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
	@import url("../../static/css/base.css");
.info-title{
  color: black;
  margin-top: 10px;
  margin-left: 5px;
}
.info-price{
  margin-top: 15px;
  margin-bottom: 15px;
}
  .n-price{
    margin-left: 10px;
    color: var(--color-tint);
    font-size: 25px;

  }
  .o-price{
    text-decoration:line-through;
    margin-left: 5px;
  }
  .discount{
    display: inline-block;
    color: white;
    background-color: var(--color-tint);
    width: 50px;
    height: 20px;
    border-radius: 15px;
    text-align: center;
    font-size: 10px;
    line-height: 20px;
    vertical-align: top;
    margin-left: 5px;


  }

  .info-other{
    display: flex;
    justify-content:space-around;
    margin: 5px;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(100,100,100,.1);

    color: darkgrey;
  }
  .info-other text{
    display: inline-block;
  }

  .info-service{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    border-bottom: 4px solid gainsboro;
  }
.info-service-item text {
  font-size: 13px;
  color: #333;
}
  .info-service text image{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;

  }
</style>