import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: '/api/users/login',
    method: 'post',
    data
  })
}
// 获取题目列表
export function getList(params) {
  return request({
    url: '/api/question/list',
    method: 'get',
    params
  })
}
