import { forward } from './router';
import { hideLoading, showLoading } from '@/config/serviceLoading';

function reject(err: { errno: number; errmsg: string }) {
  const { errmsg = '抢购火爆，稍候片刻！', errno = -1 } = err;
  switch (errno) {
    case 10000:
      // 特殊异常处理
      forward('login');
      break;

    default:
      uni.showToast({
        title: errmsg,
        icon: 'none'
      });
      break;
  }
}

const apiBaseUrl = import.meta.env.VITE_APP_BASE_API;

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
    showLoading(data.isLoading);
    delete data.isLoading;
    let responseData: unknown;
    uni.request({
      url: apiBaseUrl + url,
      method,
      timeout: 60 * 1000,
      header: {
        'content-type':
          method === 'GET'
            ? 'application/json; charset=utf-8'
            : 'application/x-www-form-urlencoded'
      },
      data,
      success: (res: any) => {
        console.log('测试数据', res);

        const data = res.data;
        if (Number(data.code) === 200) {
          responseData = data.data;
        } else {
          reject({
            errno: -1,
            errmsg: data.msg
          });
        }
      },
      fail: () => {
        reject({
          errno: -1,
          errmsg: '网络不给力，请检查你的网络设置~'
        });
      },
      complete: (data) => {
        console.log(data, 'data');
        resolve(responseData);
        hideLoading();
      }
    });
  });
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
};

export default http;
