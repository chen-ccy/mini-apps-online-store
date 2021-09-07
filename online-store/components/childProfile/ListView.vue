<template>
  <div class="list-view">
    <div v-for="(item,index) in list" class="item">
      <span class="icon">
        <image class="image" src="../../static/images/profile/pointer.png" alt="">
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ListView",
    props:{
      list:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.list-view{
    margin-top: 20px;
    background-color: white;
  }
.item{
  width: 100%;
  height: 44px;
  line-height: 44px;
  position: relative;
}
.item .icon{
  position: absolute;
  left: 15px;
  top: 6px;
}
  .item .icon image{
    width: 25px;
    height: 25px;
  }
.item .info {
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding-left: 5px;
}
</style>