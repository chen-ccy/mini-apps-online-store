<template>
	<view class="goods-list-item">
		
			<image :src="goodsItem.show.img" mode=""></image>
			    <view class="goods-info">
			    <p>{{goodsItem.title}}</p>
			    <text class="price">{{goodsItem.price}}</text>
			    <text class="collect">{{goodsItem.cfav}}</text></view>

	</view>
</template>

<script>
	export default {
		name:"",
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {				
			};
		}
	}
</script>

<style>
.goods-list-item{
	width: 46%;

}
.goods-list-item>image{
	width: 100%;
	border-radius: 5px;
}
</style>
