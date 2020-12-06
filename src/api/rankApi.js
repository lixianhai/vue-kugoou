import request from '@/utils/request'
import { server_root } from './services.js'

// 排行列表
export function rankList() {
  return request({
    url: `${server_root}/rank/list&json=true`,
    method: 'get'
  })
}

// 排行分类列表
export function rankInfo(id) {
  return request({
    url: `${server_root}/rank/info/?rankid=${id}&page=1&json=true`,
    method: 'get'
  })
}
