const apiEnv: ApiEnv = 'dev'

const envMap = {
  dev: {
    apiBaseUrl: 'http://192.168.4.96:9527'
  },
  prod: {
    apiBaseUrl: 'https://m.api.xxx.com'
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
