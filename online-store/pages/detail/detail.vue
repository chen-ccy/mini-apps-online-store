<template>
	<view>
		<scroll-view 
		scroll-y="true" 
		class="content"
		@scrolltolower="loadMore"
		 @scroll="scroll" >
		 
			<detail-swiper :swiperImage="swiperImage"></detail-swiper>
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
			<DetailShopInfo :shop="shopInfo"/>
			<DetailImageInfo :detail-info="detailInfo" @detailImage="detailImageLoad" />
			<DetailParamInfo :param-info="GoodsParam" ref="params"/>
			<DetailCommentInfo :comment-info="commentInfo" ref="comment"/>
			<GoodsList :goods="recommend" @itemImageLoad="imageLoad" ref="recommend"/>
		</scroll-view>

	</view>
</template>

<script>
	import DetailSwiper from '../../components/detailChildCpns/DetailSwiper.vue'
	import DetailBaseInfo from '../../components/detailChildCpns/DetailBaseInfo.vue'
	import DetailShopInfo from "../../components/detailChildCpns/DetailShopInfo";
	import DetailImageInfo from "../../components/detailChildCpns/DetaiImageInfo";
	import DetailParamInfo from "../../components/detailChildCpns/DetailParamInfo";
	import DetailCommentInfo from "../../components/detailChildCpns/DetailCommentInfo";
	import DetailBottomNav from "../../components/detailChildCpns/DetailBottomNav";
	
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
					console.log(_this.shopInfo )
					console.log(_this.GoodsParam)
					_this.detailInfo = data.detailInfo;
					_this.commentInfo = data.rate.list[0]
			})
			getRecommend(function(res){
				_this.recommend = res.data.list
			})
		},
		components:{
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailImageInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomNav,
		},
		methods: {	
			
		}
	}
</script>

<style>

</style>
