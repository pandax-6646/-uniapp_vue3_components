<script setup lang="ts">
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="navbar" :style="{ paddingTop: `${safeAreaInsets!.top + 10}px` }">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="@/static/images/logo.png" />
      <text class="logo-text">新鲜 · 亲民 · 快捷</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索商品</text>
      <text class="icon-scan" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
/* 自定义导航条 */
.navbar {
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  padding-top: 20px;
  background-image: url('@/static/images/navigator_bg.png');
  background-size: cover;
  box-shadow: 0 4rpx 12rpx 0 rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    padding-left: 30rpx;
    height: 64rpx;
    .logo-image {
      width: 166rpx;
      height: 39rpx;
    }
    .logo-text {
      flex: 1;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      line-height: 28rpx;
      font-size: 26rpx;
      color: #fff;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16rpx 20rpx;
    padding: 0 10rpx 0 26rpx;
    border-radius: 32rpx;
    height: 64rpx;
    background-color: rgba(255, 255, 255, 0.5);
    font-size: 28rpx;
    color: #fff;
  }
  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }
  .icon-scan {
    padding: 15rpx;
    font-size: 30rpx;
  }
}
</style>
