import http from '@/utils/request'

const home = {
  // 首页-轮播图
  getBannerApi: (params: Home.BannerRequestParams) =>
    http.get<Home.BannerDataItem[]>('/home/banner', params),

  // 首页-分类
  getCategoryApi: () =>
    http.get<Home.CategoryDataItem[]>('/home/category/mutli', ''),

  // 首页-推荐商品
  getRecommendApi: () =>
    http.get<Home.RecommendDataItem[]>('/home/hot/mutli', '')
}

export default home
