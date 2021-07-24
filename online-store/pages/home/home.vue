<template>
	<view>
		首页
	</view>
</template>

<script>
	import {getMultiData} from '../../network/home.js'
	export default {
		data() {
			return {
				banners:[],
				recommends:[]
			}
		},
		onLoad(){
			const banners = []
			const recommends = []
			getMultiData("/home/multidata").then(res => {		
					this.banners = res[1].data.data.banner.list
					this.recommends = res[1].data.data.recommend.list
				})
				
		},
		onShow(){
			
		},
		methods:{
		}
	}
</script>

<style>

</style>
