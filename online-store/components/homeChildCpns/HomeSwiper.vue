<template>
	<view>
		<swiper autoplay
						interval="3000"
						indicator-dots
						duration="500">
			<swiper-item v-for="item in swiperImage">
				<img @load="imgLoad" :src="item.image" alt="" mode="widthFix">
			</swiper-item>
		</swiper>
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

</style>
