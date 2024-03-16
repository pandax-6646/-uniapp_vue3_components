const apiEnv: ApiEnv = 'dev'

const envMap = {
  dev: {
    apiBaseUrl: 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
  },
  prod: {
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
