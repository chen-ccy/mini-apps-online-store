<template>
  <div>
    <div v-for="item in list">
      <span>{{item.info}}</span>
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

</style>