<template>
	<view>
	<view>
		<swiper autoplay
						interval="3000"
						indicator-dots
						duration="500">
			<swiper-item v-for="item in swiperImage" class="swiper-item">
				<img @load="imgLoad" :src="item" alt="" mode="widthFix">
			</swiper-item>
		</swiper>
	</view>
	</view>
</template>

<script>
	export default {
		name:"swiper",
		props:{
			swiperImage : {
				type: Array,
				default(){
					return []
				}
			}
		},
		data() {
			return {
			};
		},
		methods:{
			imgLoad(){
				this.$emit('imgLoad')
			}
		}
	}
</script>

<style>
.swiper-item{
	height: 600rpx;
	overflow: hidden;
}
</style>
