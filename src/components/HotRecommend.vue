<script setup lang="ts">
defineProps<{ list: Home.RecommendDataItem[] }>()
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view v-for="item in list" :key="item.id" class="item">
      <view class="title">
        <text class="title-text">{{ item.title }}</text>
        <text class="title-desc">{{ item.alt }}</text>
      </view>
      <navigator
        hover-class="none"
        :url="`/pages/hot/hot?type=${item.type}`"
        class="cards"
      >
        <image
          v-for="src in item.pictures"
          :key="src"
          class="image"
          mode="aspectFit"
          :src="src"
        />
      </navigator>
    </view>
  </view>
</template>

<style lang="scss" scoped>
/* 热门推荐 */
.hot {
  display: flex;
  flex-wrap: wrap;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  min-height: 508rpx;
  background-color: #fff;
  .title {
    display: flex;
    position: relative;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    color: #262626;
    .title-desc {
      margin-left: 18rpx;
      font-size: 24rpx;
      color: #7f7f7f;
    }
  }
  .item {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;
    width: 50%;
    height: 254rpx;
    .title {
      justify-content: start;
    }
    &:nth-child(2n) {
      border-right: 0 none;
    }
    &:nth-child(-n + 2) {
      border-top: 0 none;
    }
    .image {
      width: 150rpx;
      height: 150rpx;
    }
  }
  .cards {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 15rpx 20rpx;
  }
}
</style>
