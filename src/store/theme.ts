import themes from '@/config/themes'
import { DEFAULT_THEME } from '@/config/app'

export default defineStore({
  id: 'theme',
  persist: {
    // 开启持久化
    enabled: true
  },
  state: () => {
    return {
      theme: themes[DEFAULT_THEME] as Theme,
      themeTarget: DEFAULT_THEME
    }
  },
  getters: {
    navBar: (state) => {
      return state.theme.navBar
    },
    tabBar: (state) => {
      return state.theme.tabBar
    },
    main: (state) => {
      return state.theme.main
    }
  },
  actions: {
    updateTheme() {
      const theme = themes[this.themeTarget]

      // Object.assign(this.theme, theme)

      console.log('测试数据', this.themeTarget, theme)

      // // 设置导航栏颜色
      // uniAsync.setNavigationBarColor(theme.navBar)

      // // 设置tabbar
      // uniAsync.setTabBarStyle(theme.tabBar)

      this.themeTarget = this.themeTarget === 'light' ? 'dark' : 'light'
    }
  }
})
