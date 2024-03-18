import http from '@/utils/request'

const home = {
  // 首页-轮播图
  getBannerApi: (params: GetBanner.params) =>
    http.get<GetBanner.dataItem[]>('/home/banner', params),

  // 首页-分类
  getCategoryApi: () =>
    http.get<GetCategory.dataItem[]>('/home/category/mutli', '')
}

export default home
