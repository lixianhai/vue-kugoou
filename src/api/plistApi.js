import request from '@/utils/request'
import { server_root } from './services.js'

// 歌单列表
export function plistList() {
  return request({
    url: `${server_root}/plist/index&json=true`,
    method: 'get'
  })
}
