import http from '@/utils/request'

const user = {
  login: (params: UserLogin.params) =>
    http.post<UserLogin.data>('/login', params)
}

export default user
