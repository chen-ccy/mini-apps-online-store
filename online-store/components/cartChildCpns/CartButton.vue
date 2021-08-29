<template>
  <view class="item-button">
    <view class="display" :class="{click:isClick}">
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
    border-radius:50%;
    border: 2px solid;
		padding: 2rpx;
  }
  .click{
    background-color: grey;
    border-color:grey ;
  }
	.display{
		width: 30rpx;
		height: 30rpx;
		border-radius:50%;
	}
</style>