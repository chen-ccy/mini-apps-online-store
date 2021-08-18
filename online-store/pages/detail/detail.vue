<template>
	<view class="detail">
		
		<scroll-view 
		scroll-y="true" 
		class="content"
		@scrolltolower="loadMore"
		 @scroll="scroll" >
		 
			<detail-swiper :swiperImage="swiperImage" id="good"></detail-swiper>
			<DetailBaseInfo :goods="goods"></DetailBaseInfo>
			<DetailShopInfo :shop="shopInfo"/>
			<DetailImageInfo :detail-info="detailInfo" @detailImage="detailImageLoad" />
			<DetailParamInfo :paramInfo="GoodsParam" id="paramInfo" ref="params"/>
			<DetailCommentInfo :comment-info="commentInfo" id="commentInfo" ref="comment"/>
			<DetailGoodsList :recommend="recommend" @itemImageLoad="imageLoad" id="recommend" ref="recommend"/>
			
		</scroll-view>
<detail-bottom-nav @addToCart="addToCart"></detail-bottom-nav>
<Toast class="detail-toast" v-show="toastShow" :message="message"></Toast>
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
	import DetailGoodsList from "../../components/detailChildCpns/DetailGoodsList.vue"
	
	import Toast from '../../components/common/Toast.vue'
	
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
				recommend:[],
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
				_this.recommend = res.data.data.list
			})
		},
		components:{
      DetailShopInfo,
      DetailBaseInfo,
      DetailSwiper,
      DetailImageInfo,
      DetailParamInfo,
      DetailCommentInfo,
			DetailGoodsList,
      DetailBottomNav,
			Toast
			
		},
		methods: {	
				addToCart() {
					const obj = {}
					// 2.对象信息
					obj.iid = this.iid;
					obj.imgURL = this.swiperImage[0]
					obj.title = this.goods.title
					obj.desc = this.goods.desc;
					obj.newPrice = this.goods.realPrice;	
					console.log(obj)
					this.$store.dispatch('addCart',obj).then(res =>{
						this.message = res
					})
					this.toastShow = true
					setTimeout(() =>{
						this.toastShow = false
					},1500)
	
				}
		}
	}
</script>

<style>

.detail{
	height: 100vh;
	position: relative;
}
.content{
	height:calc(100% - 58px)
}
  .detail-toast{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
  }
</style>
