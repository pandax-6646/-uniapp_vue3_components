// 读取 manifest.json ，修改后重新写入
const fs = require('node:fs')
const {
  APP_NAME,
  APP_VERSION_NAME,
  APP_VERSION_CODE,
  H5_PUBLIC_BASE,
  UNI_APPID,
  WX_APPID
} = require('../config/app')

const manifestPath = './src/manifest.json'
let Manifest = fs.readFileSync(manifestPath, { encoding: 'utf-8' })

function replaceManifest(path, value) {
  const arr = path.split('.')
  const len = arr.length
  const lastItem = arr[len - 1]

  let i = 0
  const ManifestArr = Manifest.split(/\n/)

  for (let index = 0; index < ManifestArr.length; index++) {
    const item = ManifestArr[index]
    if (new RegExp(`"${arr[i]}"`).test(item)) ++i
    if (i === len) {
      const hasComma = /,/.test(item)
      ManifestArr[index] = item.replace(
        new RegExp(`"${lastItem}"[\\s\\S]*:[\\s\\S]*`),
        `"${lastItem}": "${value}"${hasComma ? ',' : ''}`
      )
      break
    }
  }

  Manifest = ManifestArr.join('\n')
}

// 使用
replaceManifest('name', APP_NAME)
replaceManifest('appid', UNI_APPID)
replaceManifest('versionName', APP_VERSION_NAME)
replaceManifest('versionCode', APP_VERSION_CODE)
replaceManifest('h5.router.base', H5_PUBLIC_BASE)
replaceManifest('mp-weixin.appid', WX_APPID)

fs.writeFileSync(manifestPath, Manifest, {
  flag: 'w'
})
