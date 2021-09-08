<template>
  <view v-if="subcategories.list">
    <!-- <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list"> -->
		<view class="subcategories">
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <image class="item-img" :src="item.image" mode="widthFix" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
		</view>
    <!-- </grid-view> -->
  </view>
</template>

<script>
  import GridView from "../common/GridView.vue";

  export default {
    name: "TabContentCategory",
    components: {
      GridView
    },
    props: {
      subcategories: {
        type: Object,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .panel image {
    width: 100%;
  }
	.subcategories{
		display: flex;
		flex-wrap: wrap;
		padding: 20rpx;
		margin-top: 30rpx;
	}
  .item {
		width: 33.33%;
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }
.subcategory .item view {
  font-size: 28rpx;
  margin: 30rpx 0;
}
  .item-text {
    margin-top: 15px;
  }
</style>
