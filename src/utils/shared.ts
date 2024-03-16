// 记录上次点击的时间
let lastClickTime = 0
/**
 * 检查是否为快速点击。
 * @param num 指定两次点击之间允许的最大时间间隔，默认为1000毫秒。
 * @returns 如果两次点击之间的时间间隔大于指定的最大时间间隔，则返回false；否则返回true。
 */
export function isFastClick(num = 1000) {
  const time = new Date().getTime()
  if (time - lastClickTime > num) return false
  lastClickTime = time
  return true
}

/**
 * 解析URL
 * @param fullPath 完整的URL路径，包括路径和查询字符串
 * @returns 返回一个对象，包含URL的名称、路径和查询参数
 */
export function parseUrl(fullPath: string) {
  const [path, queryStr] = fullPath.split('?')
  const name = path.slice(path.lastIndexOf('/') + 1)
  const query = {}
  queryStr
    ?.split('&')
    .map((i) => i.split('='))
    .forEach((i) => (query[i[0]] = i[1]))
  return {
    name,
    path,
    query
  }
}

/**
 * 恢复URL，将查询参数对象拼接到给定的路径上。
 * @param path {string} - 基本的URL路径。
 * @param query {Object} - 包含要添加到URL的查询参数的键值对。
 * @returns {string} - 拼接了查询参数的完整URL。
 */
export function restoreUrl(path: string, query: Object) {
  let count = 0
  for (const key in query) {
    path += `${count === 0 ? '?' : '&'}${key}=${query[key]}`
    count += 1
  }
  return path
}

/**
 * 根据指定平台筛选数据
 * @param platfor 各个平台的标识
 * @param data 各个平台对应的数据
 * @return 返回第一个有效平台对应的数据，默认返回微信小程序标识数据
 */
export function getPlatformData(platfor: string, data: object) {
  return data[platfor] || 'miniapp'
}
