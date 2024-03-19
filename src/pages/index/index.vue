<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import HomeNavbar from './components/HomeNavbar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCategory from './components/HomeCategory.vue'
import HotRecommend from './components/HotRecommend.vue'
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

const page = ref(1)
const pageSize = ref(10)
const loadStatus = ref<'more' | 'loading' | 'noMore'>('more')
const guessLikeList = ref<Home.GuessLikeDataItem[]>([])

const hasLoadMore = (currentPage: number, totalPage: number) => {
  if (currentPage >= 1 && currentPage <= totalPage) {
    loadStatus.value = 'more'
  } else {
    loadStatus.value = 'noMore'
  }
  // getGuessLikeData()
}

// 获取猜你喜欢数据
const getGuessLikeData = async () => {
  loadStatus.value = 'loading'
  const res = await home.getGuessLikeApi({
    pageSize: pageSize.value,
    page: page.value
  })

  const result = res.result
  if (!result) return

  hasLoadMore(page.value, result.counts / pageSize.value)

  page.value = result.page
  pageSize.value = result.pageSize
  guessLikeList.value.push(...result.items)
}

// 加载更多
const handleLoadMore = () => {
  if (loadStatus.value === 'noMore') {
    page.value += 1
    getGuessLikeData()
  }
}

// 重置数据
const resetData = () => {
  page.value = 1
  pageSize.value = 10
  loadStatus.value = 'noMore'
  guessLikeList.value = []
}

onLoad(() => {
  getBannerData()
  getCategoryData()
  getRecommendData()
  getGuessLikeData()
})

onShow(() => {
  resetData()
  getGuessLikeData()
})
</script>

<template>
  <PullList
    class="viewport"
    :lower-threshold="50"
    :on-scroll-to-lower="handleLoadMore"
    :load-status="loadStatus"
  >
    <template #list>
      <!-- 自定义导航栏 -->
      <HomeNavbar />

      <!-- 轮播图 -->
      <HomeSwiper :list="bannerList" />

      <!-- 分类列表 -->
      <HomeCategory :list="categoryList" />

      <!-- 热门推荐 -->
      <HotRecommend :list="recommendList" />

      <!-- 猜你喜欢 -->
      <GuessLike :list="guessLikeList" />
    </template>
  </PullList>
</template>

<style lang="scss" scoped>
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
