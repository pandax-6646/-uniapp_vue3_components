import http from '@/utils/request'

const user = {
  login: (params: UserLogin.params) =>
    http.post<UserLogin.data>('/ysa-auth-service/login', params)
}

export default user
