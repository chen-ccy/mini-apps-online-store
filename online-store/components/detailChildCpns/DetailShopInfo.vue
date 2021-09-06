<template>
    <view class="shop-info">
      <view class="shop-top">
        <image :src="shop.logo">
        <span class="title">{{shop.name}}</span>
      </view>

      <view class="shop-middle">

        <view class="shop-middle-item shop-middle-left">

          <view class="info-sells">

            <view class="sells-count">
              {{shop.sells | sellCountFilter}}
            </view>

            <view class="sells-text">总销量</view>

          </view>
          <view class="info-goods">
          <view class="goods-count">
            {{shop.goodsCount}}
          </view>
          <view class="goods-text">全部宝贝</view>
          </view>
        </view>

      <view class="shop-middle-item shop-middle-right">

        <view v-for="(item,index) in shop.score" :key="index" class="grade-row">
          <view  class='item name'>{{item.name}}</view>
          <view class="score" :class="{ 'score-better': item.isBetter}">{{item.score}}</view>
          <view class="better" :class="{ 'better-more': item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></view>
        </view>
    </view>
    </view>
      <view class="shop-bottom">
        <view class="enter-shop">进店逛逛</view>
      </view>
    </view>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default (){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter(value) {
        if(value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top{
    height: 90px;
    line-height: 90px;
  }
  .shop-top image{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    vertical-align: middle;
    margin: 0px 10px 0px 5px;
  }
  .shop-middle{
    margin-top: 15px;
    display: flex;
    align-items: center;

  }
  .shop-middle .shop-middle-item{
    flex: 1;
    text-align: center;
  }

  .shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);

  }
  .shop-middle-left>view{
    flex: 1;
    height: 60px;
    line-height: 30px;



  }
  .info-goods{

    border-right: 1px solid lightgrey;
  }
  .shop-middle-right{

    height: 100px;
    line-height: 30rpx;

  }

	.grade-row{
		display: flex;
		margin-top: 20rpx;
		padding: 15rpx;
	}
	.grade-row .name{
		width: 200rpx;
	}
	.grade-row .score{
		flex: 1;
		color: green;
	}
	.grade-row .better{
		flex:1;
	}
  .shop-middle-right .score-better {
    color: red;
  }
  .shop-middle-right table{
    margin: 0px auto;
  }

  .shop-middle-right .better span{
    color:white;

    background-color: green;
    text-align: center;

  }
  .shop-middle-right .better-more span{
    background-color: red;
  }
  .shop-bottom{
    height: 30px;
    margin-bottom: 30px;


  }
  .shop-bottom .enter-shop{
    margin: 0px auto;
    width: 120px;
    background-color: rgb(244,244,252);
    border-radius: 15px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 1px solid;
  }
</style>