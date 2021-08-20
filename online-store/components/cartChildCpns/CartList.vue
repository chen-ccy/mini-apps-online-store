<template>
  <div class="cartList">
    <scroll-view class="content" ref="scroll" >
      <block  v-for="item in cartList">
        <CartListItem class="cartList-item" :cart-list-item="item"/>
      </block>
    </scroll-view>
  </div>

</template>

<script>

  
  import CartListItem from "./CartListItem";

  export default {
    name: "CartList",
    components:{
      CartListItem
    },
    mounted(){

    },
    activated(){

    },
    computed:{

    },
		props:{
			cartList:{
				type:Array,
				default(){
					return []
				}
			}
		}
  }
</script>

<style scoped>
  .cartList{
    height: calc(100% - 44px - 46px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>