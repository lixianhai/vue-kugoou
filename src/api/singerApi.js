import request from '@/utils/request'
import { server_root } from './services.js'

// 歌手列表
export function singerList() {
  return request({
    url: `${server_root}/singer/class&json=true`,
    method: 'get'
  })
}
