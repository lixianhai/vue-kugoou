import request from '@/utils/request'
import { server_root } from './services.js'

// 新歌列表
export function songList() {
  return request({
    url: `${server_root}/?json=true`,
    method: 'get'
  })
}

// 新增供应商
export function saveSupplier(data) {
  return request({
    url: `${server_root}/supplier/saveSupplier`,
    method: 'post',
    data
  })
}

// 删除供应商
export function deleteSupplier(data) {
  return request({
    url: `${server_root}/supplier/deleteSupplier`,
    method: 'post',
    data
  })
}

// 编辑供应商
export function updateSupplier(data) {
  return request({
    url: `${server_root}/supplier/updateSupplier`,
    method: 'post',
    data
  })
}

// 启用供应商
export function enableSupplier(data) {
  return request({
    url: `${server_root}/supplier/enableSupplier`,
    method: 'post',
    data
  })
}

// 停用供应商
export function disableSupplier(data) {
  return request({
    url: `${server_root}/supplier/disableSupplier`,
    method: 'post',
    data
  })
}

