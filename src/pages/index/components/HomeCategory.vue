<script setup lang="ts">
// 定义 props 接收数据
defineProps<{ list: GetCategory.dataItem[] }>()
</script>

<template>
  <view class="category">
    <navigator
      v-for="item in list"
      :key="item.id"
      class="category-item"
      hover-class="none"
      url="/pages/index/index"
    >
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </navigator>
  </view>
</template>

<style lang="scss">
/* 前台类目 */
.category {
  display: flex;
  flex-wrap: wrap;
  margin: 20rpx 0 0;
  padding: 10rpx 0;
  min-height: 328rpx;
  .category-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 150rpx;
    .icon {
      width: 100rpx;
      height: 100rpx;
    }
    .text {
      font-size: 26rpx;
      color: #666;
    }
  }
}
</style>
