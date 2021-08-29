<template>
  <div class="cart-bottomBar" >
    <CartButton class="select-all" :is-click="isClick" @click.native="checkAll" />
    <span>全选</span>
    <span class="total-price">合计: ¥{{totlePrice}}</span>
    <span class="buy-product">去计算({{getCount}})</span>
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
				price:0,
				cartList:[]
      }
    },
		onLoad(){
			this.cartList=getApp().globalData.cartList
		},
		onShow() {
			
		},
		computed:{
			getCount(){
				let count=0
				getApp().globalData.cartList.forEach((item)=> {
					 if (item.checked){
						 count++
					 }				 
				})
				return count
			},
			totlePrice(){
				let price=0
				getApp().globalData.cartList.forEach((item) => {
					if (item.checked)
					   price += item.newPrice * item.count
				})
				return price
			},
			isClick(){
					let cartList=getApp().globalData.cartList
					if(cartList.length === 0) return false
					return !cartList.find( item => !item.checked)
			}

		},
		methods:{
				checkAll() {
					 let cartList=getApp().globalData.cartList
								if(this.isClick){
									cartList.forEach( item => item.checked = false)
								}else {
									cartList.forEach( item => item.checked = true)
								}
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
  bottom: 0;
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
    top: 12px;
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