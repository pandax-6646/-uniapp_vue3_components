import http from '@/utils/request'

const user = {
  login: (params: User.params) => http.post<User.data>('/login', params)
}

export default user
