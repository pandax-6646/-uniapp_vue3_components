import { NODE_ENV } from './app'
const apiEnv: ApiEnv = NODE_ENV

const envMap = {
  // 开发环境
  development: {
    apiBaseUrl: 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
  },
  // 测试环境
  test: {
    apiBaseUrl: 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
  },
  // 生产环境
  production: {
    apiBaseUrl: 'https://pcapi-xiaotuxian-front.itheima.net'
  }
}

type ApiEnv = keyof typeof envMap
type Env<T extends ApiEnv> = {
  apiEnv: T
} & (typeof envMap)[T]

function createEnv(apiEnv: ApiEnv): Env<typeof apiEnv> {
  return Object.assign({ apiEnv }, envMap[apiEnv])
}

const env = createEnv(apiEnv)

export default env
