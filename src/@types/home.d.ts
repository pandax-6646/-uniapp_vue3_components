
// 首页-轮播图
declare namespace GetBanner {
  interface params {
    distributionSite: string
  }

  interface dataItem {
    hrefUrl: string
    id: string
    imgUrl: string
    type: number
  }
}

// 首页-分类
declare namespace GetCategory {
  interface dataItem {
    id: string
    name: string
    icon: string
  }
}
