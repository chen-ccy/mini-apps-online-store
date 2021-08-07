<template>
  <view class="bottom-nav">

  <view class="left">
    <view >
      <i class="icon service"></i>
      <text class="text">客服</text>
    </view>
    <view>
      <i class="icon shop"></i>
      <text class="text">店铺</text>
    </view>
    <view>
      <i class="icon select"></i>
      <text class="text">收藏</text>
    </view>
  </view>

    <view class="bar-item right">
      <view class="cart" @click="addToCart">加入购物车</view>
      <view class="buy">购买</view>
    </view>

  </view>
</template>

<script>
  export default {
    name: "DetailBottomNav",
   methods:{
      addToCart(){
        this.$emit('addToCart')
      }
   }
  }
</script>

<style scoped>
  .bottom-nav{
    height: 58px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 90;
  }
  .left{
    flex: 1;
    display: flex;
  }
  .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("../../static/images/detail/collect.png") 0 0/100%;
  }
	.collect{
		background: url("../../static/images/detail/collect.png") 0 0/100%;
	}
  .left .service {
    background-position:0 -54px;
		background: url("../../static/images/detail/service.png") 0 0/100%;
  }
  .shop{
    background-position: 0px -98px;
		background: url("../../static/images/detail/shop.png") 0 0/100%;
  }
  .left view{

    text-align: center;
    flex: 1;
  }
  .right{
    line-height: 58px;
    display: flex;
    flex: 1;
  }
  .right view{
    text-align: center;
    flex: 1;
  }
  .cart{
    background-color: #ffe817;
    color: #333;
  }
  .buy{
    background-color: #f69;
    color: white;
  }
</style>