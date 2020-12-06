
// export const server_root = ''

export const server_root = process.env.NODE_ENV === 'production' ? '' : (process.env.NODE_ENV === 'development' ? '' : '');     // 域名服务器
// export const server_root = 'http://dev.erp.yinhechuangxiang.com/sys' // 域名服务器
