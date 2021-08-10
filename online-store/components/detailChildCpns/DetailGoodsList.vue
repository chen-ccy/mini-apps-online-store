<template>
  <div>
    <GoodsList :goodsList="recommend">
        
    </GoodsList>
  </div>
</template>

<script>
  import GoodsList from "../common/GoodsList.vue";
  import GoodsListItem from "../common/GoodsListItem.vue";
  export default {
    name: "DetailGoodsList",
    components: {GoodsList},
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      },
      components:{
        GoodsList,
        GoodsListItem
      }
    }
  }
</script>

<style scoped>
img{
  width: 100%;
}
</style>