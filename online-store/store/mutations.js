const mutations = {
  addToCart(state,playload){
    playload.isClick = false;
    state.cartList.push(playload)
  },
  addCount(state,playload){
    playload.count++
  },
	isClick(state,playload){
		playload.isClick = !playload.isClick;
	}
}

export default mutations