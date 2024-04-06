// 项目名称
export const APP_NAME = 'uniapp-vue3-components'

// 版本号
export const APP_VERSION_NAME = '1.0.0'
export const APP_VERSION_CODE = '100'

// 打包h5根路径
export const H5_PUBLIC_BASE = '/'

// 本地运行h5端口
export const LOCAL_PORT = 6646

// uni-app appid
export const UNI_APPID = 'H5871D791'

// 微信小程序appid
export const WX_APPID = 'wxa2abb91f64032a2b'

// 默认主题颜色 'light' 或 'dark'
export const DEFAULT_THEME = 'light'

// 环境变量
enum EnvMap {
  development = 'development',
  test = 'test',
  production = 'production'
}
export const NODE_ENV = EnvMap.production
