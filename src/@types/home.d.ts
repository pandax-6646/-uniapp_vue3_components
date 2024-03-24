
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


  // 首页-推荐商品
  interface RecommendDataItem {
    id: string
    alt: string
    pictures: string[]
    target: string
    title: string
    type: string
  }



  // 首页-猜你喜欢
  interface GuessLikeRequestParams {
    page: number
    pageSize: number
  }

  interface GuessLikeDataItem {
    id: string
    name: string
    desc: string
    price: number
    picture: string
    discount: number
    orderNum: number
  }
}
