# uni-app + vue3.x  项目工程化搭建

## 简介

`uni-app + vue3.x` 项目工程化搭建，集成 `ESLint`、`Prettier`、`Stylelint`、`husky`、`lint-staged` 、`commitlint`等，同时实现了 pinia 在 uniapp 中的持久化插件[pinia-plugin-persist-uni](https://github.com/Allen-1998/pinia-plugin-persist-uni)以及 storeToRefs 增强插件[pinia-auto-refs](https://github.com/Allen-1998/pinia-auto-refs)。

[相关文章 - pinia-plugin-persist-uni 在 uni-app 中持久化存储 pinia](https://juejin.cn/post/7081275565008748552)

[相关文章 - 受够了手动 storeToRefs？来试试这个 vite 插件吧](https://juejin.cn/post/7097893752030625828)

[仓库地址 - uni-vue3-vite-ts-pinia](https://github.com/Allen-1998/uni-vue3-vite-ts-pinia)

欢迎使用和点亮小星星。

## 技术栈

- 依赖管理：node v16.x, 如果你已经使用 nvm，可以参考 [Github: nvm](https://github.com/nvm-sh/nvm#deeper-shell-integration) 来实现 node 版本的自动切换
- 小程序框架： [uni-app](https://uniapp.dcloud.io/)
- 构建工具： [Vite](https://vitejs.dev/)
- 前端框架： [Vue3.x](https://v3.cn.vuejs.org/)
- 编程语言： [TypeScript](https://www.typescriptlang.org/)
- 代码规范：
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [Stylelint](https://stylelint.io/)
- 提交规范：
  - [husky](https://typicode.github.io/husky/#/)
  - [lint-staged](https://www.npmjs.com/package/lint-staged)
  - [commitlint](https://commitlint.js.org/#/)
- css 预处理器： [scss](https://sass-lang.com/)
- 状态管理工具：[pinia](https://pinia.vuejs.org/)
- pinia 数据持久化插件：[pinia-plugin-persist-uni](https://allen-1998.github.io/pinia-plugin-persist-uni/)
- vite 插件：
  - [pinia-auto-refs](https://github.com/Allen-1998/pinia-auto-refs)
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
  - [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
  - [unocss](https://github.com/unocss/unocss)
  - [auto-import-types](https://github.com/Allen-1998/auto-import-types)

## 工程目录

```shell
.
├── .husky/                           git 钩子配置
│   ├── _
│   ├── commit-msg commit                 信息校验钩子
│   └── pre-commit commit                 前置钩子
│
├── .vscode/                          vsCode 配置
│   ├── hook.code-snippets                用户代码块
│   ├── extensions.json                   工作区插件推荐
│   └── settings.json vscode              工作区设置
│
├── auto/                             自动生成配置
│   └── addPage.ts                        根据 pages.json自动生成页面
│
├── src/
│   ├── @types                        类型定义
│   ├── api                           请求中心
│   ├── components                    项目组件
│   ├── config                        全局配置
│   ├── @helper storeToRefs           增强(pinia-auto-refs自动生成)
│   ├── hooks                         hooks函数
│   ├── pages                         页面目录
│   ├── static                        静态资源、css
│   ├── store                         状态管理
│   ├── utils/                        工具包
│   │  ├── platform.ts                    获取运行环境
│   │  ├── request.ts                     封装的请求方法
│   │  ├── router.ts                      路由跳转封装
│   │  ├── shared.ts                      基础公共方法
│   │  ├── uniAsync.ts                    async调用异步方法
│   │  └── urlMap.ts                      获取页面类型
│   ├── App.vue                       入口文件
│   ├── auto-imports.d.ts             自动导入vue-composition-api(unplugin-auto-import自动生成)
│   ├── components.d.ts               自动导入组件(unplugin-vue-components自动生成)
│   ├── env.d.ts                      全局声明
│   ├── main.ts                       主入口
│   ├── manifest.json                 应用配置文件
│   ├── pages.json                    全局配置文件
│   └── uni.scss                      uni-app内置的常用样式变量
├── .cz-config.js                     cz提交信息提示配置
├── .czrc                             cz规则配置
├── .editorconfig                     编辑器配置
├── .eslintignore                     eslint忽略配置
├── .eslintrc-auto-import-types.json  自动挂载@types下.d.ts文件定义的类型到global(auto-import-types自动生成)
├── .eslintrc-auto-import.json        自动挂载 unplugin-auto-import 的类型到global(unplugin-auto-import自动生成)
├── .eslintrc.js                      eslint配置
├── .gitignore                        git忽略配置
├── .lintstagedrc.json                lint-staged配置
├── .npmrc                            npm配置
├── .prettierignore                   prettier忽略配置
├── .stylelintrc.js                   stylelint配置
├── commitlint.config.js              commitlint配置
├── index.html                        项目入口
├── LICENSE                           MIT说明
├── package-lock.json                 依赖版本锁定
├── package.json                      依赖文件
├── prettier.config.js                prettier配置
├── README.md
├── tsconfig.json                     ts配置
├── unocss.config.ts                  unocss配置
└── vite.config.ts                    vite配置
```

## 工程配置

```bash
# 克隆项目
git clone https://github.com/pandax-6646/uniapp-vue3-components

# 进入项目目录
cd uniapp-vue3-components

# 安装依赖
npm install

# 启动代码提交校验
npm run postinstall

# 启动本地服务，微信和app同理
npm run dev:h5

# h5项目打包，微信和app同理
npm run build:h5-testing  # 测试环境打
npm run build:h5-production # 生产环境
```

## 代码编辑器配置

**vs code 放开部分json文件的注释功能：**

```json
// 需要在用户的 setting.json 添加
{
  "files.associations": {
    "manifest.json": "jsonc",
    "pages.json": "jsonc"
  }
}
```

**安装项目中推荐的 vs code 插件：**

点击扩展，输入@recommended下载插件，安装后重启 vscode。

**运行调试 app，提示 HBuilderX 版本和手机 sdk 版本不匹配：**

项目依赖的 sdk 3.99 版本，检查 HBuilderX 版本不一致则需要 [下载HBuilderX 3.99 版本](https://hx.dcloud.net.cn/Tutorial/HistoryVersion)

## 常见问题

### vetur 提示组件引入报错

**原因：**

vue3 配套的 vscode 插件为 volar，vetur 会存在冲突

**解决方法：**

在扩展中搜索 volar 安装，然后搜索 vetur 设置禁用工作区

### git commit 保存代码被拦截

**原因：**

为了规范`git`提交规范，制定了`commitlint`规范。

**解决方法：**

按照 `commitlint.config.js` 文件中定义的规则进行`git commit`操作
示例:`git commit -m 'feat: xxxxxx'`

### 如何根据快速定义 ts 接口类型

**原因：**

ts 类型声明在带来类型提示，减少编程过程中 bug 率的同时，也带来了需要声明很多数据类型的心智负担，手动一个一个去声明的话无疑会增加很多的开发成本。

**解决方法：**

将接口返回的`JSON`数据通过`json2ts`进行解析，然后直接 cv 即可。

[相关链接](http://json2ts.com/)

### husky 未执行

**原因：**

`pre-commit`,`commit-msg`自定义的钩子在执行中权限不足，无法被执行。

**解决方法：**

- 增加文件的执行权限。

  ```shell
  chmod +x ./.husky/pre-commit
  chmod +x ./.husky/commit-msg
  ```
