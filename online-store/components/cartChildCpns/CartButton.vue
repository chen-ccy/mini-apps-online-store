<template>
  <view>
    <view class="item-button">
      <view class="display" :class="{click:isClick}"></view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "CartButton",
    props:{
      isClick:{
        type:Boolean,
        default:false
      }
   },
  }
</script>

<style scoped>
  .item-button{
    width: 30rpx;
    height: 30rpx;
    border-radius:50%;
    border: 2px solid;
		line-height: 30rpx;
		text-align: center;
  }
  .click{
    background-color: red;
    border-color:red ;
  }
	.display{
		width: 27rpx;
		height: 27rpx;
		border-radius:50%;
	}
</style>