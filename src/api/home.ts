import http from '@/utils/request'

const home = {
  getBannerApi: (params: GetBanner.params) =>
    http.get<GetBanner.data[]>('/home/banner', params)
}

export default home
