<template>
	<view class="goods-list">
			<goods-list-item   v-for="item in goodsList" :goodsItem="item" />	
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

</style>
