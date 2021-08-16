<template>
  <div class="cart-bottomBar">
    <CartButton class="select-all"  />
    <span>全选</span>
    <span class="total-price">合计: ¥100</span>
    <span class="buy-product">去计算(5)</span>
  </div>
</template>

<script>
  import CartButton from "./CartButton";

  import CartList from "./CartList";
  export default {
    name: "CartBottomBar",
    components: {
      CartButton
    },
    data() {
      return {
        //isClick: false
      }

    }
		}
</script>

<style scoped>
.cart-bottomBar{
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 46px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
  .select-all{
    position:absolute ;
    left: 10px;
    top: 10px;
  }
  .total-price{
    margin-left: 50px;
  }
  .cart-bottomBar .buy-product{
    background-color: orangered;
    display: inline-block;
    color: #fff;
    width: 100px;
    float: right;
    text-align: center;
    line-height: 44px;

  }
  .clicked{
    background-color: red;
  }
</style>