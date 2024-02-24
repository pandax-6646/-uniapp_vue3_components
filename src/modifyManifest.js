const fs = require('node:fs')
// 此处如果是用HBuilderX创建的项目manifest.json文件在项目跟目录，如果是 cli 创建的则在 src 下，这里要注意
// process.env.UNI_INPUT_DIR为项目所在的绝对路径，经测试，相对路径会找不到文件
const manifestPath = `${process.env.UNI_INPUT_DIR}/manifest.json`
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
        `"${lastItem}" : "${value}"${hasComma ? ',' : ''}`
      )
      break
    }
  }

  Manifest = ManifestArr.join('\n')
}

// 动态配置 appid
replaceManifest('mp-weixin.appid', 'wxfee8ba5c8e409984')
replaceManifest('name', '系统1名称')
replaceManifest('appid', '__UNI__FBE87A1')
replaceManifest('versionName', '1.7.1')
replaceManifest('versionCode', '171')

fs.writeFileSync(manifestPath, Manifest, {
  flag: 'w'
})
