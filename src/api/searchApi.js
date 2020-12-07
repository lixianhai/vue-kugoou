import request from '@/utils/request'
import { server_root } from './services.js'

// 热门列表
export function hotList() {
  return request({
    url: `${server_root}/api/v3/search/hot?format=json&plat=1&count=30`,
    method: 'get'
  })
}
