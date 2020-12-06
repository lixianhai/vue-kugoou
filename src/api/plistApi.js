import request from '@/utils/request'
import { server_root } from './services.js'

// 歌单列表
export function plistList() {
  return request({
    url: `${server_root}/plist/index&json=true`,
    method: 'get'
  })
}

// 歌单列表详情
export function plistInfo(specialid) {
  return request({
    url: `${server_root}/plist/list/${specialid}?json=true`,
    method: 'get'
  })
}
