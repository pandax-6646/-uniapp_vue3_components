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

onLoad(() => {
  getBannerData()
  getCategoryData()
})
</script>

<template>
  <HomeNavbar />
  <HomeSwiper :list="bannerList" />
  <HomeCategory :list="categoryList" />
</template>
