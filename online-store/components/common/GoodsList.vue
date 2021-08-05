<template>
	<view >
		<view class="goods-list">
			<goods-list-item class="goods-list-item"  v-for="item in goodsList" :goodItem="item" />	
		</view>
			
	</view>
</template>

<script>
	
	import GoodsListItem from './GoodsListItem.vue'
	
	export default {
		name:"",
		props:{
			goodsList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		components:{
			GoodsListItem
		},
		data() {
			return {				
			};
		}
	}
</script>

<style>
.goods-list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;

}
.goods-list-item{
	width: 46%;
}

</style>
