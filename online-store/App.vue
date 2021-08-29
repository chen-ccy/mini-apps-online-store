<script>
	export default {
		globalData:{
			cartList:[],
			baseUrl: "http://152.136.185.210:7878/api/m5" 
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			addCart(playload){
					    return new Promise(resolve => {
					      let oldItem =  this.globalData.cartList.find( item => item.iid === playload.iid )
					      if(oldItem){
					        this.globalData.cartList.push(oldItem)
					        resolve('数量加一')
					      }else {
					        playload.count = 1
									playload.checked = true
									this.globalData.cartList.push(playload)
					        resolve('已添加到购物车')
					      }
					    })
							if (addCartCallback){
								this.addCartCallback()
							}
					  }
					
			
				}
			
		
		}
		
		</script>

<style>
	/*每个页面公共css */
	page {
		height: 100%;
	}
</style>
