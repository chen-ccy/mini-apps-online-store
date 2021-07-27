<template>
	<view>
		<!-- <button size="mini" @click="handle">按钮</button> -->
		<swiper :banners="banners" />
		<recommends :recommends="recommends" />
	</view>
</template>

<script>
	
	import swiper from '../../components/swiper.vue'
	
	import recommends from "../../components/homeChildCpns/recommends.vue"
	
	import {getMultiData} from '../../network/home.js'
	export default {
		data() {
			return {
				banners:[],
				recommends:[]
			}
		},
		components:{
			swiper,
			recommends
		},
		onLoad(){
			const _this = this
			getMultiData("/home/multidata","","",function(res){
				_this.banners = res.data.data.banner.list
				_this.recommends = res.data.data.recommend.list
				console.log(_this.recommends)
			})
			
			// .then(res => {		
			// 		this.banners = res[1].data.data.banner.list
			// 		this.recommends = res[1].data.data.recommend.list
			// 	})
				
		},
		onShow(){
		},
		methods:{
		}
	}
</script>

<style>

</style>
