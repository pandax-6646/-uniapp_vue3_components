import { isFastClick, parseUrl, restoreUrl } from './shared'
import { getUrlType, h5HsqMap, needAuthPath, pagesMap } from './urlMap'

/**
 * 处理URL页面跳转逻辑。
 * @param e 事件对象，预期包含当前目标的数据集（dataset）。
 */
export function onUrlPage(e: any) {
  if (isFastClick()) return
  const { url } = e.currentTarget.dataset
  // url = 'http://m.dev.haoshiqi.net/v2/index?id=11&name=22'
  // url = 'https://topic.doweidu.com/?id=a9918e941a43233211fb7a8cfc7afbbd&origin=hsq_aliptmp'
  if (!url) return
  const urlType = getUrlType(url)
  const { name, path, query } = parseUrl(url)
  if (urlType === 'topic') {
    // 专题页
    forward('topic', Object.assign({ url: path }, query))
  } else if (urlType === 'h5Hsq') {
    if (h5HsqMap.includes(name)) {
      if (needAuthPath.includes(name)) return forward('login')
      // h5页面
      forward('web-view', Object.assign({ url: path }, query))
    } else {
      // 原生页
      forward(name, query)
    }
  } else if (urlType === 'other' && pagesMap.find((i) => i.name === name)) {
    // 原生页
    forward(name, query)
  } else {
    // 不跳转
  }
}

/**
 * 页面转发函数
 * @param name 目标页面名称
 * @param query 传递给目标页面的查询参数，默认为空对象
 * @returns 返回转发后的结果，具体类型依赖于调用的API
 */
export function forward(name: string, query: Types.Query = {}): any {
  if (needAuthPath.includes(name)) return forward('login')
  const targetPage = pagesMap.find((i) => i.name === name)
  if (!targetPage) return
  const isReplace = query.replace
  delete query.replace
  const { type, path } = targetPage
  const url = restoreUrl(path, query)
  const params = { url }
  if (type === 'tabBarPage') return uni.switchTab(params)
  if (!isReplace) return uni.navigateTo(params)
  uni.redirectTo(params)
}

/**
 * 使用delta参数执行页面返回操作。
 * @param delta 返回的页面数，delta>1时，表示返回到当前页面的n级父页面。
 */
export function back(delta: number) {
  uni.navigateBack({ delta })
}
