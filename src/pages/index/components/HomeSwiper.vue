<script setup lang="ts">
defineProps<{ list: Home.BannerDataItem[] }>()

// 当 swiper 下标发生变化时触发
const activeIndex = ref(0)
const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail.current
}
</script>

<template>
  <view class="carousel">
    <swiper circular :interval="3000" style="height: 100%" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator url="/pages/test/test" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="item.imgUrl" />
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        class="dot"
        :class="{ active: index === activeIndex }"
      />
    </view>
  </view>
</template>

<style scoped lang="scss">
/* 轮播图 */
.carousel {
  overflow: hidden;
  position: relative;
  height: 280rpx;
  background-color: #efefef;
  transform: translateY(0);
  .indicator {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    justify-content: center;
    .dot {
      margin: 0 8rpx;
      border-radius: 6rpx;
      width: 30rpx;
      height: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }
    .active {
      background-color: #fff;
    }
  }
  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
