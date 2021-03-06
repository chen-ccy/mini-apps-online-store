import {POP, NEW, SELL} from "./const";

export const backTopMixin = {
  data: function () {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTop: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
    }
  }
}

export const itemListenerMixin = {
  data(){
    return{
      newRefresh:null,
      itemListener:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh,500);
    //alert(refresh)
    this.itemListener = () => {
      //this.$refs.scroll.refresh()
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemListener )
  }
}
