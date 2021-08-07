<template>
  <view>
    <view v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <view class="info-header">
        <view class="header-title">用户评价</view>
        <view class="header-more">
          更多
          <i class="arrow-right"></i>
        </view>
      </view>
      <view class="info-user">
        <image :src="commentInfo.user.avatar" alt="" mode="widthFix">
        <span>{{commentInfo.user.uname}}</span>
      </view>
      <view class="info-detail">
        <p>{{commentInfo.content}}</p>
        <view class="info-other">
          <span class="date">{{commentInfo.created | showDate }}</span>
          <span>{{commentInfo.style}}</span>
        </view>
        <view class="info-images">
          <image :src="item" v-for="(item, index) in commentInfo.images" mode="widthFix">
        </view>
      </view>
    </view>
  </view>
</template>

<script>

  import {formatDate} from "../../utils/utils.js";

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      },

    },
    filters:{
      showDate(value){
        const date = new Date(value * 1000)
        return formatDate('yyyy/MM/dd hh:mm:ss',date)
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    font-size: 14px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header{
    padding: 5px;
    height: 45px;
    border-bottom: 2px solid lightgrey;
    line-height: 40px;

  }
  .header-title{
    float: left;
  }
  .header-more{
    float: right;
  }
  .info-user{
    padding: 10px;
  }
  .info-user image{
    width: 30px;
    vertical-align: middle;
    margin-right: 15px;
    border-radius: 50%;
  }
  .info-detail{
    padding: 10px;
    color: #777;
  }
  .info-other{
    margin: 15px 0px 15px 0px;
    color: #999;
  }
  .date{
    margin-right: 15px;
  }
  .info-images image{
    width: 50px;
  }

</style>