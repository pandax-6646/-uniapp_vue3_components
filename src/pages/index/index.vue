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

// 获取猜你喜欢数据
const searchParams = ref<Home.GuessLikeRequestParams>({
  page: 1,
  pageSize: 10
})
const loadStatus = ref<'more' | 'loading' | 'noMore'>('more')
const guessLikeList = ref<Home.GuessLikeDataItem[]>([])

const getGuessLikeData = async () => {
  loadStatus.value = 'loading'
  const res = await home.getGuessLikeApi(searchParams.value)

  const result = res.result
  if (!result) return

  // 合并数据
  searchParams.value = {
    page: result.page,
    pageSize: result.pageSize
  }
  guessLikeList.value.push(...result.items)

  // 判断是否还有更多数据
  const totalPage = Math.ceil(result.counts / searchParams.value.pageSize)
  loadStatus.value = searchParams.value.page >= totalPage ? 'noMore' : 'more'
}

// 加载更多
const handleLoadMore = () => {
  if (loadStatus.value === 'noMore') return
  searchParams.value.page += 1
  getGuessLikeData()
}

// 重置数据
const resetData = () => {
  searchParams.value = {
    page: 1,
    pageSize: 10
  }
  loadStatus.value = 'noMore'
  guessLikeList.value = []
}

onLoad(() => {
  getBannerData()
  getCategoryData()
  getRecommendData()
})

onShow(() => {
  resetData()
  getGuessLikeData()
})
</script>

<template>
  <PullUpList
    class="viewport"
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
  </PullUpList>
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
