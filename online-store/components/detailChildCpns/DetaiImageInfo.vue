<template>
  <view class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
   <view class="info-desc">
     <view class="start"></view>
     <view class="desc">
       {{detailInfo.desc}}
     </view>
     <view class="end"></view>
   </view>

    <view class="info-key"> {{detailInfo.detailImage[0].key}}</view>

    <view v-for="item in detailInfo.detailImage[0].list" class="image-info">
      <image :src="item" alt="" @load="imageLoad" mode="widthFix">
    </view>


  </view>

</template>

<script>
  export default {
    name: "DetailInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.$emit('detailImage')
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-desc{
    padding: 0 15px;
  }
  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }
  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }
  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }
  .image-info image{
    width: 100%;

  }
</style>