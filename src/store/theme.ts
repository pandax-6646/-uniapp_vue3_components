import zdTheme from '@/skin/zd'
import hyTheme from '@/skin/hy'
export default defineStore({
  id: 'theme',
  persist: {
    // 开启持久化
    enabled: true
  },
  state: () => {
    return {
      themeInfo: {
        style: {
          '--primary-color': '#4285f4',
          '--success-color': '#4cd964',
          '--warning-color': '#ffa54e',
          '--error-color': '#fe6079'
        },
        schoolName: '默认学校',
        projectDesc: '默认系统名称'
      }
    } as {
      themeInfo: Theme.ThemeInfo
    }
  },
  getters: {
    style: (state) => {
      return state.themeInfo.style
    },
    schoolName: (state) => {
      return state.themeInfo.schoolName
    },
    projectDesc: (state) => {
      return state.themeInfo.projectDesc
    }
  },
  actions: {
    updateTheme(APP_SCHOOL: string) {
      let theme: Theme.ThemeInfo = this.themeInfo
      if (APP_SCHOOL === 'zd') {
        theme = zdTheme
      } else if (APP_SCHOOL === 'hy') {
        theme = hyTheme
      }
      Object.assign(this.themeInfo, theme)
    }
  }
})
