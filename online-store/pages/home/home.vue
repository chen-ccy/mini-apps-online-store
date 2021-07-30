<template>
	<view>
		<scroll-view>
			<swiper :banners="banners" />
			<recommends :recommends="recommends" />
			<image src="../../static/images/home/recommend_bg.jpg" />
			<tab-control :title="title" @tabClick="tabClick"/>
			<GoodsList :goodsList="goods.pop.list"/>
			
		</scroll-view>
		<!-- <button size="mini" @click="handle">按钮</button> -->

	</view>
</template>

<script>
	import tabControl from '../../components/homeChildCpns/tabControl.vue'
	import swiper from '../../components/swiper.vue'
	import GoodsList from '../../components/common/GoodsList.vue'
	
	import recommends from "../../components/homeChildCpns/recommends.vue"

	
	import {getMultiData,getHomeList} from '../../network/home.js'
	
	export default {
		data() {
			return {
				banners:[],
				recommends:[],
				title:['新款','潮流','精选'],
				goods:{
					'pop':{ page:0,list:[],scrollY:-550 },
					'new':{ page:0,list:[],scrollY:-540 },
					'sell':{ page:0,list:[],scrollY:-550 },

				}
			}
		},
		components:{
			swiper,
			recommends,
			tabControl,
			GoodsList
		},
		onLoad(){
			const _this = this
			getMultiData("/home/multidata","","",function(res){
				_this.banners = res.data.data.banner.list
				_this.recommends = res.data.data.recommend.list
				
			})
			
			getHomeList('/home/data','',{type:"pop",page:++_this.goods.pop.page},function(res){
				_this.goods.pop.list = res.data.data.list
				console.log(_this.goods.pop.list)
			})
			getHomeList('/home/data','',{type:"new",page:++_this.goods.new.page},function(res){
				_this.goods.new.list = res.data.data.list
			})
			getHomeList('/home/data','',{type:"sell",page:++_this.goods.sell.page},function(res){
				_this.goods.sell.list = res.data.data.list
			})
			
			// .then(res => {		
			// 		this.banners = res[1].data.data.banner.list
			// 		this.recommends = res[1].data.data.recommend.list
			// 	})
				
		},
		onShow(){
		},
		methods:{
			tabClick(index){
				console.log(index)
			}
		}
	}
</script>

<style>

</style>
