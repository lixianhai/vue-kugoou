import request from '@/utils/request'
import { server_root } from './services.js'

// 歌手列表
export function singerList() {
  return request({
    url: `${server_root}/singer/class&json=true`,
    method: 'get'
  })
}

// 歌手详情列表
export function singerInfo(classid) {
  return request({
    url: `${server_root}/singer/list/${classid}?json=true`,
    method: 'get'
  })
}

// 歌手详情信息
export function singerInfoList(singerid) {
  return request({
    url: `${server_root}/singer/info/${singerid}&json=true`,
    method: 'get'
  })
}
