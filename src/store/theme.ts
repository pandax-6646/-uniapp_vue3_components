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
      themeTemp: DEFAULT_THEME
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
      this.themeTemp = this.themeTemp === 'light' ? 'dark' : 'light'
      const theme = themes[this.themeTemp]

      // 设置导航栏颜色
      uni.setNavigationBarColor(theme.navBar)

      // 设置tabbar
      uni.setTabBarStyle(theme.tabBar)
      this.theme = theme
    }
  }
})
