<template>
  <scroll-view scroll-y="true" class="cart">
    <CartList :cartList="cartList"/>
    <CartBottomBar class="bottom-bar" />
    <Toast class="cart-toast" :message="message" v-show="toastShow"/>

</scroll-view>
</template>
<script>

  import CartList from "../../components/cartChildCpns/CartList.vue";
  import CartBottomBar from "../../components/cartChildCpns/CartBottomBar.vue";

	import {mapGetters} from 'vuex'

  import Toast from "../../components/common/Toast.vue";
	

  export default {
    name: "Cart",
    components:{     
      CartList,
      CartBottomBar,
      Toast
    },
    data(){
      return {
        toastShow:false,
        message:'',
				cartList:[],
      }
    },
    computed:{
			
    },
    activated(){

    },
		onLoad(){
			this.$set(this.$data,'cartList',getApp().globalData.cartList)		
			getApp().addCartCallback = () => {
						this.$set(this.$data,'cartList',getApp().globalData.cartList)
					}		
			getApp().changeGoodsState = (index, goods) => {
				this.cartList[index].checked=goods.checked
			}
		},
    methods:{
    }

  }
</script>

<style scoped>
  .cart{
    height:calc(100vh - 44px);
  }
.cart-navbar{
  color: white;
  background-color: var(--color-tint);
}

  .cart-toast{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
  }

</style>