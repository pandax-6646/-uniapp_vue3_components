import { isDevelopment, isH5, platform } from './platform'
import { getPlatformData } from './shared'
import { forward } from './router'
import { getCommonParams } from '@/config/commonParams'
import env from '@/config/env'
import { hideLoading, showLoading } from '@/config/serviceLoading'

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = '抢购火爆，稍候片刻！', errno = -1 } = err
  switch (errno) {
    case 401:
      // token失效或错误
      forward('login')
      break

    default:
      uni.showToast({
        title: errmsg,
        icon: 'none'
      })
      break
  }
}

const apiBaseUrl = isH5 && isDevelopment ? '/api' : env.apiBaseUrl
const platformData = {
  AppPlus: 'app',
  MpWeixin: 'miniapp'
}

function baseRequest(
  method:
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined,
  url: string,
  data: { isLoading: any }
) {
  return new Promise((resolve) => {
    showLoading(data.isLoading)
    delete data.isLoading
    let responseData: unknown
    uni.request({
      url: apiBaseUrl + url,
      method,
      timeout: 60 * 1000,
      header: {
        'Content-Type':
          method === 'GET'
            ? 'application/json; charset=utf-8'
            : 'application/x-www-form-urlencoded',
        'source-client': getPlatformData(platform, platformData),
        Authorization: getCommonParams().token
      },
      data,
      success: (res: any) => {
        const data = res.data
        if (Number(data.code) === 1) {
          responseData = data.result
        } else {
          reject({
            errno: Number(data.code),
            errmsg: data.msg
          })
        }
      },
      fail: () => {
        reject({
          errno: -1,
          errmsg: '网络不给力，请检查你的网络设置~'
        })
      },
      complete: () => {
        resolve(responseData)
        hideLoading()
      }
    })
  })
}

const http = {
  get: <T>(api: string, params: any) =>
    baseRequest('GET', api, {
      ...params
    }) as Http.Response<T>,
  post: <T>(api: string, params: any) =>
    baseRequest('POST', api, {
      ...params
    }) as Http.Response<T>
}

export default http
