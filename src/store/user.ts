export default defineStore({
  id: 'user',
  persist: {
    // 开启持久化
    enabled: true,
    H5Storage: window?.localStorage,
    strategies: [
      {
        key: 'user',
        storage: window?.sessionStorage,
        paths: ['token']
      }
    ]
  },
  state: () => {
    return {
      userInfo: {
        token: '',
        id: '',
        nickname: ''
      }
    } as {
      userInfo: User.data
    }
  },
  getters: {
    logged: (state) => {
      const { token, id } = state.userInfo
      return !!(token && id)
    },
    token: (state) => {
      return state.userInfo.token
    }
  },
  actions: {
    setUserInfo(userInfo: User.data) {
      Object.assign(this.userInfo, userInfo)
    },

    setToken(token: string) {
      this.userInfo.token = token
    },

    clearUserInfo() {
      this.userInfo = {
        token: '',
        id: '',
        nickname: ''
      } as User.data
    }
  }
})
