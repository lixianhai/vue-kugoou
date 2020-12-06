/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

// 判断是否是一个有效的手机号码
export function isMobileNumber(num) {
  const reg = /^1[3|4|5|7|8|9][0-9]{9}$/
  const bValid = reg.test(num)
  return bValid
}
