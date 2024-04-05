<script setup lang="ts" name="user">
import { forward } from '@/utils/router'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

// 导入状态管理器
const { logged, userInfo, clearUserInfo } = useStore('user')

const logout = () => {
  uni.showModal({
    content: '确定要退出登录吗？',
    success: (res) => {
      if (res.confirm) {
        clearUserInfo()
        uni.showToast({ title: '登出成功', icon: 'success' })
        // 跳转到登录页面
        setTimeout(() => {
          forward('login', { replace: false })
        }, 1000)
      }
    }
  })
}
</script>

<template>
  <view class="user-info-wrap">
    <view class="profile" :style="{ paddingTop: `${safeAreaInsets!.top  }px` }">
      <!-- 已登录 -->
      <view v-if="logged" class="overview">
        <navigator url="/pagesMember/profile/profile" hover-class="none">
          <image class="avatar" :src="userInfo.avatar" mode="aspectFill" />
        </navigator>
        <view class="meta">
          <view class="nickname">
            {{ userInfo.nickname || userInfo.account }}
          </view>
          <view class="nickname">
            {{ userInfo.profession }}
          </view>
        </view>
        <text class="loginout" @tap="logout">登出</text>
      </view>
      <!-- 未登录 -->
      <view v-else class="overview">
        <navigator url="/pages/login/login" hover-class="none">
          <image
            class="avatar gray"
            mode="aspectFill"
            src="https://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png"
          />
        </navigator>
        <view class="meta">
          <navigator
            url="/pages/login/login"
            hover-class="none"
            class="nickname"
          >
            未登录
          </navigator>
          <view class="extra">
            <text class="tips">点击登录账号</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.user-info-wrap {
  height: 100%;
  background-image: url('https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/center_bg.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
}
/* 用户信息 */
.profile {
  position: relative;
  // margin-top: 30rpx;
  .overview {
    display: flex;
    padding: 0 36rpx;
    padding-top: 30px;
    height: 120rpx;
    color: #fff;
  }
  .avatar {
    border-radius: 50%;
    width: 120rpx;
    height: 120rpx;
    background-color: #eee;
  }
  .gray {
    filter: grayscale(100%);
  }
  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 20rpx;
    padding: 16rpx 0;
    line-height: 30rpx;
  }
  .nickname {
    margin-bottom: 16rpx;
    max-width: 180rpx;
    text-overflow: ellipsis;
    font-size: 30rpx;
    white-space: nowrap;
  }
  .extra {
    display: flex;
    font-size: 20rpx;
  }
  .tips {
    font-size: 22rpx;
  }
  .loginout {
    position: absolute;
    right: 40rpx;
    bottom: 0;
    font-size: 30rpx;
    color: #fff;
  }
}
</style>
