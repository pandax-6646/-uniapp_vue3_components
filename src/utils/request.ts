import { forward } from './router'
import { getPlatformData } from './shared'
import { isDevelopment, isH5, platform } from './platform'
import env from '@/config/env'
import { hideLoading, showLoading } from '@/config/serviceLoading'

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = '请求失败，请重试！', errno = -1 } = err
  switch (errno) {
    // token 失效或错误
    case 401:
      uni.showToast({
        title: errmsg,
        icon: 'none',
        complete: () => {
          setTimeout(() => {
            // 重定向到登录页
            forward('login', { replace: false })

            // 清除登录信息
            useStore('user').setUserInfo({
              user_id: NaN,
              token: ''
            })
          }, 2000)
        }
      })

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
        Authorization: useStore('user').token.value
      },
      data,
      success: (res: any) => {
        const resultData = res.data
        if (res.statusCode >= 200 && res.statusCode < 300) {
          responseData = resultData
        } else {
          reject({
            errno: Number(res.statusCode),
            errmsg: resultData.msg
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
        if (data.isLoading) {
          hideLoading()
        }
      }
    })
  })
}

const http = {
  get: <T>(api: string, params: any) =>
    baseRequest('GET', api, { ...params }) as Http.Response<T>,
  post: <T>(api: string, params: any) =>
    baseRequest('POST', api, { ...params }) as Http.Response<T>
}

export default http
