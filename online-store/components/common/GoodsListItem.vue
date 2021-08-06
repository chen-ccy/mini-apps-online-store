<template>
	<view class="goods-list-item" @click="goodItemClick">
		
			<image :src="goodItem.show.img" mode=""></image>
			    <view class="goods-info">
						<p class="title">{{goodItem.title}}</p>
						<text class="price">{{goodItem.price}}</text>
						<text class="collect">{{goodItem.cfav}}</text>
					</view>

	</view>
</template>

<script>
	export default {
		name:"",
		props:{
			goodItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {				
			};
		},
		methods:{
			goodItemClick(){
				uni.redirectTo({
					url:'../../pages/detail/detail?iid='+this.goodItem.iid
				})
			}
		}
	}
</script>

<style>

  .goods-list-item{
    padding-bottom: 80rpx;

    position: relative;

  }
  .goods-list-item image{
    width: 100%;
    border-radius: 10rpx;
  }
  .goods-info {
    font-size: 24rpx;
    position: absolute;
    bottom: 10rpx;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info .price{
    color: var(--color-high-text);
    margin-right: 70rpx;
  }
  .goods-info .collect{
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -30rpx;
    top: -2rpx;
    width: 28rpx;
    height: 28rpx;
    background: url("../../static/images/common/favor.png") 0 0/28rpx 28rpx;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 6rpx;
  }
</style>
