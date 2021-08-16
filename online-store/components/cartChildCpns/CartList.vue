<template>
  <div class="cartList">
    <scroll-view class="content" ref="scroll">
      <div class="cartList-item" >
        <CartListItem :cart-list-item="item"/>
      </div>
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