<template>
	<view>
		<scroll-view 
		scroll-y="true" 
		class="content"
		@scrolltolower="loadMore"
		 @scroll="scroll" >
			<detail-swiper :swiperImage="swiperImage"></detail-swiper>
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
		</scroll-view>

	</view>
</template>

<script>
	import DetailSwiper from '../../components/detailChildCpns/DetailSwiper.vue'
	import DetailBaseInfo from '../../components/detailChildCpns/DetailBaseInfo.vue'
	
	import {getDetail,getRecommend,Goods,ShopInfo,GoodsParam} from '../../network/detail.js'
	export default {
		data() {
			return {
				iid:null,
				swiperImage: [],
				goods:{},
				shopInfo:{},
				GoodsParam:{},
				detailInfo:{},
				commentInfo:{},
				recommend:{},
				getThemeTopY:null,
				themeTopY:[],
				currentIndex:null,
				message:'',
				toastShow:false
			}
		},
		onLoad(e){

			this.iid = e.iid
			const _this = this
			getDetail(_this.iid,function(res){
				        const  data = res.data.result

					_this.swiperImage = data.itemInfo.topImages;
					_this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
					_this.shopInfo = new ShopInfo(data.shopInfo)
					_this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);

					_this.detailInfo = data.detailInfo;
					_this.commentInfo = data.rate.list[0]
			})
			getRecommend(function(res){
				_this.recommend = res.data.list
			})
		},
		components:{
			DetailSwiper,
			DetailBaseInfo
		},
		methods: {	
			
		}
	}
</script>

<style>

</style>
