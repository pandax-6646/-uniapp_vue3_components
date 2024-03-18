
declare namespace Home {
  // 首页-轮播图
  interface BannerRequestParams {
    distributionSite: string
  }

  interface BannerDataItem {
    hrefUrl: string
    id: string
    imgUrl: string
    type: number
  }



  // 首页-分类
  interface CategoryDataItem {
    id: string
    name: string
    icon: string
  }
}
