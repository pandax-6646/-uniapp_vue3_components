declare namespace User {
  interface UserInfo {
    token: string
    user_id: Number
  }
}

declare namespace Theme {
  interface ThemeInfo {
    style: {
      '--primary-color': string
      '--success-color': string
      '--warning-color': string
      '--error-color': string
    },
    schoolName: string
    projectDesc: string
  }
}
