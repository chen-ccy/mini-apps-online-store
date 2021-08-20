<template>
  <div class="cart">
    <CartList :cartList="cartList"/>
		<button type="default" @click="cart">点击</button>
    <CartBottomBar class="bottom-bar" />
    <Toast class="cart-toast" :message="message" v-show="toastShow"/>
  </div>

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
				cartList:[]
      }
    },
    computed:{
			
    },
    activated(){

    },
		onLoad(){
			this.cartList = this.$store.state.cartList
		},
    methods:{
cart(){
	console.log(this.$store.state.cartList)
	this.cartList = this.$store.state.cartList
}
    }

  }
</script>

<style scoped>
  .cart{
    height: 100vh;
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