<script setup lang="ts">
defineProps<{ list: Home.GuessLikeDataItem[] }>()
</script>

<template>
  <view v-if="list.length" class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      v-for="item in list"
      :key="item.id"
      class="guess-item"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture" />
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  padding: 36rpx 0 40rpx;
  line-height: 1;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;
    &::before,
    &::after {
      margin: 0 10rpx;
      width: 20rpx;
      height: 20rpx;
      background-image: url('@/static/images/bubble.png');
      background-size: contain;
      content: '';
    }
  }
}
/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .navigator-wrap:nth-last-child(-n + 2) {
    .guess-item {
      margin-bottom: 0;
    }
  }
  .guess-item {
    overflow: hidden;
    margin-bottom: 20rpx;
    padding: 24rpx 20rpx 20rpx;
    border-radius: 10rpx;
    width: 305rpx;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    /* stylelint-disable-next-line value-no-vendor-prefix */
    display: -webkit-box;
    overflow: hidden;
    margin: 10rpx 0;
    height: 75rpx;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    font-size: 26rpx;
    color: #262626;
    -webkit-box-orient: vertical;
  }
  .price {
    padding-top: 4rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #cf4444;
  }
  .small {
    font-size: 80%;
  }
}
</style>
