<template>
	<view>
		<!-- <button size="mini" @click="handle">按钮</button> -->
		<swiper :banners="banners" />
		<recommends :recommends="recommends" />
		<tab-control :title="title" @tabClick="tabClick"/>
	</view>
</template>

<script>
		import tabControl from '../../components/homeChildCpns/tabControl.vue'
	import swiper from '../../components/swiper.vue'
	
	import recommends from "../../components/homeChildCpns/recommends.vue"

	
	import {getMultiData} from '../../network/home.js'
	export default {
		data() {
			return {
				banners:[],
				recommends:[],
				title:['新款','潮流','精选']
			}
		},
		components:{
			swiper,
			recommends,
			tabControl
		},
		onLoad(){
			const _this = this
			getMultiData("/home/multidata","","",function(res){
				_this.banners = res.data.data.banner.list
				_this.recommends = res.data.data.recommend.list
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
