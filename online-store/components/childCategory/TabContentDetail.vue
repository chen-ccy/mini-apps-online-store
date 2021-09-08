<template>
  <view class="tab-content-detail">
		<view class="good-list">
    <GoodsListItem class="good-item" v-for="(item, index) in categoryDetail" :key="index" :goodItem="item">
    </GoodsListItem>
		</view>
  </view>
</template>

<script>
  import GridView from "../common/GridView.vue";
  import GoodsListItem from "../common/GoodsListItem.vue";
  export default {
    name: "TabContentDetail",
    components: {
      GridView,
      GoodsListItem,
    },
    props: {
      categoryDetail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    mounted(){

    }
  }
</script>

<style scoped>
	.tab-content-detail{

	}
.good-list{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;		
}
.good-item{
		width: 46%;
}
</style>
