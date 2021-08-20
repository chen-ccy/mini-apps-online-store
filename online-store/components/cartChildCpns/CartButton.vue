<template>
  <view>
    <view class="item-button"  :class="{click:isClick}">
      
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
    line-height: 20px;
  }
  .click{
    background-color: red;
    border-color:red ;
  }
</style>