<template>
	<view class="home">
		<scroll-view

		class="content"
		scroll-y
		@scrolltolower="loadMore"
		 @scroll="scroll" 
		 >
			<swiper :banners="banners" />
			<recommends :recommends="recommends" />
			<image src="../../static/images/home/recommend_bg.jpg" />
			<tab-control :title="title" @tabClick="tabClick"/>
			<GoodsList :goodsList="goods[currentType].list"/>
			
		</scroll-view>
		<!-- <button size="mini" @click="handle">按钮</button> -->
		<top-control v-show="isTopShow" @click.native="backClick"></top-control>
	</view>
</template>

<script>
	import tabControl from '../../components/homeChildCpns/tabControl.vue'
	import swiper from '../../components/swiper.vue'
	import GoodsList from '../../components/common/GoodsList.vue'
	import topControl from '../../components/common/TopControl.vue'
	
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

				},
				isTopShow:false,
				currentType: 'pop',

			}
		},
		components:{
			swiper,
			recommends,
			tabControl,
			GoodsList,
			topControl
		},
		onLoad(){
			const _this = this
			getMultiData("/home/multidata","","",function(res){
				_this.banners = res.data.data.banner.list
				_this.recommends = res.data.data.recommend.list
				
			})
			
			getHomeList({type:"pop",page:++_this.goods.pop.page},function(res){
				_this.goods.pop.list = res.data.data.list
			})
			getHomeList({type:"new",page:++_this.goods.new.page},function(res){
				_this.goods.new.list = res.data.data.list
			})
			getHomeList({type:"sell",page:++_this.goods.sell.page},function(res){
				_this.goods.sell.list = res.data.data.list
			})
			
			// .then(res => {		
			// 		this.banners = res[1].data.data.banner.list
			// 		this.recommends = res[1].data.data.recommend.list
			// 	})
				
		},
		onShow(){
		},
		onReachBottom(){
					console.log(1)
		},
		methods:{
			tabClick(index){
				console.log(index)
				switch(index){
					case 0:{this.currentType = "pop";back}
					case 1:{this.currentType = "new";back}
					case 2:{this.currentType = "sell";back}
				}
			},
			scroll(e){
				let flag = e.detail.scrollTop > 1000
				if(flag != this.isTopShow)
					this.isTopShow = flag
			},
			backClick(){


		},
		loadMore(){
			const _this = this
			let type = this.currentType
			this.goods[type].page += 1
			getHomeList({type:type,page:_this.goods[type].page},
			function(res){
				_this.goods[type].list.push(...res.data.data.list)
			})
		}
	},
	}
</script>

<style>
	.home{
		position: relative;
		height: 100vh;
	}

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
