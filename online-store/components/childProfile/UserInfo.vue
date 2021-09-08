<template>
  <view class="userInfo">
    <view class="user-icon">
      <slot name="user-icon">
        <image mode="widthFix" class="image" src="../../static/images/profile/avatar.png" alt="">
      </slot>
    </view>
    <view class="login-info">
      <view class="user-name">
        <slot name="user-name">
          <view> 登录/注册</view>
        </slot>
      </view>
      <view class="user-phone">
					<view>
						<image mode="widthFix" class="image" src="../../static/images/profile/phone.png" alt="">
         </view>
        <slot name="user-phone">
          <view>暂无绑定手机号</view>
        </slot>
      </view>
    </view>
  </view>

</template>

<script>
  export default {
    name: "UserInfo"
  }
</script>

<style scoped>
  .userInfo{
      width: 100%;
      height: 100px;
      background-color: #ff8198;
      display: flex;
      color: white;
  
    }
    .user-icon{
      width: 80px;
      text-align: center;
  
    }
    .user-icon .image{
      margin-top: 10px;
      width: 60px;
      height: 60px;
      background-color: #fff;
      border-radius: 30px;
  
    }
    .login-info{
  
      text-align: left;
  
    }
    .user-name{
      margin-top: 20px;
      margin-left: 5px;
    }
    .user-phone{
			display: flex;
      margin-top: 5px;
      font-size: 13px;
    }
    .user-phone .image{
      width: 20px;
      vertical-align: middle;
    }
</style>