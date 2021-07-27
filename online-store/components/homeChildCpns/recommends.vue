<template>
	<view class="recommends">
		<block>
			<view v-for="item in recommends" class="recommends-list">
				<img :src="item.image" alt="">
				<span>{{item.title}}</span>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		name:"swiper",
		props:{
			recommends:{
				type:Array,
				default(){
					return []
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
	.recommends{
		display: flex;
		padding: 5px;
		margin-top: 30rpx;
		border-bottom: 16rpx solid #eee;
		padding-bottom: 40rpx;
	}
	.recommends-list{
		flex:1;
		font-size: 30rpx;
		text-align: center;
	}
	.recommends-list image{
		width: 160rpx;
		height: 160rpx;
	}
</style>
