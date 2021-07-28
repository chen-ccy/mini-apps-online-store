<template>
	<view class="tab-control">
		<view v-for="(item,index) in title" class="tabItem" >
			<text :class="{isActive:currentIndex === index }"
						@click="tabHandle(index)">{{item}} </text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"",
		props:{
			title:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {	
				currentIndex:0
			};
		},
		methods:{
			tabHandle(index){
				this.currentIndex = index
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style>
	.tab-control{
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		padding: 5px;
		background-color: white;
	}
	.tabItem{
		flex:1;
		text-align: center;
		
	}
	.tabItem text{
		padding: 5px;
		
	}
	.isActive{
		color: pink;
		border-bottom: 10rpx solid pink;
	}
</style>
