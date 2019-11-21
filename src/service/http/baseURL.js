// 接口域名的管理
const baseURL = {
  sq: 'https://xxxx111111.com/api/v1',
  bd: 'http://xxxxx22222.com/api',
  url: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8087/usermanager' : 'http://127.0.0.1:4885/usermanager',
  // dev: '/api',
  baidu: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'
}
export default baseURL
