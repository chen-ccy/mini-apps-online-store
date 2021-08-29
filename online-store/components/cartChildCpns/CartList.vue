<template>
  <div class="cartList">
    <scroll-view class="content" ref="scroll" >
      <block  v-for="(item,index) in cartList">
        <CartListItem class="cartList-item" :index="index" :cart-list-item="item"/>
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
  }
  .content{
    height: 100%;
  }
</style>