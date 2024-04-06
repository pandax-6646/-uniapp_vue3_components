<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import HomeNavbar from './components/HomeNavbar.vue'
import HomeSwiper from './components/HomeSwiper.vue'
import HomeCategory from './components/HomeCategory.vue'
import HotRecommend from './components/HotRecommend.vue'
import HomeSkeletonScreen from './components/HomeSkeletonScreen.vue'
import { hideLoading, showLoading } from '@/utils/serviceLoading'
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
interface ContentText {
  contentdown: string
  contentrefresh: string
  contentnomore: string
}
const contentText = ref<ContentText>({
  contentdown: '上拉加载更多',
  contentrefresh: '正在加载...',
  contentnomore: '没有更多数据了'
})

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

// 下拉刷新首页
const isOnLoad = ref(false)
const onRefresherrefresh = async () => {
  isOnLoad.value = true
  showLoading(isOnLoad.value)
  resetData()
  await Promise.all([
    getBannerData(),
    getCategoryData(),
    getRecommendData(),
    !guessLikeList.value.length && getGuessLikeData()
  ])
  isOnLoad.value = false
  hideLoading()
}

onLoad(() => {
  onRefresherrefresh()
})
</script>

<template>
  <view class="home-container">
    <!-- 自定义导航栏 -->
    <HomeNavbar />

    <HomeSkeletonScreen v-if="isOnLoad" />

    <!-- 轮播图、分类列表、热门推荐、猜你喜欢 -->
    <scroll-view
      v-else
      scroll-y
      refresher-enabled
      enable-back-to-top
      class="scroll-wrap"
      :lower-threshold="20"
      @scrolltolower="handleLoadMore"
      @refresherrefresh="onRefresherrefresh"
    >
      <!-- 轮播图 -->
      <HomeSwiper :list="bannerList" />

      <!-- 分类列表 -->
      <HomeCategory :list="categoryList" />

      <!-- 热门推荐 -->
      <HotRecommend :list="recommendList" />

      <!-- 猜你喜欢 -->
      <GuessLike :list="guessLikeList" />

      <!-- 加载更多 -->
      <uni-load-more :status="loadStatus" :content-text="contentText" />
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.scroll-wrap {
  overflow: hidden;
  flex: 1;
}
</style>
