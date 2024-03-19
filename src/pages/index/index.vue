<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import HomeNavbar from './components/HomeNavbar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCategory from './components/HomeCategory.vue'
import home from '@/api/home'

// 获取轮播图数据
const bannerList = ref<Home.BannerDataItem[]>([])
const getBannerData = async () => {
  const res = await home.getBannerApi({ distributionSite: '1' })
  bannerList.value = res.result || []
}

// 获取分类列表数据
const categoryList = ref<Home.CategoryDataItem[]>([])
const getCategoryData = async () => {
  const res = await home.getCategoryApi()
  categoryList.value = res.result || []
}

// 获取热门推荐数据
const recommendList = ref<Home.RecommendDataItem[]>([])
const getRecommendData = async () => {
  const res = await home.getRecommendApi()
  recommendList.value = res.result || []
}

onLoad(() => {
  getBannerData()
  getCategoryData()
  getRecommendData()
})
</script>

<template>
  <view>
    <HomeNavbar />
    <HomeSwiper :list="bannerList" />
    <HomeCategory :list="categoryList" />
    <HotRecommend :list="recommendList" />
  </view>
</template>

<style lang="scss" scoped>
page {
  overflow: hidden;
  height: 100%;
  background-color: #f7f7f7;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.scroll-view {
  overflow: hidden;
  flex: 1;
}
</style>
