<template>
  <div>
    <div class="item-button"  :class="{click:isClick}">
      
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartButton",
    props:{
      isClick:{
        type:Boolean,
        default:false
      }
   },
  }
</script>

<style scoped>
  .item-button{
    width: 20px;
    height: 20px;
    border-radius:50%;
    border: 2px solid;
    line-height: 20px;
  }
  .click{
    background-color: red;
    border-color:red ;
  }
</style>