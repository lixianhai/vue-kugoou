import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserInfoKey = 'user-info' // 用户角色

// 获取用户信息
export function getUserInfo() {
  return Cookies.get(UserInfoKey)
}

// 存入用户信息
export function setUserInfo(userInfo) {
  return Cookies.set(UserInfoKey, userInfo)
}

// 删除用户信息
export function removeUserInfo() {
  return Cookies.remove(UserInfoKey)
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
