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

.goods-list-item>image{
	width: 100%;
	border-radius: 5px;
}
.goods-info{
	overflow: hidden;
}
.title{
	overflow: hidden;
	text-overflow: ellipsis;
	 white-space: nowrap;
}
</style>
