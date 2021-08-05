<template>
	<view>
		<detail-swiper :swiperImage="swiperImage"></detail-swiper>
	</view>
</template>

<script>
	import DetailSwiper from '../../components/detailChildCpns/DetailSwiper.vue'
	
	import {getSwiper} from '../../network/detail.js'
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
			getSwiper(_this.iid,function(res){
				        const  data = res.data.result

					_this.swiperImage = data.itemInfo.topImages;
					

					_this.detailInfo = data.detailInfo;
					_this.commentInfo = data.rate.list[0]
			})
		},
		components:{
			DetailSwiper
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
