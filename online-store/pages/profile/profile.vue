<template>
  <div class="profit">
   
    <user-info/>

    <div class="account">
      <div class="accout-item">
        <div>0.00元</div>
        <div>我的余额</div>
      </div>
      <div class="accout-item">
        <div>0.00元</div>
        <div>我的优惠</div>
      </div>
      <div class="accout-item">
        <div>0.00元</div>
        <div>我的积分</div>
      </div>
    </div>

    <list-view :list="orderList"/>
    <list-view :list="serviceList"/>
  </div>
</template>

<script>

  import UserInfo from "../../components/childProfile/UserInfo.vue";
  import ListView from "../../components/childProfile/ListView.vue";

  export default {
    name: "Profit",
    components:{
      UserInfo,
      ListView
    },
    data(){
      return {
        orderList: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        serviceList: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    }
  }
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-high-text);
  color: white;
}
.account{
  display: flex;
  height: 70px;
  border: 2px solid;

 }
  .account .accout-item{
    height: 100%;
    flex: 1;
    text-align: center;
    border-right: 1px solid lightgrey;
    line-height: 25px;

  }
</style>